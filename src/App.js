import React, { useState } from "react";
import "./index.css";


function App() {
  const [values, setValues] = useState({
    fistName: "",
    lastName: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, fistName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleemailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.fistName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for register</div> : null}
          <input onChange={handleFirstNameInputChange} value={values.fistName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.fistName ? <span>Please enter a First name</span> : null }
          
          <input onChange={handleLastNameInputChange} value={values.lastName} 
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a Last name</span> : null }

        <input onChange={handleemailInputChange} value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter a E-mail Address</span> : null }

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App