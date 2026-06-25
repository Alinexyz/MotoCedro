import React from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

export default function CadastroScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
    <TouchableOpacity
    style={styles.backButton}
    onPress={() => router.back()}
    >
    <Ionicons name="arrow-back" size={28} color="#D8B11E" />
    </TouchableOpacity>

      <Text style={styles.title}>Tela de Cadastro</Text>
      <Text style={styles.subtitle}>
        Preencha seus dados para criar sua conta
      </Text>

      <View style={styles.formContainer}>
        {/* Nome */}
        <Text style={styles.label}>Nome completo</Text>
        <View style={styles.inputContainer}>
          <Feather name="user" size={18} color="#777" />
          <TextInput
            placeholder="Digite o seu nome"
            style={styles.input}
          />
        </View>

        {/* Data */}
        <Text style={styles.label}>Data de Nascimento</Text>
        <View style={styles.inputContainer}>
          <Feather name="calendar" size={18} color="#777" />
          <TextInput
            placeholder="dd/mm/aaaa"
            style={styles.input}
          />
          <Feather name="calendar" size={18} color="#777" />
        </View>

        {/* CPF */}
        <Text style={styles.label}>CPF</Text>
        <View style={styles.inputContainer}>
          <Feather name="user" size={18} color="#777" />
          <TextInput
            placeholder="000.000.000-00"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="mail" size={18} color="#777" />
          <TextInput
            placeholder="seuemail@gmail.com"
            style={styles.input}
          />
        </View>

        {/* Telefone */}
        <Text style={styles.label}>Telefone</Text>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 18 }}>🇧🇷</Text>
          <Text style={styles.ddi}>+55</Text>

          <TextInput
            placeholder="(00) 0000-0000"
            style={styles.input}
          />
        </View>

        {/* Senha */}
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={18} color="#777" />

          <TextInput
            placeholder="seuemail@gmail.com"
            secureTextEntry
            style={styles.input}
          />

          <Feather name="eye-off" size={18} color="#777" />
        </View>

        {/* Confirmar Senha */}
        <Text style={styles.label}>Confirmar senha</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={18} color="#777" />

          <TextInput
            placeholder="seuemail@gmail.com"
            secureTextEntry
            style={styles.input}
          />

          <Feather name="eye-off" size={18} color="#777" />
        </View>
      </View>

        <View style={styles.checkboxContainer}>
    <View style={styles.checkbox} />

    <Text style={styles.termsText}>
        Aceito os{" "}
        <Text style={styles.link}>
        termos e condições
        </Text>{" "}
        do aplicativo.
    </Text>
    </View>

    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Próximo</Text>
    </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCF1",
    paddingHorizontal: 18,
  },

  backButton: {
    marginTop: 40,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    color: "#222",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#555",
    marginTop: 5,
    marginBottom: 20,
  },

  formContainer: {
  padding: 8,
  },

  label: {
    fontSize: 12,
    color: "#333",
    marginBottom: 3,
    marginTop: 6,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D8B11E",
    borderRadius: 8,
    height: 42,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  ddi: {
    marginLeft: 6,
    marginRight: 8,
    color: "#555",
  },

  button: {
    backgroundColor: "#D8B11E",
    height: 42,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginHorizontal: 10,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 5,
  },

  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 8,
  },

  termsText: {
    fontSize: 12,
    color: "#444",
  },

  link: {
    color: "#D8B11E",
    textDecorationLine: "underline",
  },
});