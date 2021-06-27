import React from 'react';
import { Row, Col, Rate } from 'antd';
import './WishListItem.scss';
import { Link } from 'react-router-dom';

export const WishListItem = (props) => {
    return (
        <Link to={'details/' + props.item.id}>
            <Row className="wish-list-item">
                <Col xs={24} md={4}>
                    <img src={props.item.image} className="wish-item-image" alt="image"/>
                </Col>
                <Col xs={24} md={20} className="item-info-container">
                    <Row>
                        <Col span={24} className="title">
                            <h3>{props.item.title}</h3>
                        </Col>
                        <Col span={24} className="rate-items">
                            <Rate value={props.item.rate} />
                            <small> {props.item.numVotes}</small>
                        </Col>
                        <Col span={24} className="description">
                            <p>{props.item.description}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Link>
    );
}