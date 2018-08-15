let counter = 1;
const clicker = (function(){
        return counter ++;
})

function myCatClicker(){
    document.getElementById('counter').innerHTML = clicker();
    console.log(counter);
}

let counter2 = 1;
const clicker2 = (function(){
        return counter2 ++;
})

function myCatClicker2(){
    document.getElementById('counter2').innerHTML = clicker2();
    console.log(counter2);
}
