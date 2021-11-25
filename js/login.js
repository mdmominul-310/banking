document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('exampleInputEmail1');
    const email = emailField.value;
    //get pass
    const passFeild = document.getElementById('exampleInputPassword1');
    const pass = passFeild.value;
    if (email == 'ami@gmail.com' && pass == 'pass') {
        window.location.href = 'banking.html'
    }
    else {
        window.alert('wrong user name or password!');
    }
})