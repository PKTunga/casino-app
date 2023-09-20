import { Colors, Fonts, SW, widthPercent, SH, SF } from '../../utils';
import { StyleSheet, Dimensions, } from 'react-native';

export default StyleSheet.create({

    SearchbarBoxMain: {
        position: 'absolute',
        top: 80,
        width: '100%',
        backgroundColor: Colors.linerGradientback
    },
    SearchbarBoxsecond: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    SearchbarBox: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        // borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: '#0f161e',
        marginTop: SH(15)
    },
    searchinputleadue: {
        backgroundColor: 'transparent',
        shadowColor: "transparent",
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 0 : 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 0 : 0,
        elevation: Platform.OS === 'ios' ? 0 : 0,
        height: SH(45),      
        width: '90%',

    },
    SearchbarIcon: {
        fontSize: SF(20),
        marginLeft: SH(50),
        color: '#fff',
    },
    minviewallcontentSecond: {
        width: '100%',
        // height: '100%',
        marginTop: SH(200),
        paddingBottom: SH(40),
        // backgroundColor :'red'     
    },

    TitleMainBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: SH(5),
        marginTop: SH(10),
        backgroundColor: Colors.linerGradientback
    },
    GameTitle: {
        fontFamily: Fonts.Poppins_Medium,
        color: '#fff',
        textAlign: 'center',
        fontSize: SF(18),
        paddingHorizontal: SH(15)
    },
    TitleIconLeft: {
        width: SW(20),
        height: SH(20),
        marginTop: SH(2)
    },
    // list data style
    PopularGameView: {
        // marginVertical: SH(3),
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        borderBottomWidth: 1,
        borderColor: Colors.gray,
        width: '100%'
    },
    PopularGameViewIn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SH(8),
        width: '100%'
    },
    PopularGameIcon: {
        width: SW(35),
        height: SH(35)
    },
    PopularGameTitle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        paddingLeft: SH(15),
        color: '#fff'
    },
    PopularGameCountPerent: {
        minHeight: 25,
        minWidth: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightgrey,
        borderRadius: 5,
        paddingVertical: SH(8),
        overflow: 'hidden'
    },
    PopularGameCount: {
        // fontFamily: Fonts.Poppins_Medium
        fontSize: SF(14),
        fontWeight: '700'
    },
    width80: {
        width: '80%',
    },
    width20: {
        width: '20%'
    },
    width90: {
        width: '90%',
    },
    width10: {
        width: '10%'
    }
});