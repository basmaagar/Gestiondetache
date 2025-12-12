import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function TaskList({ navigation, route }) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        if (route.params?.newTask) {
            const newTaskTitle = route.params.newTask;
            setTasks(currentTasks => [
                ...currentTasks,
                { id: Date.now().toString(), title: newTaskTitle }
            ]);
            navigation.setParams({ newTask: undefined });
        }
    }, [route.params?.newTask, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Liste des Tâches</Text>
            <ScrollView style={styles.scrollView}>
                {tasks.length === 0 && (
                    <Text style={styles.emptyText}>Aucune tâche pour l'instant. Ajoutez-en une !</Text>
                )}
                {tasks.map((t, index) => (
                    <View key={t.id || index} style={styles.taskItem}>
                        <Text style={styles.taskTitle}>{t.title}</Text>
                        
                        <Button 
                            title="Détails" onPress={() => navigation.navigate('TaskDetails', { task: t })} color="#28a745"
                        />
                    </View>
                ))}
            </ScrollView>

            <Button
                title="Ajouter une tâche" onPress={() => navigation.navigate('AddTask')} color="#007bff"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#e9ecef' },
    header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#343a40', textAlign: 'center' },
    scrollView: { flexGrow: 1, marginBottom: 15 },
    emptyText: { textAlign: 'center', color: '#6c757d', fontSize: 16, marginTop: 20 },
    taskItem: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        padding: 15, borderLeftWidth: 5, borderLeftColor: '#007bff',
        backgroundColor: '#fff', borderRadius: 8, elevation: 2, marginBottom: 10,
    },
    taskTitle: { fontSize: 18, flex: 1, marginRight: 15, color: '#495057' },
});