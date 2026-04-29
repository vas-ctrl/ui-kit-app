import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SegundaTela() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text variant="headlineMedium">Segunda Tela</Text>

      <Card style={styles.card}>
        <Card.Title title="Detalhes" />
        <Card.Content>
          <Text>Aqui está a segunda página do app.</Text>
        </Card.Content>
      </Card>

      <Button 
        mode="outlined" 
        onPress={() => router.back()}
      >
        Voltar
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