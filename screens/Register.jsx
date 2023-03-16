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
import axios from 'axios'
import Alert from "../components/Alert";
const baseUrl = 'http://192.168.56.1:5000/api'

const Register = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [formData, setFormData] = useState({
        companyName: '',
        phoneNumber: '',
        companyNumber: '',
        companyAddress: '',
        longitude: '',
        latitude: ''
    })
    const { companyName, phoneNumber, companyNumber, companyAddress, longitude, latitude } = formData
    const onChange = (field, text) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: text,
        }))
    }

    const handleRegister = async (formData) => {
        if (!companyName || !phoneNumber || !companyNumber || !companyAddress || !longitude || !latitude) {
            setError('Please fill all fields');
            setTimeout(() => {
                setError(null)
            }, 2000)
        } else {
                const options = {
                    method: 'POST',
                    url: `${baseUrl}/companies/create`,
                    headers: {
                      'Access-Control-Allow-Origin':'*',
                      'Accept': 'application/json',
                      'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: {
                        companyName: formData.companyName,
                        phoneNumber : formData.phoneNumber,
                        companyNumber: formData.companyNumber,
                        companyAddress : formData.companyAddress,
                        longitude : formData.longitude,
                        latitude : formData.latitude
                    },
                  }
                  axios
                    .request(options)
                    .then(function (response) {
                        setSuccess(response.data.message)
                    })
                    .catch(function (error) {
                      console.error(error)
                    }
                    )
            }
    };



    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={{ width: 300, height: 200, marginBottom: 10 }}
                    source={require("../images/logo.gif")}
                />
            </View>
            <View style={styles.wrapper}>
                {error && (
                    <Alert color="white" msg={error} bgc="rgba(255, 0, 0, 0.4)" />
                )}
                {success && (
                    <Alert color="white" msg={success} bgc="green" />
                )}
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChange("companyName", text)}
                    value={companyName}
                    placeholder="Your companyName"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChange("phoneNumber", text)}
                    value={phoneNumber}
                    placeholder="phoneNumber"
                />
                <TextInput
                    style={styles.input}
                    placeholder="companyNumber"
                    onChangeText={(text) => onChange("companyNumber", text)}
                    value={companyNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder="companyAddress"
                    onChangeText={(text) => onChange("companyAddress", text)}
                    value={companyAddress}
                />
                <TextInput
                    style={styles.input}
                    placeholder="longitude"
                    onChangeText={(text) => onChange("longitude", text)}
                    value={longitude}
                />
                <TextInput
                    style={styles.input}
                    placeholder="latitude"
                    onChangeText={(text) => onChange("latitude", text)}
                    value={latitude}
                />
                {loading ? (
                    <ActivityIndicator size="large" color="#1E90FF" />
                ) : (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={()=>handleRegister(formData)}>
                            Create
                        </Text>
                    </TouchableOpacity>
                )}
                <View>
                    <TouchableOpacity>
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate("Map")}
                        >
                            Go to Map
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
    wrapper: {
        width: "80%",
        alignItems: "center",
    },
    input: {
        marginVertical: 12,
        width: "100%",
        padding: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        fontSize: 10,
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
    links: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5px'
    }
});

export default Register;