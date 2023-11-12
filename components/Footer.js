import * as React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

function Footer() {
  return (
    <View style={commonStyles.row}>
      <Text>Time</Text>
      <Text>For You</Text>
      <Text>Search Button</Text>
    </View>
  );
}

export default Footer;