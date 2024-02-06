import {Dimensions, Image, TouchableWithoutFeedback, View} from "react-native";
import {fetchImage} from "../api";
import {useNavigation} from "@react-navigation/native";

const {width, height} = Dimensions.get("window");

export const MovieCard = ({item}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigate("Movie", item)}>
      <Image
        className="rounded-2xl"
        style={{width: width * 0.64, height: height * 0.5}}
        source={{uri: fetchImage(item.poster_path, 500)}}
      />
    </TouchableWithoutFeedback>
  )
}
