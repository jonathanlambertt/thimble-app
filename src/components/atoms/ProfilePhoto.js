import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const ProfilePhoto = ({ url }) => {
  return (
    <>
      {url ? (
        <Avatar
          containerStyle={styles.container}
          rounded
          icon={{ name: "user", type: "feather", color: "#333" }}
          size={55}
          source={{
            uri: url,
          }}
        />
      ) : (
        <Avatar
          containerStyle={styles.container}
          rounded
          icon={{ name: "user", type: "feather", color: "#333" }}
          size={55}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
  },
});

export default ProfilePhoto;
