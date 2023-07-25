(function ($) {
  "use strict";

  // testimonial-wrap
  if ($(".testimonial-wrap").length !== 0) {
    $(".testimonial-wrap").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // navbarDropdown
  if ($(window).width() < 992) {
    $("#navbar .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  $(window).on("scroll", function () {
    //.Scroll to top show/hide
    if ($("#scroll-to-top").length) {
      var scrollToTop = $("#scroll-to-top"),
        scroll = $(window).scrollTop();
      if (scroll >= 200) {
        scrollToTop.fadeIn(200);
      } else {
        scrollToTop.fadeOut(100);
      }
    }
  });
  // scroll-to-top
  if ($("#scroll-to-top").length) {
    $("#scroll-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  }

  // portfolio-gallery
  if ($(".portfolio-gallery").length !== 0) {
    $(".portfolio-gallery").each(function () {
      $(this)
        .find(".popup-gallery")
        .magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
    });
  }

  // Counter
  if ($(".counter-stat").length !== 0) {
    $(".counter-stat").counterUp({
      delay: 40,
      time: 1900,
    });
  }
})(jQuery);

//Escribir automatico en home palabra "Experience"
const typed = new Typed(".typed", {
  strings: ["Experience"],
  typeSpeed: 95,
  startDelay: 300,
  backSpeed: 95,
  backDelay: 2000,
  loop: true,
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* About effect */
// Get the target section
const targetSection = document.querySelector(".about");

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation class when the section is in view
      entry.target.classList.add("animate");
      // Stop observing once animation is triggered
      observer.unobserve(entry.target);
    }
  });
});

// Start observing the target section
observer.observe(targetSection);

/* END About effect */

const introSection = document.querySelector(".intro");
const sectionTitle = introSection.querySelector(".section-title");
const contentTitle = introSection.querySelector(".content-title");
const introItems = introSection.querySelectorAll(".intro-item");

const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      introSection.classList.add("animate");
      sectionTitle.style.opacity = 1;
      sectionTitle.style.transform = "translateY(0)";
      contentTitle.style.opacity = 1;
      contentTitle.style.transform = "translateY(0)";
      introItems.forEach((item, index) => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
        item.style.transitionDelay = `${index * 25}s`;
      });
      observer1.unobserve(entry.target);
    }
  });
});

observer.observe(introSection);

/* Carrousel */

/* Mobile dropdown menu */
// Función para abrir o cerrar el dropdown menu
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("open");
  ajustarMainContainer();
}

// Cerrar el dropdown menu
function closeDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.remove("open");
}


// Intersection Observer Setup
const aboutSection = document.querySelector(".about-sec-top");

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.2,
};







/* DropDown Menu y Sidebar menu */
// Función para ajustar el tamaño del main-container
function ajustarMainContainer() {
  var iframeHeight = document.getElementById("iframe-servicio").contentWindow.document.body.scrollHeight;
  var dropdownContent = document.getElementById("dropdown-content");
  var dropdownHeight = dropdownContent.offsetHeight;
  var maxHeight = Math.max(iframeHeight, dropdownHeight);

  maxHeight += 150;
  document.querySelector(".main-container").style.height = maxHeight + "px";
}

// Función para cargar el servicio
function cargarServicio(url) {
  var contenedorInformacion = document.getElementById("iframe-servicio");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      contenedorInformacion.srcdoc = xhr.responseText;
      // Obtener el texto del servicio seleccionado
      var servicioSeleccionado = document.querySelector("#dropdown-content .active a").textContent;
      // Actualizar el texto del botón con el servicio seleccionado
      var dropdownButton = document.querySelector(".dropdown-button");
      dropdownButton.innerHTML = servicioSeleccionado + ' <i class="fas fa-chevron-down"></i>';

      // Ajustar la altura del main-container después de cargar el servicio
      ajustarMainContainer();
    }
  };
  xhr.send();

  // Resto del código para cargar el servicio...

  // Remover la clase "active" de todos los elementos de la lista MOBILE
  var listaServicios = document.querySelectorAll("#dropdown-content li");
  listaServicios.forEach(function (servicioItem) {
    servicioItem.classList.remove("active");
  });

  // Agregar la clase "active" al elemento seleccionado con nombre del servicio
  var servicioItemSeleccionado = event.target.parentElement;
  servicioItemSeleccionado.classList.add("active");

  // Remover la clase "active" de todos los elementos de la lista Desktop
  var listaServicios = document.querySelectorAll("#sidebar ul li");
  listaServicios.forEach(function (servicioItem) {
    servicioItem.classList.remove("activeDesk");
  });

  // Agregar la clase "activeDesk" al elemento seleccionado
  var servicioItemSeleccionado = event.target.parentElement;
  servicioItemSeleccionado.classList.add("activeDesk");

  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.remove("open");

  ajustarMainContainer();
}

// Esta función se ejecuta al cargar la página para mostrar el servicio 1 por defecto
document.addEventListener("DOMContentLoaded", function () {
  var dropdownButton = document.querySelector(".dropdown-button");
  cargarServicio('service04.html');
  ajustarMainContainer();
});

document.getElementById("iframe-servicio").onload = function () {
  ajustarMainContainer(); // Ajustar la altura del main-container después de que el contenido se ha cargado
};

// Resto del código...

// Función para establecer el texto predeterminado del botón
function setDefaultButtonText() {
  var dropdownButton = document.querySelector(".dropdown-button");
  dropdownButton.innerHTML = 'Select a Service <i class="fas fa-chevron-down"></i>';
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("open");
  ajustarMainContainer(); // Ajustar la altura del main-container al abrir o cerrar el menú desplegable
}

/* DropDown Menu y Sidebar menu */