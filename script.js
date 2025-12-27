document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
      section.style.transition = "0.8s ease";
    }
const PAYPAL_LINK = "https://www.paypal.me/YOURPAYPAL/20";

document.querySelectorAll("[data-style]").forEach(item => {
  item.addEventListener("click", () => {
    const style = item.getAttribute("data-style");
    window.location.href =
      PAYPAL_LINK + "?note=" + encodeURIComponent("Style booked: " + style);
  });
});
  });
});
