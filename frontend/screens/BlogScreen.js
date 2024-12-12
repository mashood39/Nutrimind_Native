import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Layout from '../components/Layout';

const BlogScreen = () => {
    return (
        <Layout>
            <ScrollView style={styles.container}>
                {/* Heading Section */}
                <View style={styles.headingContainer}>
                    <Text style={styles.title}>The benefits of a plant-based diet</Text>
                    <Text style={styles.author}>Jiby Abraham 10 Nov 2024 Sunday</Text>
                </View>

                {/* Image Section */}
                <Image
                    source={require('../assets/images/image_6.png')}
                    style={styles.image}
                    resizeMode="cover"
                />

                {/* Content Section */}
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>
                        {'\t\t\t'}Adopting a plant-based diet can lead to numerous health benefits, including improved heart health, better weight management, and a reduced risk of chronic diseases. By incorporating more fruits, vegetables, and whole grains into your meals, you can enjoy a more balanced and nutritious lifestyle.
                        Adopting a plant-based diet can lead to numerous health benefits, including improved heart health, better weight management, and a reduced risk of chronic diseases. By incorporating more fruits, vegetables, and whole grains into your meals, you can enjoy a more balanced and nutritious lifestyle.
                    </Text>
                </View>

                {/* Footer Section */}
                <View style={styles.footer}>
                    {/* Left Side: Scroll Icons */}
                    <View style={styles.scrollIcons}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <Ionicons name="chevron-back" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                            <Ionicons name="chevron-forward" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    {/* Right Side: Action Icons */}
                    <View style={styles.actionIcons}>
                        <TouchableOpacity>
                            <FontAwesome name="heart-o" size={24} color="#666" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="comment-o" size={24} color="#666" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="share-social-outline" size={24} color="#666" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
};

export default BlogScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    headingContainer: {
        // padding: 15,
        // paddingTop: 80,
        // backgroundColor: '#f9f9f9',
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    author: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        // height: 200,
        // marginVertical: ,
        borderRadius: 10,
    },
    contentContainer: {
        paddingTop: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
        textAlign: 'left',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    scrollIcons: {
        flexDirection: 'row',
        alignItems: '',
    },
    iconContainer: {
        width: 40, // Circular container
        height: 40,
        borderRadius: 20, // Fully rounded
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999', // Dark grey
        marginHorizontal: 5,
    },
    actionIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    footerSpace: {
        // height: 20,
    },
});