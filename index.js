var numberOfDrums=document.getElementsByClassName("drum").length;
//Buttons pressing 
for (var i=0; i<numberOfDrums;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){
    music(this.innerHTML);
    addAnimation(this.innerHTML);
});
}
//Keyboards key pressed
document.addEventListener("keydown", function (pavan){
music(pavan.key);
addAnimation(pavan.key);

});
function music(sai) {

    switch (sai) {
        case 'w':
            var crash= new Audio("./sounds/crash.mp3");
            crash.play(); 
        break;

        case 'a':
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play(); 
        break;

        case 's':
            var snare= new Audio("./sounds/snare.mp3");
            snare.play(); 
        break;
        case 'd':
            var tomAudio1= new Audio("./sounds/tom-1.mp3");
            tomAudio1.play(); 
        break;
        case 'j':
            var tomAudio2= new Audio("./sounds/tom-2.mp3");
            tomAudio2.play(); 
        break;
        case 'k':
            var tomAudio3= new Audio("./sounds/tom-3.mp3");
            tomAudio3.play(); 
        break;
        case 'l':
            var tomAudio4= new Audio("./sounds/tom-4.mp3");
            tomAudio4.play(); 
        break;

    
        default:
            alert("Hey Hi!, Please try to press the keyboard keys- w,a,s,d,j,k,l. Not Capitals");
            break;
    }
}
//Adding animation
function addAnimation(currentKey){

    document.querySelector('.'+currentKey).classList.toggle("pressed");

   setTimeout(function(){
    document.querySelector('.'+currentKey).classList.toggle("pressed");
   }, 100)
}
