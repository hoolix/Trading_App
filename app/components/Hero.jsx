import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Hero = () => {
    return (
        <View style={styles.hero}>
            <View style={styles.container}>
                {/* Hero Content */}
                <View style={styles.heroContent}>
                    <Text style={styles.heroTitle}>Buy & Sell Digital Assets In The Cryptex</Text>
                    <Text style={styles.heroText}>
                        Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                    </Text>
                    <TouchableOpacity style={styles.btnPrimary} onPress={() => console.log('Get Started')}>
                        <Text style={styles.btnText}>Get started now</Text>
                    </TouchableOpacity>
                </View>

                {/* Hero Banner Image */}
                <View style={styles.heroBanner}>
                    <Image
                        source={require('../../assets/images/hero-banner.png')} // Ensure your image is in the correct folder
                        style={styles.heroImage}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hero: {
        paddingVertical: 80,
    },
    container: {
        paddingHorizontal: 20,

    },
    heroContent: {
        marginBottom: 20,

    },
    heroTitle: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    heroText: {
        color: '#B1B5C3',
        fontSize: 16,
        marginVertical: 25,
        marginBottom: 40,
    },
    btnPrimary: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: '50px',
        width: 180,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    heroBanner: {
        width: '100%', // Make the container take the full width of the screen
    },
    heroImage: {
        width: '100%', // You can adjust the width and height based on your design
        height: 448,
        resizeMode: 'contain',
    },
});

export default Hero;
