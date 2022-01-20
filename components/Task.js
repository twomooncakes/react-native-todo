import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'


function Task({task, deleteFunc, completeFunc, id}) {
    return (
        <View style={[styles.item, task.completed ? styles.completed : '']}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={() => completeFunc(id)}>
                    <View style={styles.square}>{task.completed && <FontAwesomeIcon style={styles.check} icon={ faCheck } />}</View>
                </TouchableOpacity>
                <Text style={styles.itemTitle}>{task.title}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteFunc(id)}>
                <FontAwesomeIcon style={styles.deleteBtn} icon={ faTrash } />
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
        backgroundColor: '#97c9e5',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    check: {
        color: '#183153',
    },
    itemTitle: {
        maxWidth: '80%',
    },
    deleteBtn: {
        color: '#97c9e5',
    },
    completed: {
        opacity: 0.75,
    }
});

export default Task;