const navbar = document.querySelector(".header .wrapper");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone validation
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");
  if (!/^\d{10}$/.test(phone)) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Pincode validation
  const pincode = document.getElementById("pincode").value.trim();
  const pincodeError = document.getElementById("pincodeError");
  if (!/^\d{6}$/.test(pincode)) {
    pincodeError.textContent = "Pincode must be 6 digits.";
    isValid = false;
  } else {
    pincodeError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // You can submit the form using AJAX or proceed
    // this.submit(); <-- if you want to actually submit
  }
});
//

let swiper = new Swiper(".myYoutubeSwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: { slidesPerView: 6 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
  },
});
