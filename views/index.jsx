const React = require('react'); 
const pokemon = require('../models/pokemon');



class Index extends React.Component {

    render() {
        const {pokemon} = this.props;
        return (
            <>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((pokemon, i) => {
                        return(
                            <li>
                             <a href={`/pokemon/${i}`}>{capitalize(pokemon.name)}</a>{' '} I Choose You!
                    
                            </li>
                        )

                    })}
                </ul>
            </>
            
        );
    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


module.exports = Index;
