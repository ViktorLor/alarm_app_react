import React from "react";
import {View, Text, FlatList, Dimensions} from 'react-native';
import PersonItem from "../PersonItem"

import styles from './styles';
import persons from './persons'

const PersonsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={persons}
                renderItem={({item}) => <PersonItem person={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}

            />
        </View>
    );
};

export default PersonsList;

