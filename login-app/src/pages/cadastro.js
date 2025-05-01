import React, { Component } from 'react';
import firebase from '../firebase';

class cadastro extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      sobrenome: ""


    }

    this.gravar = this.gravar.bind(this);
  }


  async gravar(){
    firebase.firestore().collection("usuario").add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome
    })
  }

  render(){
    return(
      <div>
        <h1> Pagina de Cadastro </h1>
        <input type="text" placeholder= 'Nome' onChange={ (e) => this.setState({nome: e.target.value})} />
        <br/>
        <input type="text" placeholder= 'Sobrenome' onChange={ (e) => this.setState({sobrenome: e.target.value})} />
        <br/>
        <button onClick={this.gravar}> Gravar </button>
      </div>
    )
  }
}

export default cadastro;
