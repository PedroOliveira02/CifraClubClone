import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  iconX: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
  boxLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cifraImg: {
    width: 170,
    height: 85,
    alignSelf: 'center',
    marginBottom: 10
  },
  box: {
    backgroundColor: '#fff',
    width: '75%',
    height: 530,
    alignSelf: 'center',
    borderRadius: 10
  },
  centerAlign: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  inputs: {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 0,
    marginLeft: 20
  },
  boxes: {
    width: '100%',
    height: 50,
    borderRadius: 5,
  },
  boxInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 10
  },
  center: {
    fontSize: 15,
    marginTop: 15,
    paddingLeft: 10
  },
  login: {
    backgroundColor: '#FF6600',
    color: 'white',
    marginTop: 20,
    fontSize: 18
  },
  forgot: {
    backgroundColor: 'white',
    color: '#FF6600',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15
  },
  grayLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginLeft: -20,
    marginRight: -20
  },
  facebook: {
    backgroundColor: '#3B5998',
    color: '#fff',
    paddingTop: 6
  },
  iconImg: {
    width: 25,
    height: 25,  
  },
  google: {
    backgroundColor: '#ECEFF1',
    color: '#707070',
    paddingTop: 6
  },
  apple: {
    backgroundColor: '#000',
    color: '#fff',
    paddingTop: 6
  },
  account: {
    backgroundColor: '#fff',
    marginTop: 5
  },
  register: {
    color: '#FF6600',
    fontWeight: 'bold'
  },
  logoDown: {
    alignSelf: 'center',
    width: 120,
    height: 40,
    marginTop: 15
  },
  finalText: {
    color: '#fff',
    alignSelf: 'center',
    width: '88%',
    textAlign: 'center',
    marginTop: 10
  },
  links: {
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
  }
});