import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import database from '@react-native-firebase/database';

class Test extends React.Component {

  constructor(props){
    super(props);
    this.state={
      Test: [],
      popKeys: []
    };
  }

  createTest = () => {

    let answers = []
    let questions = []

    

    questions.push(
      <TouchableOpacity onPress = {() => {this.setState({popKeys: this.state.popKeys.slice(1)});}} style={[styles.menuOption, {marginRight: 20}]}>
        <Text style={styles.answerOption}>{this.state.popKeys[0]}</Text>
      </TouchableOpacity>)

    return questions

  }

  render() {

    const TestName = this.props.route.params.nameTest;
    const Username = this.props.route.params.username;

    database()
    .ref('/availableTests/'+TestName)
    .once('value')
    .then(snapshot => {
      this.setState({
        Test: snapshot.val(),
        popKeys: Object.keys(this.state.Test)
      })

    });


    return (
      
      <View style={styles.container}>

        <Text style={[styles.question]}>Difficulty in Breathing</Text>

        <View>

          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Test2', {nameTest: TestName, username: Username})}} style={[styles.menuOption, {marginRight: 20}]}>
            <Text style={styles.answerOption}>Not At All.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Test2', {nameTest: TestName, username: Username})}} style={[styles.menuOption, {marginRight: 20}]}>
            <Text style={styles.answerOption}>Mildly but it didn't bother me much.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Test2', {nameTest: TestName, username: Username})}} style={[styles.menuOption, {marginRight: 20}]}>
            <Text style={styles.answerOption}>Moderately - it wasn't pleasant at times.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Test2', {nameTest: TestName, username: Username})}} style={[styles.menuOption, {marginRight: 20}]}>
            <Text style={styles.answerOption}>Severely - it bothered me a lot.</Text>
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
    marginTop: 65,
    color: '#000',
    fontSize: 20,
    fontFamily: 'Quicksand-Light'
  },
  question: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginLeft: 19,
    marginRight: 19,
    marginBottom: 60,
    marginTop: 50
  },
  menuOption: {
    backgroundColor: "#A0B9DE",
    borderRadius: 18,
    width: 315,
    height: 64,
    marginBottom: 30
  },
  answerOption: {
    fontFamily: 'Quicksand-Light',
    fontSize: 22,
    textAlign: 'left',
    textAlignVertical: 'center',
    height: 58,
    marginLeft: 15,
    color: '#000'
  }
});

export default Test;
