import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', message: ''});

    //Handle form changes dynamically
    const handleChange = (e) => {
        //1. Extract the "name" and "value" from the form element that user inputs behind the scenes this triggers an event
        const { name, value } = e.target;
        //2. Update the form state by copying the previous state with ...prev
        //3. Change only the field that matches the input's "name" attribute
        setFormData(prev => ({
            ...prev,  //copy all previous form field and values
            [name]: value})); //overwrite just the field that is changed by changing the value with the user input
    }

    //Handle Submit
    const handleSubmit = (e) => {
        //1. Prevent the browser's default form submission behavior
        e.preventDefault();
        //2. Log the current form data
        console.log('Form Submitted', formData); 
        //3. Reset the form
        setFormData({ name: '', message: '' });
        //4. Route the user to the "Thank you" component using React Router's useNavigate();
        navigate('/thank-you')
    }

    return (
        <div className='container'>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className='card'>
                <label>
                    Name:
                    <input
                    type = "text"
                    name = "name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}