import React from "react";
import InfoForms from "./InfoForms";
import InfoPessoa from "./InfoPessoa";
import LastJob from "./LastJob";

class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            // Personal Info
            name: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            states: '',
            type: '',

            // Info Last Job
            summary: '',
            position: '',
            jobDescription: '',

            submitted: false,
        };
    }
    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    handlerOnBlur = (event) => {
        let { name, value } = event.target;
        if (name === 'city') value = value.match(/^\d/) ? '' : value;
        this.setState({ city: value });
    }

    resetForm = () => { this.setState({
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        states: '',
        type: '',
        summary: '',
        position: '',
        jobDescription: '',
        submitted: false,
    }) };

    sendForm = () => { this.setState({ submitted: true }) };
    render() {
        return (
            <>
                <form>
                    <InfoPessoa
                        nameValue={this.state.name.toUpperCase(this.state.name)}
                        emailValue={this.state.email}
                        cpfValue={this.state.cpf}
                        addressValue={this.state.address.replace(/[^\w\s]/gi, '')}
                        cityValue={this.state.city}
                        statesValue={this.state.states}
                        typeValue={this.state.type}
                        onBlurHandler={this.handlerOnBlur}
                        handleChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <LastJob
                        summaryValue={this.state.summary}
                        positionValue={this.state.position}
                        jobValue={this.state.jobDescription}
                        handleChange={this.handleChange}
                    />

                    <input
                        type="button"
                        onClick={this.sendForm}
                        value="Enviar"
                    />
                    <input
                        type="reset"
                        onClick={this.resetForm}
                        value="Limpar"
                    />
                </form>
                {this.state.submitted === true && <InfoForms currentState={this.state} />}
            </>
        )
    }
}

export default Forms