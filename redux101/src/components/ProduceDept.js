import React, { Component } from 'react';

//we want this component to know about redux.
//to do that, we need some help... or some glue
//Glue is react-redux. We need connect function
import { connect } from 'react-redux';
import updateProduce from '../actions/produceInvUpdate';
import { bindActionCreators } from 'redux';



class ProduceDept extends Component {

    increment = (operator, index) => {
        //console.log(operator, index);
        this.props.updateProduce(operator, index);
    }

    render() {
        console.log(this.props);
        const produceInventory = this.props.produceData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={() => this.increment("-", i)} value="-" />
                    <input type="button" onClick={() => this.increment("+", i)} value="+" />
                </div>
            )
        });

        return (
            <div>
                <h1>Produce Food Dept</h1>
                <ul>
                    {produceInventory}
                </ul>
            </div>
        );
    }
}

console.log(connect);
//mapStateToProps takes 1 arg, "state" and that is the rootReducer/store
function mapStateToProps(state) {
    //mapStateToProps returns an object with:
    //property is the local prop name of the component
    //value will be the property in the root reducer... ie, a piece of the store

    return {
        produceData: state.produce,
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        updateProduce: updateProduce
    }, dispatch);

}



//connect takes 2 args, first is a function that is going to map
//a piece of redux state to this components props

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);