import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Trend = () => {
    const [activeTab, setActiveTab] = useState("Crypto");

    const tabs = [
        "Crypto", "DeFi", "BSC", "NFT", "Metaverse", "Polkadot", "Solana", "Opensea", "Makersplace"
    ];

    const trendCards = [
        {
            title: "Bitcoin",
            symbol: "BTC/USD",
            value: 46168.95,
            change: -0.79,
            image: require("../../assets/images/coin-1.svg"),
        },
        {
            title: "Ethereum",
            symbol: "ETH/USD",
            value: 3480.04,
            change: 10.55,
            image: require("../../assets/images/coin-2.svg"),
            isActive: true,
        },
        {
            title: "Tether",
            symbol: "USDT/USD",
            value: 1.00,
            change: -0.01,
            image: require("../../assets/images/coin-3.svg"),
        },
        {
            title: "BNB",
            symbol: "BNB/USD",
            value: 443.56,
            change: -1.24,
            image: require("../../assets/images/coin-4.svg"),
        },
    ];

    return (
        <View style={styles.section}>
            <View contentContainerStyle={styles.container}>
                <View style={styles.trendTab}>
                    <View style={styles.tabNav}>
                        {tabs.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.tabBtn, activeTab === tab && styles.activeTab]}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={styles.tabText}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.tabContent}>
                        {trendCards.map((card, index) => (
                            <View
                                key={index}
                                style={[styles.trendCard, card.isActive && styles.activeCard]}
                            >
                                <View style={styles.cardTitleWrapper}>
                                    <Image source={card.image} style={styles.coinImage} />
                                    <Text style={styles.cardTitle}>
                                        {card.title} <Text style={styles.symbol}>{card.symbol}</Text>
                                    </Text>
                                </View>

                                <Text style={styles.cardValue}>USD {card.value.toFixed(2)}</Text>

                                <View style={styles.cardAnalytics}>
                                    <Text style={styles.currentPrice}>36,641.20</Text>
                                    <Text
                                        style={[styles.badge, card.change > 0 ? styles.greenBadge : styles.redBadge]}
                                    >
                                        {card.change > 0 ? `+${card.change}%` : `${card.change}%`}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        backgroundColor: "#131315",
        paddingBottom: 0,
        marginTop: 50,
    },
    container: {
        paddingHorizontal: 20,
    },

    trendTab: {
        backgroundColor: "#17181c",  // e.g., eerie black 2 color
        borderWidth: 1,
        borderColor: "#23262f", // raisin black color
        borderRadius: 24, // equivalent to var(--radius-24)
        padding: 20,
        shadowColor: "rgba(0, 0, 0, 0.3)", // Smoky black color with 30% opacity
        shadowOffset: { width: 0, height: 30 }, // Horizontal and vertical offsets
        shadowOpacity: 0.3, // 30% opacity
        shadowRadius: 10, // Blur radius
        marginTop: -160, // Negative margin to offset the element upwards
    },
    tabNav: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#2e2e2e",
    },
    tabBtn: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginRight: 10,
        marginBottom: 10,
    },
    activeTab: {
        backgroundColor: "#1E90FF",
    },
    tabText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    tabContent: {
        flexDirection: "column",
        gap: 20,
    },
    trendCard: {
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#17181c",
        transition: "background-color 0.25s",
    },
    activeCard: {
        backgroundColor: "#2f3241",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    },
    cardTitleWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    coinImage: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    symbol: {
        color: "#7f7f7f",
        marginLeft: 5,
    },
    cardValue: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
    },
    cardAnalytics: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    currentPrice: {
        color: "#fff",
        fontSize: 14,
    },
    badge: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        fontWeight: "700",
        fontSize: 12,
    },
    greenBadge: {
        backgroundColor: "#28a745",
        color: "#fff",
    },
    redBadge: {
        backgroundColor: "#dc3545",
        color: "#fff",
    },
});

export default Trend;
