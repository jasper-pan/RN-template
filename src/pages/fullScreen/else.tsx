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

            <Button
                onPress={() => props.navigation.goBack()}
                title="Dismiss"
            />
        </View>
    );
}
ModalScreen.navigationOptions = {
    title: 'Home',
    mode:'screen'
};
export default ModalScreen;