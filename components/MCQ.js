import * as React from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import commonStyles from '../styles/common';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import api from "@api/fetch"
import MCQAnswers from './MCQAnswer';
import GreenThumbsUpComponent from '../styles/thumbsupgreen';
import RedThumbsDownComponent from '../styles/thumbsdownred';

function MCQ(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const dispatch = useDispatch()
    const answer = useSelector(state => state.mcq.answers[props.id])

    const handleSelect = (id) => {
        if (!selectedAnswer) {
            setSelectedAnswer(id)
            api.getAnswer(dispatch, props.id)
        }
    }

    // 1. No selection all 0 state
    // 2. Selected so:
    // 2.a if answer is not selected and not correct, remain 0
    // 2.b if answer is selected and correct, change to 1
    // 2.c if answer is selected and incorrect, change to 2
    const determineState = (id) => {
        if (selectedAnswer === null) return 0
        if (answer == undefined) return 0
        if (answer.includes(id)) {
            if (selectedAnswer == id) {
                return 1
            } else {
                return 2
            }
        } else {
            if (selectedAnswer == id) {
                return 3
            } else {
                return 0
            }
        }
    }

    return (
        <View style={{ flex: 1, display: 'flex', justifyContent:'flex-end', flexDirection: 'column', width: '100%', marginRight: 20, marginBottom: 10, gap: 8 }}>
            {
                props.data.map((data) => {
                    const mcqState = determineState(data.id)
                    return (
                        <TouchableOpacity
                            style={[commonStyles.questionBox]}
                            onPress={() => {handleSelect(data.id)}}
                            key={data.id}>
                            <MCQAnswers state={mcqState}/>
                            <Text
                                adjustsFontSizeToFit
                                numberOfLines={3}
                                style={[commonStyles.mcqAnswer, { width: '87%' }]}>
                                {data.answer}</Text>
                            { mcqState == 1 &&
                            <GreenThumbsUpComponent
                                customstyle={{ height: 20, width: 20 }} /> }
                            { mcqState == 3 &&
                            <RedThumbsDownComponent
                                customstyle={{ height: 20, width: 20 }} /> }
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default MCQ;