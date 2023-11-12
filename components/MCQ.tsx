import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/common';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from "../api/fetch"
import MCQAnswers from './MCQAnswer';
import GreenThumbsUpComponent from '../styles/thumbsupgreen';
import RedThumbsDownComponent from '../styles/thumbsdownred';

interface MCQProps {
    id: string;
    data: { id: string, answer: string }[];
}

interface QuestionStore {
    mcq: { answers: { [id: string]: string[] } }
}

const MCQ: FC<MCQProps> = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const dispatch = useDispatch()
    const answer = useSelector((state: QuestionStore) => state.mcq.answers[props.id])

    const handleSelect = (id: string) => {
        if (!selectedAnswer) {
            setSelectedAnswer(id)
            api.getAnswer(dispatch, props.id)
        }
    }

    /** states for answers
     * 0 - nothing
     * 1 - correct answer and chosen
     * 2 - correct answer but not chosen
     * 3 - incorrect due to chosen
     */
    const determineState = (id: string) => {
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