function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
var sortedData = [];
window.addEventListener("load",
    () => {
        readTextFile("ChemicalTable.json", (data) => {
            data = JSON.parse(data).Table;

            for (let i = 0; i < data.Row.length; i++) {
                sortedData.push({
                    "AtomicNumber": data.Row[i].Cell[0],
                    "Symbol": data.Row[i].Cell[1],
                    "Name": data.Row[i].Cell[2],
                    "AtomicMass": data.Row[i].Cell[3],
                    "ElectronConfiguration": data.Row[i].Cell[5],
                    "AtomicRadius": data.Row[i].Cell[6],
                    "Electronegativity": data.Row[i].Cell[7],
                    "IonizationEnergy": data.Row[i].Cell[8],
                    "ElectronAffinity": data.Row[i].Cell[9],
                    "OxidationStates": data.Row[i].Cell[10],
                    "StandardState": data.Row[i].Cell[11],
                    "MeltingPoint": data.Row[i].Cell[12],
                    "BoilingPoint": data.Row[i].Cell[13],
                    "Density": data.Row[i].Cell[14],
                    "GroupBlock": data.Row[i].Cell[15],
                    "YearDiscovered": data.Row[i].Cell[16],
                });
            }
        })
    })


//TODO: методы для работы с елементами (поиск все нужного)
//TODO: Поиск информации по елементу (H2O = вывести всё что связано с)
