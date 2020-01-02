export default (operator, index) => {
    console.log(operator, index);
    return {
        type: "updateMeat",
        payload: {
            operator,
            index
        }
    }
}