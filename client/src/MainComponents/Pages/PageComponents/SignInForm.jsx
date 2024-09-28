import { useState, useEffect } from "react";

export default function SignInForm() {
const [formData, setFormData] = useState({ username: '', password: '' });
const [submitted, setSubmitted] = useState(false);

  // Load the saved username from localStorage when the component mounts
useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
    setFormData((prevData) => ({ ...prevData, username: savedUsername }));
    setSubmitted(true); 
    }
}, []);

function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
}

function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('username', formData.username); // Save the username in localStorage
    console.log('Form Submitted');
    console.log(formData);
    setSubmitted(true);
}

return (
    <div>

    {!submitted && (
        <form onSubmit={handleSubmit}>
        <input
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
        />
        <input
            name="password"
            placeholder="Enter Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
        />
        <button type="submit">Submit</button>
        </form>
    )}

    {submitted && (
        <div>
        <h2>Welcome, {formData.username}!</h2>
        </div>
    )}

    </div>
);
}