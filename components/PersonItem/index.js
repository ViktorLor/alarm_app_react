import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
import * as Calendar from 'expo-calendar';

const PersonItem = (props) => {

    const {name, tagline, image} = props.person;

    return (
        <View style={styles.personContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton

                    type="secondary"
                    content={"Alarm!"}
                    onPress={async () => {
                        console.warn("nicenpm")

                    }}
                />
            </View>

        </View>

    );
};

export default PersonItem;
