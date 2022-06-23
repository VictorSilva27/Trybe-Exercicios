import React from "react"

class PapaguaioFavorito extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <div>
                <label>
                    Qual papaguaio é mais famoso?
                    <select
                        name="papaguaioFamoso"
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="Vagalume"> Vagalume </option>
                        <option value="Borboleta"> Borboleta </option>
                        <option value="Lagarta"> Lagarta </option>
                        <option value="Tubarão"> Tubarão </option>
                    </select>
                </label>
            </div>
        )
    }
}

export default PapaguaioFavorito