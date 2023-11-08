import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Adddevice = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Text
          style={{
            fontSize: 10,
            color: '#000000',
            marginStart: 13,
            fontFamily: 'Inter',
          }}>
          기기 추가
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 65,
    height: 25,
    borderColor: '#AEADAD',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    alignContent: 'center',
  },
});
