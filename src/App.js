import React, {Component} from 'react';
import './App.css';
import ComboUserId from './comboUserId';
import UserId from './claseUserId';
import TablaUserId from './tablaUserId';

class App extends Component {

  state = {
    lista : [],
    listaFiltrada: [],
    userIds:[]
  };

  componentDidMount() {
    this.datosApi()
  }

  datosApi = async () => {
    try { 
      const datos = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
      const lista = await datos.json()
      const userIds = this.getUserId( lista )
      this.setState( { lista : lista, listaFiltrada: lista, userIds: userIds  } )
    } catch (err) {
      alert("Se produjo el siguiente error: " + err)
      this.setState( { lista : [], listaFiltrada: [], userIds: []  } )
    }
  }

  getUserId = (lista) => {
    const fnReduce = (userIdInstance, each) => userIdInstance.addUserId(each);
    const userIds = lista.reduce( fnReduce, new UserId());
    return userIds.getUserId()
  }

  eventoCombo = (e) => {
    let entero = parseInt(e.target.value)
    if (e.target.value ==='0') {
      
      this.setState( { listaFiltrada: this.state.lista} )
    }
    else {
      const listaFiltrada = this.state.lista.filter(
        p=>p.userId === entero
      )
      this.setState( { listaFiltrada: listaFiltrada} )
    }
  }


  render() {

    const {listaFiltrada, userIds } = this.state;

    return (
    <div className="App">
      <ComboUserId userIds= {userIds} handerCombo={this.eventoCombo}/>
      <TablaUserId listaUserId = {listaFiltrada} tituloTabla="Listado de Datos"/>
    </div>
    );
  };
}

export default App;
