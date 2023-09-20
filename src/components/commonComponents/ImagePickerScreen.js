import React, { useState } from 'react';
import { View } from 'react-native';
import { ImgPicker } from '../../components/commonComponents';
import { SH } from '../../utils';
// import ImagePicker from 'react-native-image-crop-picker';

const ImagePickerScreen = () => {
    const [imgpathselect, SetImgpathselect] = useState('');

    const chooseFile = () => {
        ImagePicker.openPicker({
            height: SH(414),
            cropping: true,
            includeBase64: true,
            mediaType: 'photo',

        }).then(response => {
            if (response) {
                const file = response ? Math.round((response.size / 1024)) : '';
                if (file != '' && file >= 5120) {
                    return;
                }
                SetImgpathselect(response.path);
            }
        });
    };

    return (
        <View>
            <ImgPicker
                userImage={imgpathselect}
                onPress={() =>
                    chooseFile('photo')
                }
            />

        </View>
    )
}
export default ImagePickerScreen;