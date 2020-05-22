import React, { Component } from "react";

class ComboUserId extends Component {

    render(){

        const {userIds, handerCombo } = this.props;

        const userIdOption = userIds.map( 
            r => (
                <option key={r.userId} value={r.id}>{r.id}</option>   
            )
        )

        return (
            <div>
                <select onChange = {handerCombo}> 
                    <option key={0} value={0}>visualizar todos</option>
                    {userIdOption}
                </select>
            </div>
        )
    }

}

export default ComboUserId;