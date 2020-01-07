import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid bg-success">
                <div id="quoteContainer" className="rounded border border-secondary">
                    <div id="quoteText">
                        <span className="text-uppercase h2" >Call us today!</span><br />
                        <span className="text-uppercase h2 font-weight-bold" >0417 879 364</span><br />
                        <span className="h5" >Professional and reliable service, delivered by experienced hands.</span>
                    </div>
                    <button id="quoteButton" className="btn btn-primary text-uppercase btn-lg">Get A Free Quote Now!</button>
                </div>
            </div>
        )
    }
}