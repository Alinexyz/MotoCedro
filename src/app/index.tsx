import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

    function IrTelacadastro() {
      router.push('/TelaCadastro');
    }

  return (

    //testando push e pull do repositório


    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.back}>←</Text>

        <Text style={styles.title}>
          Digite o seu número de telefone
        </Text>

        <Text style={styles.subtitle}>
          Enviaremos um código por SMS
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.flag}>🇧🇷</Text>

          <Text style={styles.code}>+55</Text>

          <TextInput
            placeholder="88 98833-1826"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity onPress={IrTelacadastro} style={styles.button}>
          <Text style={styles.buttonText}>
            Continuar
          </Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>Ou</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>
            Continuar com o Google
          </Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          Ao continuar você concorda com os
          termos de política e privacidade
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
  },

  back: {
    fontSize: 30,
    color: '#c9952d',
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: '500',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 2,
    borderColor: '#d9a441',

    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,

    marginBottom: 25,
  },

  flag: {
    fontSize: 24,
  },

  code: {
    fontSize: 18,
    marginHorizontal: 10,
  },

  input: {
    flex: 1,
    fontSize: 18,
  },

  button: {
    backgroundColor: '#d9a441',

    paddingVertical: 18,

    borderRadius: 40,

    alignItems: 'center',

    marginBottom: 25,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '500',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  or: {
    marginHorizontal: 10,
    color: '#777',
  },

  googleButton: {
    borderWidth: 2,
    borderColor: '#d9a441',

    borderRadius: 12,

    paddingVertical: 14,

    alignItems: 'center',
  },

  googleText: {
    fontSize: 18,
  },

  terms: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',

    marginTop: 25,
  },
});
