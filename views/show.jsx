const React = require('react'); 
// const pokemon = require('../models/pokemon');
class Show extends React.Component {

    render() {
        const pokemon = this.props.pokemon;
     pokemon.img.includes('.jpg')? pokemon.img: pokemon.img += '.jpg';
     console.log(pokemon.img)
        return (
            <>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>
                    {pokemon.name} <br></br> 
                    <img src={pokemon.img}></img>
                </h2>
                <a href={'/pokemon'}>Back</a>
            </>
            
        );
    }
}

module.exports = Show;
