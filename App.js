import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button} from 'react-native';
import NewsScreen from './app/screens/NewsScreen';
import MainTabScreen from './app/screens/MainTabScreen';


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text>HomeScreen (AH Pharmacy)</Text>
      <Button 
      title="Go to  News Screen" 
      onPress={() => navigation.navigate("News")}
      />
    </View>
  );
};

const NewsScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text>NewsScreen</Text>
      <Button 
      title="Go to News Screen...again" 
      onPress={() => navigation.push("News")}
      />
      <Button 
      title="Go to home" 
      onPress={() => navigation.navigate("Home")}
      />
      <Button 
      title="Go back" 
      onPress={() => navigation.goBack()}
      />
      <Button 
      title="Go to the first screen" 
      onPress={() => navigation.PopToTop()}
      />
    </View>
  );
};

const Stack = createStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle: {
          backgroundColor: '#10284e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}> 
        <Stack.Screen name="Home" component={MainTabScreen} options={{
          title: 'Overview'
        }}/>
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
