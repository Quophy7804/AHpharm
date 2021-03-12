import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function NewsScreen(props) {
    return (
       <ImageBackground
       style={ styles.background} 
       source={require('../assets/background.jpg')}>
          
           <Image style={styles.closeIcon} source={require('../assets/close.png')}/>
         
           <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.jpg')}/>
            <Text>The quality care your client deserves</Text>
           </View>


           <View style={styles.loginButton}><Text style={styles.TextContainer}>Login</Text></View>           
           <View style={styles.registerButton}><Text style={styles.TextContainer}>Register</Text></View>
           
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    closeIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 40,
        right: 5,
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 120,
        height: 110,
        borderRadius: 50
    },
    logoContainer: {    
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextContainer: {
        fontWeight: "bold",
        fontSize: 20,
    },
    
})

export default NewsScreen;