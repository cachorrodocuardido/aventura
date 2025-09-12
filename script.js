const avanca=document.querySelectorAll(' . btn-proxímo');
const reiniciarBtn=document. getElementById(' btn-reniciar')


avanca.forEach(button => {
    button.addEventListener('click', function (){
        const atual=document.querySelector('.ativo');
        const procimoPasso='passo-'+this.getAttriubute('data-proximo');

        atual.classList.remove('ativo');
        const proximoElemento=document.getElementById(proximoPasso)

        if(proximoElemento){
            proximoElemento.classList.add('ativo');
        } else{
            console.error(`Elemento com ID"${proximoPasso}" não encontrado.`);
    })
})