import { SelectedMaintenance } from '@/types/maintenance';

type UseQueryResult<T> = {
  isFetched: boolean;
  data: T;
};

// 本来はAPI呼び出す実装ですが課題用コードなのでmock返す
export const useSelectedMaintenancesQuery = (): UseQueryResult<SelectedMaintenance[]> => ({
  isFetched: true,
  data: [
    {
      maintenance: {
        id: 1,
        name: 'battery',
        displayName: 'バッテリー交換'
      },
      selectedChoices: [
        {
          id: 1,
          name: '部品込み',
          price: 9900
        },
        {
          id: 2,
          name: '軽自動車',
          price: 11000
        }
      ]
    }
  ]
});
