import * as THREE from "three";
import type { SwiperCore } from "../swiper/SwiperCore";

/**
 * Cosine gradient palette vectors [a, b, c, d] tailored to harmonize with each project's
 * banner visual identity and accent colors.
 * Formula: color(t) = a + b * cos(2 * PI * (c * t + d))
 */
export const PROJECT_GRADIENT_SCHEMES: Record<string, THREE.Vector3[]> = {
  // 1. Nemo Speech Rs: Rust ASR inference engine -> Fiery rust orange, flame amber, deep copper
  "nemo-speech-rs": [
    new THREE.Vector3(0.9, 0.45, 0.1),
    new THREE.Vector3(0.5, 0.35, 0.1),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.0, 0.15, 0.35),
  ],
  // 2. YAWM: AI Workflow Management -> Glowing cyber violet, electric purple, deep node indigo
  yawm: [
    new THREE.Vector3(0.55, 0.25, 0.75),
    new THREE.Vector3(0.4, 0.25, 0.45),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.15, 0.4, 0.7),
  ],
  // 3. Crab Conductor: High-concurrency Rust task conductor -> Crimson crab red, fiery vermillion, warm coral
  "crab-conductor": [
    new THREE.Vector3(0.95, 0.25, 0.2),
    new THREE.Vector3(0.45, 0.25, 0.15),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.0, 0.25, 0.5),
  ],
  // 4. Syntax Tree Codebase MCP: Tree-sitter AST parser -> Lavender, royal AST purple, amber syntax tokens
  "syntax-tree-codebase-mcp": [
    new THREE.Vector3(0.65, 0.45, 0.85),
    new THREE.Vector3(0.35, 0.35, 0.4),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.1, 0.3, 0.6),
  ],
  // 5. Lanadiya Villa Resort: Luxury villa resort -> Radiant resort gold, warm terracotta, tropical palm green
  "lanadiya-villa-resort": [
    new THREE.Vector3(0.95, 0.7, 0.15),
    new THREE.Vector3(0.4, 0.35, 0.25),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.05, 0.25, 0.55),
  ],
  // 6. Assessment Platform: Talent evaluation -> Fresh mint teal, clean aqua cyan, energetic coral pink
  "assessment-platform": [
    new THREE.Vector3(0.45, 0.85, 0.75),
    new THREE.Vector3(0.35, 0.3, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.25, 0.5, 0.75),
  ],
  // 7. Grandia Booking Engine: Hospitality room booking -> Soft azure sky blue, warm peach-amber glow, elegant champagne
  "grandia-booking-engine": [
    new THREE.Vector3(0.6, 0.75, 0.95),
    new THREE.Vector3(0.4, 0.3, 0.25),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.6, 0.25, 0.05),
  ],
  // 8. Grandia Room Service: Hotel concierge & dining -> Vivid cerulean sapphire, electric blue, minty highlights
  "grandia-room-service": [
    new THREE.Vector3(0.4, 0.65, 0.95),
    new THREE.Vector3(0.3, 0.35, 0.4),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.5, 0.3, 0.1),
  ],
  // 9. STP Cost Control: Financial budget & ledger -> Financial emerald green, mint sage, clean auditing teal
  "stp-cost-control": [
    new THREE.Vector3(0.55, 0.85, 0.65),
    new THREE.Vector3(0.35, 0.3, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.3, 0.15, 0.6),
  ],
  // 10. MSI Sales Call: Paint manufacturing CRM -> Paint swatch pastels: coral blush, periwinkle, lavender
  "msi-sales-call": [
    new THREE.Vector3(0.85, 0.6, 0.8),
    new THREE.Vector3(0.35, 0.35, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.0, 0.33, 0.67),
  ],
  // 11. MKM Tour Travel: Hajj, Umrah & travel booking -> Deep Islamic emerald green, golden sand glow, turquoise
  "mkm-tour-travel": [
    new THREE.Vector3(0.15, 0.75, 0.6),
    new THREE.Vector3(0.3, 0.35, 0.4),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.35, 0.2, 0.55),
  ],
  // 12. Limas: LPG logistics & field sales CRM -> Limas brand emerald green, vibrant leaf green, clean lime
  limas: [
    new THREE.Vector3(0.25, 0.8, 0.45),
    new THREE.Vector3(0.25, 0.45, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.25, 0.1, 0.45),
  ],
  // 13. El Bethel: Church facility & internal asset platform -> Royal amethyst purple, deep celestial indigo, warm cathedral gold
  "el-bethel": [
    new THREE.Vector3(0.6, 0.3, 0.85),
    new THREE.Vector3(0.4, 0.25, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.15, 0.35, 0.65),
  ],
  // 14. STP Helpdesk: IT SLA operations portal -> Electric IT cyan, crisp tech blue, neon cerulean
  "stp-helpdesk": [
    new THREE.Vector3(0.15, 0.65, 0.95),
    new THREE.Vector3(0.25, 0.35, 0.4),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.55, 0.3, 0.1),
  ],
  // 15. Indolaw: Legal content portal & regulation CMS -> Legal periwinkle blue, bronze brass seal, royal justice violet
  indolaw: [
    new THREE.Vector3(0.55, 0.6, 0.95),
    new THREE.Vector3(0.35, 0.35, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.7, 0.35, 0.15),
  ],
  // 16. Jangji: Wedding management workspace -> Elegant champagne gold, romantic blush rose, soft warm peach
  jangji: [
    new THREE.Vector3(0.92, 0.72, 0.62),
    new THREE.Vector3(0.35, 0.28, 0.28),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.05, 0.18, 0.32),
  ],
  // 17. Hallaw Admin: Legal consultation app & CMS -> Deep legal contrast with brilliant canary yellow & cyber cyan
  "hallaw-admin": [
    new THREE.Vector3(0.85, 0.8, 0.35),
    new THREE.Vector3(0.4, 0.35, 0.4),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.15, 0.45, 0.75),
  ],
  // 18. Sariangin: Oxygen gas & cylinder logistics -> Pure oxygen cyan, electric sky blue, clean aerated azure
  sariangin: [
    new THREE.Vector3(0.2, 0.85, 0.95),
    new THREE.Vector3(0.25, 0.3, 0.35),
    new THREE.Vector3(1.0, 1.0, 1.0),
    new THREE.Vector3(0.45, 0.25, 0.15),
  ],
};

export const GRADIENT_SCHEMES: THREE.Vector3[][] = Object.values(
  PROJECT_GRADIENT_SCHEMES,
);

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uBendPower;
  uniform float uZoomBendPower;
  uniform float uZoomIntensity;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 transformedPosition = position;

    float normalizedY = vUv.y * 2.0 - 1.0;
    float normalizedX = vUv.x * 2.0 - 1.0;

    // Horizontal parabolic curvature based on swiper velocity / bend force
    float offset = uBendPower * pow(normalizedY, 2.0);
    transformedPosition.x += offset;

    // 3D zoom curvature
    float distFromCenter = length(vec2(normalizedX, normalizedY));
    float radialFactor = smoothstep(0.0, 1.414, distFromCenter);

    float centerProgress = smoothstep(1.0, 0.0, uZoomBendPower);
    float cornersProgress = smoothstep(1.0, 0.55, uZoomBendPower);

    float centerMask = pow(1.0 - radialFactor, 0.5);
    float cornersMask = pow(radialFactor, 2.0);
    float cornerSharpness = pow(abs(normalizedX), 1.5) * pow(abs(normalizedY), 1.5);
    float cornerBend = cornersMask * cornerSharpness * cornersProgress;

    float bendAmount = (centerMask * centerProgress * 2.0 + cornerBend) * uZoomIntensity;
    transformedPosition.z += bendAmount;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformedPosition, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec3 uColourPalette[4];
  uniform float uUvScale;
  uniform float uUvDistortionIterations;
  uniform float uUvDistortionIntensity;
  uniform float uIndex;
  uniform float uZoomBendPower;
  uniform vec2 uResolution;
  uniform float uCornerRadius;

  varying vec2 vUv;

  // Stefan Gustavson simplex 3D noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  float random(float seed) {
    return fract(sin(seed) * 43758.5453123);
  }

  vec3 cosineGradientColour(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
    return clamp(a + b * cos(6.28318 * (c * t + d)), 0.0, 1.0);
  }

  void main() {
    vec2 uv = vUv;

    float indexSeed = uIndex * 12.9898;
    float multiplier = 0.06 + random(indexSeed) * 0.06;
    float phaseOffset = random(indexSeed + 4.0) * 6.28318;
    float noiseOffset = random(indexSeed + 8.0) * 10.0;

    vec2 timeOffset = vec2(
      sin(uTime * 0.3 + phaseOffset) * multiplier,
      cos(uTime * 0.2 + phaseOffset) * multiplier
    );
    uv += timeOffset;

    uv *= uUvScale;

    for (float i = 0.0; i < 4.0; i++) {
      uv += snoise(vec3(uv - i * 0.2, uTime + i * (32.0 + noiseOffset))) * uUvDistortionIntensity;
    }

    float colourInput = snoise(vec3(uv, sin(uTime + phaseOffset) + noiseOffset)) * 0.5 + 0.5;
    vec3 colour = cosineGradientColour(colourInput, uColourPalette[0], uColourPalette[1], uColourPalette[2], uColourPalette[3]);

    // Antialiased rounded corners for borderless card
    float alpha = 1.0;
    if (uCornerRadius > 0.0 && uResolution.x > 0.0 && uResolution.y > 0.0) {
      vec2 p = (vUv - 0.5) * uResolution;
      vec2 b = uResolution * 0.5 - vec2(uCornerRadius);
      vec2 q = abs(p) - b;
      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - uCornerRadius;
      alpha = 1.0 - smoothstep(-1.0, 1.0, dist);
      if (alpha < 0.005) {
        discard;
      }
    }

    gl_FragColor = vec4(colour, alpha);
  }
`;

export interface GradientRendererOptions {
  scale?: number;
  getResponsiveScale?: (width: number) => number;
  zoomIntensity?: number;
}

export class GradientRenderer {
  private canvas: HTMLCanvasElement;
  private container: HTMLElement;
  private swiper: SwiperCore;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private material: THREE.ShaderMaterial;
  private mesh: THREE.Mesh;
  private clock: THREE.Clock;
  private animId: number | null = null;
  private zoomPowers: Map<number, number> = new Map();
  private responsiveScale: number = 1.0;
  private options: GradientRendererOptions;

  constructor(
    canvas: HTMLCanvasElement,
    container: HTMLElement,
    swiper: SwiperCore,
    options: GradientRendererOptions = {},
  ) {
    this.canvas = canvas;
    this.container = container;
    this.swiper = swiper;
    this.options = options;
    this.clock = new THREE.Clock();

    // High performance WebGL renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.autoClear = false;

    this.scene = new THREE.Scene();

    // Perspective camera with FOV 50 matching swipeeeee example
    // Distance calculated for viewScale = 2.0: (3.44 * 2.0 / 2) / tan(25°) = 7.377
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(0, 0, 7.377);

    // Plane mesh with high segmentation for smooth 3D bending
    const geometry = new THREE.PlaneGeometry(2.4, 3.44, 32, 32);

    this.material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uBendPower: { value: 0 },
        uZoomBendPower: { value: 0 },
        uZoomIntensity: { value: 0.8 },
        uIndex: { value: 0 },
        uColourPalette: { value: GRADIENT_SCHEMES[0] },
        uUvScale: { value: 1.0 },
        uUvDistortionIterations: { value: 4.0 },
        uUvDistortionIntensity: { value: 0.2 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uCornerRadius: { value: 0.0 },
      },
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    this.resize();
    this.start();
  }

  private calculateResponsiveScale(): number {
    if (typeof window === "undefined") return 1.0;
    if (this.options.getResponsiveScale) {
      return this.options.getResponsiveScale(window.innerWidth);
    }
    if (this.options.scale !== undefined) {
      return this.options.scale;
    }
    const w = window.innerWidth;
    if (w < 480) return 0.88;
    if (w < 768) return 0.92;
    if (w < 1024) return 0.96;
    return 1.0;
  }

  public setScale(scale: number): void {
    this.responsiveScale = scale;
  }

  public getScale(): number {
    return this.responsiveScale;
  }

  public setOptions(options: Partial<GradientRendererOptions>): void {
    this.options = { ...this.options, ...options };
    this.responsiveScale = this.calculateResponsiveScale();
  }

  public resize(): void {
    const rect = this.container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    this.responsiveScale = this.calculateResponsiveScale();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.renderer.setSize(rect.width, rect.height, false);
  }

  public start(): void {
    const render = () => {
      this.draw();
      this.animId = requestAnimationFrame(render);
    };
    this.animId = requestAnimationFrame(render);
  }

  public stop(): void {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  private draw(): void {
    const canvasRect = this.canvas.getBoundingClientRect();
    if (canvasRect.width === 0 || canvasRect.height === 0) return;

    const elapsedTime = this.clock.getElapsedTime();
    const swiperState = this.swiper.getState();
    const bendPower = -swiperState.force * 1.4;

    // Clear entire main canvas buffer once per frame
    this.renderer.setScissorTest(false);
    this.renderer.clear();

    const slots = this.container.querySelectorAll<HTMLElement>(
      ".card-gradient-slot",
    );
    const viewportCenterX = canvasRect.left + canvasRect.width / 2;

    const viewScale = 2.0; // 2x viewport buffer matching swipeeeeee scale(2) to prevent scissor/overflow cropping

    slots.forEach((slot) => {
      const parentCard = slot.closest<HTMLElement>(".project-slide");
      if (parentCard && parentCard.style.display === "none") return;

      const slotRect = slot.getBoundingClientRect();

      // Check if slot is within visible bounds (with generous buffer)
      if (
        slotRect.right < canvasRect.left - 200 ||
        slotRect.left > canvasRect.right + 200 ||
        slotRect.bottom < canvasRect.top - 100 ||
        slotRect.top > canvasRect.bottom + 100
      ) {
        return;
      }

      const index = parseInt(slot.dataset.index || "0", 10);

      // Parabolic zoom bend calculation: items closer to center bend in 3D
      const slotCenterX = slotRect.left + slotRect.width / 2;
      const distFromCenter =
        Math.abs(slotCenterX - viewportCenterX) / (canvasRect.width / 2);
      const targetZoom = distFromCenter < 0.65 ? 1.0 : 0.0;
      const currentZoom = this.zoomPowers.get(index) ?? 0;
      const nextZoom = currentZoom + (targetZoom - currentZoom) * 0.08;
      this.zoomPowers.set(index, nextZoom);

      // Center of slot in canvas coordinates
      const slotRelCenterX = slotCenterX - canvasRect.left;
      const slotRelCenterY =
        slotRect.top + slotRect.height / 2 - canvasRect.top;

      // WebGL bottom-up coordinates
      const centerX_gl = slotRelCenterX;
      const centerY_gl = canvasRect.height - slotRelCenterY;

      // Apply responsive scale factor (perkecil ukuran pada viewport lebih kecil)
      const scale = this.responsiveScale;
      const renderW = slotRect.width * scale;
      const renderH = slotRect.height * scale;

      // Expanded viewport dimensions (viewScale = 2.0)
      // Provides 50% buffer in every direction so 3D bending & zooming are never cropped
      const vpWidth = renderW * viewScale;
      const vpHeight = renderH * viewScale;

      const vpLeft = centerX_gl - vpWidth / 2;
      const vpBottom = centerY_gl - vpHeight / 2;

      // Scissor test coordinates clamped to canvas
      const scissorX = Math.max(0, Math.floor(vpLeft));
      const scissorY = Math.max(0, Math.floor(vpBottom));
      const scissorRight = Math.min(
        canvasRect.width,
        Math.ceil(vpLeft + vpWidth),
      );
      const scissorTop = Math.min(
        canvasRect.height,
        Math.ceil(vpBottom + vpHeight),
      );
      const scissorW = Math.max(0, scissorRight - scissorX);
      const scissorH = Math.max(0, scissorTop - scissorY);

      if (scissorW <= 0 || scissorH <= 0) return;

      this.renderer.setViewport(vpLeft, vpBottom, vpWidth, vpHeight);
      this.renderer.setScissor(scissorX, scissorY, scissorW, scissorH);
      this.renderer.setScissorTest(true);

      // Clear depth for this view so independent cards don't depth-clash
      this.renderer.clearDepth();

      this.camera.aspect = vpWidth / vpHeight;
      this.camera.updateProjectionMatrix();

      // Dynamically adapt mesh scale to match rendered slot aspect ratio exactly
      const currentAspect = renderW / renderH;
      const baseAspect = 2.4 / 3.44;
      this.mesh.scale.set(currentAspect / baseAspect, 1, 1);

      // Responsive zoom intensity: soften bend on mobile touch screens for crisp presentation
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const zoomIntensity =
        this.options.zoomIntensity ?? (isMobile ? 0.45 : 0.8);

      // Update uniforms for this slide
      this.material.uniforms.uTime.value = elapsedTime;
      this.material.uniforms.uBendPower.value = bendPower;
      this.material.uniforms.uZoomBendPower.value = nextZoom;
      this.material.uniforms.uZoomIntensity.value = zoomIntensity;
      const slug = slot.dataset.slug;
      const palette =
        (slug && PROJECT_GRADIENT_SCHEMES[slug]) ||
        GRADIENT_SCHEMES[index % GRADIENT_SCHEMES.length] ||
        GRADIENT_SCHEMES[0];

      this.material.uniforms.uIndex.value = index;
      this.material.uniforms.uColourPalette.value = palette;
      this.material.uniforms.uResolution.value.set(renderW, renderH);

      this.renderer.render(this.scene, this.camera);
    });
  }

  public destroy(): void {
    this.stop();
    this.material.dispose();
    this.mesh.geometry.dispose();
    this.renderer.dispose();
  }
}

export default GradientRenderer;
