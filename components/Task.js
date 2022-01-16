import React from "react";
import { View, Text, StyleSheet } from "react-native";


function Task({text}) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemTitle}>{text ? text : 'Unnamed Task'}</Text>
            </View>
            <View style={styles.circular}></View>    
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square: {
        borderRadius: 5,
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        marginRight: 15,
    },
    itemTitle: {
        maxWidth: '80%',
    },
    circular: {
        borderRadius: 5,
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
    }
});

export default Task;