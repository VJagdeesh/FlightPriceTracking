import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import SearchForm from "./src/components/SearchForm";
import { LinearGradient } from "expo-linear-gradient";
import dummydata from "./data.json";
import FlightOptionItem from "./src/components/FlightOptionItem";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const onSearch = (data) => {
    console.log("Data: ", data);
    setItems(dummydata);
  };
  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
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
