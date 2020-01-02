import React from 'react';

//Home = () => <h1>Home</h1>;

function Home(props) {
    console.log(props);
    setTimeout(() => {
        //props.history.push("/help");
        props.history.goBack();
        props.history.block("Are you sure you want to leave?");
    }, 2000);
    return (
        <h1>{props.title}</h1>
    );
}

export default Home;