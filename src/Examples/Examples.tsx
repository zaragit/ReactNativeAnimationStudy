import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { Routes } from "../Routes";

const thumbnails = [
  {
    screen: "Decay",
    title: "Animated.decay()",
  },
  {
    screen: "Spring",
    title: "Animated.spring()",
  },
  {
    screen: "Timing",
    title: "Animated.timing()",
  },
] as const;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: "white",
    padding: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Examples = () => {
  const { navigate } = useNavigation<StackNavigationProp<Routes, "Examples">>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {thumbnails.map((thumbnail) => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}
        >
          <View style={styles.thumbnail}>
            <Text>{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};

export default Examples;
