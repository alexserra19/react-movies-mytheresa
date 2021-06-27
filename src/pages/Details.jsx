import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../store/actions/mediaActions'
import { Row, Col } from 'antd';
import MediaService from '../services/MediaService';

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            media: {}
        }
    }


    async componentDidMount() {
        const id = this.props.match.params.id
        const media = await MediaService.getMediaDetailsById(id);
        this.setState({ media })
        console.log('media', media)
    }



    render() {
        console.log('this.props', this.props)


        return (
            <div className="layoutContainer">
                <h1>Details</h1>
                <Row style={{overflow: 'hidden'}}>
                    <Col sm={24} md={10}>
                        <img src={this.state.media.image} className="menuImage" alt={this.state.media.title} />
                    </Col>
                    <Col sm={24} md={14}>
                <h2>{this.state.media.title}</h2>
                        <p>{this.state.media.description}</p>
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
