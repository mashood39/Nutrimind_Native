import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../components/Layout';
import SectionData from '../data/sectionData.js'

const HomeScreen = ({ navigation }) => {

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

        {/* sections */}
        {SectionData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.cardsContainer}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={styles.card}
                  onPress={() => navigation.navigate(item.navigateTo)}
                >
                  <Image source={item.image} style={styles.cardImage} />
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.arrowButton}
                    onPress={() => navigation.navigate(item.navigateTo)}
                  >
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

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
  section: {
    // marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 1,
    width: '48%',
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    // marginRight: 10,
    marginBottom: 5,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
  },
});
