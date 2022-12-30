
$('#calculate').on('click',function (){
    let height = $('#height').val();
    let weight = $('#weight').val();


    if (height===''||weight===''){
        alert('Input Correct Value !!!');
    }
});