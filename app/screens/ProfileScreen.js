import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button 
            title= "CLick Me"
            onPress={() => alert("Profile clicked")}/>
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

export default ProfileScreen;