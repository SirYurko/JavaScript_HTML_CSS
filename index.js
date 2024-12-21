let block = document.getElementById('some-block');

block.innerHTML = 'Цей текст був записаний за допомогою, <b>innerHTML в JS коді</b>';
block.style.color = 'red';
block.style.backgroundColor = '#333';
block.className = 'block';

console.log("Ми додали клас для змінної " + "Class: " + block.className)

document.getElementById('para').innerHTML = "Some Text by getElementById"

// let spans = document.getElementsByTagName('span');
let spans = document.getElementsByClassName("el_span");

for(let i = 0; i < spans.length; i++){  // проходимось по кожному елементу в масиві
    spans[i].style.fontSize = "25px"    // для кожного елементу збільшуємо шрифт
    spans[i].title = spans[i].innerText + "!"; // для кожного елемента ми додали спец текст при наведенні
}

let paragraphs = document.getElementsByTagName('p')

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red" // Змінюємо стиль кожного параграфа
}

paragraphs[0].style.color = 'green' // Звертаємось до першого елемента

paragraphs[1].style.fontSize = "23px"

let form = document.getElementsByTagName('form')

function checkForm(el){
    let username = el.username.value;
    let email = el.email.value;
    let gender = el.gender.value;

    let userDate = {
        NickName: username,
        userEmail: email,
        gender: gender,
    }

    // if(document.getElementById("male").checked){
    //     userDate.gender = "Male";
    // }else if (document.getElementById("female").checked){
    //     userDate.gender = "Female";
    // }else console.log("Gender undefinded")

    console.log(userDate)
    return false
}

