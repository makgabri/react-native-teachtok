import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/common';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Avatar from './Avatar';
import QuestionActivity from './QuestionActivity'
import MCQ from './MCQ'

function QuestionTile(props) {
    const [bgImageLoaded, setBgImageLoaded] = useState(false)

    return (
        <View style={{ flex: 1, alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-end', height: props.tileHeight, width: '100%' }}>
            {!bgImageLoaded &&
                <View style={[commonStyles.container, { position:'absolute', width: '100%', height: '100%' }]}>
                    <Feather name={'loader'} size={50} color={'rgba(255,255,255,0.6)'} />
                </View>}
            <Image
                onLoad={() => {setBgImageLoaded(true)}}
                style={[commonStyles.container, { position:'absolute', width: '100%', height: '100%' }]} source={{uri: props.data.image}} resizeMode='stretch'
            />
            <View style={{ height: '35%', width: '80%', padding: 20, justifyContent: 'flex-start' }}>
                <Text adjustsFontSizeToFit allowFontScaling
                    style={[commonStyles.question, { backgroundColor : 'rgba(0, 0, 0, 0.5)', borderRadius: 15, overflow: 'hidden', padding: 5 }]}>{props.data.question}</Text>
            </View>
            <View style={{ height: '47%', width: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', paddingBottom: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: 'auto' }}>
                        <MCQ id={props.data.id} data={props.data.options} />
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>{props.data.user?.name}</Text>
                            <Text style={{ color: 'white', fontSize: 12 }}>{props.data.description}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: 30 }}>
                        <Avatar uri={props.data.user.avatar} />
                        <QuestionActivity type={'heart'} iconBank={'Feather'} />
                        <QuestionActivity type={'chatbubble-ellipses-outline'} iconBank={'Ionicons'} />
                        <QuestionActivity type={'bookmark'} iconBank={'Entypo'} />
                        <QuestionActivity type={'arrow-redo'} iconBank={'Ionicons'} />
                    </View>
                </View>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'black', width: '100%', paddingVertical: 5, paddingHorizontal: 20 }}>
                    <MaterialCommunityIcons name={'play-box-multiple-outline'} size={18} color={'white'} />
                    <Text style={{ color: 'white', paddingLeft: 5 }}>Playlist . {props.data.playlist}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Feather name={'chevron-right'} size={18} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default QuestionTile;