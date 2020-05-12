import React, { Component } from "react";

class TablaUserId extends Component {

    render() {

        const {listaUserId, tituloTabla} = this.props;

        const datosUserId = listaUserId.map(
            p=> (
                <tr key={p.id}>
                    <td>{p.userId}</td>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.body}</td>
                </tr>
            )
        )


        return (
            <div>
                <table>
                    <caption>{tituloTabla}</caption>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosUserId}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default TablaUserId;