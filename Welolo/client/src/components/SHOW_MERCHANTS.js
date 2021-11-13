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
                            alt="merchant logo"
                        />
                    </div>
                    <div className="merchant_tile_name">
                        <div className="merchant_tile_name_wrapper">{merchants[key].MerchantName}</div>
                        <Link 
                            to = {{pathname: '/view_menu/'+merchant_id}}
                            style = {{ textDecoration: 'none' }}
                        >
                            <div className="merchant_tile_select_merchant">Select Merchant</div>
                        </Link>
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