import { StyleSheet, } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'; //Importando NavigationContainer de React-navigation-native
import {createNativeStackNavigator} from '@react-navigation/native-stack' // Importando createNativeStackNavigator de React-Native-Stack
import Home from './Screens/Home/index';
import Page from './Screens/Page/index'

const Stack = createNativeStackNavigator(); //Criando função Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: true //Barra superior ativa
          }}/>
        <Stack.Screen name='Page' component={Page} options={{
          headerShown: true
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
