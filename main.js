/* WATSON ASSISTENT */
window.watsonAssistantChatOptions = {
    integrationID: "136cffc4-6ba3-4096-a258-b642ba93a8ac", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "8d610c74-bc8b-49ef-891f-cf77bf23cc48", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
    };
setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});


/* Formulário */

function denunciar() {
    const logradouro = document.querySelector("#logradouro").value;
    const number = document.querySelector("#numero-residencia").value;
    const descricao = document.querySelector("#descricao").value;
    const valorAleatorio = Math.floor(Math.random() * 100);
    let denunciasArmazenadas = [];

    const dados = { endereco: logradouro, numero: number, infos: descricao, id: valorAleatorio };
    denunciasArmazenadas.push(dados);
    alert("Denúncia armazenada com sucesso!\n ANOTE O SEU ID ABAIXO\n ID DENÚNCIA: "+ valorAleatorio);
    localStorage.setItem("denuncia-realizada", JSON.stringify(denunciasArmazenadas));
    return true;
}

/*document.getElementById("mensagem").innerHTML = "Dados salvos com sucesso!";
  alert("Dados salvos com sucesso!");*/