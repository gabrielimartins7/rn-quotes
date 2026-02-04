import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenHeader from 'components/ScreenHeader';
import InputSearch from 'components/InputSearch';
import Store from '@assets/store.svg';

import { translate } from 'i18n';
import { theme } from 'theme';

export default function QuoteFormScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + theme.spacing.md }]}>
      <ScreenHeader title={translate('common.budgets')} onBack={() => {}} />
      <View style={styles.content}>
        <View style={styles.generalInfo}>
          <View style={styles.generalInfoRow}>
            <Store width={18} height={18} />
            <Text style={styles.generalInfoText}>{translate('common.generalInfo')}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.contentInput}>
            <InputSearch placeholder={translate('common.title')} />
            <InputSearch placeholder={translate('common.client')} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    paddingHorizontal: theme.spacing.md,
  },
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
  contentInput: {
    gap: theme.spacing.unit,
    padding: theme.spacing.md,
  }
});