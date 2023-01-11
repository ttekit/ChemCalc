window.addEventListener("load", ()=>{
    let clearBtn = $(".clear-button");
    let submitBtn = $(".calc-button");
    let mainField = $(".main-input");

    submitBtn.on("click", ()=>{
        let data = mainField.val();
        data = data.split(/(?=[A-Z])/);
        console.log("SUB BTN CLICK: " + data);
        for (let i = 0; i < data.length; i++){
            let elementSymb = data[i].replace(/[0-9]/g, '');
            for (let j = 0; j < sortedData.length; j++){
                if(elementSymb === sortedData[j].Symbol){
                    console.log(sortedData[j]);
                }
            }
        }
    })

    clearBtn.on("click", ()=>{
        mainField.val("");
        console.log("CLEARED FIELD");
    })
})