import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Contact = () => {
    const [state, setState] = useState({ fullName: "", email: "", message: "" })

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (state, e) => {
        contactAPI(state).then(e.preventDefault())
        alert("Thank you for reaching out to me! :)")
        e.target.reset()
    }
    console.log(errors);


    const contactAPI = async (state) => {
        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-me", ...state })
            })
            const content = await res.json()
            console.log(content);
        }
        catch (error) {
            throw error;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        document.title = "Lucy Yang | Contact"
    })

    return (
        <div className="contact-wrapper">
            <h1>Contact Me!</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form name="contact-me" onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true">

                        <input type="hidden" name="contact-me" ></input>

                        <label htmlFor="fname">Full Name</label>
                        <input type="text" placeholder="Full Name" onChange={handleChange} name="full_name" id="fname" ref={register({ required: true, min: 5, pattern: /^[a-zA-z']([^0-9]*)$/ })} />
                        <p className="error-msg">{errors.full_name && "Please enter in your full name! Make sure you're only submitting in letter characters in this field!!!"}</p>

                        <label htmlFor="mail">Email Address</label>
                        <input type="text" placeholder="Email address" onChange={handleChange} name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="msg">Message</label>
                        <textarea name="message" placeholder="Write your message in here!" id="msg" onChange={handleChange} ref={register({ required: true, min: 2, max: 1000, maxLength: 200 })}></textarea>
                        <p className="error-msg">{errors.message && 'Please enter in a message!'}</p>

                        <button type="submit" value="Submit" name="submit" id="sub">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div >


    )

}

export default Contact;