import { Button, Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const onSearchPress = () => {
    console.log("Button Pressed");
  };

  const handleDepartDatePickerChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDepartDatePicker(false);
    setDepartDate(currentDate);
  };

  const handleReturnDatePickerChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowReturnDatePicker(false);
    setReturnDate(currentDate);
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
      {/* <DateTimePicker
        value={departDate}
        onChange={(event, date) => setDepartDate(date || new Date())}
      />
      <DateTimePicker
        value={returnDate}
        onChange={(event, date) => setReturnDate(date || new Date())}
      /> */}
      <Text>Depart Date:</Text>
      <Pressable style={styles.rectangularBox}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Fontisto name="date" size={24} color="black" />
          <Text
            // title="Select Depart Date"
            // value={departDate || new Date()}
            onPress={() => setShowDepartDatePicker(true)}
            style={{ color: "black", padding: 4 }}
          >
            {departDate.toDateString()}
          </Text>
        </View>
      </Pressable>
      {showDepartDatePicker && (
        <DateTimePicker
          value={departDate}
          onChange={handleDepartDatePickerChange}
          minimumDate={new Date()}
        />
      )}
      <Text>Return Date:</Text>
      <Pressable style={styles.rectangularBox}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Fontisto name="date" size={24} color="black" />
          <Text
            // value={returnDate || new Date()}
            // title="Select Return Date"
            style={{ color: "black", padding: 4, marginBottom: 5 }}
            onPress={() => setShowReturnDatePicker(true)}
          >
            {returnDate.toDateString()}
          </Text>
        </View>
      </Pressable>
      {showReturnDatePicker && (
        <DateTimePicker
          value={returnDate}
          onChange={handleReturnDatePickerChange}
          minimumDate={departDate}
        />
      )}
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
  rectangularBox: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});
