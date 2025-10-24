var inText = document.getElementById("display");



inText.addEventListener('keyup' , function(e){
    if (e.key === 'Enter'){
        inText.value = eval(inText.value);

    }

});


var btnAdd = document.getElementById("add");

btnAdd.addEventListener('click' , function(){
        if(inText.value[inText.value.length -1] !== "+"){
             inText.value += "+";
        }

        if (inText.value === "0+"){
            inText.value = "0";
        }
});

var btnSub = document.getElementById("min");

btnSub.addEventListener('click' , function(){
        if(inText.value[inText.value.length -1] !== "-"){
             inText.value += "-";
        }
        if (inText.value === "0-"){
            inText.value = "0";
        }
});

var btnDiv = document.getElementById("div");

btnDiv.addEventListener('click' , function(){
        if(inText.value[inText.value.length -1] !== "/"){
             inText.value += "/";
        }
        if (inText.value === "0/"){
            inText.value = "0";
        }
});

var btnmul = document.getElementById("mul");

btnmul.addEventListener('click' , function(){
         if(inText.value[inText.value.length -1] !== "*"){
             inText.value += "*";
        }
        if (inText.value === "0*"){
            inText.value = "0";
        }
        
});



var ans = document.getElementById('eq');
ans.addEventListener('click', function(){
    inText.value = eval(inText.value)
    alert(`answer is ${inText.value}`)
});

var ce = document.getElementById('ce');
ce.addEventListener('click', function(){
    inText.value = '0'
    
});

// let elems = document.querySelectorAll('.btn');
let keysElem = document.getElementById('keys');

keysElem.addEventListener('click', (e)=>{
    if(e.target && e.target.value >= 0){
        inText.value += e.target.value;
        if (inText.value === "0"+ e.target.value){
            inText.value = e.target.value;
        }
    }
})

