import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../store/actions/mediaActions'
import AppConstants from '../utils/AppConstants';
import { CarouselComponent } from '../components/Carousel/CarouselComponent'
import { LoadingSpinner } from '../components/shared/LoadingSpinner/LoadingSpinner'

import { Row, Col, Layout } from 'antd';
import _ from 'lodash'
import './Home.scss'

const { Content } = Layout;


class Home extends React.Component {

    componentDidMount() {
        if (_.isEmpty(this.props.media.popularMovies)) {
            this.props.actions.media.initializeStart()
        }
    }

    handleClick = (item) => {
        this.props.actions.media.selectMedia(item)
        this.props.history.push('/details/' + item.id);
    }

    renderContent = () => {
        return (
            <div>

                <Row>
                    <Col span={24}>
                        <CarouselComponent
                            title={AppConstants.carouselTitles.popular}
                            elements={this.props.media.popularMovies}
                            handleClick={this.handleClick}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <CarouselComponent
                            title={AppConstants.carouselTitles.topRated}
                            elements={this.props.media.topRatedMovies}
                            handleClick={this.handleClick}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <CarouselComponent
                            title={AppConstants.carouselTitles.upcoming}
                            elements={this.props.media.upcomingMovies}
                            handleClick={this.handleClick}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

    render() {
        return (
            <Layout className="layout">
                <Content className="layoutContainer">
                    <h1>Home</h1>
                    {this.props.media.isLoading ?
                        <LoadingSpinner />
                        : this.renderContent()
                    }

                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    media: state.mediaReducer
});

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            media: bindActionCreators(mediaActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
