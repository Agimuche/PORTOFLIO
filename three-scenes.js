// Enhanced Three.js Scene for Hero Background
class HeroScene {
    constructor() {
        this.canvas = document.getElementById('hero-canvas');
        if (!this.canvas) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };

        this.init();
    }

    init() {
        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 15;
            colors[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            sizeAttenuation: true,
            transparent: true,
            alphaTest: 0.001,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);

        // Abstract Shape
        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x7851A9,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
            shininess: 100
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        // Lights
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.x = 2;
        pointLight.position.y = 3;
        pointLight.position.z = 4;
        this.scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        this.camera.position.z = 5;

        // Events
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('resize', () => this.onWindowResize());

        this.animate();
    }

    onMouseMove(event) {
        this.targetMouse.x = (event.clientX / window.innerWidth - 0.5);
        this.targetMouse.y = (event.clientY / window.innerHeight - 0.5);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Smooth mouse movement
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // Rotate Mesh
        if (this.mesh) {
            this.mesh.rotation.x += 0.001;
            this.mesh.rotation.y += 0.002;
            this.mesh.rotation.z += 0.001;

            // Mouse Interaction
            this.mesh.rotation.x += this.mouse.y * 0.5;
            this.mesh.rotation.y += this.mouse.x * 0.5;
        }

        // Rotate Particles
        if (this.particles) {
            this.particles.rotation.y += 0.0005;
            this.particles.rotation.x += this.mouse.y * 0.1;
            this.particles.rotation.z += this.mouse.x * 0.2;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new HeroScene();
});