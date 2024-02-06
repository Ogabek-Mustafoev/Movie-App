import {Dimensions, Image, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import {fetchImage} from "../api";
import {truncate} from "../utils/truncate";
import {useNavigation} from "@react-navigation/native";

const {width, height} = Dimensions.get("window");

export const UpcomingMovies = ({data, title}) => {
  const {navigate} = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <Text className="text-xl ml-4 font-bold text-red-500">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item) => (
          <TouchableWithoutFeedback onPress={() => navigate("Movie", item)} key={item?.id}>
            <View className="space-y-1 mr-3">
              <Image
                className="rounded-3xl"
                style={{width: width * .4, height: height * .3}}
                source={{uri: fetchImage(item?.poster_path, 500)}}
              />
              <Text className="text-white">{truncate(item?.title, 20)}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  )
}