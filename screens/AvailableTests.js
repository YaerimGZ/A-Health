import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import database from '@react-native-firebase/database';

class AvailableTests extends React.Component {

  constructor(props){
    super(props);
    this.state={
      testNames: []
    };
  }

  createTests = () => {

    let tests = []
   
       for (let i = 0; i < this.state.testNames.length; i++) {
         tests.push(
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Test', {nameTest: this.state.testNames[i], username: 'karlayaerim'})}} style={styles.testsButton}>

          <Image style={{ width: 50, height: 50, marginTop: 20, marginLeft: 20, position: 'absolute'}}source={require('../assets/Test.png')}/>             
          <Text style={styles.testTitle}>{this.state.testNames[i]}</Text>
          <Text style={styles.timeTest}>10 minutes</Text>
          
        </TouchableOpacity>)
       }
       return tests
     }

  render() {

    const Username = this.props.route.params.username;

    database()
    .ref('/availableTests/')
    .once('value')
    .then(snapshot => {
      let testName = []
      
      for(key in snapshot.val()) {
        testName.push(key)
      }

      this.setState({
        testNames: testName
      })

    })
    
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Menu', {username: Username})}} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <Text style={styles.titleText}>Available Tests</Text>

        <Image style={{ width: 400, height: 400, top: -175, zIndex: -1}}source={require('../assets/AvailableTests.png')}/>

        <View style={styles.testsContainer}>

          <View style={[{marginTop: 'auto', marginBottom: 'auto'}]}>
            {this.createTests()}
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titleText: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 19,
    marginRight: 19,
    marginBottom: 30
  },
  skipButton: {
    backgroundColor: '#C9D9F0',
    width: 120,
    height: 46,
    borderRadius: 18,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 20
  },
  skipText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 24,
    textAlign: 'center',
    top: 2,
    color: '#000'
  },
  testsContainer: {
    backgroundColor: '#C9D9F0',
    width: '100%',
    height: 400,
    marginTop: 'auto',
    borderRadius: 18
  },
  testsButton: {
    width: 350,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15
  },
  testTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    color: '#000',
    marginLeft: 80,
    marginRight: 'auto',
    marginTop: 20
  },
  timeTest: {
    fontFamily: 'Quicksand-Light',
    fontSize: 15,
    color: '#000',
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 10
  }
});

export default AvailableTests;
