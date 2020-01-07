import React, { Component } from 'react'
    // Bootstrap Integration
import 'bootstrap/dist/css/bootstrap.min.css'

    // Top-Level Components
import Navigation from './components/navigation.component'
import Testimonials from './components/testimonials.component'
import Header from './components/header.component'
import Ticker from './components/ticker.component'
import Services from './components/services.component'
import Footer from './components/footer.component'

    // Conditional Components

// Application Rendering
export default class App extends Component {
    render () {
        return (
            <div>
                <Navigation />
                <Header />
                <Ticker />
                <Services />
                <Testimonials />
                <Footer />
            </div>
        )
    }
}
