import React, { Component } from 'react';

export default class Ticker extends Component {
    render() {
        return (
            <>
                <div className="ticker-wrap bg-dark">
                    <div className="ticker">
                        <div className="ticker__item h5">Now servicing Brisbane and Gold Coast areas</div>
                    </div>
                </div>
            </>
        )
    }
}