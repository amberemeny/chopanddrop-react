import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export default class Services extends Component {
    render() {
        return (
            <>  
                <h3 className="text-center">Services</h3>
                <CardDeck>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://picsum.photos/200" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://picsum.photos/200" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://picsum.photos/200" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </CardDeck>
            </>
        )
    }
}