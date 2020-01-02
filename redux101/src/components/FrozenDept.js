import React, { Component } from 'react';

//we want this component to know about redux.
//to do that, we need some help... or some glue
//Glue is react-redux. We need connect function
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';


class FrozenDept extends Component {

    increment = (operator, index) => {
        //console.log(operator, index);
        this.props.updateFrozen(operator, index);
    }

    render() {
        console.log(this.props);
        const frozenInventory = this.props.frozenData.map((item, i) => {
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
                <h1>Frozen Food Dept</h1>
                <ul>
                    {frozenInventory}
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
        frozenData: state.frozen,
    }
}
//mapDispatchToProps is how we tie our component to dispatch
//takes 1 arg: dispatch
function mapDispatchToProps(dispatch) {
    //this function returns, bindActionsCreators
    //and we give bindActionCreators an object:
    //each property will be a local prop
    //each value will be a function that is dispatch when run
    //2nd arg for bindActionCreators is dispatch

    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch);

}

//connect takes 2 args, first is a function that is going to map
//a piece of redux state to this components props
//2nd arg to connect: mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);