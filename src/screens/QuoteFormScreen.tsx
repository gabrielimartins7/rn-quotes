import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenHeader from 'components/ScreenHeader';
import InputSearch from 'components/InputSearch';
import InfoSection from 'components/InfoSection';
import Radio from 'components/Radio';
import Store from '@assets/store.svg';
import LabelStatus from '@assets/labelStatus.svg';

import { useQuoteFormScreen } from 'hooks/useQuoteFormScreen';

import { translate } from 'i18n';
import { theme } from 'theme';

export default function QuoteFormScreen() {
  const insets = useSafeAreaInsets();
  const { onBack } = useQuoteFormScreen();
  return (
    <View style={[styles.container, { paddingTop: insets.top + theme.spacing.md }]}>
      <ScreenHeader title={translate('common.budgets')} onBack={onBack} />
      <View style={styles.content}>
        <InfoSection
          icon={<Store width={18} height={18} />}
          title={translate('common.generalInfo')}
        >
          <View style={styles.contentInput}>
            <InputSearch placeholder={translate('common.title')} />
            <InputSearch placeholder={translate('common.client')} />
          </View>
        </InfoSection>

        <InfoSection
          icon={<LabelStatus width={18} height={18} />}
          title={translate('common.generalInfo')}
        >
          <View style={styles.contentStatus}>
            <View style={styles.radioBox}>
              <Radio checked={false} onChange={() => {}} />
              <Radio checked={false} onChange={() => {}} />
            </View>
            <View style={styles.radioBox}>
              <Radio checked={false} onChange={() => {}} />
              <Radio checked={false} onChange={() => {}} />
            </View>
          </View>
        </InfoSection>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStatus: {
    flexDirection: 'row',
  },
  radioBox: {
    gap: theme.spacing.unit,
  }
});