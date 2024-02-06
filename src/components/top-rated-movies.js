import {Dimensions, Text, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {MovieCard} from "./movie-card";

const {width} = Dimensions.get("window");

export const TopRatedMovies = ({data}) => {
  return (
    <View>
      <Text className="text-xl ml-4 font-bold text-red-500 mx-4 mb-5">Top Rated Movies</Text>
      <Carousel
        layout="stack"
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
