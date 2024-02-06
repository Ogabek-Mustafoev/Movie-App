import {Dimensions, Text, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {MovieCard} from "./movie-card";

const {width} = Dimensions.get("window");

export const PopularMovies = ({data}) => {
  return (
    <View className="mt-1">
      <Text className="text-xl ml-4 font-bold text-red-500 mx-4 mb-5">Popular TV Series</Text>
      <Carousel
        layout="tinder"
        data={data}
        loop={true}
        firstItem={1}
        autoplay={true}
        sliderWidth={width}
        itemWidth={width * 0.65}
        inactiveSlideOpacity={0.4}
        renderItem={({item}) => <MovieCard item={item}/>}
        slideStyle={{display: 'flex', alignItems: "center"}}
      />
    </View>
  )
}
