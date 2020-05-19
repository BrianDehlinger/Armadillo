import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  TouchableHighlight
  } from "react-native"
import backgroundImage from '../starrynight.jpg'
import armadillo from '../facearmadillo.png'
const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <LinearGradient colors={['#233329', '#228B22', '#192f6a']} style={styles.linearGradient}>
        <View style={styles.container}>
            <Image source={armadillo} style={styles.tinyLogo}></Image>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>


        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
                <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
   image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
   },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"100%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  tinyLogo: {
    width: 230,
    height: 120,
    alignItems: "center",
    marginBottom:60
  },
  loginText:{
    color:"white"
  },
  headerText:{
    fontSize: 40,
    color: "white",
    marginBottom: 30
  }

});