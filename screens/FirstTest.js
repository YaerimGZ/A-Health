import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class FirstTest extends React.Component {
  render() {
    const Username = this.props.route.params.username;

    return (
      <View style={styles.container}>
        <Image style={{ width: 200, height: 200, marginTop: -20}}source={require('../assets/Dog.png')}/>

        <Text style={styles.titleText}>Have you been diagnosed with any of the following conditions?</Text>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={[styles.answerButton, {marginRight: 20}]}>
            <Text style={styles.answerText}>Anxiety</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.answerButton}>
            <Text style={styles.answerText}>Depression</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={[styles.answerButton, {marginRight: 20}]}>
            <Text style={styles.answerText}>Eating Disorder</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.answerButton}>
            <Text style={styles.answerText}>Schizophrenia</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={[styles.answerButton, {marginRight: 20}]}>
            <Text style={[styles.answerText, {top: 2, fontSize: 12}]}>Trauma and stress or related disorders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.answerButton}>
            <Text style={styles.answerText}>Bipolar Disorder</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={[styles.answerButton, {marginRight: 20}]}>
            <Text style={styles.answerText}>Sleep-wake disorder</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.answerButton}>
            <Text style={[styles.answerText, {top: 0}]}>Haven't been diagnosed yet</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.diagnosisButton, {flexDirection: 'row'}]}>
            <Text style={[styles.answerText, {top: 10, left: 10}]}>Other Diagnosis: </Text>
            <TextInput style={[styles.textInput]}/>
        </View>
        
        <TouchableOpacity style={styles.nextButton}>
            <Text onPress={() => {this.props.navigation.navigate('Menu', {username: Username})}} style={styles.nextText}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEDF2',
    alignItems: 'center'
  },
  titleText: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  answerButton: {
    backgroundColor: "#fff",
    borderRadius: 18,
    width: 150,
    height: 39
  },
  answerText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    top: 8
  },
  actionButton: {
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 18,
    width: 320,
    height: 47
  },
  textInput: {
    width: '55%',
    height: 33,
    backgroundColor: '#D9D9D9',
    top: 6,
    left: 12,
    borderRadius: 5,
    fontSize: 12,
  },
  diagnosisButton: {
    backgroundColor: '#fff',
    width: 320,
    height: 47,
    marginTop: 30,
    borderRadius: 18
  },
  nextButton: {
    backgroundColor: '#C9D9F0',
    width: 120,
    height: 46,
    borderRadius: 18,
    marginTop: 40
  },
  nextText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 24,
    textAlign: 'center',
    top: 2,
    color: '#000'
  }
});

export default FirstTest;
