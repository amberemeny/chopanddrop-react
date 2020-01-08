import React, { Component } from 'react';

import Navigation from '../components/navigation.component'
import Header from '../components/header.component'
import Footer from '../components/footer.component'
import Faq from "../components/faq.component"

export default class FaqPage extends Component {
    render() {
        return(
            <>
                <Navigation />
                <Header />
                <Faq />
                <Footer />
            </>
        )
    }
}