window.addEventListener("load", ()=>{
    let clearBtn = $(".clear-button");
    let submitBtn = $(".calc-button");
    let mainField = $(".main-input");
    let infoCont = $(".information-container");


    submitBtn.on("click", ()=>{
        infoCont.empty();
        let data = mainField.val();
        data = data.split(/(?=[A-Z])/);

        for (let i = 0; i < data.length; i++){
            let tmp = parseInt(data[i].replace ( /[^\d.]/g, '' ));
            let element = {
                "Symb": data[i].replace(/[0-9]/g, ''),
                "Count": isNaN(tmp) ? 1 : tmp
            };
            delete tmp;

            for (let j = 0; j < sortedData.length; j++){
                if(element.Symb === sortedData[j].Symbol){
                    let elem = $(`<button class="show-elem-details">${element.Symb}</button>`)
                    elem.on("click", ()=>{
                        showDetails(sortedData[j], element.Count)
                    });
                    infoCont.append(elem)
                }
            }
        }
    })

    clearBtn.on("click", ()=>{
        mainField.val("");
        infoCont.empty();
    })
    let showDetails = (data, count) => {
        Swal.fire({
            title: data.Symbol,
            icon: 'info',
            html: `<div class="elem-details">
                    <p class="elem-details-row">AtomicMass: ${data.AtomicMass*count}</p>
                    <p class="elem-details-row">AtomicNumber: ${data.AtomicNumber}</p>
                    <p class="elem-details-row">BoilingPoint: ${data.BoilingPoint}</p>
                    <p class="elem-details-row">Density: ${data.Density}</p>
                    <p class="elem-details-row">ElectronAffinity: ${data.ElectronAffinity}</p>
                    <p class="elem-details-row">Name: ${data.Name}</p>
                    <p class="elem-details-row">Electronegativity: ${data.Electronegativity}</p>
                    <p class="elem-details-row">GroupBlock: ${data.GroupBlock}</p>                    
                    <p class="elem-details-row">IonizationEnergy: ${data.IonizationEnergy}</p>
                    <p class="elem-details-row">MeltingPoint: ${data.MeltingPoint}</p>
                    <p class="elem-details-row">ElectronConfiguration: ${data.ElectronConfiguration}</p>
                    <p class="elem-details-row">OxidationStates: ${data.OxidationStates}</p>
                    <p class="elem-details-row">YearDiscovered: ${data.YearDiscovered}</p>
                    </div>`,
        })
    }
})
