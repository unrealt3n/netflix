function onGetStart(e) {
    e.preventDefault();
    
    console.log(e.target.id);
    let input1 = document.querySelector('#email1Input').value;  
    let input2 = document.querySelector('#email2Input').value;
    let email = (e.target.id == 'email1') ? input1 : input2;
    
    if(email.includes('@' && '.com')){
        alert( 'received your email '+ email);
        document.querySelector('#email2Input').value = '';
        document.querySelector('#email1Input').value = '';
    }else{
        alert( 'make sure form in filled and given a valid email');
    }
}