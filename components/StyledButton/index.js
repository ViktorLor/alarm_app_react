import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const {type,content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#626262' : '#ffffff';
    const textColor = type === 'primary' ? '#b22323' : '#e80808';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor, backgroundColor : backgroundColor}]}>{content}</Text>
            </Pressable>

        </View>
    );
};

export default StyledButton;
