import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import { Ionicons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Recovery">;

const showAlert = () => {
  Alert.alert("Alert", "Reset Instructions Set!", [
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => {},
    },
  ]);
};

const RecoveryScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            marginTop: Spacing * 3,
          }}
        >
          <Ionicons name="arrow-back" color={Colors.text} size={Spacing * 3} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginTop: Spacing * 3,
              marginBottom: Spacing * 1,
            }}
          >
            Restore Password
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.medium,
              textAlign: "center",
              maxWidth: "70%",
            }}
          >
            Input your email-address so you can recover your account
          </Text>
        </View>
        <View>
          <ImageBackground
            style={{
              height: height / 3.5,
              marginTop: Spacing * 2,
              marginBottom: Spacing * 1,
            }}
            resizeMode="contain"
            source={require("../assets/images/image.png")}
          />
          <AppTextInput placeholder="Email" />
        </View>

        <TouchableOpacity
          onPress={showAlert}
          style={{
            padding: Spacing * 1,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 1,
            borderRadius: Spacing,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Send Reset Instructions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RecoveryScreen;

const styles = StyleSheet.create({});
