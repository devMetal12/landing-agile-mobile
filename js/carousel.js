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

    // Cambio automático de imágenes cada 5 segundos
    setInterval(() => {
      changeSlide(1);
    }, 5000);
  });
