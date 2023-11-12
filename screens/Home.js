import * as React from 'react';
import { useEffect } from 'react';
import { View, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import commonStyles from '../styles/common';
import api from '../api/fetch';
import { useDispatch, useSelector } from 'react-redux';

import QuestionTile from "@components/QuestionTile.js"


function Home() {
  
  const dispatch = useDispatch()
  const mcq = useSelector(state => state.mcq)
  const renderFirstQuestion = mcq.currentQuestionCount == 0
  const calculatedHeight = Dimensions.get("window").height - useBottomTabBarHeight()

  useEffect(() => {
    if (renderFirstQuestion) api.getQuestion(dispatch)
  })

  const getQuestion = () => {
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