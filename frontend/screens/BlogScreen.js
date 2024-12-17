import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Layout from '../components/Layout';
import Markdown from 'react-native-markdown-display';

const BlogScreen = ({ route }) => {
    const { blog } = route.params;

    return (
        <Layout>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{blog.title}</Text>
                <Image source={blog.image} style={styles.blogImage} />
                <Markdown style={styles.markdown}>{blog.content}</Markdown>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
    blogImage: {
        width: '100%',
        height: '200',
        marginVertical: 10,
    }
});

export default BlogScreen;
