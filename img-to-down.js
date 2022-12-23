function baixar() {
    var nome = document.getElementById("nome").value;
    domtoimage.toPng(document.getElementById('assinatura'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'Assinatura - '+nome+'.png';
            link.href = dataUrl;
            link.click();
            document.location.reload(true)
        });
}


function down() {

    var nome = document.getElementById("nome").value;
    var cargo = document.getElementById("cargo").value;
    var setor = document.getElementById("setor").value;
    var fone = document.getElementById("fone").value;

    if (nome === "") {
        alert("Insira seu nome!");
    } else if (cargo === "") {
        alert("Insira seu cargo / função!");
    } else if (setor === "") {
        alert("Insira seu setor / núcleo!");
    } else if (fone === "") {
        if (confirm("Deseja continuar sem inserir seu telefone?") == true) {
            return baixar();
        }
    } else {
        return baixar();
    }

}