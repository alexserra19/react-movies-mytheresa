import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../store/actions/mediaActions'
import AppConstants from '../utils/AppConstants';
import { CarouselComponent } from '../components/Carousel/CarouselComponent'
import { Row, Col } from 'antd';

class Details extends React.Component {

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
                <h1>{this.props.media.selectedMedia.title}</h1>
                <Row>
                    <Col span={24}>
                       
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
