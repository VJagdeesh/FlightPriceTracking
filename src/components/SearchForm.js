import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const onSearchPress = () => {
    console.log("Button Pressed");
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search for best & affordable flights here
      </Text>
      <TextInput
        placeholder="From"
        value={from}
        onChangeText={(newText) => setFrom(newText)}
        style={styles.input}
      />
      <TextInput
        placeholder="To"
        value={to}
        onChangeText={(newText) => setTo(newText)}
        style={styles.input}
      />
      <Button title="search" onPress={onSearchPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    // Shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    marginVertical: 6,
    padding: 10,
    borderRadius: 5,
  },
});
