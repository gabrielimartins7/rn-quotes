import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from 'theme';

type InfoSectionProps = {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
};

export default function InfoSection({ icon, title, children }: InfoSectionProps) {
  return (
    <View style={styles.generalInfo}>
      <View style={styles.generalInfoRow}>
        {icon}
        <Text style={styles.generalInfoText}>{title}</Text>
      </View>

      <View style={styles.divider} />

      <View>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalInfo: {
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    borderRadius: theme.spacing.radius.sm,
    marginTop: theme.spacing.lg,
  },
  generalInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.unit,
    marginHorizontal: theme.spacing.md,
  },
  generalInfoText: {
    color: theme.colors.gray[500],
    fontSize: theme.typography.text.sm.size,
    marginLeft: theme.spacing.sm,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[300],
  },
});
