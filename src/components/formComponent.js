const FormComponent = () => {
return(
    <div>
        <label for="FirstName"></label>
        <input id="firstName" name="firstName" type="text" placeholder="First Name" required maxlength="25"/>
        <label for="LastName"></label>
        <input id="lastName" name="lastName" type="text" placeholder="Last Name" required maxlength="25"/>
        <label for="Email"></label>
        <input id="email" name="email" type="text" placeholder="Email" required />
        <label for="PhoneNumber"></label>
        <input id="phoneNumber" name="PhoneNumber" type="number" placeholder="Phone Number" required />
        <label for="Password"></label>
        <input id="password" name="Password" type="password" placeholder="Password" required />
        <label for="Confirm Password"></label>
        <input id="confirmPassword" name="Password" type="password" placeholder="Confirm Password" required />
        <button id="submitButton">SUBMIT</button>
    </div>
)
}

export default FormComponent