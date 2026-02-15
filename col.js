var productCon=document.getElementById("pro")
var search=document.getElementById("search")
var productlist=productCon.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue =event.target.value.toUpperCase();
for(count=0;count<productlist.length;count++){
    var pro_name=productlist[count].querySelector("p").textContent
    if(pro_name.toUpperCase().indexOf(enteredValue)<0){
        productlist[count].style.display="none"
    }
    else{
         productlist[count].style.display="block"
    }
}
})