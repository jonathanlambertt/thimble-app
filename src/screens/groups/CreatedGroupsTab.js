import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import thimble from "../../api/thimble";
import Group from "../../components/molecules/Group";

const CreatedGroupsTab = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  const fetchGroups = async () => {
    try {
      const response = await thimble.get("g/created");
      setResults(response.data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#9f9f9f"
          style={{ marginTop: 10 }}
        />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(result) => result.group.uuid}
          renderItem={({ item }) => {
            return <Group group={item} />;
          }}
        />
      )}
    </View>
  );
};

export default CreatedGroupsTab;
