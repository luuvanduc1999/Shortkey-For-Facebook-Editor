document.onkeyup = function(e) {
  if (e.which == 49) {
    //KHÔNG
    C=document.getElementsByClassName("_5r7k _5r7m _2p24");
    for (var i=0; i<C.length; i++)
        if (C[i].children[0].textContent=="Không") C[i].children[1].click();
  } else if (e.which == 50) {
    //KHÔNG CHẮC CHẮN
    C=document.getElementsByClassName("_5r7k _5r7m _2p24");
    for (var i=0; i<C.length; i++)
        if (C[i].children[0].textContent=="Không chắc chắn") C[i].children[1].click();
  } else if (e.which == 51) {
    //CÓ
    C=document.getElementsByClassName("_5r7k _5r7m _2p24");
    for (var i=0; i<C.length; i++)
        if (C[i].children[0].textContent=="Có") C[i].children[1].click();
  } 
}
