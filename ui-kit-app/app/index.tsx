import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Avatar } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Avatar.Icon size={80} icon="account" />

      <Text variant="headlineMedium">Tela Inicial</Text>

      <Card style={styles.card}>
        <Card.Title title="Bem-vindo" />
        <Card.Content>
          <Text>Projeto com UI Kit e navegação.</Text>
        </Card.Content>
      </Card>

      <Button 
        mode="contained" 
        onPress={() => router.push('/index2')}
      >
        Ir para segunda tela
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  card: {
    width: '100%',
  },
});