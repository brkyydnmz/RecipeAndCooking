import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
});

export default styles;
