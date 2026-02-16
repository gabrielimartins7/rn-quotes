import { View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenHeader from 'components/ScreenHeader';
import InputSearch from 'components/InputSearch';
import InfoSection from 'components/InfoSection';
import Radio from 'components/Radio';
import StatusBadge from 'components/StatusBadge';

import Store from '@assets/store.svg';
import LabelStatus from '@assets/labelStatus.svg';
import Note from '@assets/note.svg';

import { useQuoteFormScreen } from 'hooks/useQuoteFormScreen';

import { translate } from 'i18n';
import { theme } from 'theme';
import InfoRow from 'components/InfoRow';
import Button from 'components/Button';

export default function QuoteFormScreen() {
  const insets = useSafeAreaInsets();
  const { onBack } = useQuoteFormScreen();

  return (
    <View style={[styles.container, { paddingTop: insets.top + theme.spacing.md }]}>
      <ScreenHeader title={translate('common.budgets')} onBack={onBack} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <InfoSection icon={<Store width={18} height={18} />} title={translate('common.generalInfo')}>
          <View style={styles.contentInput}>
            <InputSearch placeholder={translate('common.title')} />
            <InputSearch placeholder={translate('common.client')} />
          </View>
        </InfoSection>

        <InfoSection icon={<LabelStatus width={18} height={18} />} title={translate('common.generalInfo')}>
          <View style={styles.contentStatus}>
            <View style={styles.radioBox}>
              <View style={styles.statusRow}>
                <Radio checked={false} onChange={() => {}} />
                <StatusBadge status="Rascunho" />
              </View>

              <View style={styles.statusRow}>
                <Radio checked={false} onChange={() => {}} />
                <StatusBadge status="Enviado" />
              </View>
            </View>

            <View style={styles.radioBox}>
              <View style={styles.statusRow}>
                <Radio checked={false} onChange={() => {}} />
                <StatusBadge status="Aprovado" />
              </View>

              <View style={styles.statusRow}>
                <Radio checked={false} onChange={() => {}} />
                <StatusBadge status="Recusado" />
              </View>
            </View>
          </View>
        </InfoSection>

        <InfoSection
          icon={<Note width={18} height={18} color={theme.colors.purple.base} />}
          title={translate('common.servicesIncluded')}
        >
          <View style={styles.servicesContent}>
            <InfoRow title="teste" description="description" onEdit={() => {}} value="R$ 500" />
            <InfoRow title="teste" description="description" onEdit={() => {}} value="R$ 500" />
            <InfoRow title="teste" description="description" onEdit={() => {}} value="R$ 500" />

            <Button
              icon="add"
              title={translate('common.addServices')}
              onPress={() => {}}
              variant="secondary"
              containerStyle={styles.addServiceButton}
            />
          </View>
        </InfoSection>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  contentInput: {
    gap: theme.spacing.unit,
    padding: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
  },
  radioBox: {
    gap: theme.spacing.unit,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  servicesContent: {
    padding: theme.spacing.padding.md
  },
  addServiceButton: {
  alignSelf: 'center',
  marginTop: theme.spacing.md,
  paddingHorizontal: theme.spacing.lg,
},
});