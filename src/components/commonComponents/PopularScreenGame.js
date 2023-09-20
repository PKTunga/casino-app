import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { Style, PopularScreenStyle } from '../../styles';
import {SH} from '../../utils';


const PopularScreenGame = (props) => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const { FlateData, item, index, title, email, count} = props;

    const FunctionFlatlist = (item, index) => {
        return (
            <TouchableOpacity style={PopularScreenStyle.PopularGameView} onPress={() => navigation.navigate(item.Link)}>
                <View style={PopularScreenStyle.PopularGameViewIn}>
                    <Image source={item.img} resizeMode="contain" style={PopularScreenStyle.PopularGameIcon} />
                    <Text style={[PopularScreenStyle.PopularGameTitle, {color: colorrdata}]}>{item.title}</Text>
                </View>
                <View style={PopularScreenStyle.PopularGameCountPerent}>
                    <Text style={[PopularScreenStyle.PopularGameCount, {color: colorrdata}]}>{item.count}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <FlatList
                data={FlateData}
                renderItem={({ item, index }) => FunctionFlatlist(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:SH(10), paddingVertical:SH(10), marginBottom:SH(150)}} 
            />
        </View>
    );
};
export default PopularScreenGame;
