//ReactDom.render here

let cards = data.map(function (course, i) {
    return (
        <Card key={i} data={course} />
    )
});

console.log(cards);

ReactDOM.render(
    <div className='row'>
        {cards}
    </div>,

    document.getElementById("root")
);