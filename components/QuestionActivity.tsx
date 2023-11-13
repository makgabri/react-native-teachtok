import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import api from '../api/fetch';
import { useDispatch } from 'react-redux';

interface QuestionActivityProps {
  iconBank: string;
  type: string;
}

const QuestionActivity: FC<QuestionActivityProps> = (props) => {
  const dispatch = useDispatch()
  const handleOnPress = () => {
    if (props.type =="arrow-redo") {
      api.fakeError(dispatch)
    }
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{ justifyContent: 'center', alignItems: 'center' }}>
      {props.iconBank == 'Entypo' && <Entypo name={props.type} size={25} color={'white'} />}
      {props.iconBank == 'Feather' && <Feather name={props.type} size={25} color={'white'} />}
      {props.iconBank == 'Ionicons' && <Ionicons name={props.type} size={25} color={'white'} />}
      <Text style={{ color: 'white' }}>{Math.floor(Math.random() * (999 - 0 + 1) + 0)}</Text>
    </TouchableOpacity>
  );
}

export default QuestionActivity;