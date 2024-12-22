

function checkForm(event, el){
    event.preventDefault();

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
    }else if (!email.includes("@")){
        error = "Email введено не коректно";
    }else if(password.length <6){
        error = "Пароль надто малий";
    }else if(gender == null || gender == ''){
        error = "gender error";
    }

    // Виведення помилки або успіху
    let errorMessage = document.getElementById('errorMessage');
    if (error !== '') {
        errorMessage.innerText = error;
        return false;
    }


    errorMessage.innerText = "Форма відправлена успішно";
    errorMessage.style.color = 'green';
    errorMessage.style.backgroundColor = 'white'

    window.location = 'https://github.com/SirYurko' // після вірної форми перекидує на сторінку
    console.log(userDate)
    
    

    return false; // Повертаємо false, щоб форма не відправлялась
}

