const menuBtn = document.querySelector("#menuButton");
const cancel = document.querySelector("#cancel")
const list = document.querySelector("#list");


menuBtn.addEventListener("click", function() {
    list.style.display = "flex";
    list.style.width = "100%"
    list.style.hight = "300px";
    list.style.padding = "20px 50px"
    list.style.backgroundColor = "green";
    menuBtn.style.display = "none"
    cancel.style.display = "flex"
    
})

// closebtn

cancel.addEventListener("click", function() {
    cancel.style.display = "none"
    list.style.display = "none"
    menuBtn.style.display = "flex"

})


