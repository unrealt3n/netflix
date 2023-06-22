function onGetStart(e) {
    e.preventDefault();
    
    console.log(e.target.id);
    let input1 = document.querySelector('#email1Input').value;  
    let input2 = document.querySelector('#email2Input').value;
    let email = (e.target.id == 'email1') ? input1 : input2;

    let errorMsg1 = document.querySelector('#errorMsg1')
    let errorMsg2 = document.querySelector('#errorMsg2')

    let pattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(email.length !=0 ){

        if(pattern.test(email)){
            alert( 'received your email '+ email);
            document.querySelector('#email2Input').value = '';
            document.querySelector('#email1Input').value = '';
            email == input1 ? errorMsg1.style.display = "none" : errorMsg2.style.display = "none";
            
        }else{
            email == input1 ? errorMsg1.style.display = "block"  : errorMsg2.style.display = "block" ;
        }
}else{
    alert('email field cannot be blank')
}
}
