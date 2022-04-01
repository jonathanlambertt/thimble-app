import { View, Text, StyleSheet } from "react-native";
import ProfilePhoto from "./ProfilePhoto";

const UserInfo = ({ profilePhotoUrl, username, fullName }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ProfilePhoto url={profilePhotoUrl} />
      <View style={{ marginLeft: 14 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>{username}</Text>
        {fullName ? <Text style={styles.fullName}>{fullName}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullName: {
    marginTop: 1,
    color: "#9f9f9f",
    fontSize: 15,
  },
});

export default UserInfo;
