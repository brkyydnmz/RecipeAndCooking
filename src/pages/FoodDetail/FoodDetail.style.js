import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    color: 'darkred',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'darkred',
    paddingTop: 5,
  },
  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  instructions: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
