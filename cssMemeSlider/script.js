
console.log("djjsfs")
// element1 = document.querySelector('.e1');
let element1 =document.getElementById("eb1");
 let element2 =document.getElementById("eb2");
 let element3 =document.getElementById("eb3");
 let element4 =document.getElementById("eb4");
//  let slides = document.querySelectorAll('.imgE');
element1.addEventListener('click', () => {
   
    document.querySelector('.imgE1').classList.remove('visible');
    document.querySelector('.imgE2').classList.remove('visible');
    document.querySelector('.imgE3').classList.remove('visible');
    document.querySelector('.imgE4').classList.remove('visible');
    document.querySelector('.imgE1').classList.add('visible');
        document.getElementById('text').textContent = '';
    document.getElementById('text').textContent = 'я первый!'

  });

element2.addEventListener('click', () => {
    // document.getElementById('text').classList.add('bgr');

    // document.querySelector('.imgE1').classList.remove('visible');
    // document.querySelector('.imgE1').classList.add('invisible');
    // document.querySelector('.imgE2').classList.add('visible');

    document.querySelector('.imgE1').classList.remove('visible');
    document.querySelector('.imgE2').classList.remove('visible');
    document.querySelector('.imgE3').classList.remove('visible');
    document.querySelector('.imgE4').classList.remove('visible');
    document.querySelector('.imgE1').classList.add('invisible');
    document.querySelector('.imgE2').classList.add('visible');
    document.getElementById('text').textContent = '';
    document.getElementById('text').textContent = 'я второй!'

  });

  element3.addEventListener('click', () => {
   
    document.querySelector('.imgE1').classList.remove('visible');
    document.querySelector('.imgE2').classList.remove('visible');
    document.querySelector('.imgE3').classList.remove('visible');
    document.querySelector('.imgE4').classList.remove('visible');
    document.querySelector('.imgE1').classList.add('invisible');
    document.querySelector('.imgE3').classList.add('visible');
        document.getElementById('text').textContent = '';
    document.getElementById('text').textContent = 'я третий!'
  });

  element4.addEventListener('click', () => {
   
    document.querySelector('.imgE1').classList.remove('visible');
    document.querySelector('.imgE2').classList.remove('visible');
    document.querySelector('.imgE3').classList.remove('visible');
    document.querySelector('.imgE4').classList.remove('visible');
    document.querySelector('.imgE1').classList.add('invisible');
    document.querySelector('.imgE4').classList.add('visible');
        document.getElementById('text').textContent = '';
    document.getElementById('text').textContent = 'я четвертый'

  });