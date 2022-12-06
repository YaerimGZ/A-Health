import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import database from '@react-native-firebase/database';

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: ""
    };
  }

  render() {

    const Username = this.props.route.params.username;

    database()
    .ref('/users/'+Username+'/name')
    .once('value')
    .then(snapshot => {
      this.setState({
        name: snapshot.val()
      })
    })
    
    return (
      <View style={styles.container}>
        <Image style={{ width: 200, height: 200, marginTop: 70}}source={require('../assets/Logo.png')}/>

        <Text style={[styles.welcome]}>Welcome</Text>
        <Image style={{ width: 70, height: 70, marginRight: 'auto', marginLeft: 80}}source={require('../assets/Profile.png')}/>
        <Text style={[styles.user]}>{this.state.name}</Text>
  
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('AvailableTests', {username: Username})}} style={[styles.menuOption]}>
            <Text style={styles.buttonText}>Tests</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity style={[styles.menuOption]} onPress = {() => {this.props.navigation.navigate('MyStats', {username: Username})}}>
            <Text style={styles.buttonText}>My stats</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity style={[styles.menuOption]} onPress = {() => {this.props.navigation.navigate('Settings', {username: Username})}}>
            <Text style={[styles.buttonText]}>Settings</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity style={[styles.menuOption]} onPress = {() => {this.props.navigation.navigate('GetHelp', {username: Username})}}>
            <Text style={styles.buttonText}>Get Help</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Login')}} style={[styles.menuOption]}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
  
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9D9F0',
    alignItems: 'center'
  },
  welcome: {
    marginTop: 20,
    color: '#000',
    fontSize: 20,
    marginLeft: 25,
    marginBottom: 5,
    fontFamily: 'Quicksand-Light'
  },
  user: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    textAlign: 'left',
    marginLeft: 90,
    marginBottom: 30,
    width: 142,
    marginTop: -80
  },
  menuOption: {
    backgroundColor: "#fff",
    borderRadius: 18,
    width: 227,
    height: 46,
  },
  buttonText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 24,
    textAlign: 'center',
    top: 4,
    color: '#000'
  }
});

export default Menu;
