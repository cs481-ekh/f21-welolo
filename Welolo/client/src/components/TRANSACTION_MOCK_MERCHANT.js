import React, { Component } from 'react';
import styles from '../styles/MockMerchant.css';

class TRANSACTION_MOCK_MERCHANT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {
                merchant: '',
                item: '',
                value: ''
            }
        };

        this.onSelection = this.Selection.bind(this);
    }

    async Selection(event){
        //We literally just need to send the merchant, item and value to the payment page
        //Create a new payment page and pass the props through
    }

    //TODO: ItemLabel and CostLabel fields will need to be replaced when database is connected
    render(){
        return (
            <div>
                <form onSelection={this.onSelection}>
                    <h1 className = {styles.ItemLabel}>The World's Best Mock Merchant Menu/Service List</h1>
                    <div className="ItemContainer">
                        <label className="Item" htmlFor="item_label">Item</label>
                        <label className="Cost" htmlFor="cost_label">Cost (USD)</label>
                    </div>
                    <hr/>
                    <div className="ItemContainer">
                        <label className="ItemLabel" htmlFor="item1">Tacos</label>
                        <label className="CostLabel"htmlFor ="cost1">4.00</label>
                        <button className="SelectionButton" onClick={this.Selection}>Select Product</button>
                    </div>
                    <hr className="dotted" />
                    <div className="ItemContainer">
                        <label className="ItemLabel" htmlFor="item2">Coffee</label>
                        <label className="CostLabel" htmlFor="cost2">2.00</label>
                        <button className="SelectionButton" onClick={this.Selection}>Select Product</button>
                    </div>
                    <hr className="dotted" />
                    <div className="ItemContainer">
                        <label className="ItemLabel" htmlFor="item3">Skunk Removal Service</label>
                        <label className="CostLabel" htmlFor="cost3">50.00</label>
                        <button className="SelectionButton" onClick={this.Selection}>Select Product</button>
                    </div>
                    <hr className="dotted" />
                </form>                     
            </div>
        );
    }
}

export default TRANSACTION_MOCK_MERCHANT;
