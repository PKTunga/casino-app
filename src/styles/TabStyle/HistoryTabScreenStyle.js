import { Colors, Fonts, SW, widthPercent, SH, SF } from '../../utils';
import { StyleSheet, Dimensions, } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    MainTabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercent(90),
        backgroundColor: Colors.lightgrey,
        marginTop: SH(0),
        borderRadius: 50,
        backgroundColor: '#fff',
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',

    },
    TabParentActivebox: {
        width: widthPercent(45),
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        shadowColor: Colors.theme_backgound,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 20,

    },
    TabParentNotActivebox: {
        width: widthPercent(45),
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
    },
    TabTextActivebox: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        color: '#fff',
        textTransform: 'uppercase',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: SH(3)
    },
    TabTextNotActivebox: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        textTransform: 'uppercase',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: SH(3)
    },
    minviewallcontentSecond: {
        width: '100%',
        height: '100%',
        position: 'relative',
        top: 130,
        marginTop: SH(5),
        paddingBottom: SH(30)
        // backgroundColor: ColorTheme.sp_Theme,
    },
    SearchbarBoxMain: {
        position: 'absolute',
        top: 90,
        width: '100%',
    },
    SearchbarBoxsecond: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    TitleBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Titleone: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SH(18),
        color: '#fff',
        marginTop: SH(2)
    },
    TitleTwo: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SH(16),
        color: Colors.gray,
        paddingLeft: SH(5),
        marginTop: SH(2)
    },
    TitleShowModeText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SH(18),
        color: '#fff'
    },
    DallarBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(15),
        backgroundColor: Colors.Amount,
        borderRadius: 5,
    },
    DollarStyle: {
        width: SH(20),
        height: SH(20)
    },
    DallarAmopunt: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SH(16),
        color: '#fff',
        marginLeft: SH(5),
        marginTop: SH(2)
    },
    Betslitbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        borderBottomWidth: .5,
        borderBottomColor: Colors.lightgrey,
        width: '100%'
    },
    width30: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    width30Right: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    ShowdetailsBoxMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: SH(10)
    },
    ShowdetailsBox: {
        width: '80%'
    },
    ShowdetailsBoxSecond: {
        width: '70%'
    },
    BetTitleoneBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    BetTitleone: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SH(16),
        color: Colors.gray,
        paddingRight: SH(10),
        marginTop: SH(2)
    },
    borderright: {
        borderRightWidth: 1,
        borderRightColor: Colors.lightgrey,
        width: 1,
        height: '50%',
        marginRight: SH(10),
    },
    BetTitlTwo: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SH(16),
        color: '#fff',
        paddingRight: SH(10),
    },

    BetTitlThree: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SH(17),
        color: Colors.TextFFAA20,
    },
    BetRatioBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(15),
        backgroundColor: Colors.lightgrey,
        borderRadius: 5,
        width: '20%',
    },
    BetRatioText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SH(16),
        color: Colors.theme_backgound,
        marginTop: SH(2)
    },
    BetRatioTextColor: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SH(16),
        color: Colors.TextFFAA20,
        marginTop: SH(2)
    },
    FlewRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    BetAmountsecond: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SH(17),
        color: Colors.TextFFAA20,
        marginTop: SH(2),
        paddingLeft: SH(5)
    },
    BetAmounttlight: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SH(17),
        color: Colors.gray,
        marginTop: SH(2),
        paddingLeft: SH(5)
    },
    BetRatioBoxTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(15),
        borderRadius: 5,
        width: '20%',
    },
    BetRatioBoxTwoSecond: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(15),
        borderRadius: 5,
        width: '30%',
    },
    buttonBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: SH(10),
        paddingTop: SH(10),
        marginBottom: SH(15)
    },
    BtnWidthcancel: {
        width: '48%',
        backgroundColor: Colors.Amount,
    },
    BtnWidth: {
        width: '48%',
    },
    BtncancelText: {
        color: '#fff'
    },
    ReturnText: {
        color: 'lightgreen'
    },
    CurrencyBox: {
        justifyContent: 'center',
        backgroundColor: Colors.Gold_text_color,
        marginTop: SH(15),   
        paddingHorizontal: SH(20),
        borderRadius: 5    
    },
    currency: {
        width: SW(30),
        height: SH(30)
    },
    CurencyAmount: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SH(22),
        color: Colors.theme_backgound,
        marginTop: SH(2),
        marginLeft: SH(5)
    },
    BonusAnimation: {
        width: 250,
        height: 250,
        position: 'absolute',
        left: 26,
        top: -100,
        zIndex: 1
    },
    FlewRow2: {
        flexDirection: 'row',
        justifyContent: 'center',       
    }

});