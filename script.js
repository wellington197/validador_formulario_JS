//Parar o evento de submit
let b7Validator={
    handleSubmit:(event)=>{
        event.preventDefault();

        //fazer a validaçãon de cada campo.
        let send=true;

        let inputs=form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++){
            let input=inputs[i];

            let check= b7Validator.checkInput(input);
                if(check!==true){
                    send=false;
                    //Exibir o erro
                }
        }

        if(send){
            form.submit();
        }
    }
}



//pegar a class que a gente precisa para validar
let form=document.querySelector('.b7validator');

//eftuar monitoramento e bloqueio do botão para não enviar form antes de validar
form.addEventListener('submit',b7Validator.handleSubmit);

