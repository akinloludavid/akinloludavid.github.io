


var menu = document.getElementById('menu');

menu.addEventListener('click', function(){
    
    var x = document.getElementById('myMenu');

    if (x.style.display === "none"){
        x.style.display ="block";
       
    }
    else {
        x.style.display ="none";
    }
  });
