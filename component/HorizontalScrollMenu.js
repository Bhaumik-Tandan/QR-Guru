import React from "react";
import { ScrollView } from "react-native";
import { calcWidth } from "../helper/res";

const HorizontalScroll = ({ children }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      decelerationRate={0}
      snapToInterval={calcWidth(100)}
      snapToAlignment={"center"}
    >
      {children}
    </ScrollView>
  );
};

export default HorizontalScroll;
