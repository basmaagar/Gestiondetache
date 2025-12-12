import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

export default function TaskDetails({ route }) {
    const { task } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails de la Tâche</Text>
            <View style={styles.card}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskId}>ID: {task.id}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
    title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, color: '#495057', textAlign: 'center' },
    card: {
        backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3,
    },
    taskTitle: { fontSize: 22, fontWeight: '600', marginBottom: 10, color: '#007bff' },
    taskId: { fontSize: 14, color: '#6c757d' },
});