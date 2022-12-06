import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class MyStats extends React.Component {

  render() {
    const TestName = this.props.route.params.nameTest;
    const Username = this.props.route.params.username;

    return (
      <View style={styles.container}>
        <Text style={[styles.question]}>Stats</Text>

        <View>
          <View style={{marginLeft: 35}}>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={[styles.label, {marginLeft: 30, fontFamily: 'Quicksand-Bold'}]}>66%</Text>
              <Text style={[styles.label, {marginLeft: 74, fontFamily: 'Quicksand-Bold'}]}>25%</Text>
              <Text style={[styles.label, {marginLeft: 70, fontFamily: 'Quicksand-Bold'}]}>85%</Text>
            </View>
            
            <View style={[styles.slider, {width: 30, height: 300}]}>
              <View style={[styles.pinkSlider, {width: 30, height: 200}]}/>
            </View>
            <Text style={[styles.label, {marginTop: 20, marginLeft: 10, fontFamily: 'Quicksand-Bold'}]}>Anxiety</Text>

            <View style={[styles.slider, {width: 30, height: 300, marginLeft: 140, marginTop: -345}]}>
              <View style={[styles.pinkSlider, {width: 30, height: 100, top: 200}]}/>
            </View>
            <Text style={[styles.label, {marginTop: 20, marginLeft: 105, fontFamily: 'Quicksand-Bold'}]}>Depression</Text>

            <View style={[styles.slider, {width: 30, height: 300, marginLeft: 250, marginTop: -345}]}>
              <View style={[styles.pinkSlider, {width: 30, height: 250, top: 50}]}/>
            </View>
            <Text style={[styles.label, {marginTop: 20, marginLeft: 235, fontFamily: 'Quicksand-Bold'}]}>Stress</Text>
          </View>
        </View>

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Menu', {username: 'karlayaerim'})}} style={styles.actionButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9D9F0'
  },
  question: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginLeft: 19,
    marginRight: 19,
    marginBottom: 70,
    marginTop: 50
  },
  subTitle: {
    fontFamily: 'Quicksand-Light',
    fontSize: 24,
    color: '#000',
    textAlign: 'center'
  },
  label: {
    fontFamily: 'Quicksand-Light',
    color: '#000',
    fontSize: 19,
    marginLeft: 10,
    marginTop: 10
  },
  slider: {
    backgroundColor: '#fff',
    width: 320,
    height: 20,
    marginLeft: 30,
    marginTop: 5,
    borderRadius: 18
  },
  pinkSlider: {
    width: 153,
    height: 20,
    top: 100,
    backgroundColor: '#3F61A7',
    borderRadius: 18
  },
  actionButton: {
    backgroundColor: "#fff",
    borderRadius: 18,
    width: 138,
    height: 46,
    marginTop: 100,
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
  }
});

export default MyStats;
