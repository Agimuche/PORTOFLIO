// Three.js Scene Setup
class ThreeScene {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.init();
    }

    init() {
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        // Create different 3D objects based on canvas ID
        switch (this.canvas.id) {
            case 'hero-canvas':
                this.createHeroScene();
                break;
            case 'about-canvas':
                this.createAboutScene();
                break;
            case 'project1-canvas':
            case 'project2-canvas':
            case 'project3-canvas':
                this.createProjectScene();
                break;
            case 'contact-canvas':
                this.createContactScene();
                break;
        }

        // Position camera
        this.camera.position.z = 5;

        // Start animation
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    createHeroScene() {
        // Create a geometric shape
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4a90e2,
            shininess: 100,
            specular: 0xffffff
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
    }

    createAboutScene() {
        // Create a cube
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4a90e2,
            shininess: 100,
            specular: 0xffffff
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
    }

    createProjectScene() {
        // Create a sphere
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4a90e2,
            shininess: 100,
            specular: 0xffffff
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
    }

    createContactScene() {
        // Create an icosahedron
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4a90e2,
            shininess: 100,
            specular: 0xffffff
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.mesh) {
            // Rotate the 3D object
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.01;

            // Add some floating motion
            this.mesh.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }
}

// Initialize all Three.js scenes
document.addEventListener('DOMContentLoaded', () => {
    const canvasIds = [
        'hero-canvas',
        'about-canvas',
        'project1-canvas',
        'project2-canvas',
        'project3-canvas',
        'contact-canvas'
    ];

    canvasIds.forEach(id => {
        new ThreeScene(id);
    });
}); 