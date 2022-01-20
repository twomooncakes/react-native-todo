import { useState } from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Task from './components/Task';

export default function App() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([
        { id: 1, title: 'Read Book', completed: true},
        { id: 2, title: 'Walk Dog', completed: false}, 
    ]);

    const [listIdCounter, setListIdCounter] = useState(3);

    const handleAddTask = () => {
        Keyboard.dismiss();
        const newItem = {
            id: listIdCounter,
            title: task,
            completed: false,
        };
        const newList = [...list, newItem];
        setList(newList);
        setListIdCounter(() => listIdCounter + 1);
        setTask('');
    }

    const handleDeleteTask = (deleteId) => {
        const filteredList = list.filter((item) => item.id !== deleteId);
        setList(filteredList);
    }

    const handleCompleteTask = (completeId) => {
        const newList = list.map((item) => {
            if (item.id === completeId) {
                console.log(item.completed);
                const updatedItem = {
                    ...item,
                    completed: !item.completed,
                };
                return updatedItem;
            }
            return item;
        })
        setList(newList);
    }

    console.log(list);

    return (
        <View style={styles.container}>
            {/* Daily Tasks */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks:</Text>

                <View style={styles.items}>
                    {/* Tasks */}
                    {list.map(item => <Task key={item.id} id={item.id} task={item} deleteFunc={handleDeleteTask} completeFunc={handleCompleteTask}></Task>)}
                </View>
            </View>

            {/* Add Task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder='Add task here' onChangeText={text => setTask(text)} value={task}/>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <FontAwesomeIcon style={styles.addBtn} icon={ faPlus } />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b81c5',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: "600",
    color: '#fff',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: '10%',
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addBtn: {
    color: '#97c9e5'
  },
});
