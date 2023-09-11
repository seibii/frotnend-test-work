import { SelectedMaintenance } from '@/types/maintenance';
import React, { useEffect } from 'react';
import { bem } from '@/utilities/bem';
import { ChoiceCardView } from '@/components/shared/choiceCardList';
import { RouterLink } from '@/components/parts/routerLink';

const blockClassName = 'pg-signup';

type MainViewProps = {
  selectedMaintenances: SelectedMaintenance[];
};

export const MainView: React.FC<MainViewProps> = (props) => {
  const { selectedMaintenances } = props;

  useEffect(() => {
    document.body.classList.add('pg-registration-reserve-wrapper');
    return () => {
      document.body.classList.remove('pg-registration-reserve-wrapper');
    };
  }, []);

  return (
    <>
      <p className={bem(blockClassName, 'lead-text')}>ログイン / 新規登録（無料）することで、ご予約ができます。</p>
      <ul className={bem('p-service-card-list', null)}>
        {selectedMaintenances.map((maintenance, i) => (
          <ChoiceCardView selectedMaintenance={maintenance} key={i} />
        ))}
      </ul>
      <div className={bem(blockClassName, 'footer')}>
        <p className={bem(blockClassName, 'text')}>アカウントをお持ちの方</p>
        <RouterLink className={bem(blockClassName, 'login-button', { thirdly: true })} to={'/login'}>
          ログインして予約
        </RouterLink>
      </div>
      <h2 className={bem(blockClassName, 'signup-title')}>初めてご利用の方</h2>
      <div className={bem(blockClassName, 'signup-description')}>
        <div className={bem(blockClassName, 'signup-description__header')}>無料でLINE新規登録すると...</div>
        <ul>
          <li>車のお困りごとを相談・解決できる！</li>
          <li>申し込みの内容を一時保存できる！</li>
          <li>予約状況・整備履歴が確認できる！</li>
        </ul>
      </div>
    </>
  );
};
