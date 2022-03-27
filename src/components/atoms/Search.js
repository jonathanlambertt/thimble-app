import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ query, setQuery }) => {
  return (
    <SearchBar
      value={query}
      onChangeText={(newQuery) => {
        setQuery(newQuery);
      }}
      placeholder="Search"
      lightTheme={true}
      selectionColor="#ff878a"
      round
      autoCapitalize="none"
      autoCorrect={false}
      inputContainerStyle={{ backgroundColor: "#e9e9e9" }}
      inputStyle={{ color: "#000" }}
      containerStyle={{
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        borderTopWidth: 0,
      }}
      searchIcon={<Ionicons name="search" size={20} color="grey" />}
    />
  );
};

export default Search;
