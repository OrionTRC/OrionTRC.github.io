// {
//     const opener = document.getElementById('menuOpen');
//     document.addEventListener("keydown", (event) => {
//       if (event.key === "Escape") opener.blur();     
//     } );
    
//     opener.addEventListener("touchstart", () => {
//       opener.focus();
//     } );
//     opener.nextElementSibling.addEventListener("touchstart",  () => {
//       opener.blur();
//     } );
// }  
//Opener fix doesn't work on phone??

const pipe=(x,...fns)=>fns.reduce((v,f)=>f(v),x);
const flow =(...fns)=>fns.reduce((v,f)=>f(v));
const map =(functor)=>(arr)=>arr.map(functor);

function add(parent,el,...options){
    return parent.appendChild(Object.assign(document.createElement(el),...options));
}