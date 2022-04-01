import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import thimble from "../../api/thimble";

const AddFriendButton = ({ userID }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const sendFriendRequest = async () => {
    try {
      setIsDisabled(true);
      await thimble.post("n/send", {
        recipient_uuid: userID,
        notification_type: 1,
        text: "",
      });
      setRequestSent(true);
    } catch (error) {
      setIsDisabled(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => sendFriendRequest()}
      style={styles.button}
      disabled={isDisabled}
    >
      {requestSent ? (
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Sent <FontAwesome name="check" size={15} />
        </Text>
      ) : (
        <Feather name="user-plus" size={23} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff878a",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default AddFriendButton;
