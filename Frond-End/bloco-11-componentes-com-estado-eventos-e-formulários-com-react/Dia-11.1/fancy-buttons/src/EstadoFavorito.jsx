import React, { Component } from "react";

class EstadoFavorito extends Component {
    render() {
        const { value, handleChange } =this.props;
        let error = undefined;
        if (value.length > 120) error = "texto muito grande!";

        return (
            <div>
            <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
                <textarea 
                    name="estadoFavorito" 
                    value={value} 
                    onChange={handleChange}
                />
               <span>{error ? error : ''}</span>
            </label>
        </div>
        )
    }
}

export default EstadoFavorito