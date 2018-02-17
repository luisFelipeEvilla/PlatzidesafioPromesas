import {visible, invisible} from 'functions.js';

export function cincomas(message,timer){
  $agenda.textContent = message
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
        resolve('RING RING RING!!!')
      },timer)
    })
}

export function alarm(message){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        $agenda.textContent = message
        resolve('MIERDA VOY A LLEGAR TARDE!!')
      },2000)
    })
}

export function tarde(message){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Me estoy bañando')
      },3000)
    })
}

export function ducha(message){
  $agenda.textContent = message
  $turnOffButton.removeEventListener('click', turnOff)
  $delayButton.removeEventListener('click', delay)


  invisible($delayButton)
  invisible($turnOffButton)

  return new Promise((resolve,reject) => {
    let aux;
    setTimeout(()=>{
      do {
        aux = prompt('¿Está el uniforme limpio? \n SI/NO').toLowerCase()
      } while (aux != 'si' && aux != 'no' );
      if(aux == 'si'){
        resolve('Me estoy cambiando')
      }
      else if (aux == 'no') {
        reject('el uniforme está sucio')
      }
      console.log(aux)
    },DUCHA)

  })
}

export function vestirse(message){
  return new Promise((resolve, reject) =>{
    $agenda.textContent = message
    setTimeout(function () {
      resolve('Voy a desayunar')
    }, VESTIRSE);
  })
}

export function desayunar(message){
  $agenda.textContent = message
  return new Promise((resolve,reject)=>{
  setTimeout(()=> {
    $agenda.textContent = 'NO HAY COMIDA!!!'
    $turnOffButton.textContent = 'tengo dinero'
    $delayButton.textContent = 'no tengo ni un solo centavo'
    visible($delayButton)
    visible($turnOffButton)

    listener(fritanga,hambre)

    }, DESAYUNAR);
 })
}

export function escuela(message){
  $agenda.textContent = message

  return new Promise((resolve,reject)=>{
    setTimeout(function () {
      reject('llegue a casa, aún no está listo el almuerzo')
    },ESCUELA);
  })
}

export function listener(func,func1){
  return new Promise((resolve,reject)=>{
  $turnOffButton.addEventListener('click',func)
  $delayButton.addEventListener('click',func1)
  resolve('voy a la escuela ZZZ....')
  })
}

export function fritanga(){
  return new Promise((resolve, reject)=> {

      $agenda.textContent = "VAMOS A LA FRITANGA!!"
      setTimeout(function () {
        resolve('voy a la escuela ZZZ....')

    }, DESAYUNAR);
  });
}

export function hambre(){
  return new Promise((resolve, reject)=> {

      $agenda.textContent = "hoy no como Alv:"
      setTimeout(function () {
        resolve('voy a la escuela ZZZ....')

    }, DESAYUNAR);
  });
}

const DUCHA = 2000
const VESTIRSE = 1500
const DESAYUNAR = 3000
const ESCUELA = 6000
