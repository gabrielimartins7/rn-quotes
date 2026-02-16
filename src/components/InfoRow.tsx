import { View, Text, StyleSheet, Pressable } from 'react-native';
import Edit from '@assets/edit.svg'
import { theme } from 'theme';

type InfoRowProps = {
  title: string;
  description: string;
  value: string;
  onEdit: () => void;
};

export default function InfoRow({ title, description, value, onEdit }: InfoRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.value}>{value}</Text>

        <Pressable onPress={onEdit} hitSlop={10} style={styles.editButton}>
          <Edit width={18} height={18} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
  },
  left: {
    flex: 1,
    gap: 2,
    paddingRight: theme.spacing.md,
  },
  title: {
    fontFamily: 'Lato_700Bold',
    fontSize: theme.typography.text.sm.size,
    color: theme.colors.gray[700],
  },
  description: {
    fontSize: theme.typography.text.xs.size,
    color: theme.colors.gray[500],
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  value: {
    fontFamily: 'Lato_700Bold',
    fontSize: theme.typography.text.sm.size,
    color: theme.colors.gray[700],
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: theme.spacing.radius.rounded,
    alignItems: 'center',
    justifyContent: 'center',
  },
});