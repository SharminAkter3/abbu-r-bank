//step:1 add click event handler with the submit button 
document.getElementById("btn-submit").addEventListener('click', function () {
    // console.log('Submit button click')

    //step-2 get the email address inside the email input field
    //always remember to use .value to get text form an input field
    const emailFeild = document.getElementById("user-email");
    const email = emailFeild.value;
    // console.log(email);

    //step - 3 : get password 
    // 1=> set id on the html element
    // 2=> get the element 
    // 3=> get the value form the element 
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(email, password);
    // Danger : Do not varify email password on the client side

    // step- 4 : verify email and password
    if (email === 'sharmin4145@gmail.com' && password == 'ShArmin') {
        // console.log('valid user')
        window.locationbar.href = 'bank.html';
    }
    else {
        // console.log('invalid user')
        alert('Dhuru Jhaa');
    }

});
