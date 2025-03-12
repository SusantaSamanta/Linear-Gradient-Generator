console.log('working')


/// global variables 
//let leftColor = p;

const changeColorFun = (event) =>{
  if(event.target.id == 'firstColorButton'){
   console.log('firsl click : ',randomColorGenerate());
  }
  if(event.target.id == 'secondColorButton'){
   console.log('second click : ',randomColorGenerate());
  }
}



let button = document.querySelectorAll('#firstColorButton, #secondColorButton');

button.forEach(i =>{
  i.addEventListener('click', changeColorFun);
})


const randomColorGenerate = () => {
  let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','b','e','f'], n = 6, rand = '#';
  for(i=1;i<=n;i++){
    rand += arr[Math.floor(Math.random() * 16)];
  }
  return rand;
}
document.getElementById('orientArrowContainer').addEventListener('click', (event) => {
  if(event.target.id == "toBottomRight"){
    console.log('toBottomRight')
    makeDefaultColor();
    toBottomRight.style.color = 'white'; 
  }
  else if(event.target.id == "toRight"){
    console.log('toRight')
    makeDefaultColor();
    toRight.style.color = 'white'; 
  }
  else if(event.target.id == "toTopRight"){
    console.log('toTopRight')
    makeDefaultColor();
    toTopRight.style.color = 'white'; 
  }
  else if(event.target.id == "toTop"){
    console.log('toTop')
    makeDefaultColor();
    toTop.style.color = 'white'; 
  }
  else if(event.target.id == "toTopLeft"){
    console.log('toTopLeft')
    makeDefaultColor();
    toTopLeft.style.color = 'white'; 
  }
  else if(event.target.id == "toLeft"){
    console.log('toLeft')
    makeDefaultColor();
    toLeft.style.color = 'white'; 
  }
  else if(event.target.id == "toLeftBottom"){
    console.log('toLeftBottom')
    makeDefaultColor();
    toLeftBottom.style.color = 'white'; 
  }
  else if(event.target.id == "toBottom"){
    console.log('toBottom')
    makeDefaultColor();
    toBottom.style.color = 'white'; 
  }
});



/*let idArr = ['#toBottomRight', '#toRight', '#toTopRight', '#toTop', '#toTopLeft', '#toLeft', '#toLeftBottom', '#toBottom'];*/

let idArr = ['toBottomRight', 'toRight', 'toTopRight', 'toTop', 'toTopLeft', 'toLeft', 'toLeftBottom', 'toBottom'];
const makeDefaultColor = () =>{
  idArr.forEach( i =>{
    document.getElementById(i).style.color = '#ffffff5c'
  })
}
//makeDefaultColor();

