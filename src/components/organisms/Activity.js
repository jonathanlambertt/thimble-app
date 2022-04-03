import { View, StyleSheet } from "react-native";
import UserInfo from "../molecules/UserInfo";
import FriendRequest from "../atoms/FriendRequest";

const Activity = ({ result, results, setResults }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15, marginTop: 12 }}>
        <UserInfo
          profilePhotoUrl={result.sender.profile_picture}
          username={result.sender.user}
          fullName={result.sender.full_name}
        />
        {result.notification_type == 1 ? (
          <FriendRequest
            timestamp={result.timestamp}
            requestID={result.uuid}
            results={results}
            setResults={setResults}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ececec",
  },
});

export default Activity;
