import { View, StyleSheet, Text } from "react-native";
import UserInfo from "../molecules/UserInfo";
import AddFriendButton from "../atoms/AddFriendButton";

const SearchResult = ({ result }) => {
  return (
    <View style={styles.container}>
      <UserInfo
        profilePhotoUrl={result.profile.profile_picture}
        username={result.profile.user}
        fullName={result.profile.full_name}
      />
      <View style={styles.endContainer}>
        {result.are_friends ? null : result.pending_friend_request ? (
          <Text style={styles.pending}>Pending</Text>
        ) : (
          <View style={{ alignSelf: "flex-end" }}>
            <AddFriendButton userID={result.profile.uuid} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
  },
  endContainer: {
    flex: 1,
    alignSelf: "center",
    marginRight: 20,
  },
  pending: {
    alignSelf: "flex-end",
    color: "#ff878a",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default SearchResult;
