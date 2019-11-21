import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import { Header } from 'react-native-elements';
const ModalScreen = (props: any) => {
    return (
        <View  >
            
            <Header
                statusBarProps={{ hidden: false }}
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Text style={{ fontSize: 30, color: 'white' }}>This is a modalelse!</Text>
            <Button
                onPress={() => props.navigation.goBack()}
                title="Dismiss"
            />
        </View>
    );
}

export default ModalScreen;