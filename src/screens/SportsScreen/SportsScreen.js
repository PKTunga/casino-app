import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PopularScreenGame, Input, } from '../../components';
import { CommonHeader } from '../../screens';
import images from '../../index';
import { useSelector } from "react-redux";
import { Style, HomeTab, BetsTabStyle, PopularScreenStyle } from '../../styles';
import { Strings, Colors, SH } from '../../utils';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import IconA from 'react-native-vector-icons/AntDesign';

const PopilarLiveGame = [
    {
        id: '1',
        title: 'ICC World Cup',
        img: images.CupAward,
        count: '12',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '2',
        title: 'ICC Champions Trophy',
        img: images.CupAward,
        count: '50',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '3',
        title: 'ICC T20 World cup',
        img: images.unitedkingdom,
        count: '3',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '4',
        title: 'Ashes Trophy',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '5',
        title: 'Border Gavaskar Trophy',
        img: images.CupAward,
        count: '20',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '6',
        title: 'Commonwealth Bank series (Australian Tri series)',
        img: images.CupAward,
        count: '10',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'Asia Cup',
        img: images.CupAward,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'NatWest series',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'Indian Premier League',
        img: images.CupAward,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'Champions League Twenty20',
        img: images.CupAward,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'T20 World Cup 2015',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'ODI World Cup 2015',
        img: images.CupAward,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'ICC Champions Trophy 2013',
        img: images.CupAward,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'ICC U-19 World Cup 2014',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'ICC Women’s World Cup 2013',   
        img: images.CupAward,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
];
  
const SportsScreen = (props) => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [text, onChangeText] = useState("");

    const LeagueGamelist = (item, index) => {
        return (
            <TouchableOpacity style={BetsTabStyle.PopularGameView} onPress={() => navigation.navigate(item.Link)}>
                <View style={BetsTabStyle.width80}>
                    <View style={BetsTabStyle.PopularGameViewIn}>
                        <Image source={item.img} resizeMode="contain" style={[BetsTabStyle.PopularGameIcon, BetsTabStyle.width10]} />
                        <Text style={[BetsTabStyle.PopularGameTitle, BetsTabStyle.width90]}>{item.title}</Text>
                    </View>
                </View>
                <View style={[BetsTabStyle.PopularGameCountPerent, BetsTabStyle.width20]}>
                    <Text style={[BetsTabStyle.PopularGameCount, { color: colorrdata }]}>{item.count}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
            <View style={{ position: 'relative' }}>
                <CommonHeader />
                <View style={BetsTabStyle.SearchbarBoxMain}>
                    <View style={[BetsTabStyle.SearchbarBoxsecond]}>
                        <View style={BetsTabStyle.SearchbarBox}>
                            <IconA name='search1' style={BetsTabStyle.SearchbarIcon} />
                            <Input
                                placeholder='Search your league'
                                onChangeText={(text) => onChangeText(text)}
                                value={text}
                                SearchHomeTab={BetsTabStyle.searchinputleadue}
                            />
                        </View>
                    </View>
                    <View style={BetsTabStyle.TitleMainBox}>
                        <Image source={images.CricketIcon} resizeMode='contain' style={BetsTabStyle.TitleIconLeft} />
                        <Text style={BetsTabStyle.GameTitle}>Cricket</Text>
                        <Image source={images.Start} resizeMode='contain' style={BetsTabStyle.TitleIconLeft} />
                    </View>
                </View>
            </View>
            <View style={BetsTabStyle.minviewallcontentSecond}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View>
                        <View>
                            <FlatList
                                data={PopilarLiveGame}
                                renderItem={({ item, index }) => LeagueGamelist(item, index)}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
};
export default SportsScreen;
