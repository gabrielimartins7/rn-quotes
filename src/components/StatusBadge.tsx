import { View, Text, StyleSheet } from 'react-native';
import { QuoteStatus } from '../types/quote';
import { theme } from '../theme';

interface Props {
  status: QuoteStatus;
}

export default function StatusBadge({ status }: Props) {
  const { bg, fg, dot } = mapStatus(status);

  return (
    <View
      style={[styles.badge, { backgroundColor: bg }]}
      accessibilityLabel={`Status: ${status}`}
    >
      <View style={[styles.dot, { backgroundColor: dot }]} />
      <Text style={[styles.text, { color: fg }]}>{status}</Text>
    </View>
  );
}

function mapStatus(status: QuoteStatus) {
  switch (status) {
    case 'Rascunho':
      return {
        bg: theme.colors.gray[300],
        fg: theme.colors.gray[700],
        dot: theme.colors.gray[500],
      };
    case 'Enviado':
      return {
        bg: theme.colors.feedback.info.light,
        fg: theme.colors.feedback.info.dark,
        dot: theme.colors.feedback.info.base,
      };
    case 'Aprovado':
      return {
        bg: theme.colors.feedback.success.light,
        fg: theme.colors.feedback.success.dark,
        dot: theme.colors.feedback.success.base,
      };
    case 'Recusado':
      return {
        bg: theme.colors.feedback.danger.light,
        fg: theme.colors.feedback.danger.dark,
        dot: theme.colors.feedback.danger.base,
      };
    default:
      return {
        bg: theme.colors.gray[200],
        fg: theme.colors.gray[700],
        dot: theme.colors.gray[500],
      };
  }
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.spacing.radius.rounded,
    alignSelf: 'flex-start',
    gap: theme.spacing.xs,
  },
  text: {
    fontFamily: 'Lato_700Bold',
    fontSize: 12,
    lineHeight: 12 * 1.4,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: theme.spacing.radius.rounded,
  },
});
