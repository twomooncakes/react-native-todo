import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


function Task({task, deleteFunc, completeFunc, id}) {
    return (
        <View style={[styles.item, task.completed ? styles.completed : '']}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={() => completeFunc(id)}>
                    <View style={styles.square}><Text>{task.completed ? 'x' : ''}</Text></View>
                </TouchableOpacity>
                <Text style={styles.itemTitle}>{task.title}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteFunc(id)}>
                <View style={styles.circular}></View>  
            </TouchableOpacity>
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
        alignItems: 'center',
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
    },
    completed: {
        opacity: 0.75,

    }
});

export default Task;