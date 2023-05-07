        var name11=document.getElementById("u_name")
        var email22=document.getElementById("email")
        var pass111=document.getElementById("pass1")
        var pass222=document.getElementById("pass2")
       

name11.addEventListener("input",function(){
        
         var flag=document.getElementById("flag")
         flag.value="true"
  
       var letters = /^[A-Za-z]+$/;
       if(!(u_name.value.match(letters)))
        {
          var ndiv=document.getElementById("namedivp2")
          ndiv.style.display="block";
          flag.value="false"
        }
        if(flag.value=="true")
        {
          var ndiv=document.getElementById("namedivp2")
          ndiv.style.display="none";
        }
       
})
email22.addEventListener("input",function(){

  var flag1=document.getElementById("flag1")
  flag1.value="true"

  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email22.value)))
  {
    const para23=document.getElementById("mailpara2")
    para23.style.display="block"
    flag1.value="false"
  }
  
  if(flag1.value=="true")
        {
          const para23=document.getElementById("mailpara2")
          para23.style.display="none"
        }
})

name11.addEventListener("focusin",function(){

  const para11=document.getElementById("namepara")
  para11.style.display="none"
  var cnpara=document.getElementById("confirmpara")
  cnpara.style.display="none"

})

email22.addEventListener("focusin",function(){

       const para22=document.getElementById("mailpara")
       para22.style.display="none"
       var cnpara=document.getElementById("confirmpara")
       cnpara.style.display="none"


    if(name11.value===``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
    }
})

pass111.addEventListener("focusin",function(){

     const para33=document.getElementById("pass1para")
      para33.style.display="none"
      var cnpara=document.getElementById("confirmpara")
      cnpara.style.display="none"

    if(name11.value==``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
    }
   
    if(email22.value==``)
    {
     const para22=document.getElementById("mailpara")
     para22.style.display="block"
     
    }
})

pass222.addEventListener("focusin",function(){
    
       const para44=document.getElementById("pass2para")
       para44.style.display="none"
       var cnpara=document.getElementById("confirmpara")
       cnpara.style.display="none"


    if(name11.value==``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
    }
   
    if(email22.value==``)
    {
     const para22=document.getElementById("mailpara")
     para22.style.display="block"
    }
    if(pass111.value==``)
    {
     const para33=document.getElementById("pass1para")
     para33.style.display="block"
    }
})



var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    var a=detail_check();
    var b= pass_check()

    var flag=document.getElementById("flag")
   var c= flag.value;
   var flag1=document.getElementById("flag1")
   var d= flag1.value;

    if(a==true && b==true && c==="true" && d=="true")
    {
        
        name11.value=``;
        email22.value=``;
        pass111.value=``;
        pass222.value=``;

        var cnpara=document.getElementById("confirmpara")
        cnpara.style.display="block"

    }
})


function detail_check()
{
    var namee=document.getElementById("u_name").value
    var emaill=document.getElementById("email").value
    var pass1=document.getElementById("pass1").value
    var pass2=document.getElementById("pass2").value
    var flag=true;
    

    if(namee==``)
    {
      const para11=document.getElementById("namepara")
      para11.style.display="block"
      var ndiv=document.getElementById("namedivp2")
      ndiv.style.display="none";
      flag=false;
    } 
    if(emaill==``)
    {
     const para22=document.getElementById("mailpara")
     para22.style.display="block"
     const para23=document.getElementById("mailpara2")
    para23.style.display="none"
     flag= false;
    }
    if(pass1==``)
    {
     const para33=document.getElementById("pass1para")
     para33.style.display="block"
     flag= false;
    }
    if(pass2==``)
    {
     const para44=document.getElementById("pass2para")
     para44.style.display="block"
     flag= false;
    }

    return flag;
}


function pass_check()
{
    var password1=(document.getElementById("pass1").value) 
    var password2=(document.getElementById("pass2").value) 
   var flar=true;
  
    if((password1.localeCompare(password2))!=0)
            {
             
                var para5=document.getElementById("pass2para2");
                para5.style.display="block";
                flar= false;
            }
      else{
        var para5=document.getElementById("pass2para2");
        para5.style.display="none";
        flar= true;
      }
            return flar;
}

var icon1=document.getElementById("icondiv1")

var password1=document.getElementById("pass1") 

icon1.addEventListener("click",function(){
  
    if(password1.type==="password")
    {
      icon1.style.color="green"
      password1.type="text"
    }
    else if(password1.type==="text")
    {
      icon1.style.color="black"
      password1.type="password"
    }
    
})

var icon2=document.getElementById("icondiv2")

var password2=document.getElementById("pass2") 

icon2.addEventListener("click",function(){
  
    if(password2.type=="password")
    {
      icon2.style.color="green"
      password2.type="text"
    }
    else if(password2.type=="text")
    {
      icon2.style.color="black"
      password2.type="password"
    }
    
})