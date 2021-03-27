import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = props => {
  const {navigation} = props;
  const handelClick = useCallback(event => {
    navigation?.navigate('list');
  }, []);
  return (
    <View styles={styles.containerStyle}>
      <TouchableOpacity styles={styles.buttonViewStyle} onPress={handelClick}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonViewStyle: {},
});
