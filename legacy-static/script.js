const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const estimateForm = document.querySelector("#estimate-form");
const formStatus = document.querySelector("#form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

estimateForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(estimateForm);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const address = String(data.get("address") || "").trim();
  const service = String(data.get("service") || "").trim();
  const date = String(data.get("date") || "").trim();
  const message = String(data.get("message") || "").trim();

  const textMessage = [
    "Hi Got Junk! I would like a free estimate.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    address ? `Address: ${address}` : "",
    service ? `Service: ${service}` : "",
    date ? `Preferred date: ${date}` : "",
    message ? `Details: ${message}` : ""
  ]
    .filter(Boolean)
    .join("\n");

  formStatus.textContent =
    "Opening your text-message app. Add your photos there before sending.";

  window.location.href =
    "sms:+15593814910?body=" + encodeURIComponent(textMessage);
});
