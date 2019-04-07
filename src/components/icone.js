import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
const imgpedra = require('../../img/pedra.png');
const imgpapel = require('../../img/papel.png');
const imgtesoura = require('../../img/tesoura.png');
class Icone extends Component{
    render(){
        if(this.props.escolha == 'pedra'){
  
          return(
            <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={imgpedra}/>
            </View>
          );
  
        }else if(this.props.escolha == 'papel'){
          return(
            <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={imgpapel}/>
            </View>
          );
  
        }else if(this.props.escolha == 'tesoura'){
          return(
            <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={imgtesoura}/>
            </View>
          );
  
        }else{
          return false;
        }
    }
}

const styles = StyleSheet.create({
    icone:{
        alignItems: 'center',
        marginTop: 30,
      },
    
      txtJogador:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
      }
});    
export default Icone;