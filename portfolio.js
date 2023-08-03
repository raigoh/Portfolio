"use strict";

/*----------------------------------------------------------------------------------------------------------------
Navbar Scroll Class Add/Remove On Scroll Event Listener Functionality JS Code for Navbar Dark Theme Toggle Effect
------------------------------------------------------------------------------------------------------------------*/
const header = document.querySelector(".navbar");

window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

/*------------------------------------------------
emailjs mail send and client-side form validation
--------------------------------------------------*/

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const mail = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if (name == "") {
    alert("Please Enter Name");
  } else if (mail == "" || mail.match(!validmail)) {
    alert("Please Enter Valid Email");
  } else if (subject == "") {
    alert("Please Enter Subject");
  } else if (message == "") {
    alert("Please Enter Message");
  } else {
    let contactdetail = {
      name: name,
      email: mail,
      subject: subject,
      message: message,
    };

    emailjs.send("service_q0otodz", "template_axod17s", contactdetail).then(
      function (res) {
        alert("Email Sent Successfully");
      },
      (reason) => {
        alert("Error Occur");
      }
    );
  }
});
