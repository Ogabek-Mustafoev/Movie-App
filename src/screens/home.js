import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {Loader} from "../components/loader";
import {Image, ScrollView, Text, View} from "react-native";
import {PopularMovies} from "../components/popular-movies";
import {SafeAreaView} from "react-native-safe-area-context";
import {TrendingMovies} from "../components/trending-movies";
import {UpcomingMovies} from "../components/upcoming-movies";
import {TopRatedMovies} from "../components/top-rated-movies";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";

export default function Home({navigation}) {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    setTrendingMovies(data?.results);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    setUpcomingMovies(data?.results);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    setTopRatedMovies(data?.results);
    setLoading(false);
  };
  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();
    setPopularMovies(data?.results);
  };

  useEffect(() => {
    getPopularMovies();
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView className="py-2">
        <StatusBar style="light"/>
        <View className="flex-row justify-between items-center mx-5">
          <View className="flex-row items-center">
            <Text className="text-white text-3xl font-bold">M</Text>
            <Image
              className="w-7 h-7"
              source={require("../../assets/logo.png")}
              alt="logo"
            />
            <Text className="text-white text-3xl font-bold">VIE</Text>
          </View>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white"/>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loader/>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        >
          {topRatedMovies?.length > 0 && (
            <TopRatedMovies data={topRatedMovies}/>
          )}
          {upcomingMovies?.length > 0 && (
            <UpcomingMovies data={upcomingMovies} title="Upcoming movies"/>
          )}
          {trendingMovies?.length > 0 && (
            <TrendingMovies data={trendingMovies}/>
          )}
          {popularMovies?.length > 0 && <PopularMovies data={popularMovies}/>}
        </ScrollView>
      )}
    </View>
  );
}
