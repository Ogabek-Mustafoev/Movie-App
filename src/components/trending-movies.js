import {MovieCard} from "./movie-card";
import Carousel from "react-native-snap-carousel";
import {Dimensions, Text, View} from "react-native";

const {width} = Dimensions.get("window");

export const TrendingMovies = ({data}) => {
  return (
    <View className="my-5">
      <Text className="text-xl ml-4 font-bold text-red-500 mx-4 mb-5">Trending Movies</Text>
      <Carousel
        data={data}
        loop={true}
        firstItem={1}
        autoplay={true}
        sliderWidth={width}
        itemWidth={width * 0.64}
        inactiveSlideOpacity={0.4}
        renderItem={({item}) => <MovieCard item={item}/>}
        slideStyle={{display: 'flex', alignItems: "center"}}
      />
    </View>
  )
}