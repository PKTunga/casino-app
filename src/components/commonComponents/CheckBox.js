import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../utils';

function CheckBoxset(props) {
    const { value,onValueChange,disabled } = props;
    return (
        <CheckBox
            disabled={disabled}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: Colors.White_text_color, false: Colors.White_text_color }}
        />
    );
};
export default CheckBoxset;