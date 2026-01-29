import { Pressable, Text, ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  icon?: keyof typeof MaterialIcons.glyphMap;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  icon,
  disabled = false,
  loading = false,
  style,
  accessibilityLabel,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const palette = getPalette(variant);

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: palette.bg,
          borderColor: palette.border,
          borderWidth: palette.border ? 2 : 0,
          opacity: isDisabled ? 0.6 : pressed ? 0.92 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={palette.fg} />
      ) : (
        <View style={styles.content}>
          {icon ? (
            <MaterialIcons name={icon} size={20} color={palette.icon} />
          ) : null}
          <Text
            style={[
              styles.text,
              {
                color: palette.fg,
                fontFamily: 'Lato_700Bold',
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

function getPalette(variant: Variant) {
  switch (variant) {
    case 'primary':
      return {
        bg: theme.colors.purple.base,
        fg: theme.colors.gray[100],
        icon: theme.colors.gray[100],
        border: undefined,
      };
    case 'secondary':
      return {
        bg: theme.colors.gray[100],
        fg: theme.colors.purple.base,
        icon: theme.colors.purple.base,
        border: theme.colors.gray[300],
      };
    case 'danger':
      return {
        bg: theme.colors.gray[100],
        fg: theme.colors.feedback.danger.base,
        icon: theme.colors.feedback.danger.base,
        border: undefined,
      };
  }
}

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: 999,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.3,
  },
});
