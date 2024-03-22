// // Код для изменения статуса элементов при нажатии на кнопку

// // Получаем кнопку с id "one"
// const _btn1 = document.getElementById("btn1");
// const _btn2 = document.getElementById("btn2");
// const _btn3 = document.getElementById("btn3");
// const _btn4 = document.getElementById("btn4");
// const _btn5 = document.getElementById("btn5");
// const _btn6 = document.getElementById("btn6");
// const _btn7 = document.getElementById("btn7");
// const _btn8 = document.getElementById("btn8");
// const _btn9 = document.getElementById("btn9");
// const _btn10 = document.getElementById("btn10");
// const _btn11 = document.getElementById("btn11");
// const _btn12 = document.getElementById("btn12");
// // Получаем элементы div с id "a" и "b"
// const divA = document.getElementById("a");
// const divB = document.getElementById("b");
// const divC = document.getElementById("c");
// const divD = document.getElementById("d");
// const divE = document.getElementById("e");
// const divF = document.getElementById("f");
// const divG = document.getElementById("g");
// const divH = document.getElementById("h");
// const divK = document.getElementById("k");
// const divL = document.getElementById("l");
// const divM = document.getElementById("m");
// const divN = document.getElementById("n");

// // Добавляем обработчик события "click" на кнопку
// _btn1.addEventListener("click", function() {
   
//   // Изменяем статус элемента divA на "display: none"
//   divA.classList.add('form_none');  
//   // Изменяем статус элемента divB на "display: flex"
//   divB.classList.remove('form_none'); 
// });

// //_btn2.addEventListener("click", function() {
// //
// //divB.classList.add('form_none');  
// //divC.classList.remove('form_none'); 
// //});
// document.querySelectorAll('#radio1').forEach((element1) => {
//   element1.addEventListener('click', () => {
//       let count = document.querySelectorAll('input:checked').length;
//       if (count === 1) {
//         _btn2.addEventListener("click", function() {         
//         divB.classList.add('form_none');  
//         divC.classList.remove('form_none');
//         _btn2.classList.remove('disabled'); 
//       });      
//                }  
               
//   })
// })

// _btn3.addEventListener("click", function() {
//      divC.classList.add('form_none');  
//   divD.classList.remove('form_none'); 
// });
// _btn4.addEventListener("click", function() {
//   divD.classList.add('form_none');  
//   divE.classList.remove('form_none'); 
// });


// let button = document.querySelector('#btn5');
// button.addEventListener('click', prDef);
// document.querySelectorAll('#input40').forEach((element) => {
//     element.addEventListener('click', () => {
//         let count = document.querySelectorAll('input:checked').length;
//         if (count === 1) {
//             document.querySelector('#btn5').classList.remove('disabled');
//             button.removeEventListener('click', prDef);
//         divE.classList.add('form_none');  
//         divF.classList.remove('form_none'); 
//         }
//         if (count === 0) {
//             document.querySelector('#btn5').classList.add('disabled');
//             button.addEventListener('click', prDef);
//         }
//     })
// });
// //inut5 = document.querySelectorAll('#input40')
// //inut5.forEach((elemen5) => {
// //  elemen5.addEventListener('click', () => {
// //      let count = document.querySelectorAll('input:checked').length;
// //      if (count === 1) {
// //        _btn5.addEventListener("click", function() {
// //         
// //        divE.classList.add('form_none');  
// //        divF.classList.remove('form_none'); 
// //        })          
// //      }
// //      if (count === 0) {         
// //          
// //      }
// //  })
// //});




// _btn6.addEventListener("click", function(event) {
//     event.preventDefault();
//   divF.classList.add('form_none');  
//   divG.classList.remove('form_none'); 
// });
// _btn7.addEventListener("click", function(event) {
//     event.preventDefault();
//   divG.classList.add('form_none');  
//   divH.classList.remove('form_none'); 
// });
// _btn8.addEventListener("click", function(event) {
//     event.preventDefault();
//   divH.classList.add('form_none');  
//   divK.classList.remove('form_none'); 
// });
// _btn9.addEventListener("click", function(event) {
//     event.preventDefault();
//   divK.classList.add('form_none');  
//   divL.classList.remove('form_none'); 
// });
// _btn10.addEventListener("click", function(event) {
//     event.preventDefault();
//   divL.classList.add('form_none');  
//   divM.classList.remove('form_none'); 
// });
// _btn11.addEventListener("click", function(event) {
//     event.preventDefault();
//   divM.classList.add('form_none');  
//   divN.classList.remove('form_none'); 
// });
//------------------------------------


// массивы из 12 блоков и 12 кнопок

let blockListEl = document.querySelectorAll('.bloc_form_qiz');
console.log(blockListEl)
let btnListEl = document.querySelectorAll('._btn_');
console.log(btnListEl)




for (let i = 0; i < blockListEl.length; i++) {
  if (!blockListEl[i].querySelector('input')) {
    btnListEl[i].onclick = function() {
      blockListEl[i].classList.add('form_none');
      blockListEl[i + 1].classList.remove('form_none');
    }
  } 
  else if (blockListEl[i].querySelector('input[type="radio"]') && blockListEl[i].querySelector('input[type="text"]')){
    
    let blockRadioEl = blockListEl[i].querySelectorAll('input[type="radio"]');
    let blockTextEl = blockListEl[i].querySelector('input[type="text"]');

    blockTextEl.addEventListener('input', function () {
      if (blockRadioEl[0].checked) {
        btnListEl[i].classList.remove('disabled');
        btnListEl[i].onclick = function() {
          blockListEl[i].classList.add('form_none');
          blockListEl[i + 1].classList.remove('form_none');
          } 
        }
      else if (blockRadioEl[1].checked && blockTextEl.value != '') {
        btnListEl[i].classList.remove('disabled');
        btnListEl[i].onclick = function() {
          blockListEl[i].classList.add('form_none');
          blockListEl[i + 1].classList.remove('form_none');
          } 
        }
      else {
        btnListEl[i].classList.add('disabled');
        btnListEl[i].onclick = null;
        }
      }) 

    for (let j = 0; j < blockRadioEl.length; j++) {
      blockRadioEl[j].addEventListener('change', function () {
        if (blockRadioEl[0].checked) {
          btnListEl[i].classList.remove('disabled');
          btnListEl[i].onclick = function() {
            blockListEl[i].classList.add('form_none');
            blockListEl[i + 1].classList.remove('form_none');
            } 
          }
        else if (blockRadioEl[1].checked && blockTextEl.value != '') {
          btnListEl[i].classList.remove('disabled');
          btnListEl[i].onclick = function() {
            blockListEl[i].classList.add('form_none');
            blockListEl[i + 1].classList.remove('form_none');
            } 
          }
        else {
          btnListEl[i].classList.add('disabled');
          btnListEl[i].onclick = null;
          }
        }) 
    }
  }
  else if (blockListEl[i].querySelector('input[type="radio"]')) {
    blockListEl[i].querySelectorAll('input[type="radio"]').forEach((el) => {
     el.addEventListener('click', () => {
      btnListEl[i].classList.remove('disabled');
      btnListEl[i].onclick = function() {
        blockListEl[i].classList.add('form_none');
        blockListEl[i + 1].classList.remove('form_none');
        }        
      })
    })
  }
  else if (blockListEl[i].querySelector('input[type="checkbox"]')) {
    blockListEl[i].querySelectorAll('input').forEach((el) => {
      el.addEventListener('click', () => {
      let count = blockListEl[i].querySelectorAll('input:checked').length;
      if (count === 1) {
        btnListEl[i].classList.remove('disabled');
        btnListEl[i].onclick = function() {
          blockListEl[i].classList.add('form_none');
          blockListEl[i + 1].classList.remove('form_none');
        }         
        }
      if (count === 0) {         
        btnListEl[i].classList.add('disabled');
        btnListEl[i].onclick = null;
        }
      })
    })
  }
  else {
    let inputsListEl = blockListEl[i].querySelectorAll('input');

    console.log(inputsListEl)
    inputsListEl.forEach(function(elem) {
      elem.addEventListener('input', checkInputs)
    })

    checkInputs()

    function checkInputs() {
      let empty = false;
      inputsListEl.forEach(function(el) {
        if (el.value.trim() == '') {
          empty = true
        }
      })

      if (empty == false) {
        btnListEl[i].classList.remove('disabled');
        btnListEl[i].onclick = function() {
          blockListEl[i].classList.add('form_none');
          blockListEl[i + 1].classList.remove('form_none');
        }
      }
      else {
        btnListEl[i].classList.add('disabled');
        btnListEl[i].onclick = null;
        }
    }
}
}