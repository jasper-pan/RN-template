import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const HomeScreen = (props: any) => {
    const [name, setName] = useState('world')
    useEffect(() => {
        setName('android')
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MY {name}</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Modal',{
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })}
            />
        </View>
    );
}

HomeScreen.navigationOptions = {
    title: '我的',
};

export default HomeScreen;