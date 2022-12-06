import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class Results extends React.Component {
  render() {
    const TestName = this.props.route.params.nameTest;
    const Username = this.props.route.params.username;

    return (
      <View style={styles.container}>
        <Text style={[styles.question]}>Results!</Text>
        <Text style={[styles.subTitle]}>Test:</Text>
        <Text style={[styles.subTitle]}>{TestName}</Text>

        <View>
          <View>
            <Text style={[styles.label, {marginTop: 70}]}>Moderate Anxiety</Text>
            <View style={[styles.slider]}>
              <View style={[styles.pinkSlider, {width: 220}]}/>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Menu', {username: 'karlayaerim'})}} style={styles.actionButton}>
          <Text style={styles.buttonText}>Ok</Text>
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
    marginBottom: 30,
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
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20
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
    backgroundColor: '#DB78DD',
    borderRadius: 18
  },
  actionButton: {
    backgroundColor: "#fff",
    borderRadius: 18,
    width: 138,
    height: 46,
    marginTop: 200,
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

export default Results;
