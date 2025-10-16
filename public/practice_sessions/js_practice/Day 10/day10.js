var inText = document.getElementById("display");




inText.addEventListener('keyup' , function(e){
    if (e.key === 'Enter'){
        inText.value = eval(inText.value);

    }

    
    

});


