import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/main.css"
import { getMerchants } from '../util/getMerchants';

export class SHOW_MERCHANTS extends Component {
    constructor (props) {
        super(props);
        this.state = {
            merchants:''
        }
    }

    componentDidMount() {
        getMerchants()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({merchants: data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleSelect(merchant_id) { 
        /**
         * Need to return divs for each 
         * menu item in the 
         * merchant menu database such 
         * that it can be rendered in a list
         * and quantity can be modified,
         * the current state is changed, 
         * 
         * also need to reference another function 
         * that can handle a <Link> to 
         * the payment page from the menu 
         */
    }

    buildMerchants() { 
        var merchants = this.state.merchants;
        var merchant_cards = [];
        Object.keys(merchants).forEach((key) => {
            var merchant_id = merchants[key].id;
            var img_url = "./media/merchants/"+merchant_id+"/main/"+merchant_id+".jpeg";
            merchant_cards.push(
                <div className="merchant_tile">
                    <div className="merchant_tile_img_container">
                        <img 
                            className="merchant_tile_img_literal" 
                            src={img_url} 
                            alt="merchant_logo"
                        ></img>
                    </div>
                    <div className="merchant_tile_name">
                        <div className="merchant_tile_name_wrapper">{merchants[key].MerchantName}</div>
                        <div className="merchant_tile_select_merchant" onClick={this.handleSelect(merchant_id)}>Select Merchant</div>
                    </div>
                </div>
            )
        });
        return(merchant_cards);
    }

    render () {
        if(this.state.merchants != null) {
            return (
                <div id="merchant_wrapper">
                    {this.buildMerchants()}
                </div>
            )
        } else {
            return (
                <div id="merchant_loading"> 
                    Loading...
                </div>
            )
        }
        
    }

}

//export { SHOW_MERCHANTS };