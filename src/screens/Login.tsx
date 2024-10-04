import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useUser from "../states/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { setUser } = useUser();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha corratemente os campos!");
      return;
    }

    const token = generateToken();

    setUser({ email, token });
  };

  const generateToken = (length = 16) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }

    return token;
  };

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Login Page</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Usuário" value={email} onChangeText={(val) => setEmail(val)} placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={(val) => setPassword(val)} secureTextEntry placeholderTextColor="#fff" />
        <Text style={styles.error}>{error || ""}</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: "#4a90e2",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#7d7d7d",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    color: "white",
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
