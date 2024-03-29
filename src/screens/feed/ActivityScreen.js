import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  RefreshControl,
} from "react-native";
import thimble from "../../api/thimble";
import Activity from "../../components/organisms/Activity";

const ActivityScreen = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchActivity = async () => {
    try {
      const response = await thimble.get("n/inbox");
      setIsLoading(false);
      setResults(response.data);
    } catch (error) {}
  };

  const refreshActivity = async () => {
    try {
      const response = await thimble.get("n/inbox");
      setRefreshing(false);
      setResults(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshActivity();
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
          keyExtractor={(result) => result.uuid}
          renderItem={({ item }) => {
            return (
              <Activity
                result={item}
                results={results}
                setResults={setResults}
              />
            );
          }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No recent activity.</Text>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default ActivityScreen;
