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
    const outputArea2 = document.querySelector('.outputArea2');
    const outputArea3 = document.querySelector('.outputArea3');
    const outputArea4 = document.querySelector('.outputArea4');


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
    let maxFat = 0;
    let maxFatName;
    let maxProtein = 0;
    let maxProteinName;




    // Carb Filter
    for(let i = 0; i < food.length; i++) {
        if(food[i].carb > maxCarb) {
            maxCarb = food[i].carb
            maxCarbName = `${food[i].name} has the highest carb <br>`;
        }
    }
        
    outputArea2.innerHTML = maxCarbName;

    // Fat Filter
    for(let i = 0; i < food.length; i++) {
        if(food[i].fat > maxFat) {
            maxFat = food[i].fat
            maxFatName = `${food[i].name} has the highest fat <br>`;
        }
    } 
            
    outputArea3.innerHTML = maxFatName;

     // Proitein Filter
    for(let i = 0; i < food.length; i++) {
        if(food[i].protein > maxProtein) {
            maxProtein = food[i].fat
            maxProteinName = `${food[i].name} has the highest protein <br>`;
        }
    } 
            
    outputArea4.innerHTML = maxProteinName;

    foodName.value = "";
    carbs.value = "";
    fats.value = "";
    proteins.value = "";
    
}


btn.addEventListener('click', foodSum);

console.log(food)

