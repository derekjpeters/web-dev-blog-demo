import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		category: "general",
		priority: "medium", //radio button low | medium | high - FIXED: changed from 'normal' to 'medium' to match radio options
		subscribe: false, //checkbox to allow users to subscribe
		message: "",
	});

	useEffect(() => {
		console.log("📱 Contact component mounted");
		console.log("Initial form state:", formData);
		return () => console.log("📱 Contact component unmounted");
	}, []);

	useEffect(() => {
		console.log("📊 Form data updated:", formData);
	}, [formData]);

	//Handle form changes dynamically
	const handleChange = (e) => {
		//1. Extract the "name" and "value" from the form element that user inputs behind the scenes this triggers an event
		const { name, type, value, checked } = e.target;
		const next = type === "checkbox" ? checked : value;
		//Log to see every change
		console.log("Contact change:", { field: name, type, value: next });
		console.log("Previous form state:", formData);
		//2. Update the form state by copying the previous state with ...prev
		//3. Change only the field that matches the input's "name" attribute
		setFormData((prev) => {
			const newState = {
				...prev, //copy all previous form field and values
				[name]: next, //FIXED: use 'next' instead of 'value' for proper checkbox handling
			};
			console.log("New form state:", newState);
			return newState;
		}); //overwrite just the field that is changed by changing the value with the user input
	};

	//Client-Side Validation
	const validate = () => {
		console.log("Starting form validation...");
		console.log("Validating form data:", formData);
		
		if (!formData.name.trim()) {
			console.log("❌ Validation failed: Missing Name");
			console.log("Name field value:", JSON.stringify(formData.name));
			return { ok: false, reason: "Please Enter Your Name." };
		}
		console.log("✅ Name validation passed");

		if (
			!formData.email.trim() ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
		) {
			console.log("❌ Validation failed: Invalid email");
			console.log("Email field value:", JSON.stringify(formData.email));
			console.log("Email regex test:", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email));
			return { ok: false, reason: "Please enter a valid email." };
		}
		console.log("✅ Email validation passed");

		if (!formData.subject.trim()) {
			console.log("❌ Validation failed: Missing Subject");
			console.log("Subject field value:", JSON.stringify(formData.subject));
			return { ok: false, reason: "Please enter a subject." };
		}
		console.log("✅ Subject validation passed");

		if (!formData.message.trim() || formData.message.trim().length < 10) {
			console.log("❌ Validation failed: Message too short or empty");
			console.log("Message field value:", JSON.stringify(formData.message));
			console.log("Message length:", formData.message.trim().length);
			return { ok: false, reason: "Message should be at least 10 characters" };
		}
		console.log("✅ Message validation passed");
		
		console.log("🎉 All validation checks passed!");
		return { ok: true };
	};

	//Handle Submit
	const handleSubmit = (e) => {
		//1. Prevent the browser's default form submission behavior
		e.preventDefault();
		console.log("=== FORM SUBMISSION STARTED ===");
		console.log("Submit button clicked");
		//2. Log the current form data
		console.log("Current form data:", formData);

		// FIXED: Validate BEFORE navigation, not after
		const result = validate();
		console.log("Validation result:", result);
		
		if (!result.ok) {
			console.log("Form submission blocked:", result.reason);
			console.log("Form has errors, stopping submission");
			alert(result.reason);
			return;
		}

		console.log("Form validation passed! Proceeding with submission...");
		console.log("Submitting payload:", formData);

		//3. Reset the form
		setFormData({
			name: "",
			email: "",
			subject: "",
			category: "general",
			priority: "medium",
			subscribe: false,
			message: ""
		});
		console.log("Contact form reset to initial state");

		//4. Route the user to the "Thank you" component using React Router's useNavigate();
		console.log("Navigating to thank-you page...");
		navigate("/thank-you");
		console.log("=== FORM SUBMISSION COMPLETED ===");
	};

	//console.log("Submitting Payload", formData);

//     setFormData({
//         name: '',
//         email: '', 
//         subject: '',
//         category: 'general',
//         subscribe: false,
//         message: ''
//     })
//    console.log('Contact Form Reset')

	return (
		<div className="container">
			<h1>Contact Us</h1>
			<form onSubmit={handleSubmit} className="card" noValidate>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
                        onFocus={() => console.log('🎯 Focus: name field')}
                        onBlur={() => console.log('👋 Blur: name field')}
                        required
					/>
				</label>
				<br />
                <label>
                    Email:
                    <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: email field')}
                    onBlur={() => console.log('👋 Blur: email field')}
                    required
                    />
                    
                </label>
                <br />
                <label>
                    Subject:
                    <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: subject field')}
                    onBlur={() => console.log('👋 Blur: subject field')}
                    required
                    />
                    

                </label>
                <br />
                <br />
                <label>
                    Category:
                    <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: category dropdown')}
                    onBlur={() => console.log('👋 Blur: category dropdown')}
                    >
                        <option value="general">General Comments</option>
                        <option value='bug'>Bug</option>
                        <option value='feature'>Feature Request</option>
                        <option value='billing'>Billing</option>
                    </select> 
                </label>
                <br />
                <br />
                <fieldset style={{border: '1px solid #374151', borderRadius: 8, padding: '1rem'}}>
                <legend>Priority</legend>
                <label style={{ marginRight: '1rem'}}>
                    <input 
                    type="radio"
                    name='priority'
                    value="low"
                    checked={formData.priority === 'low'}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: priority low radio')}
                    /> Low
                </label>
                <label style={{ marginRight: '1rem'}}>
                <input 
                    type="radio"
                    name='priority'
                    value="medium"
                    checked={formData.priority === 'medium'}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: priority medium radio')}
                    /> Medium
                </label>
                <label style={{ marginRight: '1rem'}}>
                <input 
                    type="radio"
                    name='priority'
                    value="high"
                    checked={formData.priority === 'high'}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: priority high radio')}
                    /> High
                </label>
                </fieldset>
                <br />

                <label>
                    <input 
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    onFocus={() => console.log('🎯 Focus: subscribe checkbox')}
                    onBlur={() => console.log('👋 Blur: subscribe checkbox')}
                    /> {' '} Subscribe to future udpates
                </label>
                <br />
				<label>
					Message:
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
                        onFocus={() => console.log('🎯 Focus: message field')}
                    onBlur={() => console.log('👋 Blur: message field')}
                    placeholder="How can we help? (10+ Chars)"
                    required
					></textarea>
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
