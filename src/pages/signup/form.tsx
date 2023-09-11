import React from 'react';
import { bem } from '@/utilities/bem';

// 課題用コードなので会員登録処理は実装しない
export const Form: React.FC = () => {
  const onSubmit = () => {
    alert('課題用コードなので実際の会員登録処理はしません。');
  };

  return (
    <div className={'auth-lock'}>
      <div className='auth-lock-social-buttons-container'>
        <button className='auth-lock-social-button' data-provider='line'>
          <div className='auth-lock-social-button-icon' />
          <div className='auth-lock-social-button-text' onClick={onSubmit}>
            LINEで新規登録
          </div>
        </button>
      </div>
      <div className={'auth-lock-pane-separator'}>または</div>
      <div className='auth-lock-input-block auth-lock-input-email'>
        <div className='auth-lock-input-wrap auth-lock-input-wrap-with-icon'>
          <input
            type='email'
            inputMode='email'
            name='email'
            className='auth-lock-input'
            placeholder='メールアドレス'
            value=''
          />
        </div>
      </div>
      <div className='auth-lock-input-checkbox'>
        <label>
          <input type='checkbox' name='isReceiveNotification' />
          <span>セイビーからのメルマガや郵送での各種ご案内を受け取る</span>
        </label>
      </div>
      <div>
        <small className='auth-lock-terms'>
          <span>
            「次へ」をクリックすることで、当社の
            <a
              id='usersReserveTermsOfService'
              href='https://seibii.co.jp/terms_of_service'
              target='_blank'
              rel='noopener noreferrer'
            >
              利用規約
            </a>
            および
            <a
              id='usersReservePrivacyPolicy'
              href='https://seibii.co.jp/privacy'
              target='_blank'
              rel='noopener noreferrer'
            >
              プライバシーポリシー
            </a>
            に同意したものとみなします。
          </span>
        </small>
      </div>
      <button className={bem('auth-lock-submit', null, { primary: true })} onClick={onSubmit}>
        次へ
      </button>
    </div>
  );
};
