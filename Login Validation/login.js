var name1=document.getElementById("u_name")
var password1=document.getElementById("u_pass")

name1.addEventListener("focusin",function(){
    var para1=document.getElementById("namepara");
    para1.style.display="none"
})

password1.addEventListener("focusin",function()
{
    var para2=document.getElementById("passpara")
    para2.style.display="none"
    if(name1.value===``)
    {
        var para1=document.getElementById("namepara");
        para1.style.display="block"
    }
})
name1.addEventListener("input",function(){
    var letters = /^[A-Za-z]+$/;
    var flag=document.getElementById("flag")
    flag.value="true"
    if(!(name1.value.match(letters)))
   {
    var namepara2=document.getElementById("namepara2")
    namepara2.style.display="block"
    flag.value="false"
   } 
   else{
    var namepara2=document.getElementById("namepara2")
    namepara2.style.display="none"
    flag.value="true"
   }

})


var btn=document.getElementById("btn");
btn.addEventListener("click",function(){

    var a=detail_check();


    var flag=document.getElementById("flag")
    var b=flag.value

  
    if(a==true && b=="true" )
    {
        var name1=document.getElementById("u_name")
        var password1=document.getElementById("u_pass")
        name1.value=``;
        password1.value=``;
    }

})

function detail_check()
{
    var name1=document.getElementById("u_name").value
    var password1=document.getElementById("u_pass").value
     var flag=true;
    
    if(name1==``)
    {
        var para1=document.getElementById("namepara");
        para1.style.display="block"
        flag=false;
    }
  
     if(password1==``)
    {
        var para2=document.getElementById("passpara")
        para2.style.display="block"
        flag=false;
    }
    return flag;
}

