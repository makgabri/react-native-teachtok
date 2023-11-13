import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, Dimensions, Alert } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import commonStyles from '../styles/common';
import api from '../api/fetch';
import { useDispatch, useSelector } from 'react-redux';

import QuestionTile from "../components/QuestionTile.tsx"
import { resetMCQs } from '../utils/questionSlice';

function Home() {
  const dispatch = useDispatch()
  const mcq = useSelector((state: any) => state.mcq)
  const renderFirstQuestion: boolean = mcq.currentQuestionCount === 0
  const calculatedHeight: number = Dimensions.get("window").height - useBottomTabBarHeight()
  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffect(() => {
    if (!mcq.error && showAlert) return setShowAlert(false)
    if (mcq.error && !showAlert) return setShowAlert(true)
    if (showAlert) {
      return Alert.alert('API Error', `We appoloize that the app is encountering an error with : ${mcq.errorMessage}`, [
          {
              text: 'Reload Home',
              onPress: () => {
                  dispatch(resetMCQs())
              }
          }
      ])
    }

    if (!mcq.error && renderFirstQuestion) api.getQuestion(dispatch)
  })

  const getQuestion = () => {
    if (mcq.error) return
    api.getQuestion(dispatch)
  }

  const getNextPage = () => {
    getQuestion();
  }

  return (
    <View style={[commonStyles.container, {backgroundColor: 'grey'}]}>
  
      <FlatList
        style={{ flex: 1, width: '100%', height: 'auto'}}
        renderItem={({item}) => <QuestionTile data={item} tileHeight={calculatedHeight} />}
        keyExtractor={(item, index) => {return `${item.id}-${index}`}}
        onEndReached={getNextPage}
        onEndReachedThreshold={0.8}
        snapToAlignment="start"
        decelerationRate={"fast"} 
        snapToInterval={calculatedHeight} 
        ListFooterComponent={<ActivityIndicator style={{ height: calculatedHeight }} size={'large'} />}
        data={mcq.questions} />
    </View>
  );
}

export default Home;