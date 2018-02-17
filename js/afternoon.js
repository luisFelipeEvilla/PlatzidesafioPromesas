export function almorzar(message){
  $agenda.textContent = message
  return new Promise((resolve,reject)=>{
    setTimeout(function () {
      $agenda.textContent = 'Estoy esperando...(*cara sad*)'
      setTimeout(()=>{
        $agenda.textContent = 'Estoy almorzando!! (*cara de felicidad*)'
        resolve('Ahora a estudiar se ha dicho')
      },ALMORZAR)
    }, 2000);
  })
}

export function estudiar(message){
  $agenda.textContent = message
  return new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve('¿ayer hice ejercicio?')
    }, ESTUDIAR);
  })
}

export function ejercicio(message){
  let aux;
 do {
   aux1 = prompt('¿ayer hice ejercicio? \n SI/NO').toLowerCase()
 } while (aux1 != 'si' && aux1 != 'no');
 return new Promise((resolve,reject)=>{
    (aux1 == 'no') ? agenda.textContent = 'la vida fit' : agenda.textContent = 'sera mañana';
 })
}

const ALMORZAR = 2000
const ESTUDIAR = 5000
const EJERCICIO = 2500
