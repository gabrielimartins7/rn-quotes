import { useCallback, useState } from 'react';
import { QuoteStatus } from '../types/quote';
import { useBottomSheet } from '../hooks/useBottomSheet';

type SortBy = 'recent' | 'oldest' | 'amount_high' | 'amount_low';

export type QuotesFilters = {
  status: QuoteStatus | 'Todos';
  sortBy: SortBy;
};

const FILTER_SHEET_HEIGHT = 420;

const DEFAULT_FILTERS: QuotesFilters = {
  status: 'Todos',
  sortBy: 'recent',
};

export function useQuotesListScreen() {
  const sheet = useBottomSheet({ height: FILTER_SHEET_HEIGHT });

  const [filters, setFilters] = useState<QuotesFilters>(DEFAULT_FILTERS);

  const setStatusFilter = useCallback((status: QuotesFilters['status']) => {
    setFilters((prev) => ({ ...prev, status }));
  }, []);

  const setSortBy = useCallback((sortBy: QuotesFilters['sortBy']) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  return {
    isFilterSheetOpen: sheet.visible,
    openFilterSheet: sheet.open,
    closeFilterSheet: sheet.close,
    filterSheetHeight: FILTER_SHEET_HEIGHT,
    filterSheetAnimatedStyle: sheet.sheetAnimatedStyle,
    filters,
    setStatusFilter,
    setSortBy,
    clearFilters,
  };
}
