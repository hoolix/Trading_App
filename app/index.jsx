import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Importing the styles
import { mainStyles } from './style';
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView} from "react-native";
import Trend from "./components/Trend";
import Market from "./components/Market";
import Instruction from "./components/Instruction";
import About from "./components/About";
import MobileApp from "./components/MobileApp"; // Importing the styles

const App = () => {
    return (
        <SafeAreaView style={mainStyles.safeArea}>
            <ScrollView>
                <Navbar />
                <Hero />
                <Trend />
                <Market />
                <Instruction />
                <About />
                <MobileApp />
            </ScrollView>
        </SafeAreaView>
    )
};

export default App;