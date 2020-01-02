//All reducers have 2 params:
//1. Current State, usually default state too
//2. Info that came from any action

const seedData = [
    {
        food: "Chicken Breast",
        quantity: 999
    },
    {
        food: "Steak",
        quantity: 2782
    },
    {
        food: "Ribs",
        quantity: 9000
    },
    {
        food: "Wagyu Steak",
        quantity: 82
    }
];

export default (state = seedData, action) => {
    console.log("Meat Reducer is running");
    console.log(action);

    if (action.type === "updateMeat") {
        console.log("I care");
        let newState = [...state];
        if (action.payload.operator === "+") {
            newState[action.payload.index].quantity++;
        }
        else if (action.payload.operator === "-") {
            newState[action.payload.index].quantity--;
        }
        return newState;
    } else if (action.type === "clearInventory") {
        let newState = [...state];
        newState.forEach((item) => {
            item.quantity = 0;
        })
        return newState;
    }
    else {
        return state;
    }
}