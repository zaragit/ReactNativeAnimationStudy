import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function DecayBasic() {
  const animatedPos = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.loop(
      Animated.decay(animatedPos, {
        velocity: 1,
        deceleration: 0.998,
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
