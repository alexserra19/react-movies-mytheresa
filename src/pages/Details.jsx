import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../store/actions/mediaActions'
import { Row, Col, Layout, Button, Divider } from 'antd';
import MediaService from '../services/MediaService';
import { LoadingSpinner } from '../components/shared/LoadingSpinner/LoadingSpinner'
import './Details.scss'

const { Content } = Layout;

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            media: {}
        }
    }


    async componentDidMount() {
        const id = this.props.match.params.id
        const media = await MediaService.getMediaDetailsById(id);
        this.setState({ media, isLoading: false })
    }

    addToWishList = () => {
        this.props.actions.media.updateWishList(this.state.media)
    }

    renderContent = () => {
        const inWhishList = this.props.media.wishList.some(media => media.id === this.state.media.id);

        return (
            <div>

                <Row style={{ overflow: 'hidden' }}>
                    <Col sm={24} md={10}>
                        <img src={this.state.media.image} className="menuImage" alt={this.state.media.title} />
                    </Col>
                    <Col sm={24} md={14}>
                        <Row>
                            <Col span={24}>
                                <h2>{this.state.media.title}</h2>
                            </Col>
                            <Col span={24}>
                                <p>{this.state.media.description}</p>
                            </Col>
                            <Col span={24}>
                                <Button
                                    type="primary"
                                    style={{ width: '100%' }}
                                    disabled={inWhishList}
                                    onClick={this.addToWishList}
                                >
                                    {inWhishList ? 'Added to the Whish List' : 'Add To Whish List'}
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider plain className="divider">More</Divider>
                <Row>
                    <Col span={24}>
                        <p className="under-image-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus facilisis lectus non rutrum. Nullam rhoncus vitae turpis at tempor. Mauris non iaculis dolor. Mauris ut erat tempor, congue neque et, rhoncus neque. Etiam magna urna, dictum id iaculis ac, sollicitudin ut tortor. Sed consequat metus sed tristique congue. Suspendisse malesuada nulla in sapien hendrerit gravida. In sit amet metus a urna pellentesque facilisis. Donec rhoncus ante felis, nec facilisis risus condimentum elementum.
                            Etiam facilisis dui non nulla tristique feugiat. Sed ultrices blandit sapien. Donec eget turpis nisi. Fusce aliquam iaculis fringilla. Nunc non metus sit amet mi gravida hendrerit eu id diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ex magna, dignissim at varius in, tincidunt id quam. In in tellus at dui sollicitudin volutpat. Vestibulum mollis, leo id sodales posuere, mi ex lobortis turpis, non mattis ex libero a mauris. Maecenas quis tempus nulla, vitae blandit sapien. Vivamus viverra mollis imperdiet. Sed tincidunt venenatis mauris, ac fermentum urna
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }



    render() {

        return (
            <Layout className="details-container">
                <Content className="layoutContainer">
                    <h1>Details</h1>
                    {this.state.isLoading ?
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
