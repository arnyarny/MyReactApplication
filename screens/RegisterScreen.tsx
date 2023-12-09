import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      const registerUrl = "http://192.168.1.11/api/v1/register";

      if (password !== confirmPassword) {
        Alert.alert("Registration Failed", "Passwords do not match.");
        return;
      }

      const response = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert("Registration Successful", "You are now registered!");

        navigate("Login");
      } else {
        Alert.alert(
          "Registration Failed",
          result.message || "An error occurred during registration."
        );
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Alert.alert(
        "Error",
        "An unexpected error occurred. Please try again later."
      );
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <TouchableOpacity
          onPress={() => navigate("Welcome")}
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
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginTop: Spacing * 1,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <AppTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 1,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
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
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
