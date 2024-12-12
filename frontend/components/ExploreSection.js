import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ExploreSection = ({ tags }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore mind maps on nutrition</Text>
            <View style={styles.tagContainer}>
                {tags.map((tag, index) => (
                    <TouchableOpacity key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
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
