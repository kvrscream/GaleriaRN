import {createBottomTabNavigator, createAppContainer} from 'react-navigation';


import Gallery from './components/gallery'
import Camera from './components/camera'

const TabNavigation = createBottomTabNavigator({
  Home: Gallery,
  Camera: Camera
}, 
{
  navigationOptions: {
      headerStyle:{backgroundColor:"#a64dff"},
      headerTintColor:"#fff"
  }
}

);
//Novo Padrão do React Navigation
export default createAppContainer(TabNavigation);