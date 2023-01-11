window.addEventListener("load", ()=>{
    let clearBtn = $(".clear-button");
    let submitBtn = $(".calc-button");
    let mainField = $(".main-input");


    submitBtn.on("click", ()=>{
        let data = mainField.val();
        console.log(data);
        data = data.match("");

//        console.log("SUB BTN CLICK: " + data);
    })
    clearBtn.on("click", ()=>{
        mainField.val("");
        console.log("CLEARED FIELD");
    })
})