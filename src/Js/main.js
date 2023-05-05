const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});
//  Swiper
let swiper = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});
//          Email Js
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("contact-message");

const sendEmail = function (e) {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    //  Showing Message to fill complete
    contactMessage.textContent = "Please fill all the inputs 📧";
  } else {
    // ServiceId-templateID-#form-publickey
    // will erturn a promise so then method
    emailjs
      .sendForm(
        "service_fifd2nv",
        "template_iftxtxh",
        "#contact-form",
        "5t1Yt-oyKfXL5DMeD"
      )
      .then(
        () => {
          //  Show Message if send
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent successfully ✅";

          // after 5 sec remove message
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 1000);
        },
        (error) => {
          alert("OOPs SOMETHING HAS FAILED...", error);
        }
      );
    // Empty fields
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
//  Scroll Active links
//s elcting section and id
const sections = document.querySelectorAll("section[id]");

const scrollActive = function () {
  const scrollY = window.pageYOffset;
  // console.log(scrollY);

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    // console.log("Top" + sectionTop);
    // console.log("Heighht" + sectionHeight);

    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    // Through id excessing the class
    // console.log(sectionId);
    // console.log(sectionsClass);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

//  Show scroll up Button
const scrollup = () => {
  const scrollbtn = document.getElementById("scroll-up");
  // console.log(this);
  // console.log(this.scrollY);

  this.scrollY >= 350
    ? scrollbtn.classList.add("show-scroll")
    : scrollbtn.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollup);

/////////////////////////  Show  Dark theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme"; // as body.dark-theme
const iconTheme = "ri-sun-line";

//  previously Selected Theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//  Get Current theme
const getCurrentTheme = () =>
  document.body.classList.contains("darkTheme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains("iconTheme") ? "ri-sun-line" : "ri-moon-line";

//  Validating  if user previously chose a topic
if (selectedTheme) {
  // console.log(selectedIcon);
  // console.log(selectedTheme);
  //  validation checking
  // if darktheme then add dark theme class
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  //  for in start as sun
  themeButton.classList[selectedIcon === "ri-moon-line" ? "remove" : "add"](
    iconTheme
  );
}

// Activating the theme and Deactivating theme 
themeButton.addEventListener("click", function () {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We selcted the theme and icon in local storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//  Scroll Header
const scrollHeader = () => {
  const header = document.getElementById("header");
  // console.log(this);
  // console.log(this.scrollY);

  this.scrollY >= 350
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

//    Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true /*Animation repeat*/,
});

sr.reveal(".home__data,.projects__container,.footer__container");
sr.reveal(".home__info div", { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(".skills__content:nth-child(1),.contact__content:nth-child(1)", {
  origin: "left",
});
sr.reveal(".skills__content:nth-child(2),.contact__content:nth-child(2)", {
  origin: "right",
});
sr.reveal(".qualification__content,.services__card", { interval: 100 });
