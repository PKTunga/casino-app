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
        title: 'American Tournaments',
        img: images.belgium,
        count: '12',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '2',
        title: 'European Tournaments',
        img: images.brazil,
        count: '50',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '3',
        title: 'National Teams Tournaments',
        img: images.canada,
        count: '3',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '4',
        title: 'Euro Basket',
        img: images.china,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '5',
        title: 'FIBA Americas Championship',
        img: images.CupAward,
        count: '20',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '6',
        title: 'FIBA World Championship',
        img: images.germany,
        count: '10',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'FIBA Oceania Championship',
        img: images.india,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'UBL Pro League',
        img: images.italy,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'Senior National Basketball Championship',
        img: images.portugal,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'Salem Sona Sports League 2018 - Basketball',
        img: images.india,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'Federation Cup Basketball Championship',
        img: images.italy,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: '3BL 3X3',
        img: images.portugal,
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
                        <Image source={images.BaskestballGameIon} resizeMode='contain' style={BetsTabStyle.TitleIconLeft} />
                        <Text style={BetsTabStyle.GameTitle}>Basketball</Text>
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
