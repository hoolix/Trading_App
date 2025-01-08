import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";

const MobileApp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
            <View style={styles.appContent}>
                <Text style={styles.sectionTitle}>
                    Free Your Money & Invest With Confidence
                </Text>
                <Text style={styles.sectionText}>
                    With Cryptor Trade, you can be sure your trading skills are matched
                </Text>

                <View>
                    <View style={styles.sectionItem}>
                        <View style={styles.titleWrapper}>
                            <AntDesign name="checkcircle" style={styles.checkIcon} size={18} color="#007BFF" />
                            <Text style={styles.itemTitle}>Buy, Sell, And Trade On The Go</Text>
                        </View>
                        <Text style={styles.itemText}>
                            Manage Your Holdings From Your Mobile Device
                        </Text>
                    </View>

                    <View style={styles.sectionItem}>
                        <View style={styles.titleWrapper}>
                            <AntDesign name="checkcircle" style={styles.checkIcon} size={18} color="#007BFF" />
                            <Text style={styles.itemTitle}>Take Control Of Your Wealth</Text>
                        </View>
                        <Text style={styles.itemText}>
                            Rest Assured You (And Only You) Have Access To Your Funds
                        </Text>
                    </View>
                </View>

                <View style={styles.appWrapper}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/googleplay.png')}
                            style={styles.storeImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/appstore.png')}
                            style={styles.storeImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.appBanner}>
                <Image
                    source={require('../../assets/images/app-banner.png')}
                    style={styles.bannerImage}
                    resizeMode="contain"
                />
                <Text style={styles.scanToDownload}>Scan To Download</Text>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17181C',
        marginBottom: 80
    },
    section: {
        paddingTop: 80,
        paddingHorizontal: 10,
    },
    appContent: {
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 10,
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
    },
    checkIcon: {
        marginRight: 10,
        marginTop: 5
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    itemText: {
        fontSize: 14,
        color: '#B1B5C3',
        marginLeft: 28, // To align with the title after the icon
    },
    appWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginTop: 20,
    },
    storeImage: {
        width: 135,
        height: 40,
        resizeMode: 'contain',
        marginHorizontal: 10,
    },
    appBanner: {
        position: 'relative',
        marginTop: 60,
        alignItems: 'center',
    },
    bannerImage: {
        width: '100%',
        height: 350,
    },
    scanToDownload: {
        position: 'absolute',
        top: '10%',
        left: 10,
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 50,
        textAlign: 'center',
    },
});

export default MobileApp;
