let counter = 1;
const clicker = (function(){
        return counter ++;
})

function myCatClicker(){
    document.getElementById('counter').innerHTML = clicker();
}

let counter2 = 1;
const clicker2 = (function(){
        return counter2 ++;
})

function myCatClicker2(){
    document.getElementById('counter2').innerHTML = clicker2();
}

let counter3 = 1;
const clicker3 = (function(){
        return counter3 ++;
})

function myCatClicker3(){
    document.getElementById('counter3').innerHTML = clicker3();
}

let counter4 = 1;
const clicker4 = (function(){
        return counter4 ++;
})

function myCatClicker4(){
    document.getElementById('counter4').innerHTML = clicker4();
}

let counter5 = 1;
const clicker5 = (function(){
        return counter5 ++;
})

function myCatClicker5(){
    document.getElementById('counter5').innerHTML = clicker5();
}


//function toggleCat(kitten){

    //kitten.classList.toggle('.hidden');

//};
function toggleCat1(){
    const cats = document.getElementById('cat1');
    cats.classList.toggle("hidden");
    //console.log('click');
}

function toggleCat2(){
    const cats = document.getElementById('cat2');
    cats.classList.toggle("hidden");
    //console.log('click');
}

function toggleCat3(){
    const cats = document.getElementById('cat3');
    cats.classList.toggle("hidden");
    //console.log('click');
}

function toggleCat4(){
    const cats = document.getElementById('cat4');
    cats.classList.toggle("hidden");
    //console.log('click');
}

function toggleCat5(){
    const cats = document.getElementById('cat5');
    cats.classList.toggle("hidden");
    //console.log('click');
}