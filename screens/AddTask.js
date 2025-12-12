import React, { useState } from 'react'; 
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function AddTask({ navigation }){ 
    const [title, setTitle] = useState(''); 
    const handleAdd = () => {
        const trimmedTitle = title.trim();
        if (trimmedTitle) {
            navigation.navigate("TaskList", { newTask: trimmedTitle });
        } else {
            alert("Veuillez saisir un titre de tâche.");
        }
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Ajouter une nouvelle tâche</Text>
            
            <TextInput 
                placeholder="Entrez le nom de la tâche ici" value={title} onChangeText={setTitle} style={styles.input}
            />
            <Button 
                title="Valider la Tâche" onPress={handleAdd} color="#28a745"
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333', textAlign: 'center' },
    input: {
        height: 50, borderColor: '#007bff', borderWidth: 1, borderRadius: 8,
        paddingHorizontal: 15, marginBottom: 30, backgroundColor: '#fff', fontSize: 16,
    },
});