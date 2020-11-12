/* React imports */
import React from 'react';

/* Third-party imports */
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

/* Local imports */
import Dates from '../../shared/utils/dates';
import { Button, ButtonSize, ButtonVariant } from '../../shared/components';
import { AuthToken } from '../../shared/api/models';
import { REGEX_EMAIL } from '../../shared/utils/form-validations';
import { login } from '../../shared/api/services';
import { setCookie } from '../../shared/utils/cookies';
import { setNotification } from '../../store/actions';
import { getPublicURL } from '../../shared/utils/url';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { register, errors, handleSubmit, formState } = useForm<LoginForm>({
    mode: 'onChange'
  });

  async function handleOnSubmit(data: LoginForm): Promise<void> {
    try {
      const userEmail: string = data.email;
      const userPassword: string = data.password;

      const [promise] = login(userEmail, userPassword);
      const auth: AuthToken = await promise;

      if (auth.accessToken) {
        setCookie('_session', auth.accessToken, { expires: Dates.addSeconds(new Date(), auth.expiresIn) });
      } else {
        dispatch(setNotification({ show: true, message: auth.detail, type: 'danger', code: `${auth.status}` }));
      }
    } catch (error) {
      dispatch(setNotification({ show: true, message: error.detail, type: 'danger' }));
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-xs-12 col-md-8">
        <div className="mb-5 text-center">
          <figure className="avatar avatar-company avatar-lg">
            <img className="w-50" alt="CF Can Vidalet" src={getPublicURL('logo.png')} />
          </figure>
        </div>
        <h1 className="heading-lg mb-4">{t('pages.login.page-title')}</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div>
            <label className="form-label" htmlFor="email">
              {t('pages.login.email-label')}
            </label>
            <input
              id="email"
              name="email"
              ref={register({
                required: `${t('pages.login.email-required')}`,
                validate: {
                  isEmailValid: (value) => {
                    return REGEX_EMAIL.test(value) || `${t('pages.login.email-not-valid')}`;
                  }
                }
              })}
              className={clsx('form-control', errors.email && 'is-invalid')}
              type="email"
              maxLength={80}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              {t('pages.login.password-label')}
            </label>
            <input
              id="password"
              name="password"
              ref={register({
                required: `${t('pages.login.password-required')}`
              })}
              className={clsx('form-control', errors.password && 'is-invalid')}
              type="password"
              maxLength={80}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <div className="mt-5">
            <button type="submit" className="btn btn-primary" disabled={!(formState.isDirty && formState.isValid)}>
              {t('buttons.login')}
            </button>
            <Button classNames="ml-3" size={ButtonSize.Small} variant={ButtonVariant.Subtle}>
              {t('pages.login.forgot-password')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
