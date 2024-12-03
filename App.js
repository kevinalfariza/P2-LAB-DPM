import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions } from 'react-native';

const App = () => {
  const screenWidth = Dimensions.get('window').width; 
  const animation = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: screenWidth - 200, 
          duration: 2000, 
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: -200, 
          duration: 2000, 
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animation]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.centerText, { transform: [{ translateX: animation }] }]}>
        Kevin Alfariza
      </Animated.Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'black' }]} />
        <View style={[styles.box, { backgroundColor: 'black' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
