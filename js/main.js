const drop = document.querySelectorAll(".check");

for (let i = 0; i < drop.length; i++) {
    drop[i].onclick = function (e) {
        e.checked=false
        
    }
    
}

