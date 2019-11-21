import React, { useEffect, useState, ReactElement } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const RButton = (props: any) => {
    const [name, setName] = useState('world')
    useEffect(() => {
        setName('ios')
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text  onPress={()=>props.navigation.navigate('MyElse')}>I am {name} in sadfadf</Text>
        </View>
    );
}
export interface navigationProps {
    navigation:navigationOptionType
}
export interface navigationOptionType {
    [x: string]: any;
    getParam:(a:string,b?:string)=>void
   
}
export default RButton;