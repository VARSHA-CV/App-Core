// screens/ProfileScreen.js
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://ik.imagekit.io/rrvxomyh1d/girl.jpeg",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>sonu</Text>
        <Text style={styles.email}>sonu@example.com</Text>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Options */}
      <View style={styles.menuSection}>
        <MenuItem icon="heart" title="Favorite Songs" onPress={() => Alert.alert("Favorites")} />
        <MenuItem icon="settings" title="Settings" onPress={() => Alert.alert("Settings")}/>
        <MenuItem icon="lock" title="Privacy" onPress={() => Alert.alert("Privacy")} />
        <MenuItem icon="help-circle" title="Help & Support" onPress={() => Alert.alert("Help & Support")} />

        {/* Feedback Navigation */}
        <MenuItem
          icon="message-circle"
          title="Feedback"
          onPress={() => navigation.navigate("Feedback")}
        />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={() => Alert.alert("Logout", "Logging out...")}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

function MenuItem({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Feather name={icon} size={22} color="#fff" />
      <Text style={styles.menuTitle}>{title}</Text>
      <Ionicons name="chevron-forward" size={22} color="#888" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20 },

  profileSection: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },

  email: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 15,
  },

  editBtn: {
    backgroundColor: "#1db954",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  editText: { color: "#fff", fontWeight: "600" },

  menuSection: {
    marginTop: 10,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  menuTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
  },

  logoutBtn: {
    backgroundColor: "#ff4444",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 40,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
});
