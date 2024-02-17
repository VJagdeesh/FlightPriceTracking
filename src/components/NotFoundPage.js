import { Image, View } from "react-native";
const src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToI63sRby8EDr5aAE58P7CX14Y4mScCIs_0w&usqp=CAU";
export default function NotFoundPage() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: src }} style={{ height: 450, width: 300 }} />
      {/* <img src={src} alt="Some plain img" height={120} width={120} /> */}
    </View>
  );
}
