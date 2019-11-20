import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const DetailPage:any = (props: any) => {
    const [name, setName] = useState('world')
    useEffect(() => {
        setName('ios')
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>I am {name} in sadfadf</Text>
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
DetailPage.navigationOptions = (props:navigationProps) => {
    
    return {
        title: '飞行',
        headerRight: () => (
            <Button
              onPress={()=>props.navigation.navigate('MyModal')}
              title="+1"
              color="#fff"
            />
          ),
    }
   
};

export default DetailPage;