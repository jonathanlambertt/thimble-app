import { SearchBar } from "react-native-elements";

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
      inputContainerStyle={{ backgroundColor: "#e9e9e9" }}
      inputStyle={{ color: "#000" }}
      containerStyle={{
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        borderTopWidth: 0,
      }}
    />
  );
};

export default Search;
