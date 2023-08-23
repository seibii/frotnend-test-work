import { bem } from '@/utilities/bem';
import React from 'react';

type Phase = 'signup' | 'estimate' | 'reserved';

type Props = {
  currentPhase: Phase;
};

const phasePositions: Record<Phase, number> = {
  signup: 2,
  estimate: 3,
  reserved: 4
};
export const OrderProgressBar: React.FC<Props> = ({ currentPhase }) => {
  const currentPosition = phasePositions[currentPhase];
  const modifierKey = (targetPhase: Phase): 'done' | 'not-yet' => {
    const currentPosition = phasePositions[currentPhase];
    const targetPosition = phasePositions[targetPhase];
    return currentPosition >= targetPosition ? 'done' : 'not-yet';
  };

  return (
    <div className={bem('p-progress-bar', null)}>
      <div className={bem('p-progress-bar', 'container')}>
        <div className={bem('p-progress-bar', 'line')}>
          <div
            className={bem('p-progress-bar', 'overlay-line')}
            style={{ width: `calc(100% / 3 * ${currentPosition - 1})` }}
          />
        </div>
        <div className={bem('p-progress-bar', 'items-list')}>
          <div className={bem('p-progress-bar', 'item')}>
            <div className={bem('p-progress-bar', 'point', { done: true })} />
            <div className={bem('p-progress-bar', 'text', { done: true })}>日時確認</div>
          </div>
          <div className={bem('p-progress-bar', 'item')}>
            <div className={bem('p-progress-bar', 'point', { [modifierKey('signup')]: true })} />
            <div className={bem('p-progress-bar', 'text', { [modifierKey('signup')]: true })}>登録/ログイン</div>
          </div>
          <div className={bem('p-progress-bar', 'item')}>
            <div className={bem('p-progress-bar', 'point', { [modifierKey('estimate')]: true })} />
            <div className={bem('p-progress-bar', 'text', { [modifierKey('estimate')]: true })}>予約情報入力</div>
          </div>
          <div className={bem('p-progress-bar', 'item')}>
            <div className={bem('p-progress-bar', 'point', { [modifierKey('reserved')]: true })} />
            <div className={bem('p-progress-bar', 'text', { [modifierKey('reserved')]: true })}>予約完了</div>
          </div>
        </div>
      </div>
    </div>
  );
};
