import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

// Import des fonctions de composant
import TaskList from './screens/TaskList'; 
import AddTask from './screens/AddTask'; 
import TaskDetails from './screens/TaskDetails'; 

const Stack = createStackNavigator(); 

export default function App() { 
    return ( 
        <NavigationContainer> 
            <Stack.Navigator initialRouteName="TaskList"> 
                <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Liste des Tâches' }} /> 
                <Stack.Screen name="AddTask" component={AddTask} options={{ title: 'Ajouter' }} /> 
                <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Détails' }} /> 
            </Stack.Navigator> 
        </NavigationContainer> 
    ); 
}