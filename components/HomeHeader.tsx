import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { useSelector, useDispatch } from 'react-redux'
import { increment, start } from '../utils/timerSlice';

import commonStyles from '../styles/common';
import utils from '../utils/utils';

interface RootState {
  timer: {
    value: number;
    start: boolean;
  }
}

function HomeHeader(): JSX.Element {
  const count: number = useSelector((state: RootState) => state.timer.value)
  const timerStarted: boolean = useSelector((state: RootState) => state.timer.start)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!timerStarted) {
      dispatch(start())
      setInterval(() => {
        dispatch(increment())
      }, 1000)
    }
  }, [dispatch, timerStarted])

  return (
    <View style={[ commonStyles.row, commonStyles.header ]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }}>
        <Entypo name={'stopwatch'} size={25} color={'white'} />
        <Text style={{ color: 'white', fontSize: 15, paddingLeft: 5 }}>{utils.timeToString(count)}</Text>
      </View>
      <View style={[commonStyles.column, { display: 'flex', width: 'auto', height: 'auto', flex: 1 }]}>
        <Text style={commonStyles.title} >For You</Text>
        <View style={{ width: 40, height: 7, backgroundColor: 'white', marginTop: 7 }} />
      </View>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Entypo name={'magnifying-glass'} size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

export default HomeHeader;