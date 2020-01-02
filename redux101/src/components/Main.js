import React, { Component } from 'react';
import { connect } from 'react-redux';
import clearInventory from '../actions/clearInventory';
import { bindActionCreators } from 'redux';

class Main extends Component {

    render() {
        console.log(this.props.frozenData);
        const frozenQuantity = reduce(this.props.frozenData);
        const produceQuantity = reduce(this.props.produceData);
        const meatQuantity = reduce(this.props.meatData);

        return (
            <div>
                <h1>MAIN</h1>
                <h2>Frozen Dept: {frozenQuantity}</h2>
                <h2>Produce Dept: {produceQuantity}</h2>
                <h2>Meat Dept: {meatQuantity}</h2>
                <button onClick={this.props.clearInventory}>Clear all inventory</button>

            </div>
        );
    }

}

function reduce(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].quantity;
    }
    return sum;
}

function mapStateToProps(state) {
    return {
        frozenData: state.frozen,
        produceData: state.produce,
        meatData: state.meat,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clearInventory: clearInventory
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);