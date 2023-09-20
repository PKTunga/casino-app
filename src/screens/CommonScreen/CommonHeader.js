import React from 'react';
import { View, Text, } from 'react-native';
import images from '../../index';
import { Lottie } from '../../components';
import { HomeTab } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconT from 'react-native-vector-icons/FontAwesome';

const CommonHeader = () => {
    return (
        <View style={HomeTab.minviewpostionheader}>
            <LinearGradient
                style={{ width: '100%' }}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                colors={[Colors.Commonheaderlinergradiunt, Colors.Commonheaderlinergradiunttwo]}>
                <View style={HomeTab.Flexrowhome}>
                    <View style={HomeTab.Flexviewoneset}>
                        <View style={HomeTab.Setbgcolortext}>
                            <Text style={HomeTab.Settextstyledigit}>1200</Text>
                        </View>
                        <IconT style={HomeTab.pluspotionabloute} name="plus" size={15} color={Colors.Gold_text_color} />
                        <View>
                            <Lottie
                                source={images.Coins_Animation}
                                Lottiewidthstyle={HomeTab.Lottieanimation}
                            />
                        </View>
                    </View>
                    <View style={HomeTab.Flexviewoneset}>
                        <View style={HomeTab.Setbgcolortext}>
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            <View style={HomeTab.Setbordervertical} />
                            

                        </View>
                        <Icon style={HomeTab.Batteryicon} name="battery-charging-full" size={24} color={Colors.White_text_color} />
                        <IconT style={HomeTab.pluspotionabloutetwo} name="plus" size={15} color={Colors.Gold_text_color} />
                    </View>
                    <View style={HomeTab.Flexviewoneset}>
                        <View style={HomeTab.Setbgcolortext}>
                            <Text style={HomeTab.Settextstyledigit}>14</Text>
                        </View>
                        <IconT style={HomeTab.pluspotionabloute} name="plus" size={15} color={Colors.Gold_text_color} />
                        <View>
                            <Lottie
                                source={images.Coins_Animation}
                                Lottiewidthstyle={HomeTab.Lottieanimation}
                            />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>

    );
};
export default CommonHeader;
