import { View, Text, StyleSheet } from 'react-native';

export default function PhotosScreen() {
    return (
        <View style={styles.container}>
            <Text>Photos Logic Here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
