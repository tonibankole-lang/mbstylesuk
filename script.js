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
    function goToPayPal(event) {
  event.preventDefault();

  const style = document.getElementById("style").value;

  if (!style) {
    alert("Please select a hairstyle first.");
    return;
  }
function payDeposit(style) {
  const paypalLink = "https://www.paypal.me/MBstylesUK/20"; // replace with your PayPal.Me username
  const note = encodeURIComponent("Style booked: " + style);
  window.location.href = paypalLink + "?note=" + note;
}

    }
  });
});
