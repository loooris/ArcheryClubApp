import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Type definition (optional but good practice)
type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    tags?: string[];
};

export default function EventCard({ event }: { event: Event }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: event.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.date}>{event.date}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Participer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 3,
    },
    image: { height: 150, width: '100%' },
    content: { padding: 12 },
    title: { fontSize: 16, fontWeight: 'bold' },
    date: { color: '#666', marginVertical: 4 },
    button: {
        backgroundColor: '#C41E3A',
        padding: 8,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});
