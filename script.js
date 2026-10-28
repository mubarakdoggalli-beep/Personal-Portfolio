/* =========================================================
PERSONAL PORTFOLIO WEBSITE
script.js
========================================================= */

/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

```
menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (icon) {

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

});
```

}

/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

```
link.addEventListener("click", () => {

    if (navbar) {
        navbar.classList.remove("active");
    }

    if (menuBtn) {

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

});
```

});

/* ================= SCROLL TOP BUTTON ================= */

const scrollTopBtn = document.getElementById("scroll-top");

if (scrollTopBtn) {

```
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
```

}

/* ================= FOOTER YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

```
yearElement.textContent = new Date().getFullYear();
```

}

/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

```
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");


    if (!name || !email || !subject || !message) {
        return;
    }


    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        subject.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }


    alert(
        "Thank you, " +
        name.value.trim() +
        "! Your message has been submitted."
    );


    contactForm.reset();

});
```

}

/* ================= CURRENT PAGE ================= */

const currentPage =
window.location.pathname.split("/").pop();

if (currentPage) {

```
navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    }

});


}
