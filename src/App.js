import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
    // Bootstrap Integration
import 'bootstrap/dist/css/bootstrap.min.css'

    // Top-Level Components
import Homepage from "./pages/homepage.page"
import Contact from "./pages/contact.page"
import Faqpage from "./pages/faq.page"

    // Conditional Components

// Application Rendering
export default class App extends Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/faq" component={Faqpage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
