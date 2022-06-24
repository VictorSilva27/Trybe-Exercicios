import React from "react";

class InfoPessoa extends React.Component {
    render() {
        const {
            onBlurHandler,
            nameValue,
            emailValue,
            cpfValue,
            addressValue,
            cityValue,
            statesValue,
            typeValue,
            handleChange
        } = this.props;
        
        return (
            <fieldset className="info-pessoa">
                <legend>Informações Pessoais</legend>

                <div>
                    <label htmlFor="">
                        Nome:
                        <input
                            type="text"
                            name="name"
                            maxLength={40}
                            onChange={handleChange}
                            value={nameValue}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            maxLength={50}
                            onChange={handleChange}
                            value={emailValue}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        CPF:
                        <input
                            type="text"
                            maxLength={11}
                            name="cpf"
                            onChange={handleChange}
                            value={cpfValue}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Endereço:
                        <input
                            type="text"
                            name="address"
                            maxLength={200}
                            onChange={handleChange}
                            value={addressValue}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cidade:
                        <input
                            type="text"
                            maxLength={28}
                            name="city"
                            onChange={handleChange}
                            onBlur={onBlurHandler}
                            value={cityValue}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="states">Estado:</label>

                    <select
                        name="states"
                        onChange={handleChange}
                        value={statesValue}
                    >
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </div>

                <div>
                    <label
                        name="type"
                        onChange={handleChange}
                        value={typeValue}
                    > Tipo:
                        <input required type="radio" name="type" value="Casa" />
                        <label htmlFor="casa">Casa</label>
                        <input required type="radio" id="css" name="type" value="Apartamento" />
                        <label htmlFor="ap">Apartamento</label>
                    </label>
                </div>

            </fieldset>
        )
    }
}

export default InfoPessoa