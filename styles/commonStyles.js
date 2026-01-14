import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        fontSize: 24,
    },
    sidebar: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: screenWidth * 0.7,
        height: '100%',
        backgroundColor: '#ffffffff',
        padding: 20,
        elevation: 10,
        zIndex: 999,
    },
    close: {
        fontSize: 18,
        marginBottom: 20,
        color: 'red',
    },
    link: {
        color:'rgba(141, 133, 133, 1)',
        fontSize: 18,
        marginVertical: 10,
        marginLeft:10
    },
    subLink:{
        marginLeft:15
    },
    dot:{
        marginLeft:25
    }
});
