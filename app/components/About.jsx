import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const About = () => {
  const features = [
    {
      id: 1,
      title: "View real-time cryptocurrency prices",
      description:
        "Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.",
    },
    {
      id: 2,
      title: "Buy and sell BTC, ETH, XRP, OKB, Etc...",
      description:
        "Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.about}>
        <Image
          source={require('../../assets/images/about-banner.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>What Is Cryptex</Text>
          <Text style={styles.sectionText}>
            Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot
            Trade, Futures Trade, P2P, Staking, Mining, and margin.
          </Text>

          {features.map((feature) => (
            <View key={feature.id} style={styles.sectionItem}>
              <View style={styles.titleWrapper}>
                <AntDesign name="checkcircle" style={styles.checkIcon} size={18} color="#007BFF" />
                <Text style={styles.listTitle}>{feature.title}</Text>
              </View>
              <Text style={styles.itemText}>{feature.description}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explore More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Matches `var(--eerie-black-1)`
  },
  about: {
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  content: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 16,
    color: '#B1B5C3',
    marginBottom: 20,
  },
  sectionItem: {
    marginBottom: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  checkIcon: {
    marginRight: 10,
    marginTop: 5
  },
  listTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  itemText: {
    fontSize: 14,
    color: '#B1B5C3',
  },
  button: {
    backgroundColor: '#007BFF', // Primary button color
    paddingVertical: 12,
    borderRadius: 50,
    width: 155,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default About;
