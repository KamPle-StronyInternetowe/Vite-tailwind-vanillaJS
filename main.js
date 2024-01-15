import "./style.css";
const navBar = document.querySelector(".navbar");
const burgerBtn = document.querySelector(".burger-icon");
const navItems = document.querySelector(".nav-items");
const navItem = document.querySelectorAll(".nav-item");
const lineOne = document.querySelector("[data-number='1']");
const lineTwo = document.querySelector("[data-number='2']");
const lineThree = document.querySelector("[data-number='3']");
const texts = document.querySelectorAll(".text");
const img = document.querySelector(".photo");
const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-btn");

const showCookie = () => {
  const cookieAccepted = localStorage.getItem("cookie");
  if (cookieAccepted) {
    cookieBox.classList.add("hidden");
  }
};

const handleCookieBox = () => {
  localStorage.setItem("cookie", "true");
  cookieBox.classList.add("hidden");
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("opacity-100", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

texts.forEach((text) => {
  observer.observe(text);
});

observer.observe(img);

const toggleMobileMenu = () => {
  navItems.classList.toggle("translate-x-[100%]");
  lineOne.classList.toggle("active-one");
  lineTwo.classList.toggle("active-two");
  lineThree.classList.toggle("active-three");
  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.classList.add("translate-x-[100%]");
      lineOne.classList.remove("active-one");
      lineTwo.classList.remove("active-two");
      lineThree.classList.remove("active-three");
    });
  });
};

burgerBtn.addEventListener("click", toggleMobileMenu);
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("bg-[rgba(0,0,0,.5)]");
  } else {
    navBar.classList.remove("bg-[rgba(0,0,0,.5)]");
  }
});

cookieBtn.addEventListener("click", handleCookieBox);
showCookie();
