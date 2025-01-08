import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'

const MarketRow = ({market}) => {
    return (
        <View style={styles.row}>
            <TouchableOpacity style={styles.favBtn}>
                <Text style={styles.favText}><AntDesign name="staro" size={18} color="white" /></Text>
            </TouchableOpacity>
            <Text style={styles.rank}>{market.id}</Text>

            <View style={styles.coinInfo}>
                <Image source={market.icon} style={styles.coinImage} />
                <Text style={styles.coinName}>{market.name}</Text>
            </View>

            <Text style={styles.lastPrice}>{market.price}</Text>
            <Text style={styles.percentage}>{market.percentChange}</Text>
            <Text style={styles.marketCap}>{market.marketCap}</Text>
            <Image source={market.chart} style={styles.chartImage} />
            <TouchableOpacity style={styles.tredeBtn} onPress={() => alert('Trade clicked')}>
                <Text style={styles.tredeBtnText}>Trade</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    favBtn: {
        marginRight: 10,
        padding: 8,
    },
    favText: {
        color: '#4E96FB',
        fontSize: 18,
    },
    rank: {
        color: '#fff',
        fontWeight: '700',
        marginRight: 10,
        padding: 8
    },
    coinInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        padding: 8,
        width: 150
    },
    coinImage: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    chartImage: {
        width: 80,
        height: 30,
        marginRight: 10,
    },
    coinName: {
        color: '#fff',
        fontWeight: '700',
    },
    lastPrice: {
        color: '#fff',
        fontWeight: '700',
        padding: 8,
        width: 120
    },
    percentage: {
        color: '#4E96FB', // Change color based on positive/negative percentage
        fontWeight: '700',
        padding: 8,
        width: 100
    },
    marketCap: {
        color: '#fff',
        fontWeight: '700',
        padding: 8,
        width: 180
    },
    tredeBtn: {
        padding: 8,
        width: 60,
        borderRadius: '50px',
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#fff"
    },
    tredeBtnText: {
        color: "#fff",  // Button text color
        fontSize: 12,
        fontWeight: "600",
    },
});

export default MarketRow;
