import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Task from './components/Task';

export default function App() {
    return (
        <View style={styles.container}>
            {/* Daily Tasks */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks:</Text>

                <View style={styles.items}>
                    {/* Tasks */}
                    <Task></Task>
                    <Task></Task>
                    <Task text={'Read Book'}></Task>
                </View>
            </View>

            {/* Add Task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder='Add task here'/>

                <TouchableOpacity >
                    <View style={styles.addWrapper}>
                        <Text style={styles.addSymbol}>+</Text>
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
  addSymbol: {
    
  },
});
