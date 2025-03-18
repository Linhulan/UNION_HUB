import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainPage: React.FC = () => {
  return (
    <View style={styles.mainContianer}>

      <View style={styles.menu}>
        <Text>Nav</Text>
      </View>
      
      <View style={styles.content}>
        <Text>Content</Text>
      </View>

      <View style={styles.sider}>
        <Text>Sider</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContianer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  menu: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  content: {
    flex: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  sider: {
    flex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
});

export default MainPage;
