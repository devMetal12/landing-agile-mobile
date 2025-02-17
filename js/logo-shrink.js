
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

/* contact */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("info-form");
  const successMessage = document.createElement("p");
  successMessage.textContent = "¡Mensaje enviado con éxito!";
  successMessage.style.color = "green";
  successMessage.style.fontWeight = "bold";
  successMessage.style.display = "none";
  form.appendChild(successMessage);

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
          params.append(key, value);
      });
      
      fetch("https://formsubmit.co/el/jagoji", {
          method: "POST",
          body: params,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              successMessage.style.display = "block";
              form.reset();
          } else {
              alert("Hubo un error al enviar el mensaje.");
          }
      })
      .catch(error => {
          alert("Error de conexión. Inténtalo nuevamente.");
          console.error("Error:", error);
      });
  });
});

/* full screen */
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".demo-phone");
  
    video.addEventListener("click", function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { // Chrome, Safari y Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // Edge
        video.msRequestFullscreen();
      }
    });
  });
  