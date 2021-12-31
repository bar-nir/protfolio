import './Contact.css';
import emailjs from "emailjs-com"
import React, { useState } from 'react';
function Contact() {
    const [email, setEmail] = useState("");
    const [formError, setFormError] = useState({ email: "" });
    const [error, SetError] = useState(null);
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    const sendEmail = (e) => {
        //Prevent the default submit action
        e.preventDefault();
        //Sending Mail using Email js
        emailjs.sendForm('gmail', 'template_iiei5dl', e.target, 'user_Yodr0sc4th4PNzrDnjvhX')
            .then((result) => {
                alert("Email sent successfully")
                //Reset The Fields affter Sent Mail.
                e.target.reset();
            }, (error) => {
                alert("Email Wasnt Sent , Error")
            });
        //Setting the Email state back to nothing
        setEmail("");
    };
    const handleChange = (e) => {
        //Setting the Email State to his current value.
        setEmail(e.target.value);
        //Testing if the Email is a valid mail
        if (regex.test(e.target.value) === false) {
            //Seting the error state.
            SetError(false);
            //Set the Error Message
            setFormError({ email: "Email is not valid" })
        }
        else {
            SetError(true);
            setFormError({ email: "" })
        }
    }
    const notSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='ContactCenter'>
            <div className='centerForm'>
                <h1>Send me an email</h1>
                {/* Check if the there is an error in the form */}
                <form onSubmit={error ? sendEmail : notSubmit}>
                    <div className="inputbox">
                        <input type="text" required="required" name="subject"></input>
                        <span>Subject</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" required="required" name="first_name"></input>
                        <span>First Name</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" required="required" name="last_name"></input>
                        <span>Last Name</span>
                    </div>
                    <div className="inputbox">
                        {/* Check if the there is an error in the mail field , and apllying style by it */}
                        <input type="text" required="required" name="reply_to" style={error === false ? { border: "2px solid red" } : {}} onChange={handleChange} value={email}></input>
                        <span>Email</span>
                        <p className='error'>{formError.email}</p>
                    </div>
                    <div className="inputbox mail">
                        <input type="text" required="required" name="message"></input>
                        <span>Email Content</span>
                    </div>
                    <div className="inputbox">
                        <input type="submit"></input>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Contact;