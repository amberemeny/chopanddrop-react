import React, { Component } from 'react';

import Navigation from '../components/navigation.component'
import Header from '../components/header.component'
import Footer from '../components/footer.component'
import ContactForm from '../components/contactForm.component'

export default class Contact extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Header />
                <ContactForm />
                <Footer />
            </>
        )
    }
}