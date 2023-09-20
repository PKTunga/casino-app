import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { CommonHeader } from '../../../screens';
import { Colors } from '../../../utils';
import { Style } from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { HomeTab } from '../../../styles';
import images from '../../../index';
import { Lottie, Button } from '../../../components';
import Icon from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import RouteName from '../../../routes/RouteName';


const HomeTabs = (props) => {
    const {navigation} = props;
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
            <View style={[Style.minstyleviewphotograpgytwo]}>
                <CommonHeader />
                <View style={HomeTab.Setmargintip}>
                    <LinearGradient
                        style={{ width: '100%' }}
                        start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                        colors={[Colors.Commonheaderlinergradiunt, Colors.Commonheaderlinergradiunttwo]}>
                        <Lottie
                            source={images.Bonus_Animation}
                            Lottiewidthstyle={HomeTab.BonusAnimation}
                        />
                        <View style={HomeTab.Hometabview}>
                            <View style={HomeTab.Setallviewwidth}>

                            </View>
                            <View style={HomeTab.Setallviewwidth}>
                                <View>
                                    <View style={HomeTab.Centericon}>
                                        <Icon name="trophy" size={20} color={Colors.Gold_text_color} />
                                    </View>
                                    <Text style={HomeTab.Goldtextstyle}>Win: <Text style={HomeTab.Whitetextstyle}>6</Text></Text>
                                </View>
                            </View>
                            <View style={HomeTab.Setallviewwidth}>
                                <View>
                                    <View style={HomeTab.Centericon}>
                                        <Icon name="trophy" size={20} color={Colors.Gold_text_color} />
                                    </View>
                                    <Text style={HomeTab.Goldtextstyle}>Lost: <Text style={HomeTab.Whitetextstyle}>4</Text></Text>
                                </View>
                            </View>
                            <View style={HomeTab.Setallviewwidth}>
                                <View>
                                    <View style={HomeTab.Centericon}>
                                        <IconM name="database-clock-outline" size={20} color={Colors.Gold_text_color} />
                                    </View>
                                    <Text style={HomeTab.Goldtextstyle}>In Play: <Text style={HomeTab.Whitetextstyle}>10</Text></Text>
                                </View>
                            </View>
                            <View style={HomeTab.Setallviewwidth}>
                                <View>
                                    <View style={HomeTab.Centericon}>
                                        <Lottie
                                            source={images.WnRank_Animation}
                                            Lottiewidthstyle={HomeTab.Winrankanimation}
                                        />
                                    </View>
                                    <Text style={HomeTab.Goldtextstyle}>Rank: <Text style={HomeTab.Whitetextstyle}>200k</Text></Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Style.container}>
                        <View style={HomeTab.Flexgameview}>
                            <View style={HomeTab.Centericonanimation}>
                                <Lottie
                                    source={images.Game_Animation}
                                    Lottiewidthstyle={HomeTab.Gameanimationstyletwo}
                                />
                            </View>
                            <View style={HomeTab.Centericonanimation}>
                                <View>
                                    <View style={HomeTab.Imagecenterviews}>
                                        <Image source={images.Game_user_inmage} style={HomeTab.Userimagestyle} />
                                    </View>
                                    <Text style={HomeTab.Johntextstyle}>John</Text>
                                    <View style={HomeTab.flexiconreview}>
                                        <IconM name="star" size={20} color={Colors.Gold_text_color} />
                                        <IconM name="star" size={20} color={Colors.Gold_text_color} />
                                        <IconM name="star" size={20} color={Colors.Gold_text_color} />
                                        <IconM name="star" size={20} color={Colors.Gold_text_color} />
                                        <IconM name="star" size={20} color={Colors.Gold_text_color} />
                                    </View>
                                </View>
                            </View>
                            <View style={HomeTab.Centericonanimation}>
                                <Lottie
                                    source={images.Game_Animationtwo}
                                    Lottiewidthstyle={HomeTab.Gameanimationstyle}
                                />
                            </View>
                        </View>
                        <View style={HomeTab.Setboxviewcentertwo}>
                            <Text style={HomeTab.missontwotextstyle}>Misson 2</Text>
                        </View>
                        <View style={HomeTab.Setboxviewcenter}>
                            <View style={HomeTab.flexrowanimation}>
                                <View style={HomeTab.Lotteviewsetstyle}>
                                    <Lottie
                                        source={images.Gold_Coins_Animationtwo}
                                        Lottiewidthstyle={HomeTab.Goldcoinsstyle}
                                    />
                                </View>
                                <Text style={HomeTab.Winrtextstyle}>Win 1200 Betcoins From Bets</Text>
                            </View>
                            <View style={HomeTab.Centerstyartburtom}>
                                <Button onPress={() => navigation.navigate(RouteName.COUNTRY_MATCH_SCREEN)} title="START" buttonStyle={HomeTab.buttonbgcolorset} />
                            </View>
                        </View>
                        <View style={HomeTab.Flexrowcdigit}>
                            <TouchableOpacity style={HomeTab.bgcolorviewleaderboed}>
                                <View>
                                    <View style={HomeTab.Lotteviewsetstyle}>
                                        <Lottie
                                            source={images.Leader_Board_Animationtwo}
                                            Lottiewidthstyle={HomeTab.Goldcoinsstyle}
                                        />
                                    </View>
                                    <Text style={HomeTab.Leaderboardtextsyle}>LEADERBOARD</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={HomeTab.bgcolorviewleaderboed}>
                                <View>
                                    <View style={HomeTab.Lotteviewsetstyle}>
                                        <Lottie
                                            source={images.Chalange_Animationtwo}
                                            Lottiewidthstyle={HomeTab.Goldcoinsstyle}
                                        />
                                    </View>
                                    <Text style={HomeTab.Leaderboardtextsyle}>CHALLENGES</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={HomeTab.bgcolorviewleaderboed}>
                                <View>
                                    <View style={HomeTab.Lotteviewsetstyle}>
                                        <Lottie
                                            source={images.Complate_Animationtwo}
                                            Lottiewidthstyle={HomeTab.Complatestyle}
                                        />
                                    </View>
                                    <Text style={HomeTab.Leaderboardtextsyle}>COMPETITIONS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={HomeTab.bgcolorviewleaderboed}>
                                <View>
                                    <View style={HomeTab.Lotteviewsetstyle}>
                                        <Lottie
                                            source={images.Notifications_Animationtwo}
                                            Lottiewidthstyle={HomeTab.Notificationstyle}
                                        />
                                    </View>
                                    <Text style={HomeTab.Leaderboardtextsyle}>NOTIFICTION</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <Lottie
                                    source={images.Star_Animation}
                                   
                                /> */}
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
};
export default HomeTabs;
