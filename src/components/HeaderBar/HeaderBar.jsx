import React from 'react';
import { Row, Col, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './HeaderBar.scss'

const { Header } = Layout;


export const HeaderBar = () => {
    return (
        <Header className="header-container">
            <Row>
                <Col xs={20} md={4} className="web-title">
                    <Link to="/home">
                        <h3>The Movie Database</h3>
                    </Link>
                </Col>
                <Col xs={4} md={20}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="home">
                            <Link to="/home">{'Home'}</Link>
                        </Menu.Item>
                        <Menu.Item key="wish">
                            <Link to="/wishlist">{'Wish List'}</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    );
}



