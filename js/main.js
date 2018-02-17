import * as m from 'morning';
import * as a from 'afternoon';
import * as n from 'night';

const $turnOffButton = document.getElementById('turnOff')
const $delayButton = document.getElementById('delay')
const $agenda = document.getElementById('agenda')


$turnOffButton.addEventListener('click', ready)


$delayButton.addEventListener('click', ready2)

let turnOff = ()=>{
  $turnOffButton.removeEventListener('click', turnOff)
    ducha('Me estoy bañando')
    .catch((message)=>{
      return new Promise((resolve, reject) =>{
        $agenda.textContent = 'Estoy buscando el otro uniforme...'
        setTimeout(function () {
          $agenda.textContent = 'Lo encontre!!'
          resolve('Voy a desayunar')
        }, VESTIRSE);
      })
    })
    .then(wear)
    .then(breakfast)
    .then(school)
    .catch(lunch)
    .then(study)
    .then(excercise)
    // .then(dinner)
    // .then(sleep)
  }

  export let delay = ()=>{
      $delayButton.removeEventListener('click', delay)
      cincomas('5 minutos más ZZZ...',2000)
      .then(ducha)
      .catch((message)=>{
        return new Promise((resolve, reject) =>{
          $agenda.textContent = 'Estoy buscando el otro uniforme...'
          setTimeout(function () {
            $agenda.textContent = 'Lo encontre!!'
            resolve('Voy a desayunar')
          }, VESTIRSE);
        })
      })
      .then(vestirse)
      .then(desayunar)
      .then(escuela)
      .catch(almorzar)
      .then(estudiar)
      .then(ejercicio)
      // .then(cena)
      // .then(dormir)
      })
