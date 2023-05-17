const quotes_list = [
    {
        quote: "I'm not sure if I was the first man in space or the last dog.",
        source: "- Yuri Gagarin",
        year: "1961",
        tags: "Humor",
    },
    {
        quote: "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
        source: "- William Goldman",
        citation: "The Princess Bride",
        year: "1987",
        tags: "Inspirational",
    },
    {
        quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
        source: "- Bill Watterson",
        citation: "Calvin and Hobbes",
        tags: "Humor"
    },
    {
        quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
        source: "- Neil Gaiman",
        citation: "American Gods",
        year: "2001",
        tags: "Spirituaity"
    },
    {
        quote: "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
        source: "- Alexandre Dumas",
        citation: "The Count of Monte Cristo",
        year: "1844",
        tags: "Humanity"
    },
    {
        quote: "Never let your sense of morals prevent you from doing what is right.",
        source: "- Isaac Asimov",
        citation: "Foundation",
        year: "1951",
        tags: "Spirituality"
    },
    {
        quote: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
        source: "- Douglas Adams",
        citation: "Dirk Gently's Holistic Detective Agency",
        year: "1987",
        tags: "Inspirational",
    },
    {
        quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        source: "- Ayn Rand",
        tags: "Inspirational"
    },
    {
        quote: "I'm not dumb. I just have a command of thoroughly useless information.",
        source: "- Bill Watterson",
        citation: "Calvin and Hobbes",
        tags: "Humor"
    },
    {
        quote: "A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
        source: "- Jack London",
        tags: "Humanity"
    },
    {
        quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        source: "- Marcus Aurelius (roman emperor)",

    },
    
    {
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        source: "- Mahatma Gandhi",

    },
    {
        quote: "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.",
        source: "- Carl Sagan",

    },
    {
        quote: "I could either watch it happen or be a part of it.",
        source: "- Elon Musk",

    },
    {
        quote: "Síganme, no los voy a defraudar.",
        source: "- Carlos Saúl Menem",
        year: "1989"
    },
    {
        quote: "¡Música! Melancólico alimento para los que vivimos de amor.",
        source: "- Julio Cortázar",

    },
    {
        quote: "Me cortaron las piernas.",
        source: "- Diego Maradona",
        year: "1994"

    },
    {
        quote: "Hombre, pueblo, nación y estado: todo está en los humildes bancos de la escuela.",
        source: "- Domingo Faustino Sarmiento",

    },
    {
        quote: "When you're at the end of your rope, tie a knot and hold on.",
        source: "- Theodore Roosevelt",

    },
    {
        quote: "Scientific truth is beyond loyalty and disloyalty.",
        source: "- Isaac Asimov, la Fundación",
        year: "1951"

    },
    {
        quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
        source: "- Ernest Hemingway",
    },
    {
        quote: "You cannot shake hands with a clenched fist.",
        source: "- Indira Gandhi"
    },
    {
        quote: "There is nothing permanent except change.",
        source: "- Heraclitus"
    },

    {
        quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
        source: "- Henry James",

    },
    {
        quote: "There is no charm equal to tenderness of heart.",
        source: "- Jane Austen",

    },
    {
        quote: "Learning never exhausts the mind.",
        source: "- Leonardo da Vinci",

    },
    {
        quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
        source: "- Aldous Huxley",

    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "- Benjamin Franklin",
    },
    
];

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote_number: Math.floor((Math.random() * quotes_list.length))
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            quote_number: Math.floor((Math.random() * quotes_list.length))
        })
    }

    render() {
        return (
            <div id="quote-box">

                <h1 id="text">
                    <i className="fas fa-quote-left quote-icon"></i>{ quotes_list[this.state.quote_number]['quote']}
                </h1>

                <h3 id="author">
                    {quotes_list[this.state.quote_number]['source'] +
                        (quotes_list[this.state.quote_number]['year'] == undefined ? "" : (", " + quotes_list[this.state.quote_number]['year']))
                    } 
                    {/*Some quotes don't have year so it checks if undefined which in case returns just empty string */}
                </h3>

                <div className="button-container">
                    
                    <a id="tweet-quote"
                        href={'https://twitter.com/intent/tweet?text=' + quotes_list[this.state.quote_number]['quote'] + ' ' + quotes_list[this.state.quote_number]['source']}
                        target = "_blank" title = "Tweet this quote">
                        <i className="fab fa-twitter-square fa-3x"></i>
                    </a>

                    <button id="new-quote" onClick={this.handleClick} title = "Get a new quote">New quote</button>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));