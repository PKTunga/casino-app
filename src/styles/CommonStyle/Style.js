import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, Colors, SW } from '../../utils';

export default StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
  Bckgroundimgheight: {
    height: '100%',
    width: '100%'
  },
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: ColorTheme.sp_Theme,
  },
  minviewallcontentSecond: {
    width: '100%',
    height: '100%',
    // backgroundColor: ColorTheme.sp_Theme,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ScrollViewStyles: {
    width: '100%',
    height: 'auto',
  },
  sacroowviewstyletwor: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',

  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: SH(15),
    height: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: 'gray',
    fontSize: SF(17),
    padding: 0,
    paddingTop: 5,
    fontFamily: Fonts.Poppins_Medium,
  },


  // best 247
  Homeiconcenter: {
    backgroundColor: '#25323f',
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    marginTop: -25,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setsplashscreehhieight: {
    height: 100,
    width: 100
  },
  Setbgcolorview: {
    // backgroundColor: Colors.theme_backgound,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Setminviewstylesplasg: {
    backgroundColor: Colors.White_text_color,
    height: 130,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  Besttextstyle: {
    color: Colors.White_text_color,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Bold,
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
  },
  setimagviewlogin: {
    backgroundColor: 'white',
    height: 130,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
  },
  imagesetus: {
    width: 80,
    height: 80,
    position: 'relative',
    left: 3,
  },
  PositionReletive: {
    position: 'relative'
  },
  minstyleviewphotograpgytwo: {
    flexDirection: 'row',
    height: '100%',
  },

  BetcenteredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  BetmodalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 15, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Betbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  BetbuttonOpen: {
    backgroundColor: "#F194FF",
  },
  BetbuttonClose: {
    backgroundColor: "#2196F3",
  },
  BettextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  BetmodalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalcolseBtnbet: {
    width: SW(50),
    height: SH(50),
    position: 'absolute',
    right: 0,
    top: -20,
  },
  BetCancelText: {
    fontFamily: Fonts.Poppins_Medium,
    color: '#fff',
    fontSize: SF(22),
    textAlign: 'center',
  },
  Betmodalcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(60),
    paddingBottom: SH(40)
  },
  Betmodalcentertwo: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'cenetr',
    width: '80%'
  },
  textCeneter: {
    justifyContent: 'center',
  },
  TextColorAmount: {
    color: Colors.TextFFAA20
  },
  centeredView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    paddingHorizontal: SH(30),
    overflow: 'hidden'
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  ModalLogoutSet: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settext: {
    color: '#000',
    fontSize: SF(22),
    textAlign: 'center',
    paddingBottom: SH(10)
  },
  iconcolorwhite: {
    color: '#fff'
  },
  setokbutton: {
    width: '45%',
    marginHorizontal: SH(20)
  },
  LoginTextinput: {
    color: '#000'
  },
  CenterBtnOk: {
    flexDirection: 'row',
  },
  Iconset: {
    width: SW(30),
    height: SH(30),
    position: 'relative',
    bottom: 8,    
  }

});