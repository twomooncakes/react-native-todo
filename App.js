import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
                </View>
            </View>
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

  },
});
