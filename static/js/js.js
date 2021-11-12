const sidebarContainer=document.querySelector('.sidebarContainer');
const btnMenu=document.querySelector('.btnMenu');
const sidebar=document.querySelector('.sidebar');
const close=document.querySelector('.close');

btnMenu.addEventListener('click',function(){
    sidebarContainer.classList.add('showSide');
    sidebar.style.display="block";
    
})
close.addEventListener('click',function(){
    sidebarContainer.classList.remove("showSide");
    sidebar.style.display="none";
    
})