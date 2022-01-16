import React from "react";
import { View, Text, StyleSheet } from "react-native";


function Task({text}) {
    return (
        <View style={styles.item}>
            <Text>{text ? text : 'Unnamed Task'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Task;