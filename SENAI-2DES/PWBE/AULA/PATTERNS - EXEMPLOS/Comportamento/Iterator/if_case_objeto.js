function getItemIf(item) {

    if (item == "cidade") {

        return "km";

    } else if (item == "caminhada") {

        return "m";

    } else if (item == "mesa") {

        return "cm";

    } else if (item == "caneta") {

        return "mm";

    } else {

        return "m";

    }

}

function getItemCase(item) {

    switch (item) {

        case "cidade": return "km";
        case "caminhada": return "m";
        case "mesa": return "cm";
        case "caneta": return "mm";

        default: return "m";

    }

}

const itens = {

    "cidade": "km",
    "caminhada": "m",
    "mesa": "cm",
    "caneta": "mm",

    getIterator(item) {

        return itens[item] == undefined ? "m" : itens[item];

    }

}

let item = prompt("Deseja saber a escala de qual ítem:?");

console.log(`O item buscado é "${item}"`);
console.log(getItemIf(item));
console.log(getItemCase(item));
console.log(itens.getIterator(item));