
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });


  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

  }

const d = document;
d.addEventListener('DOMContentLoaded', (e)=>{
   openMenu('.hamburger', '.hamburger-inner', '.hamburger-box', '#li', '#start','#email')
})

const nav = document.getElementById('nav');
const segurity = document.getElementById('segurity');
const send = document.getElementById('send')
const error = document.getElementById('error')
const validar = document.querySelector('.email')
const verificar = document.getElementById('verificar')


function openMenu(open,inner,box,li, start,email){
 const d = document;
    d.addEventListener('click', (e) =>{
        if(e.target.matches(open) || e.target.matches(inner) || e.target.matches(box)){
            
             nav.classList.toggle('is-active');
             nav.classList.remove('esconderNav')

            
        } if(e.target.matches(li)){
             nav.classList.toggle('esconderNav');
             nav.classList.remove('is-active');
       
        }if(e.target.matches(start)){
             segurity.style.display = "block"
           setTimeout(()=>{
            segurity.style.display = "none"
           },1500 )

        }if(e.target.matches(email) && expresiones.correo.test(validar.value) ){
            verificar.style.display = "block"
            send.style.display = "none"
            setInterval(()=>{
              send.style.display = "block"
              verificar.style.display = "none"
             },1500 )


              e.preventDefault()
        }if(e.target.matches(email) && validar.value === "" ){
           verificar.style.display = "block"
          setTimeout(()=>{
            error.style.display = "block"
            verificar.style.display = "none"
           },1500 )
           e.preventDefault()
           
        }
    })
}