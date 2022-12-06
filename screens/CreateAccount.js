import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput, Alert, Pressable} from 'react-native';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import database from '@react-native-firebase/database';

let confirmPassword = '';
let showDate = false;

class CreateAccount extends React.Component {

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

  constructor(props){
    super(props);
    this.state={
      name: "",
      occupation: "",
      email: "",
      password: "",
      birthday: new Date()
    };
  }

  render() {

    const createAccount = () => {
      var username = this.state.email.split('@')[0];

      if(this.state.name == '' || this.state.occupation == ''|| this.state.email == ''||this.state.password == ''|| this.state.birthday == '') {
        Alert.alert('Empty Fields', 'Complete all fields.');
      } else {
        if(confirmPassword == this.state.password) {
          database()
          .ref('/users/'+username)
          .set({
            name: this.state.name,
            occupation: this.state.occupation,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthday
          })
          .then(() => {
            this.props.navigation.navigate('FirstTest', {username: username})
          });
        } else {
          Alert.alert('Try Again', 'Passwords do not match.');
        }
      }


    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Create new account</Text>
  
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.accountAdvice}>Already have an account?</Text>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
  
        
        <View style= {[styles.viewInput, {marginTop: 52}]}>
          <FontAwesomeIcon name="user" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}}/>
          <TextInput placeholder="Name" style={[styles.textInput]} defaultValue={this.state.name} onChangeText={text => this.setState({name: text})}/>
        </View>
  
        <View style= {styles.viewInput}>
          <FontAwesomeIcon name="user" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}} />
          <TextInput placeholder="Occupation" style={[styles.textInput]} defaultValue={this.state.occupation} onChangeText={text => this.setState({occupation: text})}/>
        </View>
        
        <View style= {styles.viewInput}>
          <EntypoIcon name="mail" style={{color: 'black', fontSize: 25, top: 10, marginRight: 10}} />
          <TextInput placeholder="E-mail" style={[styles.textInput]} defaultValue={this.state.email} onChangeText={text => this.setState({email: text})}/>
        </View>
  
        <View style= {styles.viewInput}>
          <FontAwesomeIcon name="user" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}} />
          <TextInput placeholder="Password" secureTextEntry={true} style={[styles.textInput]} defaultValue={this.state.password} onChangeText={text => this.setState({password: text})}/>
        </View>
        
        <View style= {styles.viewInput}>
          <FontAwesomeIcon name="user" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}} />
          <TextInput placeholder="Confirm Password" secureTextEntry={true} style={[styles.textInput]} defaultValue={this.state.confirmPassword} onChangeText={confirm => confirmPassword = confirm}/>
        </View>
        
        <View style= {styles.viewInput}>
          <FontAwesomeIcon name="birthday-cake" style={{color: 'black', fontSize: 25, top: 8, marginRight: 10}} />
          <View style={[styles.textInput]}>
            <Pressable onPress = {() => {showDate = true; this.forceUpdate();}}>
              <TextInput placeholder="Birthday" editable={false}  style={[styles.textInput]} defaultValue={this.state.birthday}/>
            </Pressable>
          </View>
        </View>
  
        <TouchableOpacity onPress = {() => {createAccount()}} style={styles.actionButton}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <DatePicker style={this.DateStyle()} onSelectedChange={date => this._renderDate(date)} onDateChange={date => {this.setState({birthday: date}); showDate = false;}}/>

      </View>
    );
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0B9DE',
    alignItems: 'center'
  },
  titleText: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 65
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
    marginTop: 20,
    marginLeft: 5,
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
    backgroundColor: "#fff",
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

export default CreateAccount;
