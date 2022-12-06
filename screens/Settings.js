import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import database from '@react-native-firebase/database';

let confirmPassword = '';
let showDate = false;

class Settings extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username: "",
      password: ""
    };
  }

  _renderDate = () => () => {
    const [selectedDate] = useState('');
    return {selectedDate}
  }

  DateStyle = () => {
    var display = 'none';

    if(showDate == true) {
      display = 'flex'
    } else {
      display = 'none';
    }

    return {
      position: 'relative',
      bottom: 550,
      display: display
    }
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
        <View style={styles.containerTop}>
          <Text style={styles.titleText}>Settings</Text>

          <Image style={{ width: 70, height: 70, marginRight: 'auto', marginLeft: 80}}source={require('../assets/Profile.png')}/>
          <Text style={[styles.user]}>{this.state.name}</Text>
    
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
              <Text style={styles.login}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style= {[styles.viewInput, {marginTop: 52}]}>
          <FontAwesomeIcon name="user" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}}/>
          <TextInput placeholder="Account" style={[styles.textInput]} onChangeText={text => this.setState({name: text})}/>
        </View>
  
        <View style= {styles.viewInput}>
          <FontAwesomeIcon name="paint-brush" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}} />
          <TextInput placeholder="Theme" style={[styles.textInput]} defaultValue={this.state.occupation} onChangeText={text => this.setState({occupation: text})}/>
        </View>
        
        <View style= {styles.viewInput}>
          <FontAwesomeIcon name="font" style={{color: 'black', fontSize: 25, top: 10, marginRight: 10}} />
          <TextInput placeholder="Font size" style={[styles.textInput]} defaultValue={this.state.email} onChangeText={text => this.setState({email: text})}/>
        </View>
  
        <View style= {styles.viewInput}>
          <EntypoIcon name="text-document" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}} />
          <TextInput placeholder="Occupation" secureTextEntry={true} style={[styles.textInput]} defaultValue={this.state.password} onChangeText={text => this.setState({password: text})}/>
        </View>
  
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.actionButton} onPress = {() => this.props.navigation.navigate('Menu', {username:Username})}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, {marginLeft: 30}]}>
            <Text style={[styles.buttonText]}>Save</Text>
          </TouchableOpacity>          
        </View>


        <DatePicker style={this.DateStyle()} onSelectedChange={date => this._renderDate(date)} onDateChange={date => {this.setState({birthday: date}); showDate = false;}}/>

      </View>
    );
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  containerTop: {
    backgroundColor: '#C9D9F0',
    alignItems: 'center',
    width: 393,
    height: 250
  },
  user: {
    color: '#000',
    fontFamily: 'Quicksand-Light',
    fontSize: 32,
    textAlign: 'left',
    marginLeft: 90,
    width: 142,
    marginTop: -80
  },
  titleText: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 65,
    marginBottom: 30
  },
  accountAdvice: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    marginTop: 20
  },
  login: {
    color: '#000',
    fontFamily: 'Quicksand-Light',
    textDecorationLine: 'underline',
    marginLeft: -90,
    fontSize: 15
  },
  textInput: {
    backgroundColor: "#EDEFF2",
    color: "#000",
    width: '80%',
    height: 46,
    fontSize: 22,
    borderRadius: 18,
    fontFamily: "Quicksand-Light"
  },
  actionButton: {
    backgroundColor: "#C9D9F0",
    borderRadius: 18,
    width: 138,
    height: 46,
    marginTop: 50
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    paddingTop: 6,
    fontFamily: "Quicksand-Light",
    color: '#000'
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#EDEFF2',
    borderRadius: 18,
    width: 338,
    height: 46,
    marginTop: 29
  }
});

export default Settings;
