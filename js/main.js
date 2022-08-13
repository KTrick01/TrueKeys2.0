const closeDrop = document.querySelector("#null");

document.addEventListener('click', function (e){
    if (e.target.closest(".containers")) return
    closeDrop.checked = true;
 
})




