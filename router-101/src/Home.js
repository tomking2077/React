import React from 'react';

//Home = () => <h1>Home</h1>;

function Home(props) {
    return (
        <h1>{props.title}</h1>
    );
}

export default Home;