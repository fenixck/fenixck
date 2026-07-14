const canvas = document.getElementById("rain");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

   
    class Drop {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 5 + 2;
      }
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = "rgba(174,194,224,0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    
    const drops = [];
    for (let i = 0; i < 300; i++) {
      drops.push(new Drop());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let drop of drops) {
        drop.update();
      }
      requestAnimationFrame(animate);
    }

    animate();

   
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    window.addEventListener("click", () => {
    const music = document.getElementById("bgmusic");
    music.muted = false; 
    music.play();
  });
  const music = document.getElementById("bgmusic");
  music.volume = 0.2;
  document.addEventListener("DOMContentLoaded", () => {
      const overlay = document.getElementById("overlay");
      const music = document.getElementById("bgmusic");

      overlay.addEventListener("click", () => {
      
        overlay.style.display = "none";

       
        music.muted = false;
        music.play().catch(err => {
          console.log("El navegador bloqueó el autoplay:", err);
        });
      });
    });
    function updateClock() {
    
    const options = { 
      timeZone: "America/Guayaquil", 
      hour: "2-digit", 
      minute: "2-digit", 
      second: "2-digit" 
    };
    const now = new Date().toLocaleTimeString("es-EC", options);
    document.getElementById("clock").textContent = "Hora en Quito: " + now;
  }

  setInterval(updateClock, 1000);
  updateClock();