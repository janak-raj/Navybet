const wheel = document.querySelector("#wheel")
const iconGroup = document.querySelector(".icon-group");
const iconSingle = document.querySelectorAll(".icon-group>li");
const btn_presents = document.querySelector("#btn-presents");
const btn_envelopes = document.querySelector("#btn-envelopes");
const btn_reset = document.querySelector("#btn-reset");


let data = [];
let game = null;
const types = {
  presents:{
   playTimes:10,
    data:[
  {
    "label": "Flight",
    "icon": "fas fa-fighter-jet",
    "num": 1
  },
  {
    "label": "Coffee",
    "icon": "fas fa-mug-hot",
    "num": 2
  },
  {
    "label": "Anything",
    "icon": "fas fa-star",
    "num": 1
  },
  {
    "label": "Sick Leave",
    "icon": "fas fa-hand-holding-medical",
    "num": 1
  },
  {
    "label": "Movie",
    "icon": "fas fa-film",
    "num": 2
  },
  {
    "label": "Wifi",
    "icon": "fas fa-wifi",
    "num": 1
  },
  {
    "label": "Break",
    "icon": "far fa-clock",
    "num": 1
  },
  {
    "label": "Bonus",
    "icon": "fas fa-coins",
    "num": 1
  }
]

  },
  envelopes:{
    playTimes:25,
    data:[
  {
    "label":"1",
    "num": 1
  },
  {
    "label":"2",
    "num": 1
  },
  {
    "label":"3",
    "num": 1
  },
  {
    "label":"4",
    "num": 1
  },
  {
    "label":"5",
    "num": 2
  },
  {
    "label":"6",
    "num": 1
  },
  {
    "label":"7",
    "num": 1
  },
  {
    "label":"8",
    "num": 1
  },
  {
    "label":"9",
    "num": 2
  },
  {
    "label":"10",
    "num": 1
  },
  {
    "label":"11",
    "num": 2
  },
  {
    "label":"12",
    "num": 1
  },
  {
    "label":"13",
    "num": 1
  },
  {
    "label":"14",
    "num": 1
  },
  {
    "label":"15",
    "num": 1
  },
  {
    "label":"16",
    "num": 1
  },
  {
    "label":"17",
    "num": 1
  },
  {
    "label":"18",
    "num": 1
  },
  {
    "label":"19",
    "num": 1
  },
  {
    "label":"20",
    "num": 3
  }
]
  }
};
const colors = {
  blue: "#343BAA",
  blueDark:"#1F1172",
  pinkLight:" #F0BEFF",
  pink:"#FF00BA"
};

// init canvas setting
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const radius = 270; // wheel radius
const PI2 = Math.PI*2;
canvas.width = radius * 2;
canvas.height = radius * 2;

// draw sectors
ctx.fillPie = function(x,y,r,start,qty){
  let angle = PI2 / qty;
  this.beginPath()
  ctx.lineTo(radius, radius)
  this.arc(x,y,r,start*angle,(start+1)*angle)
  ctx.lineTo(radius,radius)
  this.fill()
  this.closePath()
};

function insertContent(data,qty,type){
  let rotate = 360 / qty
  iconGroup.innerHTML = ''
    data.forEach((item,index)=>{
      let html = ''
      if(type == 'presents'){
        html = `
        <i class="icon ${item.icon}"></i>
        <h5>${item.label}</h5>
        <span class="present-qty">${item.num}</span>
        `
      }else{
        html = `
        <h5>${item.label}</h5>
        <span class="present-qty">${item.num}</span>`
      }
      let newContent = document.createElement("li")
      newContent.innerHTML = html
      iconGroup.append(newContent)
      newContent.style.transform = `rotate(${index*rotate}deg)`
    })
};

function drawButton(){
  ctx.beginPath();
  ctx.fillStyle = colors.blueDark;
  ctx.arc(radius,radius,55,0,PI2);
  ctx.closePath();
  ctx.fill();
}

function drawSectors(qty){
  for(let i = 0 ; i<=qty ; i+=2){
    ctx.fillStyle = colors.pinkLight;
    ctx.fillPie(radius,radius,radius,i,qty);
  }
  for(let i = 1 ; i<=qty ; i+=2){
    ctx.fillStyle = colors.blue;
    ctx.fillPie(radius,radius,radius,i,qty);
  }
}

function draw(data,qty,type){
  drawSectors(qty)
    // draw press button
    drawButton();
    insertContent(data,qty,type);
};
// 


function init(btn){
  let type = btn.value
  draw(types[type].data, types[type].data.length, type)
};
init(btn_presents);


btn_presents.addEventListener("click",()=>{

  init(btn_presents);
  wheel.classList.remove("new");
  iconGroup.classList.remove("new");
});

btn_envelopes.addEventListener('click',()=>{
  init(btn_envelopes);
  wheel.classList.add("new");
  iconGroup.classList.add("new");
})
