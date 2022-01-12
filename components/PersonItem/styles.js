import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    personContainer: {
        width: '100%',
        height: Dimensions.get('window').height,

    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 16,
        color: '#626262',
        textDecorationLine: "underline",

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        position: "absolute",
    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    }

});

export default styles;
