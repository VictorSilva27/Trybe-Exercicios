import React from "react"

class Tué extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <div>
                <label>
                    Tu é?
                    <input
                        type="checkbox"
                        name="Tué"
                        value={value}
                        onChange={handleChange}
                    />
                </label>
            </div>
        )
    }
}

export default Tué