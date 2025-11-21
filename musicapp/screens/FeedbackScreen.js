// screens/FeedbackScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

export default function FeedbackScreen({ navigation }) {
  const [rating, setRating] = useState("");
  const [experience, setExperience] = useState("");
  const [comments, setComments] = useState("");

  const submitFeedback = async () => {
    if (!rating || !experience || !comments) {
      Alert.alert("Error", "Please enter all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://telemetry-api-iota.vercel.app/api/feedback",
        {
          rating: Number(rating),
          experience: experience,
          tmfcid: "TMFC014AC",
          comments: comments,
        }
      );

      console.log("Success Response:", response.data);
      Alert.alert("Success", "Feedback submitted successfully!");

      setRating("");
      setExperience("");
      setComments("");

      navigation.goBack();
    } catch (error) {
      if (error.response) {
        console.log("Response Error:", error.response.data);
        Alert.alert(
          "API Error",
          error.response.data.message || "Server returned an error"
        );
      } else if (error.request) {
        console.log("Request Error:", error.request);
        Alert.alert("Network Error", "No response from server");
      } else {
        console.log("Error:", error.message);
        Alert.alert("Error", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Send Feedback</Text>

      <TextInput
        placeholder="Rating (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      <TextInput
        placeholder="Experience (Good / Bad / Satisfied)"
        value={experience}
        onChangeText={setExperience}
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      <TextInput
        placeholder="Comments"
        value={comments}
        onChangeText={setComments}
        style={[styles.input, { height: 120 }]}
        placeholderTextColor="#aaa"
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={submitFeedback}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  button: {
    backgroundColor: "#1db954",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 18,
  },
});
