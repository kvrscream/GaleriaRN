import React, {Component} from 'react';
import {View, PermissionsAndroid, CameraRoll, StyleSheet, Alert, ScrollView} from 'react-native';
import Imagem from './images'

export default class Gallery extends Component{

  state = {
    imagens: [],
   
  }

  static navigationOptions = {
    title: 'Gallery'
  }

  

  getImages = () => {
    let arrUri = [];
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    })
    .then(photo => {
      this.setState({imagens: photo.edges})
    })
    .catch((err) => {
      Alert.alert("  " + err);
    });    
  }

  componentDidMount(){
      this.getImages()
  }

  async componentWillMount(){
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Need Storage Permission',
        message:
          'Precisamos ver as imagens armazenadas na sua galeria' ,
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Need Storage Permission',
        message:
          'Precisamos gravar imagens tiradas neste app ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

  }

  render(){
    return (
      <ScrollView style={styles.container}>
        {
          this.state.imagens.map(row => <Imagem key={row.node.timestamp} uri={row.node.image} />)
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  img: {
    justifyContent: "space-evenly",
  }
})