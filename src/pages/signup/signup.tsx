import { OrderProgressBar } from '@/components/shared/orderProgressBar';
import React from 'react';
import { bem } from '@/utilities/bem';
import { useSelectedMaintenancesQuery } from '@/hooks/useSelectedMaintenancesQuery';
import { MainView } from '@/pages/signup/mainView';
import { Form } from '@/pages/signup/form';

const blockClassName = 'pg-signup';

export const Signup: React.FC = () => {
  const selectedMaintenanceQuery = useSelectedMaintenancesQuery();

  return (
    <>
      <div className={'l-page'}>
        <main className={'l-main'}>
          <div className={bem(blockClassName, null)}>
            <h1 className={bem(blockClassName, 'heading')}>お客様情報の登録・予約</h1>
            <OrderProgressBar currentPhase={'signup'} />
            <div className={bem(blockClassName, 'container')}>
              <MainView selectedMaintenances={selectedMaintenanceQuery.data} />
            </div>
          </div>
        </main>
      </div>
      <Form />
    </>
  );
};
