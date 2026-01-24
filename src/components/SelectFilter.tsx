import { View, Text, Pressable, StyleSheet } from 'react-native';
import { QuoteStatus } from '../types/quote';
import { theme } from 'theme';
import { translate } from 'i18n';
import Button from './Button';

type SortBy = 'recent' | 'oldest' | 'amount_high' | 'amount_low';

type Filters = {
  status: QuoteStatus | 'Todos';
  sortBy: SortBy;
};

type SelectFilterProps = {
  filters: Filters;
  onSelectStatus: (status: Filters['status']) => void;
  onSelectSortBy: (sortBy: Filters['sortBy']) => void;
  onClear: () => void;
  onApply: () => void;
};

export default function SelectFilter({
  filters,
  onSelectStatus,
  onSelectSortBy,
  onClear,
  onApply,
}: SelectFilterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sheetTitle}>{translate('common.filter')}</Text>
      <View style={styles.divider} />

      <Text style={styles.sheetLabel}>{translate('common.status')}</Text>
      <Text style={styles.sheetLabel}>Status atual: {filters.status}</Text>
      <Text style={styles.sheetLabel}>{translate('common.ordering')}</Text>
      <View style={styles.row}>
        <Pressable onPress={() => onSelectStatus('Todos')}>
          <Text>Todos</Text>
        </Pressable>
        <Pressable onPress={() => onSelectStatus('Rascunho')}>
          <Text>Rascunho</Text>
        </Pressable>
        <Pressable onPress={() => onSelectStatus('Aprovado')}>
          <Text>Aprovado</Text>
        </Pressable>
      </View>

      <Text style={styles.sheetLabel}>Ordenação atual: {filters.sortBy}</Text>
      <View style={styles.row}>
        <Pressable onPress={() => onSelectSortBy('recent')}>
          <Text>Recentes</Text>
        </Pressable>
        <Pressable onPress={() => onSelectSortBy('oldest')}>
          <Text>Antigos</Text>
        </Pressable>
      </View>
      
      <View style={styles.divider} />
      <View style={styles.row}>
        <Button
            title={translate('common.reset')}
            variant='secondary'
            onPress={onClear}
        />
        <Button title={translate('common.apply')} onPress={onApply} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: theme.spacing.sm },
  sheetTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: theme.colors.gray[700],
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[300], 
  },
  sheetLabel: {
    fontFamily: 'Lato_700Bold',
    color: theme.colors.gray[700],
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    alignItems: 'center',
  },
});
