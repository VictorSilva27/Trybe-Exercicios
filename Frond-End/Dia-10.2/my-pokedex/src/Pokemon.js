import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, image, averageWeight } } = this.props;
        return (
            <div className="pokemon">
                <div>
                    <p>Nome: {name}</p>
                    <p>Tipo: {type}</p>
                    <p>
                        {`Peso: ${averageWeight.value} ${averageWeight.measurementUnit}`}
                    </p>
                </div>
                <img src={image} alt={`Foto do ${name}`} />
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string
    }).isRequired
};

export default Pokemon