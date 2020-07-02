const fetch=require('node-fetch')

//1) crear 2 arrreglos uno para los buenos y otro para los malos
//2)validar el status con if y con else y en cada caso debes agregar el resultado al arreglo correspondiente
//3) al finalizar imprimir el resultado

let newlinks=[
    'https://mercadolibre.com',
    'https://google.com',
    'https://netflix.com',
    'https://yavamonoslaura.com'
]

function stats(arrayAllLinks){
    
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

//ejemplo de invocacion despues quitar, para ejecutar es con: node .\utils\stats.js
stats(newlinks)

module.exports={
    stats
}