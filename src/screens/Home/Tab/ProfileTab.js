import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Pressable, Modal, TextInput, } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/Ionicons';
import { ProfileScreenStyle } from '../../../styles';
import { useNavigation } from '@react-navigation/native';
// import Container from '../../Components/Commonfile/Container';
import { useTogglePasswordVisibility } from '../../../utils/Passwordviseble';
import { Colors } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import { Button } from '../../../components';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";

const ProfileTab = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [number, onChangeNumber] = React.useState(null);
    const { navigation } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [modalVisibleThree, setModalVisibleThree] = useState(false);
    const [modalVisiblefour, setModalVisiblefour] = useState(false);

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    const { passwordVisibilitytwo, rightIcontwo, handlePasswordVisibilitytwo } =
        useTogglePasswordVisibility();
    const [passwordtwo, setPasswordtwo] = useState('');

    const { passwordVisibilitytwoth, rightIcontwoth, handlePasswordVisibilitytwoth } =
        useTogglePasswordVisibility();
    const [passwordtwoth, setPasswordtwoth] = useState('');

    return (
        <>

            <LinearGradient
                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>

                <View style={ProfileScreenStyle.whilistminbody}>
                    <View style={ProfileScreenStyle.imagcenter}>
                        <View>
                            <Image style={{ height: 100, width: 100, borderRadius: 100, flexDirection: 'row', justifyContent: 'center' }} resizeMode='cover' source={images.UserPicture} />
                            <Text style={ProfileScreenStyle.allisonperry}>Allison perry</Text>
                        </View>
                    </View>
                    <View style={ProfileScreenStyle.profiledetailesminview}>
                        <Text style={ProfileScreenStyle.editprofileset}>
                            Edit profile
                        </Text>
                        <View style={ProfileScreenStyle.phonenumberandicon}>
                            <View style={ProfileScreenStyle.setbgwhiteshadow}>
                                <View>
                                    <Text style={ProfileScreenStyle.phonenumbertext}>Phone Number</Text>
                                    <Text style={ProfileScreenStyle.digitnumbertext}>96034 56878</Text>
                                </View>
                                <View>
                                    <Pressable
                                        onPress={() => setModalVisible(true)}
                                    >
                                        <View>
                                            <Icon
                                                size={30}
                                                name="pencil"
                                                style={ProfileScreenStyle.iconProfileScreenStyleeacrch}
                                            />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {

                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={ProfileScreenStyle.centeredView}>
                                    <View style={ProfileScreenStyle.modalView}>
                                        <View style={ProfileScreenStyle.setshadowstylemodaltwo}>
                                            <LinearGradient
                                                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                                                colors={[Colors.linergradiuntcolor, Colors.linergradiuntcolortwo]}>
                                                <View style={ProfileScreenStyle.setiallpaddingmodal}>
                                                    <TouchableOpacity style={ProfileScreenStyle.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                                                        <IconF
                                                            size={25}
                                                            name="close"
                                                            color={'black'}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text style={ProfileScreenStyle.modalText}>Change Phone Number</Text>
                                                    <View style={ProfileScreenStyle.setbgwhiteshadowinputmodal}>
                                                        <TextInput
                                                            style={ProfileScreenStyle.input}
                                                            onChangeText={onChangeNumber}
                                                            value={number}
                                                            placeholder="9603456878"
                                                            placeholderTextColor={'gray'}
                                                            keyboardType="numeric"
                                                        />
                                                    </View>
                                                    <View style={ProfileScreenStyle.buttonsetmoddletwobutton}>
                                                        <View style={ProfileScreenStyle.marginright}>
                                                            <Button title="Cancel" onPress={() => setModalVisible(!modalVisible)} />
                                                        </View>
                                                        <View style={ProfileScreenStyle.marginright}>
                                                            <Button onPress={() => setModalVisible(!modalVisible)} buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                                buttonTextStyle={{ color: colorrdata }} title="Ok" />
                                                        </View>
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={ProfileScreenStyle.phonenumberandicon}>
                            <View style={ProfileScreenStyle.setbgwhiteshadow}>
                                <View style={ProfileScreenStyle.setpadiingtext}>
                                    <Text style={ProfileScreenStyle.phonenumbertext}>Email</Text>
                                    <Text style={ProfileScreenStyle.digitnumbertext}>test@abs.com</Text>
                                </View>
                                <View>
                                    <Pressable
                                        onPress={() => setModalVisibleTwo(true)}
                                    >
                                        <View>
                                            <Icon
                                                size={30}
                                                name="pencil"
                                                style={ProfileScreenStyle.iconProfileScreenStyleeacrch}
                                            />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleTwo}
                                onRequestClose={() => {

                                    setModalVisible(!modalVisibleTwo);
                                }}
                            >
                                <View style={ProfileScreenStyle.centeredView}>
                                    <View style={ProfileScreenStyle.modalView}>
                                        <View style={ProfileScreenStyle.setshadowstylemodaltwo}>
                                            <LinearGradient
                                                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                                                colors={[Colors.linergradiuntcolor, Colors.linergradiuntcolortwo]}>
                                                <View style={ProfileScreenStyle.setiallpaddingmodal}>
                                                    <TouchableOpacity style={ProfileScreenStyle.icomvlose} onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                                                        <IconF
                                                            size={25}
                                                            name="close"
                                                            color={'black'}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text style={ProfileScreenStyle.modalText}>Change Email</Text>
                                                    <View>
                                                        <TextInput
                                                            style={ProfileScreenStyle.setbgwhiteshadowinputmodal}
                                                            onChangeText={onChangeNumber}
                                                            placeholder="Krishtiwaston@gmail.com"
                                                            placeholderTextColor={'gray'}

                                                        />
                                                    </View>
                                                    <View style={ProfileScreenStyle.buttonsetmoddletwobutton}>
                                                        <View style={ProfileScreenStyle.marginright}>

                                                            <Button title="Cancel" onPress={() => setModalVisibleTwo(!modalVisibleTwo)} />
                                                        </View>
                                                        <View style={ProfileScreenStyle.marginright}>

                                                            <Button onPress={() => setModalVisibleTwo(!modalVisibleTwo)} buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                                buttonTextStyle={{ color: colorrdata }} title="Ok" />
                                                        </View>
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={ProfileScreenStyle.phonenumberandicon}>
                            <View style={ProfileScreenStyle.setbgwhiteshadow}>
                                <View>
                                    <Text style={ProfileScreenStyle.phonenumbertext}>Password</Text>
                                    <Text style={ProfileScreenStyle.digitnumbertext}>******</Text>
                                </View>
                                <View>
                                    <Pressable
                                        onPress={() => setModalVisibleThree(true)}
                                    >
                                        <View>
                                            <Icon
                                                size={30}
                                                name="pencil"
                                                style={ProfileScreenStyle.iconProfileScreenStyleeacrch}
                                            />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleThree}
                                onRequestClose={() => {

                                    setModalVisibleThree(!modalVisibleThree);
                                }}
                            >
                                <View style={ProfileScreenStyle.centeredView}>
                                    <View style={ProfileScreenStyle.modalView}>
                                        <View style={ProfileScreenStyle.setshadowstylemodaltwo}>
                                            <LinearGradient
                                                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                                                colors={[Colors.linergradiuntcolor, Colors.linergradiuntcolortwo]}>
                                                <View style={ProfileScreenStyle.setiallpaddingmodal}>
                                                    <TouchableOpacity style={ProfileScreenStyle.icomvlose} onPress={() => setModalVisibleThree(!modalVisibleThree)}>
                                                        <IconF
                                                            size={25}
                                                            name="close"
                                                            color={'black'}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text style={ProfileScreenStyle.modalText}>Change Your Password</Text>

                                                    <View style={ProfileScreenStyle.spaceview}>
                                                        <View style={ProfileScreenStyle.inputUnderLine}>
                                                            <View style={ProfileScreenStyle.inputviewset}>
                                                                <TextInput
                                                                    style={ProfileScreenStyle.textpassworedsert}
                                                                    name="password"
                                                                    placeholder="Old Password"
                                                                    autoCapitalize="none"
                                                                    autoCorrect={false}
                                                                    textContentType="newPassword"
                                                                    secureTextEntry={passwordVisibility}
                                                                    value={password}
                                                                    enablesReturnKeyAutomatically
                                                                    placeholderTextColor={'gray'}
                                                                    onChangeText={text => setPassword(text)}
                                                                />
                                                                <Pressable onPress={handlePasswordVisibility}>
                                                                    <IconG name={rightIcon} size={25} style={ProfileScreenStyle.eyeiconset} />
                                                                </Pressable>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={ProfileScreenStyle.spaceview}>
                                                        <View style={ProfileScreenStyle.inputUnderLine}>
                                                            <View style={ProfileScreenStyle.inputviewset}>
                                                                <TextInput
                                                                    style={ProfileScreenStyle.textpassworedsert}
                                                                    name="password"
                                                                    placeholder="New Password"
                                                                    autoCapitalize="none"
                                                                    placeholderTextColor={'gray'}
                                                                    autoCorrect={false}
                                                                    textContentType="newPassword"
                                                                    secureTextEntry={passwordVisibilitytwo}
                                                                    value={passwordtwo}
                                                                    enablesReturnKeyAutomatically
                                                                    onChangeText={text => setPasswordtwo(text)}
                                                                />
                                                                <Pressable onPress={handlePasswordVisibilitytwo}>
                                                                    <IconG name={rightIcontwo} size={25} style={ProfileScreenStyle.eyeiconset} />
                                                                </Pressable>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={ProfileScreenStyle.spaceview}>
                                                        <View style={ProfileScreenStyle.inputUnderLine}>
                                                            <View style={ProfileScreenStyle.inputviewset}>
                                                                <TextInput
                                                                    style={ProfileScreenStyle.textpassworedsert}
                                                                    name="Confirm New Password"
                                                                    placeholder="Conform Password"
                                                                    placeholderTextColor={'gray'}
                                                                    autoCapitalize="none"
                                                                    autoCorrect={false}
                                                                    textContentType="newPassword"
                                                                    secureTextEntry={passwordVisibilitytwoth}
                                                                    value={passwordtwoth}
                                                                    enablesReturnKeyAutomatically
                                                                    onChangeText={text => setPasswordtwoth(text)}
                                                                />
                                                                <Pressable onPress={handlePasswordVisibilitytwoth}>
                                                                    <IconG name={rightIcontwoth} size={25} style={ProfileScreenStyle.eyeiconset} />
                                                                </Pressable>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <Text></Text>
                                                    <View style={ProfileScreenStyle.buttonsetmoddletwobutton}>
                                                        <View style={ProfileScreenStyle.marginright}>
                                                            <Button onPress={() => setModalVisibleThree(!modalVisibleThree)} title="Cancel" />
                                                        </View>
                                                        <View style={ProfileScreenStyle.marginright}>
                                                            <Button onPress={() => setModalVisibleThree(!modalVisibleThree)} buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                                buttonTextStyle={{ color: colorrdata }} title="Ok" />
                                                        </View>
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisiblefour}
                            onRequestClose={() => {
                                setModalVisiblefour(!modalVisiblefour);
                            }}
                        >
                            <View style={ProfileScreenStyle.centeredView}>
                                <View style={ProfileScreenStyle.modalView}>
                                    <View style={ProfileScreenStyle.setshadowstylemodaltwo}>
                                        <LinearGradient
                                            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
                                            colors={[Colors.linergradiuntcolor, Colors.linergradiuntcolortwo]}>
                                            <View style={ProfileScreenStyle.setiallpaddingmodal}>
                                                <TouchableOpacity style={ProfileScreenStyle.icomvlose} onPress={() => setModalVisiblefour(!modalVisiblefour)}>
                                                    <IconF
                                                        size={25}
                                                        name="close"
                                                        color={'#fff'}
                                                    />
                                                </TouchableOpacity>
                                                <Text style={ProfileScreenStyle.modalText}>Are You Sure You Want To Sign Out ?</Text>
                                                <View style={ProfileScreenStyle.buttonsetmoddletwobutton}>
                                                    <View style={ProfileScreenStyle.marginrightsetview}>
                                                        <Button title="Cancel" onPress={() => setModalVisiblefour(!modalVisiblefour)} />
                                                    </View>
                                                    <View style={ProfileScreenStyle.marginrightsetview}>
                                                        <Button title="Logout" buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                            buttonTextStyle={{ color: colorrdata }}
                                                            onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            onPress={() => setModalVisiblefour(true)}
                        >
                            <View style={ProfileScreenStyle.iconandtextflexset}>
                                <View>
                                    <Text style={ProfileScreenStyle.logoutdivset}>Logout</Text>
                                </View>
                                <View>
                                    <IconF
                                        size={27}
                                        name="arrowright"
                                        style={ProfileScreenStyle.iconlessthanback}
                                    />
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>

        </>
    );
};
export default ProfileTab;
