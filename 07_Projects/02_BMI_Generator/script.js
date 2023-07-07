const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = "Enter a Valid Height";
    } else if (weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Enter a Valid Weight";
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // Show the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
})