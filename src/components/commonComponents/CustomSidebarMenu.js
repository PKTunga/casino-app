import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import IconE from 'react-native-vector-icons/Feather';
import IconL from 'react-native-vector-icons/Entypo';
import IconZ from 'react-native-vector-icons/Fontisto';
import { Sidemenu, Style } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconU from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import IconP from 'react-native-vector-icons/AntDesign';
import { ConfirmationAlert } from '../../components';

const CustomSidebarMenu = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState('Cancel');

  var alertdata = {
    'logout': " Are you sure want to logout?",
  }

  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
    okbutton;
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };

  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => navigation.navigate(RouteName.HOMES_TAB)
        }>
          <IconE
            size={19}
            name="home"
            color={colorrdata}
          />
          <Text style={Sidemenu.hometextstyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.POPULAR_TAB)
        }>
          <Icon
            size={19}
            name="fire"
            color={colorrdata}
          />
          <Text style={Sidemenu.hometextstyle}>Popular</Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.BEST_TAB_SET)
        }>
          <Icon name="hand-okay" style={Sidemenu.logoimage} color={colorrdata} size={20} />
          <Text style={Sidemenu.hometextstyle}>Bets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HISTORYS_TAB)
        }>
          <IconU size={19} name="history" style={Sidemenu.logoimage} color={colorrdata} />
          <Text style={Sidemenu.hometextstyle}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <IconF size={19} name="user-circle" style={Sidemenu.logoimage} color={colorrdata} />
          <Text style={Sidemenu.hometextstyle}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.BASKETBALLSCREEN)
        }>
          <IconU size={19} name="live-tv" style={Sidemenu.logoimage} color={colorrdata} />
          <Text style={Sidemenu.hometextstyle}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SPORTS_SCREEN)
        }>
          <IconU
            size={19}
            name="sports-soccer" style={Sidemenu.logoimage} color={colorrdata} />
          <Text style={Sidemenu.hometextstyle}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.EsportsScreen)
        }>
          <IconU name="sports-esports" color={colorrdata} size={20} />
          <Text style={Sidemenu.hometextstyle}>Esports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.COUNTRY_MATCH_SCREEN)
        }>
          <IconL name="time-slot" color={colorrdata} size={20} />
          <Text style={Sidemenu.hometextstyle}>Slots</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.POPULAR_TAB)
        }>
          <IconZ name="livestream" color={colorrdata} size={20} />
          <Text style={Sidemenu.hometextstyle}>Live casino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.COUNTRY_MATCH_SCREEN)
        }>
          <IconL
            size={19}
            name="game-controller" style={Sidemenu.logoimage} color={colorrdata} />
          <Text style={Sidemenu.hometextstyle}>1xGames</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.EsportsScreen)
        }>
          <IconP name="star" color={colorrdata} size={20} />
          <Text style={Sidemenu.hometextstyle}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.BEST_TAB_SET)
        }>
          <Icon name="dots-circle" color={colorrdata} size={20} />
          <Text style={Sidemenu.hometextstyle}>Other</Text>
        </TouchableOpacity>

        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
            Setokbutton('');
          }}>
            <IconL name="log-out" color={colorrdata} size={23} />
            <Text style={Sidemenu.hometextstyle}>Logout</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={cancelbutton}
          buttonminview={Style.ModalLogoutSet}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

