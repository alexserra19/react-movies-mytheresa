import React from 'react';
import { Row, Col, Rate } from 'antd';
import './WishListItem.scss';
import { Link } from 'react-router-dom';

export const WishListItem = (props) => {

    console.log('item', props.item)
    return (
        <Link to={'details/'+props.item.id}>
            <Row className="wish-list-item">
                <Col span={4}>
                    <img src={props.item.image} className="wish-item-image" alt="image" />
                </Col>
                <Col span={20} className="item-info-container">
                    <Row>
                        <Col span={24}>
                            <Row className="top-row">
                                <Col span={18} className="title">
                                    <h3>{props.item.title}</h3>
                                </Col>
                                <Col span={6} className="rate">
                                    <Rate value={props.item.rate} />
                                    <small> {props.item.numVotes}</small>
                                </Col>
                            </Row>
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