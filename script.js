/*const PASSWORD = "Sahil@123";

const userPassword = prompt("Enter Password");

if (userPassword !== PASSWORD) {
    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            font-size:30px;
            color:red;
            background:#000;
        ">
            Access Denied ❌
        </div>
    `;
    throw new Error("Wrong Password");
}*/
/*====================================
ELEMENTS
====================================*/

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

const envelope = document.getElementById("envelope");
const letterCard = document.getElementById("letterCard");

const surpriseBtn = document.getElementById("surpriseBtn");
if (surpriseBtn) 
    surpriseBtn.addEventListener("click", () => {
        window.open("assets/images/pic.jpg", "_blank");
    });
const surpriseModal = document.getElementById("surpriseModal");
const closeModal = document.getElementById("closeModal");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

const photos = document.querySelectorAll(".photo img");

/*====================================
START BUTTON
====================================*/

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document.querySelector(".letter-section").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/*====================================
LETTER TYPING
====================================*/

const message = `Dear Zoya Shahiba Jii ❤️

These two months became some of the most beautiful memories of my life.

Thank you for every smile, every conversation and every little moment.

You will always be My 💕 سوکوں.

— Sahil ❤️`;

let i = 0;

function type() {

    if (!typing) return;

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(type, 40);

    }

}

/*====================================
ENVELOPE
====================================*/

if (envelope && letterCard) {

    envelope.addEventListener("click", () => {

        envelope.style.display = "none";

        letterCard.classList.remove("hidden");

        if (typing) {

            typing.innerHTML = "";

            i = 0;

            type();

        }

    });

}

/*====================================
LIGHTBOX
====================================*/

if (photos.length && lightbox && lightboxImg) {

    photos.forEach(photo => {

        photo.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = photo.src;

        });

    });

}

if (closeLightbox && lightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

/*====================================
SURPRISE MODAL
====================================*/

if (surpriseBtn && surpriseModal) {

    console.log("Surprise Button Found ✅");

    surpriseBtn.addEventListener("click", () => {

        console.log("Button Clicked ✅");

        surpriseModal.style.display = "flex";

    });

}


if (closeModal && surpriseModal) {

    closeModal.addEventListener("click", () => {

        surpriseModal.style.display = "none";

    });

    surpriseModal.addEventListener("click", (e) => {

        if (e.target === surpriseModal) {

            surpriseModal.style.display = "none";

        }

    });

}

/*====================================
MOBILE MENU
====================================*/

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/*====================================
WINDOW LOAD
====================================*/

window.addEventListener("load", () => {

    console.log("Website Loaded Successfully ❤️");

});
