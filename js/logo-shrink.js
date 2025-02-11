
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
  const retailModules = [
    {
      title: "Gestión de Ventas",
      description:
        "Desde la orden hasta la facturación, controla el ciclo completo de ventas con herramientas avanzadas.",
      video: "https://www.youtube.com/embed/Bz1r3WZyAzY?autoplay=1&mute=1&loop=1&playlist=Bz1r3WZyAzY",
    },
    {
      title: "Gestión de Compras y Almacén",
      description:
        "Registra compras, controla el stock en tiempo real y optimiza la rotación de productos.",
      video: "https://www.youtube.com/embed/CepNFUnGfVM?autoplay=1&mute=1&loop=1&playlist=CepNFUnGfVM",
    },
    {
      title: "Gestión de Cobros, Pagos y Caja",
      description:
        "Administra múltiples métodos de pago y realiza cortes de caja en tiempo real.",
      video: "https://www.youtube.com/embed/9L0eMwWgVdM?autoplay=1&mute=1&loop=1&playlist=9L0eMwWgVdM",
    },
    {
      title: "Seguridad y Gestión de Usuarios",
      description:
        "Configura permisos avanzados para usuarios y supervisa todas las transacciones con auditoría detallada.",
      video: "https://www.youtube.com/embed/YErYByDI8R8?autoplay=1&mute=1&loop=1&playlist=YErYByDI8R8",
    }
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");

  function getVideoElement() {
    return document.getElementById("bg-video"); // Obtener el iframe cada vez que se usa
  }

  document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
  document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + retailModules.length) % retailModules.length;

    gsap.to([titleElement, descriptionElement], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titleElement.textContent = retailModules[currentIndex].title;
        descriptionElement.textContent = retailModules[currentIndex].description;

        gsap.to([titleElement, descriptionElement], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });

    const videoElement = getVideoElement(); // Obtener el iframe

    if (!videoElement) {
      console.error("Error: No se encontró el iframe con id 'bg-video'.");
      return;
    }

    gsap.to(videoElement, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoElement.setAttribute("src", retailModules[currentIndex].video);
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
  