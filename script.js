function enviarPedido() {
    const pedido = document.getElementById("pedido").value;
    const numeroWhatsApp = "554187907832";
    const mensagem = "Olá, aqui está o pedido:\n\n${pedido}";

    // URL do WhatsApp
    const url = "https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}";

    // Abre a URL em uma nova aba
    window.open(url, "_blank");
}
