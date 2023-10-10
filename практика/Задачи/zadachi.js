let distance = prompt ("Введите расстояние доставки в км:");
let weight = prompt ("Введите вес груза в кг:");
let cargoType = prompt ("Введите тип груза (обычный,хрупкий,опасный):");
let transportType = prompt ("Введите тип транспорта (легковой автомобиль, грузовик, самолет):");

let basePrice;
if (distance <= 50) {
    basePrice = 500;
} else if (distance > 50 && distance <= 100) {
    basePrice = 1000;
} else {
    basePrice = 1500;
}

let weightPrice = 0;
if (weight > 10) {
    weightPrice = 500;
}

let cargoPrice = 0;
switch (cargoPrice) {
    case "обычный":
    cargoPrice = 0;
    break;
case "хрупкий":
    cargoPrice = 1000
    break;
case "опасный":
    cargoPrice = 2000;
    break;
default:
    console.log("Невернок указан тип груза");
}

let transportPrice = 0;
switch (transportType) {
    case "легковой автомобиль":
        transportPrice = 500;
        break;
    case "грузовик":
        transportPrice = 1500;
        break;
    case "самолет":
        transportPrice = 5000;
        break;
    default:
        console.log("Неверный указан тип транспорта");
}

let totalCost = basePrice + weightPrice + cargoPrice + transportPrice;
alert (`Стоимость доставки:  ${totalCost} руб.`);