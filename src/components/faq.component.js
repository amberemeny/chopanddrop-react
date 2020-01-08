import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class Faq extends Component {
    render() {
        return (
            <>
                <h3 className="text-center">Frequently Asked Questions</h3>
                <div id="accordionContainer">
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" id="accordianToggle">
                                <div id="toggleIcon">
                                    <img src="https://image.flaticon.com/icons/svg/953/953818.svg" alt=""></img>
                                </div>
                                <div id="toggleText">
                                    Lorem ipsum dolor sit amet consectetur?
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere sunt exercitationem repellat aut aliquid nostrum dolores deleniti perferendis? Repellat sequi vitae rem. Exercitationem sint quos officia cupiditate culpa quae.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <div id="toggleIcon">
                                    <img src="https://image.flaticon.com/icons/svg/953/953818.svg" alt=""></img>
                                </div>
                                <div id="toggleText">
                                    Lorem ipsum dolor sit amet consectetur adipisicing?
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque molestiae id possimus tempora alias! Nostrum unde sunt ut nulla sapiente!
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </>
        )
    }
}