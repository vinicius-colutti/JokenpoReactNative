import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet
} from 'react-native';

const imagem = require('../../img/jokenpo-topo.png');
class Topo extends Component{
    render(){
      return(
        <View style={styles.topo}>
            <Image source={imagem} />
        </View>
      );
    }
}
const styles = StyleSheet.create({
    
  topo: {
    justifyContent: 'center',
    alignItems: 'center'
  }

}); 
export default Topo;