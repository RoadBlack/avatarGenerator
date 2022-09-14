
//list of usable variables
let chooseEyes = document.getElementById("chooseEyes");
let chooseHair = document.getElementById("chooseHair");
let chooseEars = document.getElementById("chooseEars");
let chooseMouth = document.getElementById("chooseMouth");
let chooseLeg = document.getElementById("chooseLeg");
let chooseNeck = document.getElementById("chooseNeck");
document.getElementById("neck").src = "/alpaca/neck/default.png";
//hair
let curls = "curls.png";
let bang= "bang.png";
let defaultHair ="default.png";
let elegant = "elegant.png";
let fancy = "fancy.png";
let quiff = "quiff.png";
let short = "short.png";
//accesories
let earings = "earings.png";
let flower = "flower.png";
let glasses = "glasses.png"
let headphone = "headphone.png"
//ears
let defaultEar = "default.png";
let tiltBackward = "tilt-backward.png";
let tiltForward = "tilt-forward.png";
//eyes
let angry = "angry.png";
let defaultEyes = "default.png";
let naughty = "naughty.png";
let panda = "panda.png";
let smart = "smart.png";
let star = "star.png";
//leg
let bubbleTea = "bubble-tea.png";
let cookie = "cookie.png";
let defaultLeg = "default.png";
let gameConsole = "game-console.png";
let tiltBackwardLeg = "tilt-backward.png";
let tiltForwardLeg = "tilt-forward.png";
//mouth 
let astonished = "astonished.png";
let defaultMouth = "default.png";
let eating = "eating.png";
let laugh = "laugh.png";
let tongue = "tongue.png";
//neck
let bendBackward = "bend-backward.png";
let bendForward = "bend-forward.png";
let defaultNeck = "default.png";
let thick = "thick.png";

// lists 
const listOfHair = [curls, bang , defaultHair , elegant , fancy ,quiff , short];
const listOfAccesories = [earings , flower , glasses , headphone];
const listOfEars = [defaultEar , tiltBackward , tiltForward];
const listOfEyes = [angry , defaultEyes , naughty , panda ,smart ,star];
const listOfLeg = [bubbleTea , cookie , defaultLeg,
gameConsole , tiltBackwardLeg , tiltForwardLeg];
const listOfMouth = [astonished , defaultMouth , eating ,
laugh , tongue];
const listOfNeck = [bendBackward , bendForward , defaultNeck ,thick];
//
let chooseAccesories = document.getElementById("chooseAccesories");
let chooseBackground = document.getElementById("chooseBackground");
const listOfOptions = [chooseEars  , chooseHair , 
   chooseEyes , chooseMouth , chooseLeg ,
    chooseNeck , chooseAccesories , chooseBackground];
// stworzyć funkcje do której przekazujemy argument jaki przycisk został wciśnięty
//APP logic
function chooseFunction(option) {
    switch (option) {
         case "hair":
            document.getElementById('hairBtn').classList.add("active");
            chooseHair.style.display = "block";
            hideOtherOpttions(chooseHair);
            break;   
         case "eyes":
            hideOtherOpttions(chooseEyes);
            chooseEyes.style.display = "block";
            break;
         case "ears":
            hideOtherOpttions(chooseEars);
            chooseEars.style.display = "block";
            break;   
         case "mouth":
            hideOtherOpttions(chooseMouth);
           chooseMouth.style.display = "block";
            break; 
         case "leg":
            hideOtherOpttions(chooseLeg);
            chooseLeg.style.display = "block";
            break; 
         case "accesories":
            hideOtherOpttions(chooseAccesories);
            chooseAccesories.style.display = "block";
            break; 
         case "neck":
            hideOtherOpttions(chooseNeck);
            chooseNeck.style.display = "block";
            break; 
         case "background":
            hideOtherOpttions(chooseBackground);
            chooseBackground.style.display = "block";
            break; 
        default:
            break;
    }
}
//function that hides other opttions 
function hideOtherOpttions(choosenOption){
   for(let i = 0 ; i < listOfOptions.length ; i++){
      if(listOfOptions[i]==choosenOption){
         continue;
      }else{
         listOfOptions[i].style.display = "none";
      }
   }
}
//changing the beauty of alpaca lol
function changeHair(typeOfHair){
   document.getElementById("hair").src = "alpaca/hair/" + typeOfHair;
   document.getElementById(typeOfHair.replace('.png' , '')).focus;
}
function changeEyes(typeOfEyes){
   document.getElementById("eyes").src ="alpaca/eyes/"+ typeOfEyes;
}
function changeEars(typeOfEars){
   document.getElementById("ears").src ="alpaca/ears/"+typeOfEars;
}
function changeLeg(typeOfLeg){
   document.getElementById('leg').src ="alpaca/leg/" + typeOfLeg;
}
function changeMouth(typeOfMouth){
   document.getElementById('mouth').src ="alpaca/mouth/" + typeOfMouth;
}
function changeNeck(typeOfNeck){
   document.getElementById('neck').src ="alpaca/neck/" + typeOfNeck;
}
function changeAccessories(typeOfAccessorie){
   document.getElementById('accesories').src ="alpaca/accessories/" + typeOfAccessorie;
}
function changeBackground(background){
   document.getElementById('curvedContainer').style.backgroundImage = 'url(alpaca/backgrounds/'+background+')';
   console.log(background);
}
function random() {
   let randHair = Math.floor(Math.random() * listOfHair.length );
   let randAccessorie = Math.floor(Math.random() * listOfAccesories.length);
   let randEar= Math.floor(Math.random() * listOfEars.length);
   let randEyes= Math.floor(Math.random() * listOfEyes.length);
   let randLeg= Math.floor(Math.random() * listOfLeg.length);
   let randMouth= Math.floor(Math.random() * listOfMouth.length);
   let randNeck= Math.floor(Math.random() * listOfNeck.length);
   
   document.getElementById('hair').src="alpaca/hair/"+listOfHair[randHair];
   document.getElementById('accesories').src="alpaca/accessories/"+listOfAccesories[randAccessorie];
   document.getElementById('ears').src="alpaca/ears/"+listOfEars[randEar];
   document.getElementById('eyes').src="alpaca/eyes/"+listOfEyes[randEyes];
   document.getElementById('leg').src="alpaca/leg/"+listOfLeg[randLeg];
   document.getElementById('mouth').src="alpaca/mouth/"+listOfMouth[randMouth];
   document.getElementById('neck').src="alpaca/neck/"+listOfNeck[randNeck];
}
//download function
function download(){
   html2canvas(document.getElementById('curvedContainer')).then(function(canvas){
      const fileBase = canvas.toDataURL("image/png");
      var anchor = document.createElement('a');
      anchor.setAttribute('href',fileBase);
      anchor.setAttribute("download" , "my-image.png");
      anchor.click();
      anchor.remove();
   });
}


// function setToDefault(nameOfDiv){
//    let btns = document.querySelectorAll('.chooseHair')
//    for(let i = 0; i < btns.length; i++){
//       if(btns[i].classList.contains('selected')) btns[i].classList.remove('selected');
//     }
//    btn.classList.add('selected');
   
// }
// //function setToDefault(list){
//   // let newArray =[];
//    //for(let i = 0 ; i < list.length ; i++){
//     //  newArray.push(list[i].replace(".png" , '').document.getElementById[i]);
//    //    for(let j = 0 ; j < newArray.length ; j++){
//    //       console.log(document.getElementById[newArray[j]].classList.remove('active'));
//      //  }
//    // }
//    //console.log(newArray);
// //}