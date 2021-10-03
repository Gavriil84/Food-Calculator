const food = [];

let maxCarb = 0;
let maxFat = 0;
let maxProtein = 0;

class Foods {
    constructor(name, carb, fat, protein) {
        this.name = name;
        this.carb = parseFloat(carb).toFixed(2);
        this.fat = parseFloat(fat).toFixed(2);
        this.protein = parseFloat(protein).toFixed(2);
    }
}

const btn = document.getElementById('btn');

const foodSum = function() {
    const name = document.getElementById('foodName').value;
    const carb = document.getElementById('carbs').value;
    const fat = document.getElementById('fats').value;
    const protein = document.getElementById('proteins').value;


    let foodDetail = new Foods(name, carb, fat, protein)

    if (name == null || name == "", carb == null || carb == "", fat == null || fat == "", protein == null || protein == "") {
        alert("Please Fill All Required Field");
        return false;
    } else {
        food.push(foodDetail);
    }

    
    foodName.value = "";
    carbs.value = "";
    fats.value = "";
    proteins.value = "";

    for (let i = 0; i < food.length; i++) {
        if (food[i].carb > maxCarb) {
            maxCarb = food[i].carb;
        }
        console.log(food[i].name)
    }
    
}


btn.addEventListener('click', foodSum);









console.log(food)

