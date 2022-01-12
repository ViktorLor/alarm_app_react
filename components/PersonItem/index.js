import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
import { Audio } from 'expo-av';

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


                        try {

                            const { sound: soundObject, status } = await Audio.Sound.createAsync(
                                require('./audio_file.m4a'),
                                { shouldPlay: true }
                            );
                            // Your sound is playing!
                        } catch (error) {
                            console.warn(error)
                        }

                    }}
                />
            </View>

        </View>

    );
};

export default PersonItem;
