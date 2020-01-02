export default (operator, index) => {
    console.log(operator, index);
    return {
        type: "updateProduce",
        payload: {
            operator,
            index
        }
    }
}
