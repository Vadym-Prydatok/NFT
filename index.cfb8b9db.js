window.addEventListener("DOMContentLoaded",()=>{(function(){let e=document.querySelectorAll(".open-modal"),t=document.querySelector(".modal"),i=document.querySelector(".header");function o(){t.classList.remove("hidden"),i.classList.add("hide-on-modal"),document.body.classList.add("overflowHidden")}e.forEach(e=>{e.addEventListener("click",o)}),document.addEventListener("click",function(e){let o=e.target;(o.classList.contains("modal")||o.classList.contains("item__close"))&&(t.classList.add("hidden"),i.classList.remove("hide-on-modal"),document.body.classList.remove("overflowHidden"))})})(),function(){class e{constructor(e,t,i){this.title=e,this.description=t,this.parent=document.querySelector(i)}render(){let e=document.createElement("details");e.classList.add("list-item"),e.innerHTML=`
            <summary class="list-item__header">${this.title}</summary>
            <div class="list-item__content">${this.description}</div>`,this.parent.append(e)}}new e("What is Nerko's NFT Collection?","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",".faq .list").render(),new e("How we can buy and invest NFT?","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",".faq .list").render(),new e("Why we should choose Nerko's NFT?","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",".faq .list").render(),new e("Where we can buy and sell NFts?","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",".faq .list").render(),new e("How secure is this token?","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",".faq .list").render(),new e("What is your contract address?","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",".faq .list").render()}(),function(){let e=document.querySelector(".header");window.addEventListener("scroll",()=>{e.classList.contains("scroll-header-bg")||e.classList.add("scroll-header-bg")}),window.addEventListener("scroll",()=>{0==window.scrollY&&e.classList.remove("scroll-header-bg")})}(),function(){let e=document.querySelector(".hamb"),t=document.querySelector(".nav-menu");e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("activeNav"),document.body.classList.toggle("overflowHidden")}),document.querySelectorAll(".nav-menu__item a").forEach(i=>{i.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("activeNav"),document.body.classList.remove("overflowHidden")})})}()});
//# sourceMappingURL=index.cfb8b9db.js.map
