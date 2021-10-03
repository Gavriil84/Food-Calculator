const food = [];

// Food class
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
    const outputArea = document.querySelector('.outputArea');


    let foodDetail = new Foods(name, carb, fat, protein)

    if (name == null || name == "", carb == null || carb == "", fat == null || fat == "", protein == null || protein == "") {
        alert("Please Fill All Required Field");
        return false;
    } else {
        food.push(foodDetail);
    }

    let foodList;

    for(let i = 0; i < food.length; i ++){
        foodList = `${name}<br>`
    }
    outputArea.innerHTML += foodList;

    let maxCarb = 0;
    let maxCarbName;

    for(let i = 0; i < food.length; i++) {
        if(food[i].carb > maxCarb) {
            maxCarbName = food[i].name;
        }
    }
    
    console.log(maxCarbName)

    // function getCarb(){
    //     return food.map(f => f.carb)
    // }

    // function getMaxCarb(){
    //     return Math.max(...getCarb())
    // }

    // const maxCarb = getMaxCarb()
    // console.log(maxCarb)


    foodName.value = "";
    carbs.value = "";
    fats.value = "";
    proteins.value = "";
    
}


btn.addEventListener('click', foodSum);

console.log(food)

