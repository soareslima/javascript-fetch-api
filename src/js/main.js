const cep = document.querySelector("#cep")


const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+ campo)){
            document.querySelector("#"+ campo).value = result[campo];
        }

    }
}

//evento de capturar de cep quando o usuario digitar o cep e tirar o mouse 
cep.addEventListener("blur",(e)=>{
    let  search = cep.value.replace("-",""); // aqui tiramos o traço do cep

    const options = {
        method : 'GET',
        mode : 'cors',
        cache : 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`,options)//aqui passamos o cep dinamicamente.
    .then(Response  =>{Response.json()
         .then(data => showData(data))    
        })
    .catch(e => console.log('Deu Erro: '+ e,message))
});