const showHidePassword = () => {

    let input = document.querySelector('input[name="password"]');
    let icon = document.querySelector('.password-icon');
    let prop = input.getAttribute('type');

    if (prop === 'password') {
        input.setAttribute('type', 'text');
        icon.classList.remove('eye-slash-solid');
        icon.classList.add('eye-solid');
    } else {
        input.setAttribute('type', 'password');
        icon.classList.remove('eye-solid');
        icon.classList.add('eye-slash-solid');
    }
};

window.emailValidate = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

window.focusField = (e) => {

    e.removeAttribute('placeholder');
    let labelText = document.querySelector('label[for="' + e.name + '"]').firstElementChild;
    let helperText = document.querySelector('label[for="' + e.name + '"]').lastElementChild;

    labelText.classList.remove('display-none');
    labelText.classList.remove('text-red');
    e.classList.remove('input-error');

    helperText.classList.remove('text-red');
    helperText.classList.add('display-none');
};

window.unFocusField = (e) => {

    validateForm();

    if (e.name === 'fullname' && e.value !== '') {
        e.setAttribute('placeholder', 'Your name');
    } else if (e.name === 'password' && e.value !== '') {
        e.setAttribute('placeholder', 'Password');
    } else if (e.name === 'email' && e.value !== '') {
        e.setAttribute('placeholder', 'Email address');
    }
};

window.validateForm = () => {

    let fullname = document.querySelector('input[name="fullname"]');
    let email = document.querySelector('input[name="email"]');
    let password = document.querySelector('input[name="password"]');


    if ( fullname.value === '' ) {

        let labelText = document.querySelector('label[for="fullname"]').firstElementChild;
        let helperText = document.querySelector('label[for="fullname"]').lastElementChild;

        fullname.classList.add('input-error');
        labelText.classList.add('text-red');
        if (helperText.classList.contains('display-none')) {
            helperText.classList.remove('display-none');
        }
        helperText.classList.add('text-red');

        if ( document.querySelector('button').classList.contains('active') ) {
            document.querySelector('button').setAttribute('disabled', 'disabled');
            document.querySelector('button').classList.remove('active');
        }

    } else if (!emailValidate(email.value)) {

        let labelText = document.querySelector('label[for="email"]').firstElementChild;
        let helperText = document.querySelector('label[for="email"]').lastElementChild;
        email.classList.add('input-error');
        labelText.classList.add('text-red');

        if (helperText.classList.contains('display-none')) {
            helperText.classList.remove('display-none');
        }
        helperText.classList.add('text-red');

        if ( document.querySelector('button').classList.contains('active') ) {
            document.querySelector('button').setAttribute('disabled', 'disabled');
            document.querySelector('button').classList.remove('active');
        }

    } else if (password.value.length < 8) {

        let labelText = document.querySelector('label[for="password"]').firstElementChild;
        let helperText = document.querySelector('label[for="password"]').lastElementChild;

        password.classList.add('input-error');
        labelText.classList.add('text-red');
        if (helperText.classList.contains('display-none')) {
            helperText.classList.remove('display-none');
        }
        helperText.classList.add('text-red');

        if ( document.querySelector('button').classList.contains('active') ) {
            document.querySelector('button').setAttribute('disabled', 'disabled');
            document.querySelector('button').classList.remove('active');
        }

    } else {
        document.querySelector('button').removeAttribute('disabled');
        document.querySelector('button').classList.add('active');
    }
};