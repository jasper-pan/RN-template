import React from 'react';
import ReactDOM from 'react-dom';
import {
    StyleSheet,
    View,
    Animated,
    Dimensions,
    Text,
} from 'react-native'

export const DURATION = { LENGTH_LONG: 2000, LENGTH_SHORT: 500 };
const { height, width } = Dimensions.get('window');
const OPACITY = 0.6;


interface propsType {
    isShowing: boolean
    hide: () => void
}
export const Modal = ({ isShowing, hide }: propsType) => isShowing ?
    <>
        <View
            style={[styles.container]}
            pointerEvents="none"
        >
            <Animated.View
                style={[styles.content, { opacity: new Animated.Value(OPACITY) }]}
            >
                <Text style={styles.text}>jhahahah</Text>
            </Animated.View>
        </View>
    </>
    : null;

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            left: 0,
            right: 0,
            top:height /2 -80,
            alignItems: 'center',
        },
        content: {
            backgroundColor: 'black',
            opacity: OPACITY,
            borderRadius: 5,
            padding: 10,
        },
        text: {
            color: 'white'
        },
    })
