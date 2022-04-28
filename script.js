//Parar o evento de submit
let b7Validator=
{
handleSubmit:(event)=>
{
    event.preventDefault();

            //fazer a validaçãon de cada campo.
            let send=true;

            let inputs=form.querySelectorAll('input');

            //limpar os erros
            b7Validator.clearErrors();

            for(let i=0;i<inputs.length;i++){
                let input=inputs[i];

                let check= b7Validator.checkInput(input);
                    if(check!==true){
                        send=false;
                        b7Validator.showError(input,check);
                    }
            }

            if(send){
                form.submit();
            }
    },



    checkInput: (input)=>{
            let rules=input.getAttribute('data-rules');

            if(rules!==null){
                rules=rules.split('|');
                for(let k in rules){
                    let rDetails=rules[k].split('=');

                    switch(rDetails[0]){

                        case 'required':
                            if(input.value==''){
                                return 'Campo não pode ser vazio.';
                            }

                        break;

                        case 'min':

                        break;
                    }
                }
            }
            return true;

    },




    showError:(input, error)=>{
            //estilizando a borda do campo input com erro
            input.style.borderColor='#ff0000';

            //criar elemento para exibir na tela
            let errorElement=document.createElement('div');
            errorElement.classList.add('error');
            errorElement.innerHTML=error;

            //inserindo resultado abaixo do campo
            input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },



    //Função de limpar os erros 
    clearErrors:()=>{

        //remover erros da borda no form
        let inputs=form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++){
            inputs[i].style='';
        }

            
        //selecionar erros
        let errorElements=document.querySelectorAll('.error');

        //efetuar loop e remover cada um
        for(let i=0;i<errorElements.length;i++){
            errorElements[i].remove();
        }
    }

};





//pegar a class que a gente precisa para validar
let form=document.querySelector('.b7validator');

//eftuar monitoramento e bloqueio do botão para não enviar form antes de validar
form.addEventListener('submit',b7Validator.handleSubmit);

