import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import Alert from "../components/Alert";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData
  const onChange = (field, text) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: text,
    }))
  }
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill al fields');
      setTimeout(() => {
        setError(null)
      }, 2000)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 300, height: 300, marginBottom: 20 }}
          source={require("../images/logo.gif")} />
      </View>
      <View style={styles.wrapper}>
        {error && (
          <Alert color="white" msg={error} bgc="rgba(255, 0, 0, 0.4)" />
        )}
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChange("email", text)}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => onChange("password", text)}
          value={password}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#1E90FF" />
        ) : (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleLogin}>
              Login
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>I don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    marginVertical: 12,
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    fontSize: 16,
    shadowColor: "#000",
  },
  link: {
    color: "#1E90FF",
    fontWeight: "bold",
    marginLeft: 5,
  },
  button: {
    marginTop: 24,
    width: "100%",
    padding: 14,
    backgroundColor: "#1E90FF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
