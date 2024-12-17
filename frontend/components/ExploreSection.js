import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ExploreSection = ({ mindMapData, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore mind maps on nutrition</Text>
            <View style={styles.tagContainer}>
                {mindMapData.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.tag}
                        onPress={() => navigation.navigate('MindMapScreen', { url: item.url })}
                    >
                        <Text style={styles.tagText}>{item.tag}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default ExploreSection;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
    },
    tag: {
        backgroundColor: '#d9eaff',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        width: '30%',
    },
    tagText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4a90e2',
    },
});
