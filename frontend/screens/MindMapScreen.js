import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import Layout from '../components/Layout'

const MindMapScreen = ({ route }) => {

    const { id, title } = route.params;
    // console.log(id)
    // console.log(title)

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <WebView
                    source={{ uri: `https://coggle.it/diagram/${id}/t/${title}` }}
                    style={styles.webview}
                />
            </View>
        </Layout>
    )
}

// https://coggle.it/diagram/Z0HX_wOBXPmFN7dJ/t/acer



export default MindMapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        // marginBottom: 20,
    },
    webview: {
        // flex: 1,
    },
})

