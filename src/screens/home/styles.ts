import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 50,
    
  },
  btnLogin: {
    
  },
  textBtnLogin: {
    fontWeight: 'bold',
    fontSize: 15
  },
  ImgBtnLogin: {
    width: 35,
    height: 35,
    borderRadius: 17
  },
  areaBtnType: {
    flexDirection: 'row',
    marginBottom: 20
  },
  btnType: {
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginRight: 17,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20
  },
  btnType2: {
    paddingVertical: 5,
      paddingHorizontal: 15,
      marginRight: 17,
      borderWidth: 1,
      borderColor: '#000',
      backgroundColor: '#000',
      borderRadius: 20
  },
  btnTypeText: {
    color: '#ccc'
  },
  btnTypeText2: {
    color: '#fff'
  },
  areaImgBand: {
    marginBottom: 25
  },
  imgBand: {
    width: 350,
    height: 350,
    flexDirection: 'row',
    marginRight: 25,
    borderRadius: 10
  },
  btnTopChords: {
    marginBottom: 20
  },
  textChords: {
    fontWeight: 'bold',
    fontSize: 20
  },
  areaSongs: {
      
  },
  btnSongs: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    marginBottom: 10
  },
  miniImgBand: {
    width: 35,
    height: 35,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17
  },
  numberSong: {
    marginHorizontal: 20,
    color: '#ccc'
  },
  numberSong2: {
    marginHorizontal: 16,
    color: '#ccc'
  },
  areaTitleBand: {
    
  },
  areaNameCheck: {
    flexDirection: 'row'
  },
  nameSong: {
    fontWeight: '600'
  },
  check: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginTop: 2
  },
  nameBand: {
    color: '#ccc',
    fontSize: 13,
    marginTop: -2
  },
  btnViewChords: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
     
  },
  btnViewChords2: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 30
  },
  textViewChords: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});