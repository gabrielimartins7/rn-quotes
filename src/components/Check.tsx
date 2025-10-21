import { Pressable, View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import Svg, { Path } from 'react-native-svg';

interface Props {
  checked: boolean;
  label?: string;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export default function Check({
  checked,
  label,
  onChange,
  disabled,
  accessibilityLabel,
}: Props) {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel ?? label ?? 'Selecionar'}
      accessibilityState={{ checked, disabled }}
      style={({ pressed }) => [
        styles.row,
        { opacity: disabled ? 0.6 : pressed ? 0.9 : 1 },
      ]}
      hitSlop={8}
    >
      <View
        style={[
          styles.box,
          {
            borderColor: checked ? theme.colors.purple.base : theme.colors.gray[400],
            backgroundColor: checked ? theme.colors.purple.base : theme.colors.gray[100],
          },
        ]}
      >
        {checked ? (
          <Svg width={14} height={14} viewBox="0 0 24 24">
            <Path
              d="M20 7L10 17l-6-6"
              fill="none"
              stroke={theme.colors.gray[100]}
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        ) : null}
      </View>

      {label ? (
        <Text style={styles.label}>{label}</Text>
      ) : null}
    </Pressable>
  );
}

const SIZE = 22;

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  box: {
    width: SIZE,
    height: SIZE,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.gray[700],
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontFamily: 'Lato_400Regular',
  },
});
