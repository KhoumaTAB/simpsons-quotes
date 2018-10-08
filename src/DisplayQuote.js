import  React  from  'react';

const  DisplayQuote = ({ quotes }) => {
    return (
        <div  className="DisplayQuote">
            <img src={quotes.image} alt="simpsons"></img>
            <h3>{quotes.quote}</h3>
            <h3>{quotes.character}</h3>
        </div>
    );
};

export  default  DisplayQuote;   