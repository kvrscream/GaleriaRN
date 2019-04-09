import React from 'react'
import {Image, Alert, Text} from 'react-native'

const Imagem = (props) => {
    const caminho = props.uri.uri;
    return <Image source={{uri:caminho}} style={{
      width: 100,
      height: 100,
      resizeMode: 'contain',
    }} />
}

export default Imagem