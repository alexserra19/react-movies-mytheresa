import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../store/actions/mediaActions'
import AppConstants from '../utils/AppConstants';
import { CarouselComponent } from '../components/Carousel/CarouselComponent'
import { Row, Col } from 'antd';

class Home extends React.Component {

    componentDidMount() {
        this.props.actions.media.initializeStart()
    }

    handleClick = (item) => {
        this.props.actions.media.selectMedia(item)
        this.props.history.push('/details');
    }

    render() {

        console.log('this.props', this.props.media)

        return (
            <div className="layoutContainer">
                <h1>The Movie Database API</h1>
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
