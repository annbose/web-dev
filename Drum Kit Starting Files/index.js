
var numOfDrum=document.querySelectorAll(".drum").length
for(i=0;i<numOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML= this.innerHTML;
        //call function
        buttonAnimation(buttonInnerHTML)

            switch (buttonInnerHTML) {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
            case "j":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
            case "k":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
            break; 
            case "l":
                var crash=new Audio('sounds/crash.mp3');
                crash.play();
            break;

            default:
            console.log(this.innerHTML)
                break;
        }
        
    });
}

function makeSound(outputOfKeypressInObjectFormat){

   
    
    let whichKey=outputOfKeypressInObjectFormat.key
    buttonAnimation(whichKey)
    switch (whichKey) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "j":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case "k":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
        break; 
        case "l":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
        break;

        default:
        alert("wrong Input")
            break;
    }
}

document.addEventListener("keypress", makeSound)
//call function

// animation function define
function buttonAnimation(currentkey){
var activebutton=document.querySelector("."+currentkey);
activebutton.classList.add("pressed")
setTimeout(function(){
    activebutton.classList.remove("pressed")
},100)
}