console.log('working')


/// global variables 
let firstColor = '#5B06D2',secondColor = '#34BC59', orient = 'to bottom right';

const changeColorFun = (event) =>{
  if(event.target.id == 'firstColorButton'){
    
    firstColor = randomColorGenerate();
    firstColorButton.style.background = firstColor;
    firstColorButton.innerText = firstColor;
    document.body.style.backgroundImage = `linear-gradient(${orient}, ${firstColor}, ${secondColor})`;
    colorCobeDetail.innerText = `background-image: linear-gradient(${orient}, ${firstColor}, ${secondColor});`;
    
    //console.log('firsl click : ',firstColor);
  }
  
  
  if(event.target.id == 'secondColorButton'){
    secondColor = randomColorGenerate();
    secondColorButton.style.background = secondColor;
    secondColorButton.innerText = secondColor;
    document.body.style.backgroundImage = `linear-gradient(${orient}, ${firstColor}, ${secondColor})`;
    colorCobeDetail.innerText = `background-image: linear-gradient(${orient}, ${firstColor}, ${secondColor});`;
   //console.log('second click : ',randomColorGenerate());
  }
}

 
let button = document.querySelectorAll('#firstColorButton, #secondColorButton');
button.forEach(i =>{
  i.addEventListener('click', changeColorFun);
});

// generate 0 - 15 index for 6 times and add corresponding arr elements in rand variable.
const randomColorGenerate = () => {
  let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'], n = 6, rand = '#';
  for(i=1;i<=n;i++){
    rand += arr[Math.floor(Math.random() * 16)];
  }
  return rand;
}


document.getElementById('orientArrowContainer').addEventListener('click', (event) => {
  if(event.target.id == "toBottomRight"){
    //console.log('toBottomRight')
    makeDefaultColor();
    toBottomRight.style.color = 'white';
    orientationChange('to bottom right');
  }
  else if(event.target.id == "toRight"){
    //console.log('toRight')
    makeDefaultColor();
    toRight.style.color = 'white'; 
    orientationChange('to right');
  }
  else if(event.target.id == "toTopRight"){
    //console.log('toTopRight')
    makeDefaultColor();
    toTopRight.style.color = 'white'; 
    orientationChange('to top right');
  }
  else if(event.target.id == "toTop"){
   // console.log('toTop')
    makeDefaultColor();
    toTop.style.color = 'white'; 
    orientationChange('to top');
  }
  else if(event.target.id == "toTopLeft"){
    //console.log('toTopLeft')
    makeDefaultColor();
    toTopLeft.style.color = 'white'; 
    orientationChange('to top left');
  }
  else if(event.target.id == "toLeft"){
    //console.log('toLeft')
    makeDefaultColor();
    toLeft.style.color = 'white'; 
    orientationChange('to left');
  }
  else if(event.target.id == "toLeftBottom"){
    //console.log('toLeftBottom')
    makeDefaultColor();
    toLeftBottom.style.color = 'white'; 
    orientationChange('to left bottom');
  }
  else if(event.target.id == "toBottom"){
    //console.log('toBottom')
    makeDefaultColor();
    toBottom.style.color = 'white'; 
    orientationChange('to bottom');
  }
});



/*let idArr = ['#toBottomRight', '#toRight', '#toTopRight', '#toTop', '#toTopLeft', '#toLeft', '#toLeftBottom', '#toBottom'];*/



// make all cell color down except current click arrow.
let idArr = ['toBottomRight', 'toRight', 'toTopRight', 'toTop', 'toTopLeft', 'toLeft', 'toLeftBottom', 'toBottom'];
const makeDefaultColor = () =>{
  idArr.forEach( i =>{
    document.getElementById(i).style.color = '#ffffff5c'
  });
}


const orientationChange = (a) =>{
  orient = a;
  document.body.style.backgroundImage = `linear-gradient(${orient}, ${firstColor}, ${secondColor})`;
  colorCobeDetail.innerText = `background-image: linear-gradient(${orient}, ${firstColor}, ${secondColor});`;
}
