const form = document.getElementById('form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;

    const height = document.getElementById('height').value;

    const imc = (weight/(height*height)).toFixed(2);
    //tofixed só vai mostrar duas casas depois da virgula

    const value = document.getElementById('value');
    value.classList.add('attention');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'Cuidado! Você esta abaixo do peso.'
    }
    else if (imc >= 18.5 && imc <= 25){
        description = 'Você está no peso ideal!'
        value.classList.remove('attention');
        value.classList.add('normal')
    }
    else if (imc > 25 && imc <= 30){
        description = 'Cuidado! Você esta com sobrepeso.'
    }
    else if (imc > 30 && imc <= 35){
        description = 'Cuidado! Você esta com obesidade moderada.'
    }
    else if (imc > 35 && imc <= 40){
        description = 'Cuidado! Você esta com obesidade severa.'
    }
    else {
        description = 'Cuidado! Você esta com obesidade mórbida.'
    }

    value.textContent= imc.replace('.' , ',');
    document.getElementById('description').textContent = description;
} )