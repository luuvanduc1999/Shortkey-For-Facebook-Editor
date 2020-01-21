# Set shortkey để chơi Editor nhanh hơn
Không áp dụng bản PC, chỉ chơi m.fb thôi
## Cách làm
1. Vô trang này: https://m.facebook.com/editor
2. F12 tab Console
3. Paste đoạn code vào và Enter
```javascript
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
```

Phím tương ứng :

1-Không

2-Không chắc chắn

3-Có

(Không phải numlock)

**Tùy chỉnh theo ý bạn nhé**
