const fetch=require('node-fetch')

function validate(arrayAllLinks){
    arrayAllLinks.map(
        link=>{
            fetch(link)
                .then(resultado=>
                      console.log(link,resultado.status)
                      )
                .catch(e=>
                    console.log(link,404))
        }
    )
}

module.exports={
    validate
}