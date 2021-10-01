const food = [];

class Foods {
    constructor(name, carb, fat, protein) {
        this.name = name;
        this.carb = carb;
        this.fat = fat;
        this.protein = protein;
    }
}

const btn = document.getElementById('btn');

const foodSum = function() {    
    let foodDetail = new Foods(foodName.value, carb.value, fat.value, protein.value)
    food.push(foodDetail);

    foodName.value = "";
    carb.value = "";
    fat.value = "";
    protein.value = "";
}


btn.addEventListener('click', foodSum);




console.log(food)