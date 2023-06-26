import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/views/Home'
import Error from './src/views/Error'
import Information from './src/views/Information'
import Done from './src/views/Done'
import Sellout from './src/views/Sellout'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false // Ẩn tiêu đề
      }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Error" component={Error}></Stack.Screen>
        <Stack.Screen name="Information" component={Information}></Stack.Screen>
        <Stack.Screen name="Done" component={Done}></Stack.Screen>
        <Stack.Screen name="Sellout" component={Sellout}></Stack.Screen>
      </Stack.Navigator>
  )
};

export default () => {
  return (
    <NavigationContainer >
      <App/>
    </NavigationContainer>
  )
};