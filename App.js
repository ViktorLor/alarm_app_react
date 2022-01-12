import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import PersonsList from "./components/PersonsList";
import Header from "./components/Header"


export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <PersonsList/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cb6905',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
