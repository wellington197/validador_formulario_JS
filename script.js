//Parar o evento de submit
let b7Validator={
    handleSubmit:(event)=>{
        event.preventDefault();

        let send=true;
    }
}



//pegar a class que a gente precisa para validar
let form=document.querySelector('.b7validator');

//eftuar monitoramento e bloqueio do botão para não enviar form antes de validar
form.addEventListener('submit',b7Validator.handleSubmit);

