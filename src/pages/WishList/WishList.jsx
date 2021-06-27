import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mediaActions from '../../store/actions/mediaActions'
import { Row, Col, Layout } from 'antd';
import './WishList.scss'
import _ from 'lodash'
import { WishListItem } from '../../components/WishListItem/WishListItem';

const { Content } = Layout;

class WishList extends React.Component {

    renderWishItems = () => {
        return (
            this.props.media.wishList.map((item) =>
                <WishListItem item={item} key={item.id}/>
            )
        )
    }

    renderContent = () => {

        return (
            <div>
                {_.isEmpty(this.props.media.wishList) ?
                    <Row className="empty-list">
                        <Col span={24}>
                            <h2>Your Wish List is empty</h2>
                        </Col>
                    </Row>
                    : this.renderWishItems()
                }
            </div>
        )
    }



    render() {

        return (
            <Layout className="wish-list-container">
                <Content className="layoutContainer">
                    <h1>WishList</h1>
                    {this.renderContent()}
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

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
