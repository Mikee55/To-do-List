let num = 0;

let timer = setInterval(function(){
    num +=3;
    console.log(num);
    if (num > 10) {
        clearInterval(timer);
    }
}, 2000);