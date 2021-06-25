import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../store/actions/mediaActions'

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.media.initializeStart()
    }

    render() {

        console.log('this.props', this.props)

        return (
            <h1>jejejeje home</h1>
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
