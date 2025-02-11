
ScrollTrigger.create({
animation: gsap.from(".logo", {
    y: "50vh",
    scale: 5,
    yPercent: -50,
}),
scrub: true,
trigger: ".content",
start: "top bottom",
endTrigger: ".content",
end: "top center",
});

/* Scroll REveal */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 500,
    delay: 0
})

ScrollReveal().reveal('.text-box');
ScrollReveal().reveal('.demo-phone');

/* Carousel */
document.addEventListener("DOMContentLoaded", () => {
    const titles = [
      "Captura Inteligente de Datos",
      "Totalmente Móvil",
      "Plataforma Web Intuitiva",
      "Integración con ERPs y Sistemas"
    ];
    
    const descriptions = [
      "Texto, fotos, videos, audios y fechas en un solo lugar. Escaneo de códigos de barras y NFC. Geolocalización en tiempo real.",
      "Disponible para Android e iOS. Accede desde cualquier lugar sin restricciones.",
      "Crea y gestiona formularios sin conocimientos técnicos. Automatiza envíos y controla versiones con permisos personalizados.",
      "Conéctate fácilmente con SAP, Odoo, Microsoft Dynamics, Oracle y más. Soporte para CRMs, WMSs y API flexible para bases de datos."
    ];
  
    const videos = [
      "./assets/data-capture.mp4",
      "./assets/mobile-access.mp4",
      "./assets/demo-phone.mp4",
      "./assets/integration.mp4"
    ];
  
    let currentIndex = 0;
  
    const titleElement = document.getElementById("module-title");
    const descriptionElement = document.getElementById("module-description");
    const videoElement = document.getElementById("module-video");
    const videoSource = document.getElementById("video-source");
  
    document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
    document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));
  
    function changeSlide(direction) {
      currentIndex = (currentIndex + direction + titles.length) % titles.length;
  
      gsap.to([titleElement, descriptionElement], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          titleElement.textContent = titles[currentIndex];
          descriptionElement.textContent = descriptions[currentIndex];
  
          gsap.to([titleElement, descriptionElement], {
            opacity: 1,
            y: 0,
            duration: 0.3,
          });
        }
      });
  
      // Cambio de video con animación suave
      gsap.to(videoElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          videoSource.src = videos[currentIndex];
          videoElement.load(); // Recarga el video para aplicar el nuevo src
  
          gsap.to(videoElement, {
            opacity: 1,
            duration: 0.3,
          });
        }
      });
    }
  });


/* contact */
document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Capturar los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // Simulación de envío
    console.log("Formulario enviado:", { name, email, phone, message });
  
    // Animación de confirmación
    gsap.to("#info-form", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".text-box").innerHTML = `
          <h2>¡Gracias por tu interés!</h2>
          <p>Hemos recibido tu solicitud y te contactaremos pronto.</p>
        `;
  
        gsap.to(".text-box", { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  });
  