import React, { Component } from 'react';
import styles from '../styles/MockMerchant.css';
import TRANSACTION_FORM from './TRANSACTION_FORM.js';

var Items = new Map();
var selected = false;
var data = -1;

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

        this.onClick = this.onClick.bind(this);
        InitializeMap();
    }

    async onClick(event){

        var key = event.target.innerHTML;
        selected = true;

        //If the user has selected an item
        if(key !== "Skip this Step")
        {
            key = key.replace('Select ','');
            data = Items.get(key);
        }

        this.forceUpdate();
    }

    //TODO: ItemLabel and CostLabel fields will need to be replaced when database is connected
    render(){
        if(!selected){
            return (
                <div>
                    <form onClick={this.onClick}>
                        <h1 className = {styles.ItemLabel}>The World's Best Mock Merchant Menu/Service List</h1>
                        <div className="ItemContainer">
                            <label className="Item" htmlFor="item_label">Item</label>
                            <label className="Cost" htmlFor="cost_label">Cost (USD)</label>
                        </div>
                        <hr/>
                        <div className="ItemContainer">
                            <label className="ItemLabel" htmlFor="item">Tacos</label>
                            <label className="CostLabel"htmlFor ="cost">{Items.get('Tacos')}</label>
                            <button className="SelectionButton" id="button1" onClick={this.onClick}>Select Tacos</button>
                        </div>
                        <hr className="dotted" />
                        <div className="ItemContainer">
                            <label className="ItemLabel" htmlFor="item">Coffee</label>
                            <label className="CostLabel" htmlFor="cost">{Items.get('Coffee')}</label>
                            <button className="SelectionButton" id="button2" onClick={this.onClick}>Select Coffee</button>
                        </div>
                        <hr className="dotted" />
                        <div className="ItemContainer">
                            <label className="ItemLabel" htmlFor="item">Pest Removal Service</label>
                            <label className="CostLabel" htmlFor="cost">{Items.get('Pest Removal Service')}</label>
                            <button className="SelectionButton" id="button3" onClick={this.onClick}>Select Pest Removal Service</button>
                        </div>
                        <hr className="dotted" />
                        <button className="SkipButton" id="skipButton" onClick={this.onClick}>Skip this Step</button>
                    </form>                     
                </div>
            );
        }
        else{
            return (
                <div>
                  <br/>
                    <TRANSACTION_FORM data={data}/> 
                </div>
          
              )
        }
    }
}

function InitializeMap() {
    Items.set('Tacos', 4.00);
    Items.set('Coffee', 2.00);
    Items.set('Pest Removal Service', 50.00);
}

export default TRANSACTION_MOCK_MERCHANT;
