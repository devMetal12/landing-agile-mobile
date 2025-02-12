
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
ScrollReveal().reveal('.image-container');

/* Carousel */
document.addEventListener("DOMContentLoaded", () => {
  const retailModules = [
    {
      title: "Demo",
      description:
        "Mira cómo Wandl Agile Mobile puede transformar tu negocio con esta demostración en imágenes.",
      image: "./assets/demo.jpg",
    },
    {
      title: "Gestión de Ventas",
      description:
        "Desde la orden hasta la facturación, controla el ciclo completo de ventas con herramientas avanzadas.",
      image: "./assets/facturacion.jpg",
    },
    {
      title: "Gestión de Compras y Almacén",
      description:
        "Registra compras, controla el stock en tiempo real y optimiza la rotación de productos.",
      image: "./assets/inventario.webp",
    },
    {
      title: "Gestión de Cobros, Pagos y Caja",
      description:
        "Administra múltiples métodos de pago y realiza cortes de caja en tiempo real.",
      image: "./assets/facturacion.jpg",
    },
    {
      title: "Seguridad y Gestión de Usuarios",
      description:
        "Configura permisos avanzados para usuarios y supervisa todas las transacciones con auditoría detallada.",
      image: "./assets/proyecto.jpg",
    }
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");
  const imageElement = document.getElementById("module-image");

  document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
  document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + retailModules.length) % retailModules.length;

    gsap.to([titleElement, descriptionElement, imageElement], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titleElement.textContent = retailModules[currentIndex].title;
        descriptionElement.textContent = retailModules[currentIndex].description;

        // ✅ Cambio de imagen
        imageElement.src = retailModules[currentIndex].image;

        gsap.to([titleElement, descriptionElement, imageElement], {
          opacity: 1,
          y: 0,
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
  