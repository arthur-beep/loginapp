function Validation(inputs) {

    const  error = {}
    const email_pattern =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const password_pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if(inputs.name==='')
    {
        error.name = 'Name should not be empty'
    }
    else {
        error.name=''
    }

    if(inputs.email==='')
    {
        error.email = 'Email should not be empty'
    }
    else if(!email_pattern.test(inputs.email)) {
        error.email='invalid email address'
    }
    else {
        error.email=''
    }

    if (inputs.password === '') {
        error.password = "Password should not be empty";
    }
    else if(!password_pattern.test(inputs.password)) {
        error.password = "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.";
    }
      else {
        error.password=''
      }
      return error;
    }

export default Validation;
    