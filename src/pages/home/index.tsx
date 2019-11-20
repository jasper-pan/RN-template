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
            <Text>Home {name}</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details',{
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })}
            />
        </View>
    );
}

HomeScreen.navigationOptions = {
    title: '首页',
};

export default HomeScreen;