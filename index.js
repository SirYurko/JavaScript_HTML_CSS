// Функція для перевірки валідності email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

document.getElementById('myform').addEventListener('submit', checkForm);

function checkForm(event){
    event.preventDefault();
    let el = document.getElementById('myform');

    let username = el.username.value;
    let email = el.email.value;
    let gender = el.gender.value;
    let password = el.password.value;
    
    //створюємо об'єкт для заведення користувача в базу
    let userDate = {
        userName: username,
        userEmail: email,
        userGender: gender,
        userPassword: password,
    }
    let error = '';

    //перевірка
    if(username.length < 2){
        error = "Ім'я занадто мале";
    }else if(email.length <5){
        error = "Email занадто малий";
    }else if (!validateEmail(email)){
        error = "Email введено не коректно";
    }else if(password.length <6){
        error = "Пароль надто малий";
    }else if(!gender){
        error = "Виберіть стать";
    }

    // Виведення помилки або успіху
    let errorMessage = document.getElementById('errorMessage');
    
    if (error !== '') {
        errorMessage.innerText = error;
        errorMessage.classList.add('error-message');
        return false;
    }


    errorMessage.innerText = "Форма відправлена успішно";
    errorMessage.classList.add('success-message'); 

    window.location = 'https://github.com/SirYurko' // після вірної форми перекидує на сторінку
    console.log(userDate)
    
    

    return false; // Повертаємо false, щоб форма не відправлялась
}

