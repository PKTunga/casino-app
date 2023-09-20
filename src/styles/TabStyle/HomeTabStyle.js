import { Colors, Fonts, SF, widthPercent, } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  Lottieanimation: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 57,
    top: -4,
  },
  BonusAnimation: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 0,
    top: -13,
    marginTop: -8,
  },
  Winrankanimation: {
    width: 30,
    height: 30,
    marginTop: -5,
    marginRight: 15,
  },
  Batteryicon: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 69,
    top: 3,
  },
  minviewpostionheader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  Flexrowhome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingLeft: 25,
    height: 80,
    width: '100%'
  },
  Hometabview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    width: '100%'
  },
  Setbgcolortext: {
    backgroundColor: Colors.linergradiuntcolor,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  Settextstyledigit: {
    color: Colors.White_text_color,
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.Gold_text_color,
    fontSize: 14,
    position: 'relative',
    left: 10,
  },
  Flexviewoneset: {
    flexDirection: 'row',
    width: widthPercent(30),
  },
  Setbordervertical: {
    height: 18,
    borderRadius: 100,
    width: 3,
    marginLeft: 5,
    backgroundColor: Colors.Gold_text_color
  },
  Leftandrightmargin: {
    marginLeft: 50,
    marginRight: 50,
  },
  pluspotionabloute: {
    position: 'absolute',
    bottom: -10,
    left: 20,
  },
  pluspotionabloutetwo: {
    position: 'absolute',
    bottom: -10,
    left: 5,
  },
  Setmargintip: {
    marginTop: 80,
    width: '100%',
    position: 'absolute',
    zIndex:34,
  },
  Setallviewwidth: {
    width: widthPercent(17),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Centericon: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Goldtextstyle: {
    color: Colors.Gold_text_color,
    fontSize: 10,
    fontFamily: Fonts.Poppins_Medium,
  },
  Whitetextstyle: {
    color: 'white'
  },
  Flexgameview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 150,
  },
  Gameanimationstyle: {
    height: 110,
    width: 110,
    marginTop: -20,
  },
  Goldcoinsstyle: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  Notificationstyle: {
    height: 60,
    width: 60,
    position: 'absolute',
    left: -3,
    top: -3,
  },
  Complatestyle: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: 2,
    top: 1,
  },
  Gameanimationstyletwo: {
    height: 70,
    width: 70,
    marginRight: 50,
    marginTop: -20,
  },
  Centericonanimation: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: widthPercent(33)
  },
  Userimagestyle: {
    height: 80,
    width: 80,
    borderRadius: 200,
  },
  Johntextstyle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: Fonts.Poppins_Medium,
  },
  flexiconreview: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Imagecenterviews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  Setboxviewcenter: {
    backgroundColor: Colors.Commonheaderlinergradiunttwo,
    width: '80%',
    padding: 5,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 10,
  },
  Setboxviewcentertwo: {
    backgroundColor: Colors.red_text_color,
    width: '80%',
    marginTop: 20,
    padding: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  flexrowanimation: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Winrtextstyle: {
    color: Colors.White_text_color,
    textAlign: 'left',
    fontFamily: Fonts.Poppins_Medium,
    width:'80%',
  },
  Lotteviewsetstyle: {
    height: 50,
    width: 50,
  },
  missontwotextstyle: {
    color: Colors.White_text_color,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    fontSize:17,
  },
  buttonbgcolorset: {
    backgroundColor:'#42c700',
    width:'50%',
    height:40,
  },
  Centerstyartburtom: {
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom:10,
  },
  Flexrowcdigit: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:10,
    marginTop:20,
  },
  Leaderboardtextsyle: {
    fontSize:SF(8),
    color:Colors.White_text_color,
    fontFamily:Fonts.Poppins_Medium,
  },
  bgcolorviewleaderboed: {
    backgroundColor:Colors.Commonheaderlinergradiunttwo,
    borderRadius:10,
    height:70,
    width:widthPercent(21),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});