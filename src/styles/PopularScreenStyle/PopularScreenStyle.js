import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, Colors, widthPercent, heightPercent, SW } from '../../utils';

export default StyleSheet.create({
    minviewallcontentSecond: {
        width: '100%',
        height: '100%',    
        paddingBottom: SH(30)
        // backgroundColor: ColorTheme.sp_Theme,
      },

    MainTabViewParent: {
        width: widthPercent(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: SH(10)
    },
    MainTabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercent(90),
        backgroundColor: Colors.lightgrey,
        marginTop: SH(20),
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
        width: widthPercent(30),
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
        width: widthPercent(30),
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
    PopularGameView: {
        backgroundColor: '#fff',
        marginVertical: SH(3),
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(10),
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
        borderRadius: 8,
    },
    PopularGameViewIn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SH(8),
    },
    PopularGameIcon: {
        width: SW(35),
        height: SH(35)
    },
    PopularGameTitle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        paddingLeft: SH(15)
    },
    PopularGameCountPerent: {
        minHeight: 25,
        minWidth: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightgrey,
        borderRadius: 200,
        overflow: 'hidden'
    },
    PopularGameCount: {
        // fontFamily: Fonts.Poppins_Medium
        fontSize: SF(14),
    }

});