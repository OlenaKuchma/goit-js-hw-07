const input = document.querySelector('#validation-input');
    
    
 input.addEventListener('blur', () => {
        const enteredValue = input.value;
        const expectedLength = input.dataset.length;
      
        if (enteredValue.length === Number(expectedLength)) {
          input.classList.remove('invalid');
          input.classList.add('valid');
        } else {
          input.classList.remove('valid');
          input.classList.add('invalid');
        }
      });
    