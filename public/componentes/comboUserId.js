import React, { Component } from "react";

class ComboUserId extends Component {

    render(){

        const {userId, handerCombo } = this.props;

        const userIdOption = userId.map( 
            r => (
                <option key={r.id} value={r.nombre}>{r.nombre}</option>   
            )
        )

        return (
            <div>
                <select onChange = {handerCombo}> 
                    <option key={0} value={0}>Seleccione una userId...</option>
                    {userIdOption}
                </select>
            </div>
        )
    }

}

export default ComboUserId;