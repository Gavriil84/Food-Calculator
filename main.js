const food = [];

// Food class
class Foods {
    constructor(name, carb, fat, protein) {
        this.name = name;
        this.carb = parseInt(carb);
        this.fat = parseInt(fat);
        this.protein = parseInt(protein);
    }
}

// btn definition
const btn = document.getElementById('btn');

// click event
const foodSum = function() {
    const name = document.getElementById('foodName').value;
    const carb = document.getElementById('carbs').value;
    const fat = document.getElementById('fats').value;
    const protein = document.getElementById('proteins').value;
    const outputArea = document.querySelector('.outputArea');
    const outputArea2 = document.querySelector('.outputArea2');
    const outputArea3 = document.querySelector('.outputArea3');
    const outputArea4 = document.querySelector('.outputArea4');


    let foodDetail = new Foods(name, carb, fat, protein)

    // filter empty input
    if (name == null || name == "", carb == null || carb == "", fat == null || fat == "", protein == null || protein == "") {
        alert("Please Fill All Required Field");
        return false;
    } else {
        food.push(foodDetail);
    }

    let foodList;

    // add food list into the container
    for(let i = 0; i < food.length; i ++){
        foodList = `${name}<br>`
    }
    outputArea.innerHTML += foodList;


    // filter highest ingredient
    let maxCarb = 0;
    let maxCarbName = [];
    let maxFat = 0;
    let maxFatName = [];
    let maxProtein = 0;
    let maxProteinName = [];

    for(let i = 0; i < food.length; i++) {
        if(food[i].carb > maxCarb){
            maxCarb = food[i].carb
            maxCarbName.shift();
            maxCarbName.push(food[i].name);
        }
    }

    outputArea2.innerHTML = `${maxCarbName} has the highest carb`;

    for(let i = 0; i < food.length; i++) {
        if(food[i].fat > maxFat){
            maxFat = food[i].fat
            maxFatName.shift();
            maxFatName.push(food[i].name);
        }
    }

    outputArea3.innerHTML = `${maxFatName} has the highest fat`;

    for(let i = 0; i < food.length; i++) {
        if(food[i].protein > maxProtein){
            maxProtein = food[i].protein
            maxProteinName.shift();
            maxProteinName.push(food[i].name);
        }
    }

    outputArea4.innerHTML = `${maxProteinName} has the highest protein`;

    foodName.value = "";
    carbs.value = "";
    fats.value = "";
    proteins.value = "";
    
}


btn.addEventListener('click', foodSum);