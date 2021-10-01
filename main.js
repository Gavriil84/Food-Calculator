const food = [];

class Foods {
    constructor(name, carb, fat, protein) {
        this.name = name;
        this.carb = carb;
        this.fat = fat;
        this.protein = protein;
    }
}

const foodSum = function() {    
    const btn = document.getElementById('btn');
    const foodName = document.getElementById('foodName').value;
    const carb = document.getElementById('carb').value;
    const fat = document.getElementById('fat').value;
    const protein = document.getElementById('protein').value;

    let foodDetail = new Foods(foodName, carb, fat, protein)
    food.push(foodDetail);
}



btn.addEventListener('click', foodSum);

console.log(food)