import {
  DEFAULT_OPTIONS,
  type ResolvedSwiperOptions,
  type SwiperOptions,
  type SwiperState,
  createInitialState,
} from "./types";
import { damp, symmetricMod } from "./math";

export class SwiperCore {
  private container: HTMLElement;
  private state: SwiperState;
  private options: ResolvedSwiperOptions;
  private unbindEvents: (() => void) | null = null;
  private onTickCallback: ((state: SwiperState) => void) | null = null;
  private hasMovedSignificantly = false;

  constructor(
    container: HTMLElement,
    options: Partial<SwiperOptions> = {},
    onTick?: (state: SwiperState) => void,
  ) {
    this.container = container;
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.state = createInitialState();
    this.onTickCallback = onTick || null;

    this.applyContainerStyles();
    this.measure();
    this.initPosition();
    this.unbindEvents = this.bindEvents();
    this.startAnimation();
  }

  private applyContainerStyles(): void {
    this.container.style.display = "flex";
    this.container.style.overflow = "visible";
    this.container.style.cursor = "grab";
    this.container.style.touchAction = "pan-y";
    this.container.style.userSelect = "none";
    this.container.style.gap = "0px";
  }

  public setOptions(options: Partial<SwiperOptions>): void {
    this.options = { ...this.options, ...options };
    this.measure();
  }

  public setOnTick(callback: (state: SwiperState) => void): void {
    this.onTickCallback = callback;
  }

  private bindEvents(): () => void {
    const onMouseDown = this.onMouseDown.bind(this);
    const onMouseMove = this.onMouseMove.bind(this);
    const onMouseUp = this.onMouseUp.bind(this);
    const onTouchStart = this.onTouchStart.bind(this);
    const onTouchMove = this.onTouchMove.bind(this);
    const onTouchEnd = this.onTouchEnd.bind(this);
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };
    const onClickCapture = this.onClickCapture.bind(this);

    this.container.addEventListener("dragstart", onDragStart);
    this.container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    this.container.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    // Prevent clicking links while dragging
    this.container.addEventListener("click", onClickCapture, true);

    return () => {
      this.container.removeEventListener("dragstart", onDragStart);
      this.container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      this.container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      this.container.removeEventListener("click", onClickCapture, true);
    };
  }

  private onClickCapture(e: MouseEvent): void {
    if (this.hasMovedSignificantly) {
      e.preventDefault();
      e.stopPropagation();
      requestAnimationFrame(() => {
        this.hasMovedSignificantly = false;
      });
    }
  }

  // MOUSE DRAG
  private onMouseDown(e: MouseEvent): void {
    if (e.button !== 0) return;
    this.hasMovedSignificantly = false;
    this.state.isDragging = true;
    this.state.dragStartX = e.clientX;
    this.state.dragStartPosition = this.state.targetPosition;
    this.state.dragSamples = [];
    this.container.style.cursor = "grabbing";
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.state.isDragging) return;
    const diff = e.clientX - this.state.dragStartX;
    if (Math.abs(diff) > 4) {
      this.hasMovedSignificantly = true;
    }
    const deltaX = diff * this.options.dragSensitivity;
    this.state.targetPosition = this.state.dragStartPosition + deltaX;
    this.recordDragSample();
  }

  private onMouseUp(): void {
    if (!this.state.isDragging) return;
    this.state.isDragging = false;
    this.container.style.cursor = "grab";
    this.applyDamping();
    if (this.options.snap) {
      this.snapToNearest();
    }
  }

  // TOUCH DRAG
  private onTouchStart(e: TouchEvent): void {
    this.hasMovedSignificantly = false;
    this.state.isDragging = true;
    this.state.dragStartX = e.touches[0].clientX;
    this.state.dragStartPosition = this.state.targetPosition;
    this.state.dragSamples = [];
  }

  private onTouchMove(e: TouchEvent): void {
    if (!this.state.isDragging) return;
    const diff = e.touches[0].clientX - this.state.dragStartX;
    if (Math.abs(diff) > 4) {
      this.hasMovedSignificantly = true;
    }
    const deltaX = diff * this.options.dragSensitivity;
    this.state.targetPosition = this.state.dragStartPosition + deltaX;
    this.recordDragSample();
  }

  private onTouchEnd(): void {
    if (!this.state.isDragging) return;
    this.state.isDragging = false;
    this.applyDamping();
    if (this.options.snap) {
      this.snapToNearest();
    }
  }

  // DAMPING & SNAP
  private recordDragSample(): void {
    const sample = {
      position: this.state.targetPosition,
      time: performance.now(),
    };
    this.state.dragSamples.push(sample);
    if (this.state.dragSamples.length > this.options.dampingSamples) {
      this.state.dragSamples.shift();
    }
  }

  private applyDamping(): void {
    if (this.options.dampingPower === 0 || this.state.dragSamples.length < 2) {
      this.state.dragSamples = [];
      return;
    }

    const newest = this.state.dragSamples[this.state.dragSamples.length - 1];
    const oldest = this.state.dragSamples[0];
    const dt = newest.time - oldest.time;

    if (dt <= 0) {
      this.state.dragSamples = [];
      return;
    }

    const damping = (newest.position - oldest.position) / dt;
    this.state.targetPosition += damping * this.options.dampingPower * 100;
    this.state.dragSamples = [];
  }

  public getSnapOffset(): number {
    if (this.options.snapAlign !== "center" || this.state.itemWidth === 0)
      return 0;
    const containerWidth = this.container.getBoundingClientRect().width;
    const slideWidth = this.state.itemWidth - this.options.gap;
    return (containerWidth - slideWidth) / 2 / this.state.itemWidth;
  }

  public snapToNearest(): void {
    const offset = this.getSnapOffset();
    this.state.targetPosition =
      Math.round(this.state.targetPosition - offset) + offset;
  }

  public next(): void {
    this.state.targetPosition -= 1;
    if (this.options.snap) {
      this.snapToNearest();
    }
  }

  public prev(): void {
    this.state.targetPosition += 1;
    if (this.options.snap) {
      this.snapToNearest();
    }
  }

  public goTo(index: number): void {
    const offset = this.getSnapOffset();
    this.state.targetPosition = -index + offset;
  }

  private getVisibleItems(): HTMLElement[] {
    return (Array.from(this.container.children) as HTMLElement[]).filter(
      (item) =>
        item.style.display !== "none" && !item.classList.contains("hidden"),
    );
  }

  // POSITION & MEASUREMENT
  private initPosition(): void {
    const offset = this.getSnapOffset();
    this.state.targetPosition = offset;
    this.state.currentPosition = offset;
    this.state.prevPosition = offset;
    this.updatePositions();
  }

  public measure(): void {
    const items = this.getVisibleItems();
    if (items.length === 0) return;

    const { gap, visibleSlides } = this.options;
    let { slideWidth } = this.options;

    if (visibleSlides > 0) {
      const containerWidth = this.container.getBoundingClientRect().width;
      slideWidth = (containerWidth - (visibleSlides - 1) * gap) / visibleSlides;
    }

    this.state.slideCount = items.length;
    this.state.itemWidth =
      slideWidth > 0
        ? slideWidth + gap
        : items[0].getBoundingClientRect().width + gap;

    items.forEach((item, index) => {
      item.style.flexShrink = "0";
      item.style.minWidth = "0px";
      item.style.boxSizing = "border-box";
      if (slideWidth > 0) {
        item.style.width = `${slideWidth}px`;
      }
      item.style.marginRight = index < items.length - 1 ? `${gap}px` : "0";
    });

    this.updatePositions();
  }

  private updatePositions(): void {
    const items = this.getVisibleItems();
    if (items.length === 0) return;

    items.forEach((item, index) => {
      const unitPos = this.state.currentPosition + index;
      const wrappedPos = symmetricMod(unitPos, this.state.slideCount);
      const x = wrappedPos - index;
      const translateX = x * this.state.itemWidth;
      item.style.transform = `translate3d(${translateX}px, 0, 0)`;
    });
  }

  // ANIMATION LOOP
  private tick(): void {
    const now = performance.now();
    const deltaTime = Math.min(0.1, (now - this.state.prevTime) / 1000);
    this.state.prevTime = now;

    this.state.currentPosition = damp(
      this.state.currentPosition,
      this.state.targetPosition,
      1 / this.options.lerpFactor,
      deltaTime,
    );

    const deltaPosition = this.state.currentPosition - this.state.prevPosition;
    this.state.prevPosition = this.state.currentPosition;
    const scaledForce = deltaPosition * this.options.forcePower;
    this.state.force = Math.max(-1, Math.min(1, scaledForce));

    this.updatePositions();
    this.onTickCallback?.(this.state);
  }

  private startAnimation(): void {
    this.state.prevTime = performance.now();

    const loop = () => {
      this.tick();
      this.state.animationFrameId = requestAnimationFrame(loop);
    };

    this.state.animationFrameId = requestAnimationFrame(loop);
  }

  public getState(): SwiperState {
    return this.state;
  }

  public destroy(): void {
    if (this.state.animationFrameId !== null) {
      cancelAnimationFrame(this.state.animationFrameId);
      this.state.animationFrameId = null;
    }
    this.unbindEvents?.();
    this.unbindEvents = null;
  }
}

export default SwiperCore;
