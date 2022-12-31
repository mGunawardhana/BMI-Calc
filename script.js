$('#calculate').on('click', function () {

    let height = $('#height').val();
    let weight = $('#weight').val();
    let status = '';

    if (height === '' || weight === '') {
        alert('Input Correct Value !!!');
    }

    height = height / 100;

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    if (BMI < 18.5) {
        status = "UnderWeight !"
    } else if (BMI >= 18.5 && BMI <24.9) {
        status = 'Healthy !'
    } else if (BMI >= 25 && BMI < 29.9) {
        status = 'OverWeight !'
    } else if (BMI >= 30) {
        status = 'Obese !'
    }


    document.querySelector('.comment')
        .innerHTML =
        `Comment : You are <span id="comment">${status}</span>`;

});