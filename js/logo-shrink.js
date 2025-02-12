
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
      title: "Demo Inicial",
      description:
        "Mira cómo Wandl Agile Mobile puede transformar tu negocio con esta demostración en video.",
      video: "./assets/demo-inicial.mp4",
    },
    {
      title: "Gestión de Ventas",
      description:
        "Desde la orden hasta la facturación, controla el ciclo completo de ventas con herramientas avanzadas.",
      video: "./assets/sales-management.mp4",
    },
    {
      title: "Gestión de Compras y Almacén",
      description:
        "Registra compras, controla el stock en tiempo real y optimiza la rotación de productos.",
      video: "./assets/purchases-inventory.mp4",
    },
    {
      title: "Gestión de Cobros, Pagos y Caja",
      description:
        "Administra múltiples métodos de pago y realiza cortes de caja en tiempo real.",
      video: "./assets/payments-cashflow.mp4",
    },
    {
      title: "Seguridad y Gestión de Usuarios",
      description:
        "Configura permisos avanzados para usuarios y supervisa todas las transacciones con auditoría detallada.",
      video: "./assets/user-security.mp4",
    }
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");
  const videoElement = document.getElementById("video-source");
  const videoSource = videoElement.querySelector("source");

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

    // Cambio de video con animación suave
    gsap.to(videoElement, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoSource.src = retailModules[currentIndex].video;
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
  