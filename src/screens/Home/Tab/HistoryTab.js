import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Lottie } from '../../../components';
import { CommonHeader } from '../../../screens';
import images from '../../../index';
import { useSelector } from "react-redux";
import { Style, HistoryTabScreenStyle, HomeTab } from '../../../styles';
import { Strings, Colors } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';


const HistoryTab = (props) => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [tabShow, SettabShow] = useState('1');
    const [shouldShow, setShouldShow] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
            <View style={{ position: 'relative' }}>
                <CommonHeader />
                <View style={HistoryTabScreenStyle.SearchbarBoxMain}>
                    <View style={[HistoryTabScreenStyle.SearchbarBoxsecond]}>
                        <View>
                            <View style={HistoryTabScreenStyle.MainTabView}>
                                <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? [HistoryTabScreenStyle.TabParentActivebox, { backgroundColor: Colors.linerGradientback, borderColor: Colors.linerGradientback }] : HistoryTabScreenStyle.TabParentNotActivebox}>
                                    <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? HistoryTabScreenStyle.TabTextActivebox : [HistoryTabScreenStyle.TabTextNotActivebox, { color: Colors.linerGradientback }]}>{Strings.HistoryTab.Mybets}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '2' ? [HistoryTabScreenStyle.TabParentActivebox, { backgroundColor: Colors.linerGradientback, borderColor: Colors.linerGradientback }] : HistoryTabScreenStyle.TabParentNotActivebox}>
                                    <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? HistoryTabScreenStyle.TabTextActivebox : [HistoryTabScreenStyle.TabTextNotActivebox, { color: Colors.linerGradientback }]}>{Strings.HistoryTab.BetSlip}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={HistoryTabScreenStyle.minviewallcontentSecond}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View>
                        <View>
                            {/* Start Tab View Items  */}
                            {tabShow == '1' ?
                                <View>
                                    <View>
                                        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={HistoryTabScreenStyle.Betslitbox}>
                                            <View style={[HistoryTabScreenStyle.TitleBox, HistoryTabScreenStyle.width30]}>
                                                <Text style={HistoryTabScreenStyle.Titleone}>20.96</Text>
                                                <Text style={HistoryTabScreenStyle.TitleTwo}>(16.55)</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30}>
                                                <Text style={HistoryTabScreenStyle.TitleShowModeText}>Single</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30Right}>
                                                <View style={HistoryTabScreenStyle.DallarBox}>
                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                    <Text style={HistoryTabScreenStyle.DallarAmopunt}>30</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {shouldShow ?
                                            (
                                                <View>
                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBox}>
                                                            <View style={HistoryTabScreenStyle.BetTitleoneBox}>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>SW</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>26.20</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>19.00</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>Football</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Brentond - Tottenhnam Hostpur</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlThree}>Regular Time - Win 3</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Not Started</Text>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBox}>
                                                            <Text style={HistoryTabScreenStyle.BetRatioText}>1.90</Text>
                                                        </View>
                                                    </View>

                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBoxSecond}>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Bet anmount</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmountsecond}>50</Text>
                                                                </View>
                                                            </View>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Return:</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmounttlight}>90</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBoxTwoSecond}>
                                                            <Text style={HistoryTabScreenStyle.BetTitlTwo}>Odds:</Text>
                                                            <Text style={HistoryTabScreenStyle.BetRatioTextColor}>1.90</Text>
                                                        </View>
                                                    </View>
                                                    <View style={HistoryTabScreenStyle.buttonBox}>
                                                        <Button title="Cancel bet" buttonStyle={HistoryTabScreenStyle.BtnWidthcancel} buttonTextStyle={HistoryTabScreenStyle.BtncancelText} onPress={() => setModalVisible(true)} />
                                                        <Button title="Sell bet" buttonStyle={HistoryTabScreenStyle.BtnWidth} />
                                                    </View>
                                                </View>
                                            ) : null}
                                    </View>
                                    {/* Start Second */}
                                    <View>
                                        <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)} style={HistoryTabScreenStyle.Betslitbox}>
                                            <View style={[HistoryTabScreenStyle.TitleBox, HistoryTabScreenStyle.width30]}>
                                                <Text style={HistoryTabScreenStyle.Titleone}>20.96</Text>
                                                <Text style={HistoryTabScreenStyle.TitleTwo}>(16.55)</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30}>
                                                <Text style={HistoryTabScreenStyle.TitleShowModeText}>Single</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30Right}>
                                                <View style={HistoryTabScreenStyle.DallarBox}>
                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                    <Text style={HistoryTabScreenStyle.DallarAmopunt}>40</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {shouldShow2 ?
                                            (
                                                <View>
                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBox}>
                                                            <View style={HistoryTabScreenStyle.BetTitleoneBox}>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>SW</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>26.20</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>19.00</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>Football</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Brentond - Tottenhnam Hostpur</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlThree}>Regular Time - Win 3</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Not Started</Text>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBox}>
                                                            <Text style={HistoryTabScreenStyle.BetRatioText}>1.90</Text>
                                                        </View>
                                                    </View>

                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBoxSecond}>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Bet anmount</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmountsecond}>55</Text>
                                                                </View>
                                                            </View>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Return:</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmounttlight}>95</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBoxTwoSecond}>
                                                            <Text style={HistoryTabScreenStyle.BetTitlTwo}>Odds:</Text>
                                                            <Text style={HistoryTabScreenStyle.BetRatioTextColor}>1.95</Text>
                                                        </View>
                                                    </View>
                                                    <View style={HistoryTabScreenStyle.buttonBox}>
                                                        <Button title="Cancel bet" buttonStyle={HistoryTabScreenStyle.BtnWidthcancel} buttonTextStyle={HistoryTabScreenStyle.BtncancelText} onPress={() => setModalVisible(true)} />
                                                        <Button title="Sell bet" buttonStyle={HistoryTabScreenStyle.BtnWidth} />
                                                    </View>
                                                </View>
                                            ) : null}
                                    </View>
                                </View>
                                : null}

                            {tabShow == '2' ?
                                <View>
                                    <View>
                                        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={HistoryTabScreenStyle.Betslitbox}>
                                            <View style={[HistoryTabScreenStyle.TitleBox, HistoryTabScreenStyle.width30]}>
                                                <Text style={HistoryTabScreenStyle.Titleone}>20.96</Text>
                                                <Text style={HistoryTabScreenStyle.TitleTwo}>(16.55)</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30}>
                                                <Text style={HistoryTabScreenStyle.TitleShowModeText}>Single</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30Right}>
                                                <View style={HistoryTabScreenStyle.DallarBox}>
                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                    <Text style={HistoryTabScreenStyle.DallarAmopunt}>30</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {shouldShow ?
                                            (
                                                <View>
                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBox}>
                                                            <View style={HistoryTabScreenStyle.BetTitleoneBox}>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>SW</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>26.20</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>19.00</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>Football</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Brentond - Tottenhnam Hostpur</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlThree}>Regular Time - Win 3</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Not Started</Text>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBox}>
                                                            <Text style={HistoryTabScreenStyle.BetRatioText}>1.90</Text>
                                                        </View>
                                                    </View>

                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBoxSecond}>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Bet anmount</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmountsecond}>50</Text>
                                                                </View>
                                                            </View>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Return:</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmounttlight}>90</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBoxTwoSecond}>
                                                            <Text style={HistoryTabScreenStyle.BetTitlTwo}>Odds:</Text>
                                                            <Text style={HistoryTabScreenStyle.BetRatioTextColor}>1.90</Text>
                                                        </View>
                                                    </View>
                                                    <View style={HistoryTabScreenStyle.buttonBox}>
                                                        <Button title="Cancel bet" buttonStyle={HistoryTabScreenStyle.BtnWidthcancel} buttonTextStyle={HistoryTabScreenStyle.BtncancelText} onPress={() => setModalVisible(true)} />
                                                        <Button title="Sell bet" buttonStyle={HistoryTabScreenStyle.BtnWidth} />
                                                    </View>
                                                </View>
                                            ) : null}
                                    </View>
                                    {/* Start Second */}
                                    <View>
                                        <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)} style={HistoryTabScreenStyle.Betslitbox}>
                                            <View style={[HistoryTabScreenStyle.TitleBox, HistoryTabScreenStyle.width30]}>
                                                <Text style={HistoryTabScreenStyle.Titleone}>20.96</Text>
                                                <Text style={HistoryTabScreenStyle.TitleTwo}>(16.55)</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30}>
                                                <Text style={HistoryTabScreenStyle.TitleShowModeText}>Single</Text>
                                            </View>
                                            <View style={HistoryTabScreenStyle.width30Right}>
                                                <View style={HistoryTabScreenStyle.DallarBox}>
                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                    <Text style={HistoryTabScreenStyle.DallarAmopunt}>40</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {shouldShow2 ?
                                            (
                                                <View>
                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBox}>
                                                            <View style={HistoryTabScreenStyle.BetTitleoneBox}>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>SW</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>26.20</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>19.00</Text>
                                                                <View style={HistoryTabScreenStyle.borderright}></View>
                                                                <Text style={HistoryTabScreenStyle.BetTitleone}>Football</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Brentond - Tottenhnam Hostpur</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlThree}>Regular Time - Win 3</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Not Started</Text>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBox}>
                                                            <Text style={HistoryTabScreenStyle.BetRatioText}>1.90</Text>
                                                        </View>
                                                    </View>

                                                    <View style={HistoryTabScreenStyle.ShowdetailsBoxMain}>
                                                        <View style={HistoryTabScreenStyle.ShowdetailsBoxSecond}>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Bet anmount</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmountsecond}>55</Text>
                                                                </View>
                                                            </View>
                                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                                <Text style={HistoryTabScreenStyle.BetTitlTwo}>Return:</Text>
                                                                <View style={HistoryTabScreenStyle.FlewRow}>
                                                                    <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                                    <Text style={HistoryTabScreenStyle.BetAmounttlight}>95</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={HistoryTabScreenStyle.BetRatioBoxTwoSecond}>
                                                            <Text style={HistoryTabScreenStyle.BetTitlTwo}>Odds:</Text>
                                                            <Text style={HistoryTabScreenStyle.BetRatioTextColor}>1.95</Text>
                                                        </View>
                                                    </View>
                                                    <View style={HistoryTabScreenStyle.buttonBox}>
                                                        <Button title="Cancel bet" buttonStyle={HistoryTabScreenStyle.BtnWidthcancel} buttonTextStyle={HistoryTabScreenStyle.BtncancelText} onPress={() => setModalVisible(true)} />
                                                        <Button title="Sell bet" buttonStyle={HistoryTabScreenStyle.BtnWidth} />
                                                    </View>
                                                </View>
                                            ) : null}
                                    </View>
                                </View>
                                : null}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={Style.BetcenteredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={Style.BetcenteredView}>
                        <View>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ zIndex: 1 }}>
                                <Image source={images.ModalCloseIcon} resizeMode='contain' style={Style.modalcolseBtnbet} />
                            </TouchableOpacity>
                        </View>
                        <Lottie
                            source={images.MoneyBounnce}
                            Lottiewidthstyle={HistoryTabScreenStyle.BonusAnimation}
                        />
                        <View style={Style.BetmodalView}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                                colors={[Colors.Commonheaderlinergradiunt, Colors.Commonheaderlinergradiunttwo]}>
                                <View style={Style.Betmodalcenter}>
                                    <View style={Style.Betmodalcentertwo}>
                                        <Text style={Style.BetCancelText}>Do you want to cancel your bet?</Text>
                                        <View style={[HistoryTabScreenStyle.FlewRow, Style.textCeneter]}>
                                            <Text style={[HistoryTabScreenStyle.BetTitlTwo, HistoryTabScreenStyle.ReturnText]}>Return:</Text>
                                            <View style={HistoryTabScreenStyle.FlewRow}>
                                                <Image source={images.DollarIcon} style={HistoryTabScreenStyle.DollarStyle} />
                                                <Text style={[HistoryTabScreenStyle.BetAmounttlight, Style.TextColorAmount]}>95</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={HistoryTabScreenStyle.FlewRow2} onPress={() => setModalVisible(!modalVisible)}>
                                            <View style={[HistoryTabScreenStyle.FlewRow, HistoryTabScreenStyle.CurrencyBox]}>
                                                <Image source={images.CurrencyIcon} style={HistoryTabScreenStyle.currency} />
                                                <Text style={HistoryTabScreenStyle.CurencyAmount}>1</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                </Modal>
            </View>
        </LinearGradient>
    );
};
export default HistoryTab;