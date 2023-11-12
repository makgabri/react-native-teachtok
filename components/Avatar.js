import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import commonStyles from '../styles/common';

function Avatar(props) {
    const [avatarLoaded, setAvatarLoaded] = useState(false)

    return (
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
            {!avatarLoaded &&
                <View style={[commonStyles.container, { position:'absolute', width: '100%', height: '100%' }]}>
                    <Feather name={'loader'} size={25} color={'rgba(255,255,255,0.6)'} />
                </View>}
            <Image
                style={commonStyles.avatar}
                onLoad={() => {setAvatarLoaded(true)}}
                source={props}/>
            <View style={commonStyles.addition}>
                <Text style={{ fontSize: 18, color: 'white' }}>+</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Avatar;