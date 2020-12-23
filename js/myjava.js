var let='abcdefghijklmnopqrstuvwxyz'
var LET='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num='0123456789'
var spc=' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
function getRandom(choices) {
    var rand = Math.floor(Math.random()*choices.length);
    console.log(rand);
    return choices[rand];
}
function toContinue(pass, confirm) {
    var confirm = prompt(`Your password (between quotes): "${pass}" \n Please reenter your password to continue`);
    if (confirm==pass) ;
    else toContinue(pass, confirm);
}
function tumble() {
    let lower = document.getElementById('lower').checked;
    let upper = document.getElementById('upper').checked;
    let number = document.getElementById('number').checked;
    let special = document.getElementById('special').checked;
    let chars = document.getElementById('length').value; 
    var choices ='';
    var pass='';
    if (lower==false && upper==false && number==false && special==false) {
        return alert('You must select at least one option.');
    }
    else {
        if (lower==true) choices += let;
        if (upper==true) choices += LET;
        if (number==true) choices += num;
        if (special==true) choices += spc;
        for (i=0; i<chars; i++) {
            pass += getRandom(choices);
        }  
        toContinue(pass, confirm);
    }
}


