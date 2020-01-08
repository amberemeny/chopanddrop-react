import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class ContactForm extends Component {
    render(){
        return (
            <div className="bg-secondary text-light" id="contactFormContainer">
                <h3 className="text-center text-uppercase">Contact Us</h3>
                <form action="https://formsubmit.co/amb3r94@gmail.com" method="POST">
                    <div id="fieldset">
                        <label for="name">Name:</label>
                        <input type="text" name="name" placeholder="John Smith" />
                    </div>

                    <div id="fieldset">
                        <label for="number">Contact Number:</label>
                        <input type="number" name="number" placeholder="0400000000" />
                    </div>

                    <div id="fieldset">
                        <label for="email">Email:</label>
                        <input type="email" name="email" placeholder="johnsmith@hotmail.com" />
                    </div>

                    <div id="fieldset" className="method">
                        <label for="method">Preferred Method of Contact:</label><br />
                        <div id="methodList">
                            <input type="radio" name="method" value="any" checked /> <span id="methodText">Any</span><br />
                            <input type="radio" name="method" value="phone" /> <span id="methodText">Phone</span><br />
                            <input type="radio" name="method" value="email" /> <span id="methodText">Email</span>
                        </div>
                    </div>

                    <div id="fieldset">
                        <label for="address" >Address of Job:</label>
                        <input type="text" name="address" placeholder="123 Brisbane Street" />
                    </div>

                    <div id="fieldset">
                        <label for="message">Message:</label>
                        <textarea name="message"></textarea>
                    </div>

                    
                    <input type="hidden" name="_captcha" value="false" />
                    <Button type="submit" id="submit">Send Message</Button>
                </form>
            </div>
        )
    }
}