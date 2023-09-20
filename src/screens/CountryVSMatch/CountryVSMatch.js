import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { CommonHeader } from '../../screens';
import { Colors } from '../../utils';
import { Style, CountryMatch } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../index';
import { Lottie, Modal, Button } from '../../components';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';



const CountryVSMatch = () => {
    const [Selectcolor, SetSelectcolor] = useState(2);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibletwo, setModalVisibletwo] = useState(false);
    const [sliderValue, setSliderValue] = useState(15);
    const Selectedcolorfunction = (item) => {
        SetSelectcolor(item);
    }
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linergradiuntcolor, Colors.linergradiuntcolortwo]}>
            <View style={[Style.minstyleviewphotograpgytwo]}>
                <CommonHeader />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Style.container}>
                        <View style={CountryMatch.Margintopspace}>
                            <LinearGradient
                                style={{ width: '100%' }}
                                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                                colors={[Colors.Commonheaderlinergradiunt, Colors.Commonheaderlinergradiunttwo]}>
                                <View style={CountryMatch.Setcountryflexview}>
                                    <View>
                                        <View style={CountryMatch.Lotteviewsetstyle}>
                                            <Lottie
                                                source={images.Star_Animation}
                                                Lottiewidthstyle={CountryMatch.Goldcoinsstyle}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={CountryMatch.countrytextstyle}>India VS Australia</Text>
                                    </View>
                                    <View>
                                        <View style={CountryMatch.Lotteviewsetstyle}>
                                            <Lottie
                                                source={images.Star_Animation}
                                                Lottiewidthstyle={CountryMatch.Goldcoinsstyle}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                        <View style={CountryMatch.Setminboxviewstyle}>
                            <View style={CountryMatch.FlexrowCountry}>
                                <View style={CountryMatch.Indiatextsflex}>
                                    <View style={CountryMatch.Lotteviewsetstyle}>
                                        <Lottie
                                            source={images.India_Flag}
                                            Lottiewidthstyle={CountryMatch.Indiaflaganimation}
                                        />
                                    </View>
                                    <Text style={CountryMatch.countrytextstyletwo}>India</Text>
                                </View>
                                <View>
                                    <Text style={CountryMatch.diffenttimeset}>20:27</Text>
                                    <Text style={CountryMatch.countrytextstyletwo}>06:45</Text>
                                </View>
                                <View style={CountryMatch.Indiatextsflex}>
                                    <Text style={CountryMatch.countrytextstyletwo}>Australia</Text>
                                    <View style={CountryMatch.Lotteviewsetstyle}>
                                        <Lottie
                                            source={images.AustraliaFlag}
                                            Lottiewidthstyle={CountryMatch.Indiaflaganimationtwo}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={CountryMatch.Flexrowborder}>
                                <View style={CountryMatch.Borderone} />
                                <Text style={CountryMatch.Setwhowintitle}>Who Will Win</Text>
                                <View style={CountryMatch.Borderone} />
                            </View>
                            <View style={CountryMatch.Resultswinviews}>
                                <View>
                                    <TouchableOpacity style={Selectcolor === 1 ? CountryMatch.Setboxcolorviewgold : CountryMatch.Setboxcolorview} onPress={() => { Selectedcolorfunction(1); setModalVisible(true) }}>
                                        <Text style={CountryMatch.Wintextstylset}>Win </Text>
                                        <Text style={CountryMatch.Wintextstylsettwo}>6</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={Selectcolor === 2 ? CountryMatch.Setboxcolorviewgold : CountryMatch.Setboxcolorview} onPress={() => { Selectedcolorfunction(2); setModalVisible(true) }}>
                                        <Text style={CountryMatch.Wintextstylset}>Draw</Text>
                                        <Text style={CountryMatch.Wintextstylsettwo}>10</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={Selectcolor === 3 ? CountryMatch.Setboxcolorviewgold : CountryMatch.Setboxcolorview} onPress={() => { Selectedcolorfunction(3); setModalVisible(true) }}>
                                        <Text style={CountryMatch.Wintextstylset}>Win </Text>
                                        <Text style={CountryMatch.Wintextstylsettwo}>2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={CountryMatch.Flexrowborder}>
                                <View style={CountryMatch.Borderone} />
                                <Text style={CountryMatch.Setwhowintitle}>Handicap</Text>
                                <View style={CountryMatch.Borderone} />
                            </View>
                            <View style={CountryMatch.Resultswinviews}>
                                <View>
                                    <TouchableOpacity style={Selectcolor === 4 ? CountryMatch.Setboxcolorviewgoldtwo : CountryMatch.Setboxcolorviewtwo} onPress={() => { Selectedcolorfunction(4); setModalVisible(true) }}>
                                        <Text style={CountryMatch.Wintextstylset}>Handicap 3 (0)</Text>
                                        <Text style={CountryMatch.Wintextstylsettwo}>8.9</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={Selectcolor === 5 ? CountryMatch.Setboxcolorviewgoldtwo : CountryMatch.Setboxcolorviewtwo} onPress={() => { Selectedcolorfunction(5); setModalVisible(true) }}>
                                        <Text style={CountryMatch.Wintextstylset}>Handicap 3 (3) </Text>
                                        <Text style={CountryMatch.Wintextstylsettwo}>7</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Lottie
                            source={images.Star_Animation}
                        />
                    </View>
                </ScrollView>
                <Modal
                    modalViewStyle={CountryMatch.Setheightmodal}
                    modalVisible={modalVisible}
                    setModalVisible={() => {
                        setModalVisible(!modalVisible);
                    }}
                    close={() => setModalVisible(!modalVisible)}
                >
                    <View style={CountryMatch.Quickbesticonytextstyle}>
                        <Text></Text>
                        <Text style={CountryMatch.Quickbetstyle}>QuickBet</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Icon name="window-close" size={30} color={Colors.White_text_color} />
                        </TouchableOpacity>
                    </View>
                    <View style={CountryMatch.Settextstyle}>
                        <Text style={CountryMatch.Brentefordtextstyle}>Brentford - Tottenham Hotspur</Text>
                        <Button buttonStyle={CountryMatch.Setbuttonstyle} title="3.78" />
                    </View>
                    <View style={CountryMatch.Allpadingleft}>
                        <Text style={CountryMatch.Brentefordtextstyle}>Regular Time: Win 5</Text>
                        <Text style={CountryMatch.Setfootballtext}>Football</Text>
                        <View style={CountryMatch.Flexviewsaetmin}>
                            <View style={CountryMatch.Setflexview}>
                                <View style={CountryMatch.Lotteviewsetstyle}>
                                    <Lottie
                                        source={images.Coins_Animation}
                                        Lottiewidthstyle={CountryMatch.Goldcoinsstyle}
                                    />
                                </View>
                                <Text style={CountryMatch.Setfootballtextdoigit}>300</Text>
                            </View>
                            <View style={CountryMatch.Flexthreedigit}>
                                <View style={CountryMatch.Setbgdigit}>
                                    <Text style={CountryMatch.Settextstylesimple}>1/{sliderValue}</Text>
                                </View>
                                <View style={CountryMatch.Setbgdigit}>
                                    <Text style={CountryMatch.Settextstylesimple}>2/8</Text>
                                </View>
                                <View style={CountryMatch.Setbgdigit}>
                                    <Text style={CountryMatch.Settextstylesimple}>5/10</Text>
                                </View>
                            </View>
                            <View style={CountryMatch.Setflexview}>
                                <View style={CountryMatch.Lotteviewsetstyle}>
                                    <Lottie
                                        source={images.Coins_Animation}
                                        Lottiewidthstyle={CountryMatch.Goldcoinsstyle}
                                    />
                                </View>
                                <Text style={CountryMatch.Setfootballtextdoigit}>1000</Text>
                            </View>
                        </View>
                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            minimumTrackTintColor="#307ecc"
                            maximumTrackTintColor="#000000"
                            step={1}
                            value={sliderValue}
                            onValueChange={(sliderValue) => setSliderValue(sliderValue)}
                        />
                        <View style={CountryMatch.Flexviewretirntext}>
                            <View style={CountryMatch.Setflexview}>
                                <Text style={CountryMatch.Setfootballtexttwo}>RETURN :</Text>
                                <View style={CountryMatch.Lotteviewsetstyle}>
                                    <Lottie
                                        source={images.Coins_Animation}
                                        Lottiewidthstyle={CountryMatch.Goldcoinsstyle}
                                    />
                                </View>
                                <Text style={CountryMatch.Setfootballtextthree}>595</Text>
                            </View>
                            <View>
                                <Text style={CountryMatch.Setfootballtexttwo}>ODDS: 3.9</Text>
                            </View>
                            <View style={CountryMatch.Setflexview}>
                                <Text style={CountryMatch.Setfootballtexttwo}>Bets :</Text>
                                <View style={CountryMatch.Lotteviewsetstyle}>
                                    <Lottie
                                        source={images.Coins_Animation}
                                        Lottiewidthstyle={CountryMatch.Goldcoinsstyle}
                                    />
                                </View>
                                <Text style={CountryMatch.Setfootballtextthree}>55</Text>
                            </View>
                        </View>
                        <View style={CountryMatch.Flexbutton}>
                            <Button buttonStyle={CountryMatch.Buttonchnage} buttonTextStyle={CountryMatch.ButtonTextStyle} title={"CHALLENGE"} />
                            <Button buttonStyle={CountryMatch.Buttonchnage} buttonTextStyle={CountryMatch.ButtonTextStyle} title={"MULTIBET"} />
                        </View>
                        <View style={CountryMatch.Centerlastbutton}>
                            <Button onPress={() => { setModalVisibletwo(true); setModalVisible(!modalVisible) }} buttonStyle={CountryMatch.Buttonchnageteo} buttonTextStyle={CountryMatch.ButtonTextStyleto} title={"PLACE BET"} />
                        </View>
                    </View>

                </Modal>


                <Modal
                    modalViewStyle={CountryMatch.Setheightmodal}
                    modalVisible={modalVisibletwo}
                    setModalVisible={() => {
                        setModalVisibletwo(!modalVisibletwo);
                    }}
                    close={() => setModalVisibletwo(!modalVisibletwo)}
                >
                    <View style={CountryMatch.Quickbesticonytextstyle}>
                        <Text style={CountryMatch.Quickbetstyle}>New Achievement</Text>
                        <TouchableOpacity onPress={() => setModalVisibletwo(!modalVisibletwo)}>
                            <Icon name="window-close" size={30} color={Colors.White_text_color} />
                        </TouchableOpacity>
                    </View>
                    <View style={CountryMatch.Setboxbackgroundcolor}>
                        <View style={CountryMatch.Firsttitlcenter}>
                            <View style={CountryMatch.Setfirstblackcolor}>
                                <Text style={CountryMatch.Firsttextstyle}>First Attempt</Text>
                            </View>
                        </View>
                        <View style={CountryMatch.RocketLonchStyleBox}>
                            <Lottie
                                source={images.RocketBounnce}
                                Lottiewidthstyle={CountryMatch.RocketLonchStyle}
                            />
                        </View>
                        <View>
                            <Text style={CountryMatch.EarnedTextStyle}>You have earned</Text>
                        </View>
                        <View style={CountryMatch.FlexRow}>
                            <Text style={CountryMatch.dollarAmount}>300</Text>
                            <Image source={images.DollarIcon} resizeMode="contain" style={CountryMatch.dollarIcon} />
                        </View>
                        <TouchableOpacity style={CountryMatch.FlewRow2} onPress={() => setModalVisibletwo(!modalVisibletwo)}>
                            <View style={[CountryMatch.FlewRow, CountryMatch.CurrencyBox]}>
                                <Text style={CountryMatch.CurencyAmount}>Got it!</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={CountryMatch.FlewRow3}>
                            <TouchableOpacity  style={CountryMatch.IconBackStyle}>
                                <IconE name="facebook" color='#fff' size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={CountryMatch.IconBackStyle}>
                                <IconE name="vk-alternitive" color='#fff' size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={CountryMatch.IconBackStyle}>
                                <IconE name="share" color='#fff' size={20}/>
                            </TouchableOpacity>                          
                        </View>
                    </View>
                </Modal>

            </View>
        </LinearGradient>
    );
};
export default CountryVSMatch;
