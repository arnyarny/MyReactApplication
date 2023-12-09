import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{
            height: height / 3,
            marginTop: Spacing * 4,
          }}
          resizeMode="contain"
          source={require("../assets/images/home.png")}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              textAlign: "center",
            }}
          >
            Let's Start Chatting!
          </Text>

          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
              marginTop: Spacing * 2,
            }}
          >
            A very simple homescreen created by yours truly.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "100%",
              borderRadius: Spacing,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
