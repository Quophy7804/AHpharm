import React from 'react';
import { Button, StyleSheet, View} from 'react-native';

function HomeScreen(props) {
    return (
        <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
    
)};

export default HomeScreen;

