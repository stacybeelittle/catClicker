let counter = 1;
const clicker = (function(){
        return counter ++;
})

function myCatClicker(){
    document.getElementById('counter').innerHTML = clicker();
    console.log(counter);
}
