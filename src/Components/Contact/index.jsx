import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        alert("Thank you for reaching out to me! :)")
        e.target.reset();
        console.log(data);
    }
    console.log(errors);

    useEffect(() => {
        document.title = "Lucy Yang | Contact"
    })

    return (
        <div className="contact-wrapper">
            <h1>Contact Me!</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form name="contact" onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true">

                        <label htmlFor="fname">Full Name</label>
                        <input type="text" placeholder="Full Name" name="full_name" id="fname" ref={register({ required: true, min: 5, pattern: /^[a-zA-z']([^0-9]*)$/ })} />
                        <p className="error-msg">{errors.full_name && "Please enter in your full name! Make sure you're only submitting in letter characters in this field!!!"}</p>

                        <label htmlFor="mail">Email Address</label>
                        <input type="text" placeholder="Email address" name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="msg">Message</label>
                        <textarea name="message" placeholder="Write your message in here!" id="msg" ref={register({ required: true, min: 2, max: 1000, maxLength: 200 })}></textarea>
                        <p className="error-msg">{errors.message && 'Please enter in a message!'}</p>

                        <button type="submit" value="Submit" id="sub">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div >


    )

}

export default Contact;