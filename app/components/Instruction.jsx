import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Instruction = () => {
    const instructions = [
        {
            id: 1,
            step: "Step 1",
            title: "Download",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: require('../../assets/images/instruction-1.png'),
        },
        {
            id: 2,
            step: "Step 2",
            title: "Connect Wallet",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: require('../../assets/images/instruction-2.png'),
        },
        {
            id: 3,
            step: "Step 3",
            title: "Start Trading",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: require('../../assets/images/instruction-3.png'),
        },
        {
            id: 4,
            step: "Step 4",
            title: "Earn Money",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: require('../../assets/images/instruction-4.png'),
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>How It Work</Text>
                <Text style={styles.sectionText}>
                    Stacks is a production-ready library of stackable content blocks built in React Native.
                </Text>

                <View style={styles.instructionList}>
                    {instructions.map((item) => (
                        <View key={item.id} style={styles.instructionCard}>
                            <Image source={item.image} style={styles.cardImage} />
                            <Text style={styles.cardSubtitle}>{item.step}</Text>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardText}>{item.description}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17181C',
    },
    section: {
        paddingVertical: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 15,
        color: "#fff"
    },
    sectionText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#B1B5C3',
        marginBottom: 20,
    },
    instructionList: {
        marginTop: 20,
        gap: 20,
    },
    instructionCard: {
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 10,
    },
    cardImage: {
        width: 96,
        height: 96,
        marginBottom: 12,
    },
    cardSubtitle: {
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#B1B5C3'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 5,
        color: '#fff'
    },
    cardText: {
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: '#B1B5C3',
    },
});

export default Instruction;
