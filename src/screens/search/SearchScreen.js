import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import Search from "../../components/atoms/Search";
import thimble from "../../api/thimble";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    try {
      const response = await thimble.get(`u/search/${query.trim()}`);
      setResults(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query && query.trim() != "") {
        search();
      } else {
      }
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Search query={query} setQuery={setQuery} />
      <FlatList
        data={results}
        keyExtractor={(result) => result.profile.uuid}
        renderItem={({ item }) => {
          return <Text>{item.profile.user}</Text>;
        }}
        ListEmptyComponent={<Text>No results found.</Text>}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
