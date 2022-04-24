import { View, Text, StyleSheet } from "react-native";
import ProfilePhoto from "../atoms/ProfilePhoto";
import { Entypo } from "@expo/vector-icons";

const Group = ({ group }) => {
  return (
    <View style={styles.container}>
      <ProfilePhoto url={group.group.banner} size={55} />
      <View style={{ flex: 1, alignSelf: "center" }}>
        <Text style={styles.name}>{group.group.name}</Text>
        <Text style={{ marginLeft: 14, color: "#9f9f9f" }}>
          {group.group.members}{" "}
          {group.group.members == 1 ? (
            <Text>member</Text>
          ) : (
            <Text>members</Text>
          )}{" "}
          · {group.group.posts}{" "}
          {group.group.posts == 1 ? <Text>post</Text> : <Text>posts</Text>}
        </Text>
      </View>
      <Entypo
        style={{ alignSelf: "center", marginRight: 15 }}
        name="chevron-right"
        size={22}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 15,
    paddingTop: 10,
  },
  name: {
    marginLeft: 14,
    fontSize: 17,
    marginBottom: 2,
    fontWeight: "500",
  },
});

export default Group;
