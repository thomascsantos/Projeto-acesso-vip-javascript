verificar = () => {
    let convidado = document.getElementById("convidado").value
    let convidou = document.getElementById("convidou").value
    convidadoThomas = ["thomas", "mario", "rafael", "maria"]
    if (convidadoThomas.includes(convidou)) {
        document.getElementById("entrar").innerHTML = "sua entrada esta liberada sra(a) " + convidado
    } else {
        document.getElementById("entrar").innerHTML = "seu convite foi recusado sr(a)" + convidado
    }
}