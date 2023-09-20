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
        title: 'Intel Extreme Masters Rio 2022',
        img: images.CupAward,
        count: '12',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '2',
        title: '2022 Asia Pacific Predator League Grand Finals',
        img: images.CupAward,
        count: '50',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '3',
        title: 'DreamHack 2022: Atlanta',
        img: images.CupAward,
        count: '3',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '4',
        title: 'DreamHack Winter 2022',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '5',
        title: 'CS:GO BLAST Premier: Fall Finals 2022',
        img: images.CupAward,
        count: '20',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '6',
        title: 'IESF 14th World Esports Championship',
        img: images.CupAward,
        count: '10',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'CS:GO BLAST Premier: World Finals 2022',
        img: images.CupAward,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'Global Esports Games 2022',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'Hearthstone 2022 World Championship',
        img: images.CupAward,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'Valorant Champions Tour 2023',
        img: images.CupAward,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'Esports Universe Summit 2023',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'Le Mans Virtual Series',
        img: images.CupAward,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '7',
        title: 'Asian Games Hangzhou 2022',
        img: images.CupAward,
        count: '9',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '8',
        title: 'Elite Series League of Legends Pro-Am Finals',
        img: images.CupAward,
        count: '5',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
    {
        id: '10',
        title: 'Apex Legends Global Series Year 3',   
        img: images.CupAward,
        count: '1',
        Link: (RouteName.COUNTRY_MATCH_SCREEN)
    },
];
  
const EsportsScreen = (props) => {
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
                        <Image source={images.EsportIcon} resizeMode='contain' style={BetsTabStyle.TitleIconLeft} />
                        <Text style={BetsTabStyle.GameTitle}>Esports</Text>
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
export default EsportsScreen;
