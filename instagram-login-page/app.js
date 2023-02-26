localStorage.setItem("kadi","mehmet");
localStorage.setItem("sifre","123");


function girisYap(){

        let girilenKadi = document.querySelector(".kadi").value;
    let girilenSifre = document.querySelector(".sifre").value;
    
    let kadi = localStorage.getItem("kadi");
    let sifre = localStorage.getItem("sifre");

   if (girilenKadi==kadi && girilenSifre==sifre){
    window.location.href="index.html";
   }

   else {
    document.querySelector(".alert").style.display="block";
   }

}