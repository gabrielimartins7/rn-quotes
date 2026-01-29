import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

import Header from '../components/Header';
import InputSearch from 'components/InputSearch';
import Filter from 'components/Filter';
import Card from 'components/Card';
import BottomSheet from 'components/BottomSheet';
import SelectFilter from 'components/SelectFilter';

import { useQuotesListScreen } from '../hooks/useQuotesListScreen';
import { getDetailsOptionsFilterSection } from 'config/detailsOptionsFilterSection';

import { theme } from '../theme';
import { translate } from 'i18n';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'QuotesList'>;

export default function QuotesListScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  const {
    filters,
    isFilterSheetOpen,
    openFilterSheet,
    closeFilterSheet,
    filterSheetHeight,
    filterSheetAnimatedStyle,
    clearFilters,
    setStatusFilter,
    setSortBy,
  } = useQuotesListScreen();

  const sections = getDetailsOptionsFilterSection({
    filters,
    setStatusFilter,
    setSortBy,
    t: translate,
  });

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + theme.spacing.md,
          paddingBottom: insets.bottom + theme.spacing.md,
        },
      ]}
    >
      <Header
        title={translate('common.budget')}
        description={translate('common.sketch')}
        onPress={() => navigation.navigate('QuoteForm')}
      />

      <View style={styles.content}>
        <InputSearch icon="search" />
        <Filter onPress={openFilterSheet} />
      </View>

      <Card
        title="Orçamento 1"
        description="Descrição do orçamento 1"
        status="Aprovado"
        amount="R$ 1.000,00"
      />

      <BottomSheet
        visible={isFilterSheetOpen}
        onClose={closeFilterSheet}
        height={filterSheetHeight}
        sheetStyle={filterSheetAnimatedStyle}
      >
        <SelectFilter
          title={translate('common.filter')}
          sections={sections}
          clearLabel={translate('common.reset')}
          applyLabel={translate('common.apply')}
          onClear={clearFilters}
          onApply={closeFilterSheet}
        />
      </BottomSheet>
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
  },
});
