import React, { Component } from 'react';
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
                return(
                    <div>
                        I got the data
                    </div>
                )
            })
            .catch(err => {
                console.log(err);
            })
    }

    render () {
        if(this.state.merchants.foo != null) {
            return (
                <div id="merchant_wrapper">
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