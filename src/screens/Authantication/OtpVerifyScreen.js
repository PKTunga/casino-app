import React, {useState, useEffect} from "react";
import { Text, View, ScrollView, Pressable, } from "react-native";
import Styles from '../../styles/LoginRegiesterStyle/OtpScreenStyle';
import { Style } from '../../styles';
import { Colors } from '../../utils';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {ConfirmationAlert} from '../../components';

const OtpScreenset = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const navigation = useNavigation();
    const [DisplayAlert, setDisplayAlert] = useState(0);
    const [DisplayAlerttwo, setDisplayAlerttwo] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [cancelbutton, SetCancelbutton] = useState('Cancel');

    var alertdata = {
        'logout': "Resend OTP sent via SMS or to your email address",
    }

    const onoknutton = () => {
        navigation.navigate(RouteName.OTP_VERYFY_SCREEN);
        okbutton;
    }
    useEffect(() => {
        navigation.addListener('focus', () => {
            setDisplayAlert(0);
            setDisplayAlerttwo(0);
        });
    }, [navigation]);

    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
            {/* <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['#414141', '#000000']} ></LinearGradient> */}
            <View style={[Style.minstyleviewphotograpgy]}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Style.container}>
                        <View>
                            <View style={Styles.minviewsigninscreen}>
                                <Text style={Styles.entersixdigittext}>Enter  6  Digit OTP</Text>
                                <Text style={Styles.paregraph}>Enter the OTP code from the phone we just sent you.</Text>
                                <OTPInputView
                                    style={Styles.otpvistyleset}
                                    pinCount={6}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Styles.otpinstyletype}
                                    codeInputHighlightStyle={Styles.otpinstyletype}
                                />
                                <View style={Styles.flexrowsettext}>
                                    <Text style={Styles.paregraphotpbottom}>Didn't receive OTP Code!</Text>
                                    <Pressable onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton('');
                                    }}>
                                        <Text style={Styles.resendtextbold}>Resend</Text>
                                    </Pressable>
                                </View>
                                <View>
                                    <Button onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} title="Verify" />
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
                <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    // buttonminview={Style.button}
                    buttonminview={Style.CenterBtnOk}
                />
            </View>
        </LinearGradient>
    );
};
export default OtpScreenset;
