import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from 'theme';
import Button from './Button';
import Check from './Check';
import Radio from './Radio';

type ControlType = 'checkbox' | 'radio';

export type FilterOption = {
  key: string;
  label?: string;
  selected: boolean;
  onPress: () => void;
  right?: React.ReactNode;
};

export type FilterSection = {
  key: string;
  title: string;
  type: ControlType;
  options: FilterOption[];
};

type SelectFilterProps = {
  title: string;
  sections: FilterSection[];
  onClear: () => void;
  onApply: () => void;
  clearLabel: string;
  applyLabel: string;
};

export default function SelectFilter({
  title,
  sections,
  onClear,
  onApply,
  clearLabel,
  applyLabel,
}: SelectFilterProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sheetTitle}>{title}</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.content}>
        {sections.map((section) => (
          <View key={section.key} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.options.map((opt) => (
              <Pressable key={opt.key} onPress={opt.onPress} style={styles.rowStatus}>
                {section.type === 'checkbox' ? (
                  <Check checked={opt.selected} onChange={opt.onPress} />
                ) : (
                  <Radio checked={opt.selected} onChange={opt.onPress} />
                )}

                {opt.right ? opt.right : opt.label ? <Text>{opt.label}</Text> : null}
              </Pressable>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Button title={clearLabel} variant="secondary" onPress={onClear} />
          <Button title={applyLabel} onPress={onApply} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.spacing.sm,
  },
  content: {
    flex: 1,
  },
  section: { marginTop: theme.spacing.md },
  footer: {
    marginTop: 'auto',
  },
  sheetTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: theme.colors.gray[700],
    paddingVertical: 11,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[300],
  },
  contentStatus: {
    marginTop: theme.spacing.md,
  },
  textStatus: {
    marginBottom: theme.spacing.md,
  },
  rowStatus: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: theme.spacing.gap.md,
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing.md,
  },
   contentSection: {
    marginTop: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.md,
  },
   rowOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: theme.spacing.gap.md,
  },
  rowButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing.md,
  },
});