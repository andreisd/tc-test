import"./main-786ab181.js";const l=new Set,d=document.querySelectorAll(".clg-card"),n=document.querySelector(".clg-selected-list"),o=document.querySelector(".clg-summary"),r=document.querySelector(".clg-selected-total__price__value");let s=0;const a=(e,c)=>{const t=e.querySelector(".clg-card__content__price__value").innerText;c=="add"?(s+=parseFloat(t),l.add(e)):(s-=parseFloat(t),l.delete(e)),i()},i=()=>{n.innerHTML="",l.forEach(e=>{const c=e.querySelector(".clg-card__content__title").innerText,t=e.querySelector(".clg-card__content__price__value").innerText;n.innerHTML+=`
      <div class="clg-selected-list__item">
        <span>${c} - $${t}</span>
        <i class="fas fa-times"></i>
      </div>
    `}),r.innerText="",r.innerText=s.toFixed(2),l.size===0?o.classList.add("hide"):o.classList.remove("hide")};d.forEach(e=>{const c=e.querySelector(".btn-add"),t=e.querySelector(".btn-remove");c.addEventListener("click",()=>{a(e,"add"),c.classList.add("hide"),t.classList.remove("hide")}),t.addEventListener("click",()=>{a(e,"remove"),t.classList.add("hide"),c.classList.remove("hide")})});
