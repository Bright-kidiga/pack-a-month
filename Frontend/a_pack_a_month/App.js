import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from "./src/components/splashscreen/splashscreen";
import Login from "./src/components/login/login";
import ForgotPassword from "./src/components/ForgotPassword/ForgotPassword";
import Verification from "./src/components/Verification/Verification";
import HomePage from "./src/components/HomePage/HomePage";

export default function App() {
  return (
      <View style={styles.container}>
        <Login/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
