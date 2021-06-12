import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      botao: 'Vaii',
      ultimo: null
    }
    this.timer = null //variavel do Timer do relogio 
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai() {

    if(this.timer !== null){
      //Aqui vai parar o Timer
      clearInterval(this.timer)
      this.timer = null
    
      this.setState({botao: 'Vaii'})
    }else {
      //começa a girar o timer
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
        //estou dizendo para pegar o 0 e + 0.1 = 0.1,,, para que assim ele siga somando até ser pausado
      }, 100)
      this.setState({botao: 'Parar'})
    }
  }

  limpar() {
    if(this.timer != null){
      //Aqui vai parar o Timer
      clearInterval(this.timer)
      this.timer = null
      
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Vaii',
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <Image
           source={require('./src/assets/cronometro.png')}
           style={styles.img}
           />
           <Text style={styles.timer}>
             {this.state.numero.toFixed(1)}
           </Text>
           <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn} onPress={this.vai}>{this.state.botao}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn} onPress={this.limpar}>Limpar</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.areaUltimo}>
             <Text style={styles.textCorrida}>
              {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 'S' : ''}
             </Text>
           </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ae7b'
  },

  img: {
    height: 250,
    width: 250,
  },

  timer: {
    fontSize: 40,
    color: '#fff',
    top: -75,
    fontWeight: 'bold',
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 25,
    height: 50,

  },

  btn: {
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    margin: 17,
    borderRadius: 15,

  },
  textBtn: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00ae7b'
  },

  areaUltimo: {
    marginTop: 40,
  },

  textCorrida: {
    fontSize: 20,
    fontFamily: 'italic',
    color: '#fff',

  }
});

export default App;
