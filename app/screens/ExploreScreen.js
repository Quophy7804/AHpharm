import React from 'react';
import { Button, Text, View } from 'react-native';

function ExploreScreen(props) {
    return (
       <View style={styles.container}>
           <Text>ExploreScreen</Text>
           <Button 
           title="Click Me"
           onPress={() => alert('Button Clicked')}/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ExploreScreen;