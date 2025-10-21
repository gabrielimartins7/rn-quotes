import { Pressable, View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

interface RadioProps {
  checked: boolean;
  label?: string;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export default function Radio({
  checked,
  label,
  onChange,
  disabled,
  accessibilityLabel,
}: RadioProps) {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel ?? label ?? 'Selecionar opção'}
      accessibilityState={{ checked, disabled }}
      style={({ pressed }) => [
        styles.row,
        { opacity: disabled ? 0.6 : pressed ? 0.9 : 1 },
      ]}
      hitSlop={8}
    >
      <View
        style={[
          styles.outer,
          {
            borderColor: checked ? theme.colors.purple.base : theme.colors.gray[400],
            backgroundColor: checked ? theme.colors.purple.base : theme.colors.gray[100],
          },
        ]}
      >
        {checked ? <View style={styles.inner} /> : null}
      </View>

      {label ? <Text style={styles.label}>{label}</Text> : null}
    </Pressable>
  );
}

const SIZE = 22;

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  outer: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: SIZE - 12,
    height: SIZE - 12,
    borderRadius: (SIZE - 12) / 2,
    backgroundColor: theme.colors.gray[100],
  },
  label: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.gray[700],
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontFamily: 'Lato_400Regular',
  },
});
