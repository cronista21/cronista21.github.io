function leiamais(){
    var pontos=document.getElementById("pontos");
    var maistexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="incline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="leia mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="leia menos";
    }
}