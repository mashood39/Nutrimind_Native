import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import ExploreSection from '../components/ExploreSection';
import LatestBlogCard from '../components/LatestBlogCard';

const DiscoverScreen = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Explore Section */}
        <ExploreSection
          tags={['Carbs', 'Fats', 'Proteins', 'Vitamins', 'Minerals', 'Water']}
        />

        {/* Latest Blog Section */}
        <LatestBlogCard
          image={require('../assets/images/latestBlogImage.png')}
          title="The benefits of a plant-based diet"
          navigation={navigation}
        />
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
