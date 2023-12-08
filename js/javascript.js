var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");
var btn3 = document.getElementById("b3");
var btn4 = document.getElementById("b4");
var btn5 = document.getElementById("b5");
var btn6 = document.getElementById("b6");
var btn7 = document.getElementById("b7");
var btn8 = document.getElementById("b8");
var btn9 = document.getElementById("b9");
var btn10 = document.getElementById("b10");
var items_num = 0;
var ite =  document.getElementById("items_num");

var elements = function(){
    items_num++;
    ite.innerHTML = items_num;
}

btn1.onclick = elements
btn2.onclick = elements
btn4.onclick = elements
btn3.onclick = elements
btn5.onclick = elements
btn6.onclick = elements
btn7.onclick = elements
btn8.onclick = elements
btn9.onclick = elements
btn10.onclick = elements



var y = document.querySelector("#visa");
var product = document.querySelectorAll(".product-container  .b");
var totalprice = 0;
var btn= document.querySelector("#btn")

var thePrice = document.querySelector("#theprice")

product.forEach(function(item){
    item.onclick = function(){
        elements();
       
        totalprice += +(item.getAttribute("price"));
         y.innerHTML += item.textContent + "  " 

         if(y.innerHTML != ""){
            btn.style.display = "block";
            btn.style.width = "200px";
            btn.style.height = "45px";
            btn.style.backgroundColor = "brown";
            btn.style.color = "white";
            btn.style.fontSize = "23px";
         }
        
    } 
});

btn.onclick = function(){
    thePrice.innerHTML+= "Price is "+ totalprice;
}
