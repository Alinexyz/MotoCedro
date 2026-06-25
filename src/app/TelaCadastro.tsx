import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function TelaCadastro() {

  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [aceitou, setAceitou] = useState(false);

  const router = useRouter();

  function voltar() {
    router.back();
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>
        Cadastre-se
      </Text>

      <Text style={styles.label}>Email</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#777"
        style={styles.input}
      />

      <Text style={styles.label}>Telefone</Text>

      <View style={styles.telefoneContainer}>
        <Text style={styles.codigo}>
          🇧🇷 +55 |
        </Text>

        <TextInput
          placeholder="(00) 0000-0000"
          placeholderTextColor="#777"
          style={styles.telefoneInput}
          keyboardType="phone-pad"
        />
      </View>

      <Text style={styles.label}>
        Senha
      </Text>

      <View style={styles.senhaContainer}>

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#777"
          secureTextEntry={!senhaVisivel}
          style={styles.senhaInput}
        />

        <TouchableOpacity
          onPress={() =>
            setSenhaVisivel(!senhaVisivel)
          }
        >
          <Text style={styles.olho}>
            {senhaVisivel ? "🙈" : "👁"}
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAceitou(!aceitou)}
      >

        <View style={styles.checkbox}>
          {aceitou && <Text>✓</Text>}
        </View>

        <Text style={styles.termos}>
          Aceito os{" "}
          <Text style={styles.link}>
            termos e condições
          </Text>
          {" "}do aplicativo.
        </Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={voltar} style={styles.botao}>
        <Text style={styles.textoBotao}>
          Cadastrar-se
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F3F0DF",
    padding: 25,
    paddingTop: 60,
  },

  back: {
    fontSize: 35,
    color: "#D4AF1E",
    marginBottom: 20
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#D4AF1E",
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 15,
    marginBottom: 15
  },

  telefoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#D4AF1E",
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 10,
    marginBottom: 15
  },

  codigo: {
    fontSize: 18
  },

  telefoneInput: {
    flex: 1,
    fontSize: 18
  },

  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#D4AF1E",
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 15
  },

  senhaInput: {
    flex: 1
  },

  olho: {
    fontSize: 22
  },

  checkboxContainer: {
    flexDirection: "row",
    marginTop: 70,
    alignItems: "center"
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  termos: {
    flex: 1
  },

  link: {
    color: "#D4AF1E",
    textDecorationLine: "underline"
  },

  botao: {
    backgroundColor: "#D4AF1E",
    height: 55,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  textoBotao: {
    fontWeight: "bold",
    fontSize: 20
  }

});