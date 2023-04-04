const button = document.querySelector(".button");
const field = document.querySelectorAll(".field");

    field.forEach(el => {
        el.addEventListener("focus", function() {
            this.style.borderBottomColor = "#fff";
        })
    })

    field.forEach(el => {
        el.addEventListener("blur", function() {
            this.style.borderBottomColor = "#3F4363";
        })
    })

button.onclick = (event) => {
    field.forEach(el => {
        if(el.required) {
        el.placeholder = "Обязательно*"
    }
    if(el.checkValidity()) {
        el.style.borderBottomColor = "#3F4363";
    } else {
        el.style.borderBottomColor = "red";
    }
    })
    if(!(/^\+[0-9]+$/.test(field[3].value))){
        field[3].style.borderBottomColor = "red";
        event.preventDefault();
    }
}