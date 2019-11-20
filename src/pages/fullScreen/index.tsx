import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const ModalScreen = (props: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#C62828' }}>
            <Text style={{ fontSize: 30, color: 'white' }}>This is a modal!</Text>
            <Button
                onPress={() => props.navigation.goBack()}
                title="Dismiss"
            />
        </View>
    );
}

export default ModalScreen;