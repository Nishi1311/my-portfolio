// responsive navbar start
const resnav=document.querySelector(".mobile-nav");
const headerele=document.querySelector(".header");
const hero=document.querySelector(".section-hero");


resnav.addEventListener("click",()=>{
  headerele.classList.toggle("active")
})
// responsive navbar end





const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const img_overlay=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e)=>{
    const p_btn_clicked= e.target;
    console.log(p_btn_clicked);
    if (p_btn_clicked.classList.contains('p_btn'))return;
    
    p_btn.forEach((a)=>a.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");
    

    // to find the no in data atribute;
   const p_btn_num= p_btn_clicked.dataset.btnNum;
   console.log(p_btn_num);
   
   const img_active= document.querySelectorAll(`.p-btn--${p_btn_num}`);
   img_overlay.forEach((a)=>a.classList.add("p-image-not-active"));
   img_active.forEach((a)=>a.classList.remove("p-image-not-active"));


});

  // scroll top button start

  const scrolldiv=document.querySelector(".scrollTop-style");
  const herosec=document.querySelector(".section-hero");
const scrolltotop=()=>{
  herosec.scrollIntoView({behavior:"smooth"});/*-----------------------------used to directly go to the mentioned section------------------------*/
}
  scrolldiv .addEventListener("click",scrolltotop);
// scroll top button end
  


  //scroll reveal start
  ScrollReveal({ 
   //reset: true,
    distance:'80px',
    duration:2000,
    delay:200
  });
  ScrollReveal().reveal('.section-hero-data,.common-heading', {origin:'top' });
  ScrollReveal().reveal('.hero-image,.div-bio-image,.img-overlay,.service-box', {origin:'bottom' });
  ScrollReveal().reveal('.section-hero-data h1,.bio-data-stats,.textrer,.hireme-btn', {origin:'left' });
  ScrollReveal().reveal('.section-hero-data p,.p-btns,.timing,.grid-contact,.hireme1-btn,.navbar-lists,.service-box p', {origin:'right' });
  //scroll reveal end
  //typed js
  /*const type=new Typed('.head-div',{
    strings:['Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });*/
       








  

  


  







