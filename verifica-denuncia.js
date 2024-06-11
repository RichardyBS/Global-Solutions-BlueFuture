function verificaDenuncia()
{
    const idDigitado = document.querySelector('#id-denuncia').value;
    const denunciasArmazenadas = JSON.parse(localStorage.getItem('denuncia-realizada'));
    const formulario = document.querySelector("#PesquisaDN");
    const infosDenuncia = document.querySelector("#infos-denuncia");
    const localDenuncia = document.querySelector("#local-denuncia");
    const numeroDenuncia = document.querySelector("#numero-denuncia");
    const descricaoDenuncia = document.querySelector("#descricao-denuncia");
    for (const denuncia of denunciasArmazenadas) {
        if (denuncia.id === parseInt(idDigitado)) 
        {
            formulario.style.display = "none";
            infosDenuncia.style.display = "block";
            localDenuncia.innerText = "Local da denúncia: "+ denuncia.endereco;
            numeroDenuncia.innerText = "Número: " + denuncia.numero;
            descricaoDenuncia.innerText = "Descrição: " + denuncia.infos;
            return false;
        }
    }

    alert("ID NÃO ENCONTRADO")
}