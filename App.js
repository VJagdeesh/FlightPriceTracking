import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import SearchForm from "./src/components/SearchForm";
import { LinearGradient } from "expo-linear-gradient";
import dummydata from "./data.json";
import FlightOptionItem from "./src/components/FlightOptionItem";
import { useEffect, useState } from "react";
import { searchFlights } from "./src/services/api";
import Loader from "./src/components/Loader";
import NotFoundPage from "./src/components/NotFoundPage";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSearch = async (data) => {
    setItems([]);
    setLoading(true);
    const response = await searchFlights(data);
    console.log("Data: ", data);
    setItems(response.data);
    setLoading(false);
  };

  // useEffect(() => {}, [onSearch]);
  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      {!loading && (
        <SafeAreaView>
          <SearchForm onSearch={onSearch} />
          {/* {data.map((d) => (
          <FlightOptionItem flight={d} />
        ))} */}
          <FlatList
            data={items}
            renderItem={({ item }) => <FlightOptionItem flight={item} />}
          />
        </SafeAreaView>
      )}
      {loading && (
        <View>
          <ActivityIndicator />
          <Text>Searching for best prices...</Text>
        </View>
      )}
      {loading && <Loader />}
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
  },
});
