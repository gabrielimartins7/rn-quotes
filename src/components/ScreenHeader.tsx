import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from 'theme';

type ScreenHeaderProps = {
  title: string;
  onBack: () => void;
};

export default function ScreenHeader({ title, onBack }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={onBack} hitSlop={10} style={styles.backButton}>
          <MaterialIcons name="chevron-left" size={28} color={theme.colors.gray[700]} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: theme.spacing.radius.rounded,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: theme.colors.gray[700],
  },
  divider: {
    marginTop: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[300], 
  }
});
