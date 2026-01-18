import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EventCard from './event-card';

export default function HomeScreen() {
    const [events] = useState([
        {
            id: 1,
            title: "Repas de l'Escalade",
            description: "Compagnons, je vous salue...",
            date: "Dec 12 • 19:00",
            imageUrl: "https://via.placeholder.com/400x200",
        },
        {
            id: 2,
            title: "Repas de l'Escalade",
            description: "Compagnons, je vous salue...",
            date: "Proutador de l'Escalade",
            imageUrl: "https://via.placeholder.com/400x200",
        }
        // Add more mock data here
    ]);

    return (
        <ScrollView style={styles.container}>
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
});
