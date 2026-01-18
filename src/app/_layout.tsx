import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#C41E3A',
                headerStyle: { backgroundColor: '#C41E3A' },
                headerTintColor: '#fff',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Accueil',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="agenda"
                options={{
                    title: 'Agenda',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="calendar" color={color} />,
                }}
            />
            <Tabs.Screen
                name="photos"
                options={{
                    title: 'Photos',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="image" color={color} />,
                }}
            />
            <Tabs.Screen
                name="info"
                options={{
                    title: 'Info',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="info-circle" color={color} />,
                }}
            />
        </Tabs>
    );
}
