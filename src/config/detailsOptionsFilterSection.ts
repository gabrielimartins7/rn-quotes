import React from 'react';
import StatusBadge from 'components/StatusBadge';
import { FilterSection } from 'components/SelectFilter';
import { QuoteStatus } from '../types/quote';

type SortBy = 'recent' | 'oldest' | 'amount_high' | 'amount_low';

type Filters = {
  status: QuoteStatus | 'Todos';
  sortBy: SortBy;
};

type Params = {
  filters: Filters;
  setStatusFilter: (status: Filters['status']) => void;
  setSortBy: (sortBy: Filters['sortBy']) => void;
  t: (key: string) => string;
};

export function getDetailsOptionsFilterSection({
  filters,
  setStatusFilter,
  setSortBy,
  t,
}: Params): FilterSection[] {
  return [
    {
      key: 'status',
      title: t('common.status'),
      type: 'checkbox',
      options: [
        {
          key: 'draft',
          selected: filters.status === 'Rascunho',
          onPress: () => setStatusFilter('Rascunho'),
          right: React.createElement(StatusBadge, { status: 'Rascunho' }), // ✅ linha 36
        },
        {
          key: 'sent',
          selected: filters.status === 'Enviado',
          onPress: () => setStatusFilter('Enviado'),
          right: React.createElement(StatusBadge, { status: 'Enviado' }), // ✅ linha 42
        },
        {
          key: 'approved',
          selected: filters.status === 'Aprovado',
          onPress: () => setStatusFilter('Aprovado'),
          right: React.createElement(StatusBadge, { status: 'Aprovado' }), // ✅ linha 48
        },
        {
          key: 'declined',
          selected: filters.status === 'Recusado',
          onPress: () => setStatusFilter('Recusado'),
          right: React.createElement(StatusBadge, { status: 'Recusado' }), // ✅ linha 54
        },
      ],
    },
    {
      key: 'sortBy',
      title: t('common.ordering'),
      type: 'radio',
      options: [
        {
          key: 'recent',
          label: t('common.latest'),
          selected: filters.sortBy === 'recent',
          onPress: () => setSortBy('recent'),
        },
        {
          key: 'oldest',
          label: t('common.oldest'),
          selected: filters.sortBy === 'oldest',
          onPress: () => setSortBy('oldest'),
        },
        {
          key: 'high',
          label: t('common.greaterValue'),
          selected: filters.sortBy === 'amount_high',
          onPress: () => setSortBy('amount_high'),
        },
        {
          key: 'low',
          label: t('common.lowerValue'),
          selected: filters.sortBy === 'amount_low',
          onPress: () => setSortBy('amount_low'),
        },
      ],
    },
  ];
}
