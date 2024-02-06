import React from 'react'
import {StyleSheet} from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export const Loader = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="#040617"
      source={require("../../assets/loader.json")}
      speed={1}
      animationStyle={styles.lottie}
    >
    </AnimatedLoader>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
  }
})

