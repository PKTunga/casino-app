import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PopularScreenGame, Input, } from '../../../components';
import { CommonHeader } from '../../../screens';
import images from '../../../index';
import { useSelector } from "react-redux";
import { Style, HomeTab, BetsTabStyle, PopularScreenStyle } from '../../../styles';
import { Strings, Colors, SH } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import IconA from 'react-native-vector-icons/AntDesign';

const PopilarLiveGame = [
    {
        id: '1',
        title: 'Belgium. Lal liga',
        img: images.belgium,
        count: '12',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '2',
        title: 'Brazil. Portugal',
        img: images.brazil,
        count: '50',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '3',
        title: 'Canada Cup',
        img: images.canada,
        count: '3',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '4',
        title: 'China Cup',
        img: images.china,
        count: '5',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '5',
        title: 'France. Canada',
        img: images.CupAward,
        count: '20',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '6',
        title: 'Germany Vs Italy',
        img: images.germany,
        count: '10',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '7',
        title: 'India Vs Bangla',
        img: images.india,
        count: '9',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '8',
        title: 'Italy. Portugal',
        img: images.italy,
        count: '5',
        Link: (RouteName.EsportsScreen)
    },
    {
        id: '10',
        title: 'Portugal Primeria Lig',
        img: images.portugal,
        count: '1',
        Link: (RouteName.EsportsScreen)
    },
];
  
const PopularTab = (props) => {
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
            <View style={{ position: 'relative',  backgroundColor: Colors.linerGradientback }}>
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
                        <Image source={images.FootballgameIcon} resizeMode='contain' style={BetsTabStyle.TitleIconLeft} />
                        <Text style={BetsTabStyle.GameTitle}>Football</Text>
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
export default PopularTab;
