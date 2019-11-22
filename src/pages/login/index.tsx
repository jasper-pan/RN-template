import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const Login = (props: any) => {
    const [name, setName] = useState('world')
    useEffect(() => {
        setName('android')
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Login"
                onPress={() => props.navigation.navigate('App',{
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })}
            />
        </View>
    );
}
 

export default Login;