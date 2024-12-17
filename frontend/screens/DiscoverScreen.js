import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import ExploreSection from '../components/ExploreSection';
// import LatestBlogCard from '../components/LatestBlogCard';

const DiscoverScreen = ({ navigation }) => {

  const mindMapData = [
    { tag: 'Carbo', url: 'https://embed.coggle.it/diagram/Z0XOjQyJlRBfFlGa/0a6c1f274197a256c3d3a990f11c1831af7a94848bebe85308ad4e4288013335' },
    { tag: 'Fats', url: 'https://embed.coggle.it/diagram/Z0HZT9QidRsM3GCU/c4399a0182c3513060b3822e2735f1c6ba40cc548231774f5f1cc82b12dc6534' },
    { tag: 'Proteins', url: 'https://embed.coggle.it/diagram/Z0GUKwOBXPmFIxvW/176d4366e1158c9b2d6b962bdfd89882faa062ddd5317b69c99fb50c4f3ac37d' },
    { tag: 'Vitamins', url: 'https://embed.coggle.it/diagram/ZzW2cgaoDqinMfp7/9f8caf089053876a94af20b20a609a36eb66a916528bb54816511fcf585a9123' },
    // { tag: 'Minerals', url: '' },
    // { tag: 'Water', url: '' },
  ];

  return (
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Explore Section */}
        <ExploreSection mindMapData={mindMapData} navigation={navigation} />

        {/* Latest Blog Section */}
        {/* <LatestBlogCard
          image={require('../assets/images/latestBlogImage.png')}
          title="The benefits of a plant-based diet"
          navigation={navigation}
        /> */}
      </ScrollView>
    </Layout>
  );
}

export default DiscoverScreen

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
  },
});
