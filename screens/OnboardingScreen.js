import React, { useState } from "react";
import styled from "styled-components/native";
import {
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  Animated,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
// 040507
const slides = [
  {
    id: 1,
    image: require("../assets/landing1.png"),
    title: "Plan your travel expense",
    description:
      "Manage your travel expenditure and have a hassle free trip. No more struggle to divide the trip expense amongst friends.",
  },
  {
    id: 2,
    image: require("../assets/landing1.png"),
    title: "Use our default strategy",
    description:
      "Manage your travel expenditure and have a hassle free trip. No more struggle to divide the trip expense amongst friends.",
  },
  {
    id: 3,
    image: require("../assets/landing1.png"),
    title: "Start now",
    description:
      "Manage your travel expenditure and have a hassle free trip. No more struggle to divide the trip expense amongst friends.",
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width, height } = Dimensions.get("window");

  const goToNextSlide = () => {};

  const Slide = ({ item }) => {
    return (
      <Container>
        <View style={{ flex: 0.7 }}>
          <Image
            source={item?.image}
            style={{ height: "75%", width: "50%", resizeMode: "contain" }}
          />
        </View>
        <View style={{ flex: 0.3 }}>
          <Heading>{item?.title}</Heading>
          <Description>{item?.description}</Description>
        </View>
      </Container>
    );
  };

  const Footer = () => {
    return (
      <View>
        <TouchableOpacity onPress={goToNextSlide}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={slides}
        pagingEnabled
        bounces={false}
        horizontal
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </View>
  );
}

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.Text`
  color: orange;
  max-width: 50%;
  align-self: center;
`;

const Description = styled.Text`
  font-weight: 200;
  color: blue;
  max-width: 50%;
  text-align: center;
`;
