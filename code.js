
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

const d = document;
d.addEventListener('DOMContentLoaded', (e)=>{
   openMenu('.hamburger', '.hamburger-inner', '.hamburger-box')
})


function openMenu(open,inner,box){
 const d = document;
    d.addEventListener('click', (e) =>{
        if(e.target.matches(open) || e.target.matches(inner) || e.target.matches(box)){
            const nav = document.getElementById('nav');
             nav.classList.toggle('is-active');
            
        } 
    })
}