import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../components/Layout';
import HomeCard from '../components/HomeCard';
import blogsData from '../data/blogsData';

const HomeScreen = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <HomeCard
      title={item.title}
      image={item.image}
      onPress={() => navigation.navigate('BlogScreen', { blog: item })}
    />
  );

  return (
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Banner section */}
        <View style={styles.banner}>
          <Image source={require('../assets/images/image_1.png')} style={styles.bannerImage} />
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>The world of nutrition</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DiscoverScreen')}>
              <Text style={styles.bannerSubtitle}>Discover with mind maps!</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Blog section */}
        {/* <View style={styles.blogSection}>
          <Text style={styles.sectionTitle}>Read blogs for latest insights.</Text>
          <View style={styles.cardContainer}>
            {blogsData.map((blog) => {
              <HomeCard key={blog.id}  title={blog.title}/>
             })}
          </View>
        </View> */}

        {/* Blog Section */}
        <View style={styles.blogSection}>
          <Text style={styles.sectionTitle}>Read blogs for the latest insights.</Text>
          <FlatList
            data={blogsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>

        {/* Quizzes and puzzles */}
        <View style={styles.blogSection}>
          <Text style={styles.sectionTitle}>Quizzes and puzzles.</Text>
          <FlatList
            data={blogsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>


      </ScrollView>
    </Layout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  banner: {
    marginBottom: 10,
  },
  bannerText: {
    position: 'absolute',
    top: '30%',
    left: '15%',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    backgroundColor: '#62b5e5',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
  },
  blogSection: {
    // marginTop: 10,  // Adds spacing between banner and the blog section
  },
  flatListContainer: {
    paddingLeft: 0,  // Adds space on the left for the first card
  },
  section: {
    // marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});