function openWhatsApp() {
  const whatsappNumber = "553499999999"; // Substitua pelo número de WhatsApp
  const message = "Olá, gostaria de mais informações sobre seus serviços!";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}
