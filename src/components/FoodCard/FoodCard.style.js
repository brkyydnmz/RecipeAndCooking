/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
