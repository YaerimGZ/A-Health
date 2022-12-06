import React from 'react';
import {TouchableOpacity, 
      StyleSheet, 
      Text, 
      View, 
      TextInput,
      Alert,
      Image,
      ImageBackground,} from 'react-native';
import database from '@react-native-firebase/database';

let Username = '';
let Password = '';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: ""
    };
  }

  render() {

    const enterMenu = (username, password) => {
      database()
      .ref('/users/'+username)
      .once('value')
      .then(snapshot => {
        this.setState({
          username: snapshot.key
        })

        if(this.state.username == username) {

          console.log(username)
          
          database()
          .ref('/users/'+username+'/password')
          .once('value')
          .then(snapshot => {
            this.setState({
              password: snapshot.val()
            })
            
            if (this.state.password == password && this.state.password != undefined) {
              this.props.navigation.navigate('Menu', {username: this.state.username});
            } else {
              Alert.alert('Try Again', 'Username or password incorrect.');
            }
          });
        } else {
          Alert.alert('Try Again', 'Username or password incorrect.');
        }

      });
    }



    return (

      <View style={styles.container}>

      <ImageBackground source={require('../assets/Pattern.png')} resizeMode="cover" style={styles.bgimage}>

        <Image style={{ width: 350, height: 350}}source={require('../assets/Logo.png')}/>
        <View style={styles.loginMainContainer}>
          <Text style={{fontFamily: 'Quicksand-SemiBold', fontSize: 22, color: '#000', top: 6, textAlign: 'center'}}>Log In</Text>
          <View style={styles.loginContainer}>
            <Text style={[styles.text1, {top: 10}]}>Username</Text>
            <TextInput style={[styles.loginInput, {top: 10, left: 17}]} onChangeText={username => Username = username}/>
            <Text style={[styles.text1, {top: 20}]}>Password</Text>
            <TextInput secureTextEntry={true} style={[styles.loginInput, {top: 20, left: 17}]} onChangeText={password => Password = password}/>
            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('CreateAccount')}} 
            style={[{width: 130, marginLeft: 'auto', marginRight: 'auto'}]}>
              <Text style={{fontFamily: 'Quicksand-Light', fontSize: 16, color: '#000', top: 25, textAlign: 'center', textDecorationLine: 'underline'}}>
                  Create Account</Text>
            </TouchableOpacity>
            
          </View>
        </View>
        
        <TouchableOpacity  style={styles.ActionButton} onPress = {() => {enterMenu(Username, Password)}}>
          <Text style={styles.buttonText}> Enter</Text>
        </TouchableOpacity>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginMainContainer: {
    backgroundColor: '#A0B9DE',
    borderRadius: 18,
    width: 270,
    height: 238,
    marginBottom: 35,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loginContainer: {
    backgroundColor: '#C9D9F0',
    width: 270,
    height: 190,
    top: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  loginInput: {
    backgroundColor: "#EDEFF2",
    borderRadius: 18,
    width: 235,
    height: 35,
    fontSize: 16,
    fontFamily: "Quicksand-Medium"
  },
  ActionButton: {
    backgroundColor: "#C9D9F0",
    borderRadius: 18,
    width: 138,
    height: 46,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    paddingTop: 6,
    fontFamily: "Quicksand-Light",
    color: '#000'
  },
  text1: {
    fontFamily: "Quicksand-Light",
    fontSize: 22,
    lineHeight: 30,
    color: '#000',
    left: 17
  },
  bgimage: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Login;
