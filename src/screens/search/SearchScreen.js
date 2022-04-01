import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Search from "../../components/atoms/Search";
import thimble from "../../api/thimble";
import SearchResult from "../../components/molecules/SearchResult";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showNoResultsText, setShowNoResultsText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await thimble.get(`u/search/${query.trim()}`);
      showResults(response.data);
    } catch (error) {}
  };

  const showResults = (results) => {
    setIsLoading(false);
    if (results.length != 0) {
      setResults(results);
    } else {
      setResults([]);
      setShowNoResultsText(true);
    }
  };

  useEffect(() => {
    if (!query || query.trim() == "") {
      setResults([]);
      setShowNoResultsText(false);
    } else {
      const delayDebounceFn = setTimeout(() => {
        search();
      }, 250);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [query]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Search query={query} setQuery={setQuery} />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#9f9f9f"
          style={{ marginTop: 10 }}
        />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(result) => result.profile.uuid}
          renderItem={({ item }) => {
            return <SearchResult result={item} />;
          }}
          ListEmptyComponent={
            <>
              {showNoResultsText ? (
                <Text style={styles.noResults}>No results found.</Text>
              ) : null}
            </>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noResults: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    marginTop: 10,
  },
});

export default SearchScreen;
