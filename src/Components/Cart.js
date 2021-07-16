import React, { Component } from 'react'
import Dishes from '../Dishes';

class Cart extends Component {
    constructor(props)
    {
        super(props);
        this.state = { isCart :0  };
    }

    onCartValueChange=(val)=>{
        let value=this.state.isCart;
        if(val=='plus'){
            value=value+1;
            this.setState({isCart: value})
        }else{
            value=value-1;
            this.setState({isCart: this.state.isCart--})
        }

    }

    render() {
        return (
            <>
            <div className="row py-2">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <i class="fa fa-arrow-left" aria-hidden="true"></i><b> UNI Nesto Cafe</b>
                        </div>
                        <div>
                            <i class="fa" style={{ "font-size": "24px" }}>&#xf07a;</i>
                            <span class='badge badge-warning' id='lblCartCount'>{this.state.isCart}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Dishes cart={this.onCartValueChange}/>
            </>
        )
    }
}

export default Cart
