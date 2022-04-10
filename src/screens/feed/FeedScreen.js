import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, FlatList, Text } from "react-native";
import thimble from "../../api/thimble";
import Post from "../../components/molecules/Post";

const FeedScreen = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeed = async () => {
    try {
      const response = await thimble.get("u/feed");
      setIsLoading(false);
      setResults(response.data);
    } catch (error) {}
  };

  useEffect(() => {
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
          data={results}
          keyExtractor={(result) => result.post.uuid}
          renderItem={({ item }) => {
            return <Post post={item} />;
          }}
          ListEmptyComponent={<Text>No recent activity.</Text>}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
        />
      )}
    </View>
  );
};

export default FeedScreen;
