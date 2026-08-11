import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { CUBE_IMG } from "@/content";

function makeShadowDisc(): THREE.Mesh {
  const s = 256;
  const canvas = document.createElement("canvas");
  canvas.width = s;
  canvas.height = s;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(0,0,0,0.6)");
  g.addColorStop(0.55, "rgba(0,0,0,0.28)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.55, 48), material);
  disc.rotation.x = -Math.PI / 2;
  return disc;
}

export function ThreeCube({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(2.8, 2.1, 3.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(4, 6, 4);
    scene.add(key);

    const gold = new THREE.PointLight(0xf0b429, 10, 14);
    gold.position.set(-3, 2, -2.5);
    scene.add(gold);

    const cubeSize = 1.6;
    const geometry = new RoundedBoxGeometry(cubeSize, cubeSize, cubeSize, 4, 0.07);
    const texture = new THREE.TextureLoader().load(CUBE_IMG);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.4,
      metalness: 0.15,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = cubeSize / 2;
    scene.add(cube);

    const shadow = makeShadowDisc();
    shadow.position.y = 0.005;
    scene.add(shadow);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.2;
    controls.minDistance = 2.4;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 0.8, 0);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      cube.position.y = cubeSize / 2 + Math.sin(now / 900) * 0.07;
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      controls.dispose();
      geometry.dispose();
      material.map?.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      scene.clear();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`.trim()} />
  );
}
