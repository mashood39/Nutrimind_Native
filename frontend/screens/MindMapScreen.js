import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Layout from '../components/Layout';

const MindMapScreen = ({ route }) => {

    const { url } = route.params;

    return (
        <Layout>
            <View style={styles.container}>
                <WebView
                    source={{ uri: url }}
                    style={styles.webview}
                    allowsFullscreenVideo
                    allowsBackForwardNavigationGestures
                />
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: '50%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
    },
    webview: {
        // flex: 1,
    },
});

export default MindMapScreen;
