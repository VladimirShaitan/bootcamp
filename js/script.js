'use strict';

const form = document.getElementById('contact-form');

const submitHandler = function (event) {
    event.preventDefault();

    const inputs = form.querySelectorAll('input');

    const data = {
        userName: inputs[0].value,
        phone: inputs[1].value
    }

    localStorage.setItem('formData', JSON.stringify(data))
}

form.addEventListener('submit', submitHandler)

// console.log(form)
