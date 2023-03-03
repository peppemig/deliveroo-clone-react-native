import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './src/screens/BasketScreen';
import PreparingScreen from './src/screens/PreparingScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Provider store={store}>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen name="Basket" component={BasketScreen}
          options={{presentation: 'modal', headerShown: false}}/>
        <Stack.Screen name="Preparing" component={PreparingScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
        <Stack.Screen name="Delivery" component={DeliveryScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
      </Stack.Navigator>

      </Provider>
      
    </NavigationContainer>
  );
}
