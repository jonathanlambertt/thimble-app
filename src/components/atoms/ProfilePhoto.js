import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const ProfilePhoto = ({ url, size }) => {
  return (
    <>
      {url ? (
        <Avatar
          containerStyle={styles.container}
          rounded
          icon={{ name: "user", type: "feather", color: "#333" }}
          size={size}
          source={{
            uri: url,
          }}
        />
      ) : (
        <Avatar
          containerStyle={styles.container}
          rounded
          icon={{ name: "user", type: "feather", color: "#333" }}
          size={size}
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
