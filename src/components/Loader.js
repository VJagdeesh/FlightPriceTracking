import { Image, View } from "react-native";
const src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAZlBMVEX09PT7+/v4+Pi8vMC0tbn///9oanXp6ephYm/c3N5XWWfe3uD9/PyQkZmbnKPGx8rv7++HiJFyc35SVGNcXmufoKbPz9JrbXhMTl6pqrCLjJXW1tjCwsZ6e4XJys18fYdBQ1Wur7RYbOWGAAADTUlEQVR4nO3YiXKjRhCAYaY5hvs+BRLm/V9yB9Bl71aiVCWRLf1fqSyBsIpueoYeLAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAlWyefRZPJUuapk30zkmQtGnbNgszddslSql3Kg1JszVeCdtrzEOyGqL4mef1v9LeHmt/Hg7q4Iyr6Vjm71IK6hisoYru9205lVthSDxW9puUgrSF2t/9fUpQdrd/EDkcrfcohTjMt3e1FO42HbpZqdQ2LbptePqShH2+fMJp/qdie9hjiot0SJNiLsuPyq993/e8rjN/PvP9eRhNHp581v8qGfyPc0CqXsYg0rm1lYGK1Z/pKakOkfrrn/1O9tM+f5a9lm97tv5ARdejH+sKRMVtOeufkgVZa7reZz1VtyLDusP3w0vcysyED8Qt19d2E1F5Flb2j0nC3WpArtu3y62S7FMKzEjfekSR3LwsyXPJteSB5KNltdo6mTupRHU5aLccfkoS/lYVKNnvDCbgvK6irsqKcBjqearDoOqjvh770innJC18ZzaTh+q06+aO740vMjNK7jdjtX5SYx/o4zLV7eBFxSGol6zOmkM2L1k/ml1zEoTOFJoDi6IIu0X08fsWwl3135f/12Fx4SZrCkSlXm66Re9Ulc6xTJquy0xR9L2u+sCURhoOdm+yUK6TQhCtIybvvm0OtG1sQUpmRm9k35v2LyYzJ+r9cBn9tTMOasc1G9Eoev0nM+2Z/tmSPYOuG52yYG2P9jvK+iNKh8G3HQt6cRznHKoZscG6ebN/YZvTP+dAdW0QnMras/V5ybwVTzTfLnI8hcWw3LWMJmc6/cYpeGws3MUTmJVyE7l6KetiafXWQcRRpa8H6LJQrnFpkkSfGr+cXqlXXBcJ2+VXEtnpbNpkzysrfYnQdcLU6+6bZX9uTtYrZeATkb0K9DUFZuJLxG3aWyGpl1w1fWXuDpcUxFM1mkYybV8+6M9uKRBrTtaLrpo3y8EtBXH7MU/TqR2j+VU6wgddUrA+RtKTs6zPFF5nZfAQVYzbTVCm3o4vs+B7VYFpF/x65Tdv81j5d5enLO+bAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4x34Bf5AkrtPsbeEAAAAASUVORK5CYII=";
export default function Loader() {
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
