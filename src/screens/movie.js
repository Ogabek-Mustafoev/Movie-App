import {useEffect, useState} from "react";
import {Loader} from "../components/loader";
import {LinearGradient} from "expo-linear-gradient";
import {HeartIcon} from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Dimensions, Image, ScrollView, TouchableOpacity, View} from "react-native";
import {fetchImage, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies} from "../api";

const {width, height} = Dimensions.get('window');

export const Movie = () => {
  const [cast, setCast] = useState({});
  const [movieDetail, setMovieDetail] = useState({});
  const [similarMovie, setSimilarMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);

  const {goBack} = useNavigation();
  const {params: {id}} = useRoute();

  const getMovieDetails = async () => {
    const data = await fetchMovieDetails(id);
    setMovieDetail(data);
  }
  const getMovieCredits = async () => {
    const data = await fetchMovieCredits(id);
    setCast(data?.cast);
  }
  const getSimilarMovies = async () => {
    const data = await fetchSimilarMovies(id);
    setSimilarMovie(data?.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovieDetails();
    getMovieCredits();
    getSimilarMovies();
  }, [])

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}} className="flex-1 bg-slate-900">
      <View className="w-full">
        <View className="w-full absolute top-8 left-0 z-10 flex-row justify-between items-center pl-3 pr-4">
          <TouchableOpacity onPress={goBack}>
            <ChevronLeftIcon color="white" strokeWidth={2.5} size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite(prev => !prev)}>
            <HeartIcon color={isFavourite ? "red" : 'white'} strokeWidth={2.5} size={30}/>
          </TouchableOpacity>
        </View>
        {isLoading ? <Loader/> : (
          <View className="relative">
            <Image
              className="object-top object-cover"
              source={{uri: fetchImage(movieDetail.poster_path, 500)}}
              style={{width, height: height * .7}}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(15, 23, 42, .7)",
                "#0F172A",
              ]}
              end={{x: .5, y: 1}}
              start={{x: .5, y: 0}}
              className="absolute bottom-0"
              style={{width, height: height * .45}}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
