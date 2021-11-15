import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/main.css"
import { getMerchantData } from '../util/getMerchantData';
import { withRouter } from '../util/withRouter';

class ND_SHOW_MERCHANT_MENU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            items_selected: ''
        }
    }

    componentDidMount() {
        getMerchantData(this.props.params.merchant_id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({items: data});
            })
            .catch(err => {
                console.log(err);
            });
    }

    buildMenu() {
        var items = this.state.items;
        var item_cards = [];
        Object.keys(items).forEach((key) => {
            var item_id = items[key].id;
            var img_url = items[key].item_image_url; // update when more pics taken
            item_cards.push (
                <div className="item_tile">
                    <div className="item_tile_img_container">
                        <img
                            className="item_tile_img_literal"
                            src={img_url}
                            alt="merchant item"
                        />
                    </div>
                    <div className="item_tile_name">
                        <div className="item_tile_header_wrapper">
                            <div className="item_tile_name_wrapper">{items[key].item_name}</div>
                            <div className="item_tile_description_wrapper">{items[key].item_description}</div>
                        </div>
                        <Link
                            to = {{ pathname: '/pay_forward/'+item_id }}
                            style = {{ textDecoration: 'none' }}
                        >
                            <div className="item_tile_select_item">Select Item</div>
                        </Link>
                    </div>
                </div>
            )
        });
        item_cards.push (
            <Link  
                to = {{ pathname: '/pay_forward/0' }}
                style = {{ textDecoration : 'none' }}
            >
                <div id="skip_item_select">Skip this step</div>
            </Link>
        )
        return(item_cards);
    }

    render () {
        if(this.state.items != null) {
            return (
                <div id="menu_wrapper" >
                    {this.buildMenu()}
                </div>
            );
        } else {
            return (
                <div id="merchant_menu_loading">
                    Loading...
                </div>
            );
        }
    }
}

const SHOW_MERCHANT_MENU = withRouter(ND_SHOW_MERCHANT_MENU);

export { SHOW_MERCHANT_MENU };