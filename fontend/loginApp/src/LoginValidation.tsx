function Validation(inputs) {

    alert('')
    const error = { }
    const email_pattern =  /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/
    const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    if(inputs.email==='')
    {
        error.email = 'Email should not be empty'
    }
    else if(!email_pattern.test(inputs.email)) {
        error.email='email did not match'
    }
    else {
        error.email=''
    }

    if (inputs.password === '') {
        error.password = "Password should not be empty";
    }
    else if(!password_pattern.test(inputs.password)) {
        error.password = "Password did not match";
    }
      else {
        error.password=''
      }
      return error;
    }

export default Validation;
    
