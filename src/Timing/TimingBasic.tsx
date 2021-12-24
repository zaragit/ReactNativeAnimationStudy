import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function TimingBasic() {
  const animatedPos = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedPos, {
        toValue: 200,
        delay: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedBlock,
          { transform: [{ translateY: animatedPos }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  animatedBlock: {
    width: 100,
    height: 100,
    backgroundColor: "darkorange",
  },
});
