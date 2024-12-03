import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>KEVIN ALFARIZA</Text>
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
    color: '#1E90FF',
    fontWeight: 'bold',
    marginBottom: 50, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', 
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
