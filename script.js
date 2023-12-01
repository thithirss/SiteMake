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

    // Verificar se pelo menos um serviço foi selecionado
    // if (plus.length === 0) {
    //     alert("Por favor, selecione pelo menos um serviço.");
    //     return;
    // }


    var mensagem = "Olá, quero agendar uma maquiagem com você para o dia " + dataFormatada + " às " + hora + 
    " para realizar uma maquiagem de " + servico + plus.join(", ");

    // Substitua "seu_numero" pelo número de telefone para o qual você deseja enviar a mensagem
    var numeroTelefone = "+5531996844778";

    // Criar a URL do WhatsApp com a mensagem
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

    // Redirecionar para a URL do WhatsApp
    window.location.href = url;
}