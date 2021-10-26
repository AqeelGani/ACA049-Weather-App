import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Appbar() {
  const styles = StyleSheet.create({
    bg: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      backgroundColor: '#646464',
      cursor: 'pointer',
    },
    text: {
      color: 'white',
      fontFamily: 'monospace',
      fontSize: 'x-large',
      fontWeight: 'bolder',
    },
  });

  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Weather</Text>
    </View>
  );
}
