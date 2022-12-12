import React from "react";

class LastJob extends React.Component {
    render() {
        const { summaryValue, positionValue, jobValue, handleChange } = this.props
        return (
            <fieldset>
                <legend>Ultimo Emprego</legend>

                <div>
                    <label htmlFor="">
                        Resumo do currículo
                        <textarea
                            name="summary"
                            cols="30"
                            rows="10"
                            required
                            value={summaryValue}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Cargo
                        <textarea
                            name="position"
                            cols="30"
                            rows="10"
                            value={positionValue}
                            required
                            onChange={handleChange}
                            onMouseLeave={() => {
                                alert('Preencha com cuidado esta informação.');
                              }}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Descrição do cargo
                        <textarea
                            name="jobDescription"
                            cols="30"
                            rows="10"
                            value={jobValue}
                            required
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </fieldset>
        )
    }
}

export default LastJob
