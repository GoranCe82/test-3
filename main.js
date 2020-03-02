var displaj = document.getElementById('prikaz');

function start(){
    var x = displaj.style.display = 'block';
}
function end(){
  var y = displaj.style.display = 'none';   
}
 var x = setInterval(start,3000);
 var e =setInterval(end,7000);