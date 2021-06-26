import React from 'react';
import { Row, Col } from 'antd';
import helpers from '../../utils/helpers';

export const CarouselItem = (props) => {

    return (
        <a onClick={()=> props.handleClick(props.item)}>
            <Row className="carousel-item">
                <Col span={24}
                    style={{
                        backgroundImage: `url(${props.item.image})`,
                        // backgroundSize: 'cover',
                        height: '300px',
                        position: 'relative'
                    }}
                >
                    <Row className="info-carousel-item">
                        <Col span={24}>
                            <b>{props.item.title}</b>
                        </Col>
                        <Col span={24} className="description-container">
                            <p>{helpers.reduceText(props.item.description, 100)}</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </a>
    );
}