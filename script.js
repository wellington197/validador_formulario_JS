//Parar o evento de submit
let b7Validator=
{
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
                    console.log(check);
 
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
    
}


};



//pegar a class que a gente precisa para validar
let form=document.querySelector('.b7validator');

//eftuar monitoramento e bloqueio do botão para não enviar form antes de validar
form.addEventListener('submit',b7Validator.handleSubmit);

