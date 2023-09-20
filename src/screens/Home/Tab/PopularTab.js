import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PopularScreenGame } from '../../../components';
import images from '../../../index';
import { useSelector } from "react-redux";
import { Style, PopularScreenStyle } from '../../../styles';
import { Strings, Colors } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';


const PopilarLiveGame = [
  {
    id: '1',
    title: 'Cricket',
    img: images.CricketIcon,
    count: '10',
    Link: (RouteName.SPORTS_SCREEN)
  },
  {
    id: '11',
    title: 'Esports',
    img: images.EsPortsgameIcon,
    count: '2',
    Link: (RouteName.EsportsScreen)
  },
  {
    id: '5',
    title: 'Basketball',
    img: images.BaskestballGameIon,
    count: '44',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '2',
    title: 'Kabaddi',
    img: images.KabbadigameIcon,
    count: '20',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '3',
    title: 'Football',
    img: images.FootballgameIcon,
    count: '59',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '4',
    title: 'Table Tennis',
    img: images.TableTennisgameIcon,
    count: '43',
    Link: (RouteName.BASKETBALLSCREEN)
  },
 
  {
    id: '6',
    title: 'Tennis',
    img: images.TennisgameIcon,
    count: '10',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '7',
    title: 'Ice Hockey',
    img: images.IceHockeygameIcon,
    count: '5',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '8',
    title: 'Volleyball',
    img: images.VolleyBallgameIcon,
    count: '6',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '9',
    title: 'Darts',
    img: images.DartsgameIcon,
    count: '44',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '10',
    title: 'Baseball',
    img: images.BaseballgameIcon,
    count: '12',
    Link: (RouteName.BASKETBALLSCREEN)
  },
 


];
// Popular Sport tab data
const PopilarSportGame = [
  {
    id: '1',
    title: 'Cricket',
    img: images.CricketIcon,
    count: '12',
    Link: (RouteName.SPORTS_SCREEN)
  },
  {
    id: '2',
    title: 'Kabaddi',
    img: images.KabbadigameIcon,
    count: '45',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '3',
    title: 'Football',
    img: images.FootballgameIcon,
    count: '55',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '4',
    title: 'Table Tennis',
    img: images.TableTennisgameIcon,
    count: '43',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '5',
    title: 'Basketball',
    img: images.BaskestballGameIon,
    count: '66',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '6',
    title: 'Tennis',
    img: images.TennisgameIcon,
    count: '78',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '7',
    title: 'Ice Hockey',
    img: images.IceHockeygameIcon,
    count: '15',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '8',
    title: 'Volleyball',
    img: images.VolleyBallgameIcon,
    count: '22',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '9',
    title: 'Darts',
    img: images.DartsgameIcon,
    count: '33',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '10',
    title: 'Baseball',
    img: images.BaseballgameIcon,
    count: '40',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '11',
    title: 'Esports',
    img: images.EsPortsgameIcon,
    count: '48',
    Link: (RouteName.EsportsScreen)
  },
 

];
// Popular Esports List data
const PopilarEsportsGame = [
  {
    id: '1',
    title: 'eSports Cricket',
    img: images.eSportsCricketIcon,
    count: '96',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '2',
    title: 'FIFA',
    img: images.FIFAIcon,
    count: '45',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '4',
    title: 'Mortal Kombat',
    img: images.MortalKombatIcon,
    count: '42',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '5',
    title: 'Big Rumble Boxing',
    img: images.BigRumbleBoxingIcon,
    count: '10',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '6',
    title: 'Crystel',
    img: images.CrystelIcon,
    count: '35',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '7',
    title: 'Guilty Gear',
    img: images.GuiltyGearIcon,
    count: '36',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '8',
    title: 'Hyper Brawl',
    img: images.HyperBrawlIcon,
    count: '45',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '9',
    title: 'SEGA Football',
    img: images.SEGAFootballIcon,
    count: '80',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '10',
    title: 'Sette e mezzo',
    img: images.SetteemezzoIcon,
    count: '77',
    Link: (RouteName.BASKETBALLSCREEN)
  },
  {
    id: '11',
    title: 'Esports',
    img: images.EsPortsgameIcon,
    count: '49',
    Link: (RouteName.BASKETBALLSCREEN)
  },

];

const PopularTab = (props) => {
  const navigation = useNavigation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [tabShow, SettabShow] = useState('1');
  return (

    <LinearGradient
      start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
      colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
      <View style={PopularScreenStyle.MainTabViewParent}>
        <View style={PopularScreenStyle.MainTabView}>
          <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? [PopularScreenStyle.TabParentActivebox, { backgroundColor: Colors.linerGradientback, borderColor: Colors.linerGradientback }] : PopularScreenStyle.TabParentNotActivebox}>
            <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? PopularScreenStyle.TabTextActivebox : [PopularScreenStyle.TabTextNotActivebox, { color: Colors.linerGradientback }]}>{Strings.PopularScreen.Livelable}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '2' ? [PopularScreenStyle.TabParentActivebox, { backgroundColor: Colors.linerGradientback, borderColor: Colors.linerGradientback }] : PopularScreenStyle.TabParentNotActivebox}>
            <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? PopularScreenStyle.TabTextActivebox : [PopularScreenStyle.TabTextNotActivebox, { color: Colors.linerGradientback }]}>{Strings.PopularScreen.Sportlabel}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => SettabShow('3')} style={tabShow === '3' ? [PopularScreenStyle.TabParentActivebox, { backgroundColor: Colors.linerGradientback, borderColor: Colors.linerGradientback }] : PopularScreenStyle.TabParentNotActivebox}>
            <Text onPress={() => SettabShow('3')} style={tabShow === '3' ? PopularScreenStyle.TabTextActivebox : [PopularScreenStyle.TabTextNotActivebox, { color: Colors.linerGradientback }]}>{Strings.PopularScreen.Esportslabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <View>
            <View style={PopularScreenStyle.minviewallcontentSecond}>
              <View>
                {/* Start Tab View Items  */}
                {tabShow == '1' ?
                  <View>
                    <PopularScreenGame
                      FlateData={PopilarLiveGame}
                    />
                  </View>
                  : null}
                {tabShow == '2' ?
                  <View>
                    <PopularScreenGame
                      FlateData={PopilarSportGame}
                    />
                  </View>
                  : null}
                {tabShow == '3' ?
                  <View>
                    <PopularScreenGame
                      FlateData={PopilarEsportsGame}
                    />
                  </View>
                  : null}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
export default PopularTab;
