import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' 

export default class Testimonials extends Component {
    render() {
        return (
            <>
                <h3 className="text-center">Testimonials</h3>
                <Carousel>
                    <Carousel.Item>
                        <div id="innerCarouselContainer">
                            <div id="outerTestContainer">
                                <div id="upperTestContainer">
                                "Jay came out and quoted within 15 minutes of me posting the job. His quote was very affordable! Within a week our job was done. He was efficient, tidy and it was great to be able to pay by card upon completion. We are very happy with the job (4 x 5metre trees lopped and taken away). Thanks Jay!! :)" 
                                </div>
                                <div id="lowerTestContainer">
                                - Rhiannen from Rochedale South <br />
                                Hipages, October 2019
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div id="innerCarouselContainer">
                            <div id="outerTestContainer">
                                <div id="upperTestContainer">
                                "Jay was quick and to the point! Did over and above his job. Will definitely get him back again! Highly recommend"
                                </div>
                                <div id="lowerTestContainer">
                                - Rachel from Ormiston, QLD <br />
                                Hipages, October 2019
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div id="innerCarouselContainer">
                            <div id="outerTestContainer">
                                <div id="upperTestContainer">
                                "I just want to say a big thank you to Jay from Chop and Drop Tree Lop , Called him up - He came out the SAME DAY to perform a quotation on a Tree Removal job at our home. He was very professional upon arrival, his pricing was very competitive and his workmanship was second to none. My partner and I are extremely happy with the completed job and will not be shopping around next time we need any Tree or yard works done. Would happily recommend his services to family and friends. Thanks Chop and Drop Tree Lop."
                                </div>
                                <div id="lowerTestContainer">
                                - Kieran E from Rochedale South, QLD <br />
                                Hipages, October 2019
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}