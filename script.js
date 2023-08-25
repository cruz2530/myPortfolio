const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) =>{
    event.preventDefault();

    //NAME VALIDATION
    if(name.value.trim() == ''){
        error(name, 'Name can not be empty')
    }else {
        success(name);
    }

    //EMAIL VALIDATION
    if(email.value.trim() == ''){
        error(email, 'Email can not be empty')
    }else {
        success(email);
    }

    //MESSAGE VALIDATION
    if(message.value.trim() == ''){
        error(message, 'Please leave a feedback')
    }else {
        success(message);
    }
});


function error(element, msg){
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}


function success(element) {
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';
}

function SendMail() {
    var params = {
        from_name : name.value,
        email_id : email.value,
        message : message.value
    }
    emailjs.send("service_saw1wws", "template_5wqlkb6", params).then(function (res) {
        alert("Success " + res.status);
    })
}
