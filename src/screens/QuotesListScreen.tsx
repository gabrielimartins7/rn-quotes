import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../components/Header';
import InputSearch from 'components/InputSearch';
import Filter from 'components/Filter';

import { theme } from '../theme';
import { translate } from 'i18n';
import Card from 'components/Card';

export default function QuotesListScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {
      paddingTop: insets.top + theme.spacing.md,
      paddingBottom: insets.bottom + theme.spacing.md,
    }]}>
      <Header
        title={translate('common.budget')}
        description={translate('common.sketch')}
        onPress={() =>{}}
      />
      <View style={styles.content}>
        <InputSearch icon="search" />
        <Filter onPress={() => {}} />
      </View>

      <Card
        title="Orçamento 1"
        description="Descrição do orçamento 1"
        status="Aprovado"
        amount="R$ 1.000,00"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.white,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  }
});