import React, { Component } from 'react';

class CardSet extends Component {

    constructor() {
        super();
        this.state = {
            chosenCards: []
        }
    }

    saveCourse = (index) => {
        console.log(`Index ${index} was pressed`);
        const copyOfCards = [...this.state.chosenCards];
        copyOfCards.push(this.props.cards[index]);
        this.setState({
            chosenCards: copyOfCards
        });
    }

    render() {
        console.log(this.state.chosenCards);

        const cardList = this.props.cards.map((card, i) => {
            return (
                <div className="col s2" key={i}>
                    <div className="card hoverable small">
                        <div className="card-image">
                            <img src={card.image} />
                        </div>
                        <div className="card-content">
                            <p>{card.course}</p>
                            <p>{card.instructor}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">$9.99</a>
                        </div>
                    </div>
                    <button onClick={() => this.saveCourse(i)} className="btn waves-light waves-effect">
                        Save
                    </button>
                </div>
            )
        })

        return (
            <div>
                {cardList}
            </div>
        )
    }
}

export default CardSet;