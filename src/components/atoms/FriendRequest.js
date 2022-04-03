import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import thimble from "../../api/thimble";

const FriendRequest = ({ timestamp, requestID, results, setResults }) => {
  const [acceptIsDisabled, setAcceptIsDisabled] = useState(false);
  const [deleteIsDisabled, setDeleteIsDisabled] = useState(false);

  const handleFriendRequest = async (accept) => {
    const url = `n/friend-request/${requestID}`;
    try {
      if (accept) {
        setAcceptIsDisabled(true);
        await thimble.put(url);
        setResults(results.filter((item) => item.uuid !== requestID));
      } else {
        setDeleteIsDisabled(true);
        await thimble.delete(url);
        setResults(results.filter((item) => item.uuid !== requestID));
      }
    } catch (error) {}
  };

  return (
    <View>
      <Text style={styles.text}>
        sent you a friend request{" "}
        <Text style={{ color: "#a2a2a2" }}>· {timestamp}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => handleFriendRequest(true)}
          buttonStyle={styles.acceptButton}
          titleStyle={styles.buttonTitle}
          title="Accept"
          disabled={acceptIsDisabled}
        />
        <Button
          onPress={() => handleFriendRequest(false)}
          buttonStyle={{ backgroundColor: "#ff878a", paddingVertical: 5 }}
          titleStyle={styles.buttonTitle}
          title="Delete"
          disabled={deleteIsDisabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 5,
  },
  acceptButton: {
    backgroundColor: "#a6a3ff",
    paddingVertical: 5,
    marginRight: 10,
  },
  buttonTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default FriendRequest;
