import React, { useState } from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import MarketRow from './MarketRow';

const Market = () => {
    const [activeTab, setActiveTab] = useState('All');
    const marketData = [
        { id: '1', name: 'Bitcoin', symbol: 'BTC', price: '$56,623.54', percentChange: '+1.45%', marketCap: '$880,423,640,582', icon: require('../../assets/images/coin-1.svg'), chart: require('../../assets/images/chart-1.svg') },
        { id: '2', name: 'Ethereum', symbol: 'ETH', price: '$3,623.54', percentChange: '-5.12%', marketCap: '$400,423,640,582', icon: require('../../assets/images/coin-2.svg'), chart: require('../../assets/images/chart-2.svg') },
        { id: '3', name: 'Tether', symbol: 'USDT', price: '$1.00', percentChange: '0%', marketCap: '$68,423,640,582', icon: require('../../assets/images/coin-3.svg'), chart: require('../../assets/images/chart-1.svg') },
        { id: '4', name: 'BNB', symbol: 'BNB/USD', price: '$56,623.54', percentChange: '-3.75%', marketCap: '$880,423,640,582', icon: require('../../assets/images/coin-4.svg'), chart: require('../../assets/images/chart-2.svg') },
        { id: '5', name: 'Solana', symbol: 'SOL', price: '$56,623.54', percentChange: '+1.45%', marketCap: '$880,423,640,582', icon: require('../../assets/images/coin-5.svg'), chart: require('../../assets/images/chart-1.svg') },
        { id: '6', name: 'XRP', symbol: 'XRP', price: '$56,623.54', percentChange: '-2.22%', marketCap: '$880,423,640,582', icon: require('../../assets/images/coin-6.svg'), chart: require('../../assets/images/chart-2.svg') },
        { id: '7', name: 'Cardano', symbol: 'ADA', price: '$56,623.54', percentChange: '+0.8%', marketCap: '$880,423,640,582', icon: require('../../assets/images/coin-7.svg'), chart: require('../../assets/images/chart-1.svg') },
        { id: '8', name: 'Avalanche', symbol: 'AVAX', price: '$56,623.54', percentChange: '+1.41%', marketCap: '$880,423,640,582', icon: require('../../assets/images/coin-8.svg'), chart: require('../../assets/images/chart-1.svg') },
    ];


    return (
        <View style={styles.section}>
            <View style={styles.titleWrapper}>
                <Text style={styles.sectionTitle}>Market Update</Text>
                <TouchableOpacity>
                    <Text style={styles.btnLink}>See All Coins</Text>
                </TouchableOpacity>
            </View>

            {/* Tab Navigation */}
            <ScrollView horizontal style={styles.tabNav}>
                {['All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music'].map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tabBtn, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={styles.tabBtnText}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Market Table */}
            <ScrollView horizontal={true}>
                <ScrollView style={styles.marketTable}>
                    <View style={styles.tableHead}>
                        <Text style={styles.tableHeading}>#</Text>
                        <Text style={styles.tableHeading}>Name</Text>
                        <Text style={styles.tableHeading}>Last Price</Text>
                        <Text style={styles.tableHeading}>24h %</Text>
                        <Text style={styles.tableHeading}>Market Cap</Text>
                        <Text style={[styles.tableHeading, styles.marginRight]}>Last 7 Days</Text>
                    </View>

                    {/* Market Rows */}
                    <FlatList
                        data={marketData}
                        renderItem={({ item }) => <MarketRow market={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        padding: 15,
        backgroundColor: '#000',
        marginTop: 70,
        marginBottom: 50
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    btnLink: {
        fontWeight: '700',
        color: '#4E96FB',
    },
    tabNav: {
        flexDirection: 'row',
        marginBottom: 15,
        overflowX: 'hidden'
    },
    tabBtn: {
        paddingVertical: 7,
        paddingHorizontal: 24,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#000',
    },
    activeTab: {
        backgroundColor: '#000',
    },
    tabBtnText: {
        color: '#fff',
        fontWeight: '700',
    },
    marketTable: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 10,
        width: '100%',
    },
    tableHead: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginBottom: 10,
        width: 800
    },
    tableHeading: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '700',
        padding: 8,
        width: 400
    },
    marginRight: {
        marginRight: 20, // Adjust the value as needed
    },
    marketRow: {
        width: 800,
    }
});

export default Market;
