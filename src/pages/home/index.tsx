import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import { Modal } from '../../components/oj-toast/toast'
import { Avatar ,Button  } from 'react-native-elements';
const HomeScreen = (props: any) => {
    const [isShowing, setShow] = useState(false)
    const toggle = () => {
        setShow(!isShowing)
    }
    console.log(isShowing)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Avatar rounded title="MD" />
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Text>Homesss xxxx</Text>
            <Modal
                isShowing={isShowing}
                hide={toggle} />
            <Button
                title="toast"
                onPress={() => toggle()}
            />
             <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
            <Button
                title="Go to Mode"
                onPress={() =>props.navigation.navigate('MyElse')}
            />
        </View>
    );
}

HomeScreen.navigationOptions = {
    title: '首页',
};

export default HomeScreen;