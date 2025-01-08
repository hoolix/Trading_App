import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false);

    return (
        <View>
            {/* Header */}
            <View style={[styles.header, navbarActive ? styles.headerActive : null]}>
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("../../assets/images/logo.svg")} // Replace with your logo image
                            style={styles.logo}
                        />
                        <Text style={styles.logoText}>Cryptex</Text>
                    </View>

                    {/* Hamburger Menu Toggle */}
                    <TouchableOpacity
                        style={[styles.navToggleBtn, navbarActive ? styles.navToggleBtnActive : null]}
                        onPress={() => setNavbarActive(!navbarActive)}
                    >
                        {navbarActive ? (
                            <Ionicons
                                name="close"
                                size={26}
                                color="black"
                                style={styles.toggleText} // Remove extra space
                            />
                        ) : (
                            <View style={styles.toggleLines}>
                                <View style={[styles.line, styles.line1]} />
                                <View style={[styles.line, styles.line2]} />
                                <View style={[styles.line, styles.line3]} />
                            </View> // Hamburger icon
                        )}
                    </TouchableOpacity>
                    {/* Wallet Button */}
                    <TouchableOpacity style={styles.walletBtn} onPress={() => alert('Wallet clicked')}>
                        <Text style={styles.walletBtnText}>Wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Navbar items - dropdown on navbar toggle */}
            <ScrollView
                style={[styles.navbar, navbarActive ? styles.navbarActive : null]}
                contentContainerStyle={styles.navbarItems}
            >
                {["Homepage", "Buy Crypto", "Markets", "Sell Crypto", "Blog", "BITUSDT"].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.navItem}>
                        <Text style={styles.navText}>{item}</Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: "#1c1c1c", // eerie black
        paddingVertical: 15,
        zIndex: 4, // Ensure it stays on top of other content
    },
    headerActive: {
        // Shadow or any other styling can go here for active header
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0", // cultured color
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    logo: {
        width: 32,
        height: 32,
    },
    logoText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
    },
    navToggleBtn: {
        padding: 0,
        marginLeft: "auto",
    },
    navToggleBtnActive: {},
    toggleText: {
        color: "#fff",
        fontWeight: "700",
    },
    toggleLines: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: 18,
        width: 26,
    },
    line: {
        width: 26,
        height: 3,
        backgroundColor: "#fff",
        marginBottom: 4,
    },
    navbar: {
        backgroundColor: "#1c1c1c", // eerie black
        maxHeight: 0, // Collapsed by default
        overflow: "hidden", // Hide the menu when collapsed
        visibility: "hidden", // Ensure it doesn't take up space when hidden
        transition: "0.25s", // Adding smooth transition for the navbar visibility
    },
    navbarActive: {
        maxHeight: "100%", // Full height when navbar is active
        visibility: "visible", // Make it visible
    },
    navbarItems: {
        paddingTop: 20,
    },
    navItem: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
    },
    navText: {
        color: "#fff",
        fontWeight: "700",
        padding: 12,
        fontSize: 16,
    },
    // Wallet Button Style
    walletBtn: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: '50px',
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginLeft: 15,
        borderColor: "#fff"
    },
    walletBtnText: {
        color: "#fff",  // Button text color
        fontSize: 12,
        fontWeight: "600",
    },
});

export default Navbar;
