const inputFields = document.querySelectorAll('.input-box input');

inputFields.forEach(inputField => {
    inputField.addEventListener('focus', () => {
        inputField.parentElement.querySelector('label').classList.add('active');
    });

    inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
            inputField.parentElement.querySelector('label').classList.remove('active');
        }
    });
});
