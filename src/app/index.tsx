import React from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Botão voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#D6AC16" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>
        Digite o seu número{"\n"}de telefone
      </Text>

      <Text style={styles.subtitle}>
        Enviaremos um código por SMS
      </Text>

      {/* Campo telefone */}
      <View style={styles.phoneContainer}>
        <Text style={styles.flag}>🇧🇷</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.ddi}>+55 | 88</Text>
        </View>

        <TextInput
          placeholder="98833-1826"
          keyboardType="phone-pad"
          style={styles.input}
          placeholderTextColor="#8A8A8A"
        />
      </View>

      {/* Botão principal */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push("/cadastro")}
      >
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>

      {/* Separador */}
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.line} />
      </View>

      {/* Google */}
      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={24} color="#6e6d72" />
        <Text style={styles.googleText}>
          Continuar com o google
        </Text>
      </TouchableOpacity>

      {/* Termos */}
      <Text style={styles.terms}>
        Ao continuar você concorda com os{"\n"}
        termos de política e privacidade
      </Text>

      {/* Cadastro */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Ainda não tem uma conta?
        </Text>

        <TouchableOpacity>
          <Text style={styles.signupLink}>Crie uma!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCF1",
    paddingHorizontal: 32,
    paddingTop: 45,
  },

  backButton: {
    marginBottom: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: "500",
    color: "#000",
    lineHeight: 34,
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 35,
  },

phoneContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1.5,
  borderColor: "#D6AC16",
  borderRadius: 10,
  height: 52,
  paddingHorizontal: 14,
},

ddi: {
  fontSize: 16,
  color: "#000",
  marginRight: 10,
  textAlignVertical: "center",
},

  flag: {
    fontSize: 22,
    marginRight: 8,
  },

  ddi: {
    fontSize: 16,
    color: "#000",
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  continueButton: {
    backgroundColor: "#D6AC16",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
  },

  continueText: {
    fontSize: 24,
    color: "#000",
    fontFamily: "serif",
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    marginBottom: 35,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#AFAFAF",
  },

  orText: {
    marginHorizontal: 25,
    color: "#777",
    fontSize: 16,
  },

  googleButton: {
    height: 54,
    borderWidth: 1.5,
    borderColor: "#D6AC16",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  googleText: {
    fontSize: 16,
    color: "#000",
  },

  terms: {
    textAlign: "center",
    marginTop: 30,
    color: "#8A8A8A",
    fontSize: 13,
  },

  signupContainer: {
    marginTop: 40,
    alignItems: "center",
  },

  signupText: {
    fontSize: 16,
    color: "#222",
  },

  signupLink: {
    color: "#D6AC16",
    fontSize: 18,
    marginTop: 4,
  },
});