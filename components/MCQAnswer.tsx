import React, { FC, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface MCQAnswersProps {
    state: number;
}

const MCQAnswers: FC<MCQAnswersProps> = (props) => {
    const greenTranslation = useRef<Animated.Value>(new Animated.Value(0)).current;
    const redTranslation = useRef<Animated.Value>(new Animated.Value(0)).current;

    const greenStyles = {
        transform: [
            {
              translateX: greenTranslation.interpolate({
                inputRange: [0, 1],
                outputRange: [920, 900]
              })
            }
        ]
    };
    const redStyles = {
        transform: [
            {
              translateX: redTranslation.interpolate({
                inputRange: [0, 1],
                outputRange: [920, 900]
              })
            }
        ]
    };

    useEffect(() => {
        if (props.state === 1 || props.state === 2) {
            Animated.timing(greenTranslation, {
                toValue: 100,
                duration: 1000,
                useNativeDriver: true,
            }).start()
        } else if (props.state === 3) {
            Animated.timing(redTranslation, {
                toValue: 100,
                duration: 1000,
                useNativeDriver: true,
            }).start()
        }
    },[props.state])


    return (
        <>
            <Animated.View
                style={[{flex: 1, width: 10000, height: 10000, backgroundColor: 'rgba(0,200,0,0.8)', position: 'absolute'}, greenStyles]}/>
            <Animated.View 
                style={[{flex: 1, width: 10000, height: 10000, backgroundColor: 'rgba(200,0,0,0.8)', position: 'absolute'}, redStyles]}/>
        </>
    );
}

export default MCQAnswers;