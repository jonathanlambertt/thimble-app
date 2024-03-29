import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Share,
} from "react-native";
import ProfilePhoto from "../atoms/ProfilePhoto";
import { Entypo, Feather } from "@expo/vector-icons";
import { LinkPreview } from "@flyerhq/react-native-link-preview";
import Constants from "expo-constants";

const Post = ({ post }) => {
  const [reactionCount, setReactionCount] = useState(
    post.reactions.total_reactions
  );
  const [recentReactions, setRecentReactions] = useState(
    post.reactions.newest_three
  );

  const onShare = async () => {
    try {
      await Share.share({
        url: Constants.manifest.extra.shareURL + `${post.post.uuid}`,
      });
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.headerContainer}>
        <ProfilePhoto url={post.post.owner.profile_picture} size={42} />
        <View style={styles.headerTextContainer}>
          <View>
            <Text style={{ flex: 1, flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                {post.post.owner.user}
              </Text>
              <Text style={{ fontWeight: "300", fontSize: 15 }}> in </Text>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                {post.post.group.name}{" "}
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 1 }}>
            {post.post.timestamp.length > 3 ? (
              <Text style={styles.timestamp}>{post.post.timestamp}</Text>
            ) : (
              <Text style={styles.timestamp}>{post.post.timestamp} ago </Text>
            )}
          </View>
        </View>
        {/* Options Icon */}
        {/* <TouchableOpacity style={{ alignSelf: "center" }}>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="black"
            containerStyle={{ justifyContent: "flex-end", flex: 1 }}
            style={{
              marginRight: 15,
            }}
          />
        </TouchableOpacity> */}
      </View>
      {/* Post Content */}
      {post.post.post_type === 0 ? (
        <Text style={styles.text}>{post.post.text}</Text>
      ) : post.post.post_type === 1 ? (
        <LinkPreview text={post.post.link} containerStyle={styles.link} />
      ) : post.post.post_type === 2 ? (
        <View style={{ marginTop: 10, marginBottom: 8 }}>
          <Image style={styles.image} source={{ uri: post.post.photo }} />
        </View>
      ) : null}
      {/* Post Actions */}
      <View style={styles.postActionsContainer}>
        <TouchableOpacity style={styles.action}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Entypo name="emoji-happy" size={18} color="black" />
            {reactionCount > 0 ? (
              <Text style={styles.reactionCount}>{reactionCount}</Text>
            ) : null}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={onShare}>
          <Feather name="share" size={18} color="black" />
        </TouchableOpacity>
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
  headerContainer: {
    marginLeft: 15,
    marginTop: 12,
    flex: 1,
    flexDirection: "row",
  },
  headerTextContainer: {
    marginLeft: 12,
    alignSelf: "center",
    flexShrink: 1,
    flex: 1,
  },
  timestamp: {
    fontWeight: "400",
    fontSize: 13,
    color: "#a2a2a2",
  },
  text: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 5,
  },
  image: {
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
  },
  link: {
    backgroundColor: "#f2f2f2",
    marginTop: 10,
    marginBottom: 8,
  },
  postActionsContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 15,
    marginBottom: 12,
  },
  action: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingHorizontal: 7,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 5,
  },
  reactionCount: {
    marginLeft: 5,
    fontWeight: "500",
    alignSelf: "center",
  },
});

export default Post;
