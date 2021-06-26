import React from 'react';
import { Row, Col, Carousel } from 'antd';
import './CarouselComponent.scss'
import { CarouselItem } from './CarouselItem'

export const CarouselComponent = (props) => {

    const renderCarouselItem = (item) => {
        return (
            <CarouselItem
                item={item}
                key={item.id}
                handleClick={props.handleClick}
            />
        )
    }

    return (
        <Row className="carousel-component">
            <Col span={24}>
                <h2>{props.title}</h2>
            </Col>
            <Col span={24} className="carousel-container">
                <Carousel
                    autoplay
                    dots={false}
                >
                    {props.elements.map((item) => renderCarouselItem(item))}
                </Carousel>
            </Col>
        </Row>
    );
}