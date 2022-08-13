const closeDrop = document.querySelector("#null");
const Menu = document.querySelector("#menu")

document.addEventListener('click', function (e){
    if (e.target.closest(".containers")) return
    closeDrop.checked = true;

    if (e.target.closest(".page__header")) return
    Menu.checked = false;
    
        
    
 
})




