import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';
class jokenpo extends Component{

  constructor(props){
    super(props);

    this.state = {escolha_usuario: '', escolha_computador: '', resultado: ''}
  }

  jokenpoAcao(escolha_usuario){

    //gera numero aleatorio (0, 1, 2)
    const numero_aleatorio = Math.floor(Math.random() * 3);

    let escolha_computador = '';

     
    switch(numero_aleatorio){
      case 0: escolha_computador = 'pedra'; break;
      case 1: escolha_computador = 'papel'; break;
      case 2: escolha_computador = 'tesoura'; break;
    }
    
    let resultado = '';

    if(escolha_computador == 'pedra'){
      if(escolha_usuario == 'pedra'){
        resultado = 'empate';
      }else if(escolha_usuario == 'papel'){
        resultado = 'ganhou';
      }else if(escolha_usuario == 'tesoura'){
        resultado = 'perdeu';
      }
    };

    if(escolha_computador == 'papel'){
      if(escolha_usuario == 'papel'){
        resultado = 'empate';
      }else if(escolha_usuario == 'tesoura'){
        resultado = 'ganhou';
      }else if(escolha_usuario == 'pedra'){
        resultado = 'perdeu';
      }
    };

    if(escolha_computador == 'tesoura'){
      if(escolha_usuario == 'tesoura'){
        resultado = 'empate';
      }else if(escolha_usuario == 'pedra'){
        resultado = 'ganhou';
      }else if(escolha_usuario == 'papel'){
        resultado = 'perdeu';
      }
    };

    this.setState({escolha_usuario: escolha_usuario, 
                   escolha_computador: escolha_computador,
                   resultado: resultado});

  }

  render(){
    return(
      <View>
        <Topo></Topo>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
          
          <Button
          title='pedra'
          onPress={() =>{this.jokenpoAcao('pedra')}} 
          />
          </View>
          <View style={styles.btnEscolha}>
          <Button 
          title='papel' 
          onPress={() =>{this.jokenpoAcao('papel')}}
          />
          </View>
          <View style={styles.btnEscolha}>   
          <Button
          title='tesoura'
          onPress={() =>{this.jokenpoAcao('tesoura')}}
          />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolha_computador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolha_usuario} jogador='Usuario'></Icone>
        </View>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({

  btnEscolha: {
    width: 90
  },

  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  palco:{
    alignItems: 'center',
    marginTop: 40
  },

  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red'
  }

});

AppRegistry.registerComponent('jokenpo', () => jokenpo);
