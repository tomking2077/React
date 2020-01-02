//All reducers have 2 params:
//1. Current State, usually default state too
//2. Info that came from any action

const seedData = [
    {
        food: "Lettuce",
        quantity: 9
    },
    {
        food: "Cilantro",
        quantity: 5032
    },
    {
        food: "Apple",
        quantity: 1
    }
];

export default (state = seedData, action) => {
    console.log("Produce Reducer is running");
    console.log(action);

    if (action.type === "updateProduce") {
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
    } else {
        return state;
    }
}