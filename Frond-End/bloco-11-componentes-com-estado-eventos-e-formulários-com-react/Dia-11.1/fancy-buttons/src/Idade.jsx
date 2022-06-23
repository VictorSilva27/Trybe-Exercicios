import React from "react"

class Idade extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <div>
                <label>
                    Quantos anos a Rainha tem?
                    <input
                        type="number"
                        name="idade"
                        value={value}
                        onChange={handleChange}
                    />
                </label>
            </div>
        )
    }
}

export default Idade