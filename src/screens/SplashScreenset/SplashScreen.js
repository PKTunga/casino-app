import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StatusBar
} from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../utils'

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(colorrdata);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(RouteName.LOGIN_SCREEN)
            );
        }, 2100);
        dispatch(color_picker_set_action('#000000'))
    }, []);
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
            <View style={Style.Setbgcolorview}>
                <View>
                    <View style={Style.Setminviewstylesplasg}>
                        <Image resizeMode='center' source={images.logo} style={Style.setsplashscreehhieight}
                        />
                    </View>
                    <Text style={Style.Besttextstyle}>Bet 247</Text>
                </View>

            </View>
        </LinearGradient>
    );
};
export default SplashScreen;
