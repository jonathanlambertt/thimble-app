import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  RefreshControl,
} from "react-native";
import thimble from "../../api/thimble";
import Post from "../../components/molecules/Post";

const FeedScreen = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchFeed = async () => {
    try {
      const response = await thimble.get("u/feed");
      setIsLoading(false);
      setRefreshing(false);
      setResults(response.data);
    } catch (error) {}
  };

  const fetchMorePosts = async () => {
    try {
      const response = await thimble.get(
        `u/feed/${results[results.length - 1].post.uuid}`
      );
      setResults([...results, ...response.data]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFeed();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#9f9f9f"
          style={{ marginTop: 10 }}
        />
      ) : (
        <FlatList
          contentContainerStyle={{ paddingTop: 8 }}
          showsVerticalScrollIndicator={false}
          data={results}
          onEndReachedThreshold={2}
          onEndReached={fetchMorePosts}
          keyExtractor={(result) => result.post.uuid}
          renderItem={({ item }) => {
            return <Post post={item} />;
          }}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "500",
                marginHorizontal: 10,
                lineHeight: 25,
                marginTop: 25,
              }}
            >
              Posts from the groups you're in will be shown here.
            </Text>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default FeedScreen;
