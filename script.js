function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

}

function formatarDataParaBrasileiro(data) {
    var partes = data.split("-");
    return partes[2] + '/' + partes[1] + '/' + partes[0];
}

function enviarMensagem() {
    var data = document.getElementById("data").value;
    var hora = document.getElementById("hora").value;
    var servico = document.getElementById("servico").value
    var checkboxes = document.querySelectorAll('input[name="servico[]"]:checked');
    var dataFormatada = formatarDataParaBrasileiro(data);

    var plus = [];
    checkboxes.forEach(function(checkbox) {
        plus.push(checkbox.value);
    });

    // var mensagem = "Olá , quero agendar uma maquiagem com você para o dia " + dataFormatada + " , às " + hora + 
    // " para realizar uma maquiagem  " + servico + plus.join(", ");

    var mensagem = "🌟 Olá! Estou super empolgado(a) para agendar uma maquiagem com você! 🎉\n\n" +
    "🗓️ Data: " + dataFormatada + "\n" +
    "⏰ Hora: " + hora + "\n" +
    "💄 Serviço: " + servico + "\n" +
    "🌈 Extras: " + (plus.length > 0 ? plus.join(", ") : "Nenhum extra selecionado") + "\n\n" +
    "Mal posso esperar para esse momento incrível! 🥳";


    var numeroTelefone = "+5531996844778";

    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

    window.location.href = url;
}