import React from 'react';
import { useHistory } from 'react-router-dom';
import { COLORS } from '../../common/utils/colors';
import { useForm } from 'react-hook-form';

import { REGEX } from '../../common/utils/regex';
import { PAGES } from '../../common/pages';
import { SIGN_IN } from '../../common/translate';

import { useAuth } from 'hooks/useAuth';

import { ErrorMessage } from '../../common/components/ErrorMessage';
import { Button } from '../../common/components/Button';
import { Input } from '../../common/components/Input';

import {
  Container,
  Main,
  Aside,
  Header,
  Label,
  Title,
  CreateButton,
  Form,
  InputWrapper,
  BackgroundLogo,
  ForgotPasswordLink,
  MobileTitle,
  CreateAccountWrapper,
} from './StyledComponents';

export const SignIn = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const redirectToCreateAccount = () =>
    history.push(PAGES.CREATEACCOUNT);

  const submitLogIn = async (values) => {
    const { email, password } = values;
    const response = await signIn({ email, password });
    if (response) return history.push(PAGES.USERSEARCH);
  };

  return (
    <Container>
      <Aside>
        <BackgroundLogo>
          <Label color={COLORS.WHITE} fs={80} fw={700}>
            {SIGN_IN.linkMe}
          </Label>
        </BackgroundLogo>
      </Aside>
      <Main>
        <Header>
          <MobileTitle>{SIGN_IN.linkMe}</MobileTitle>
          <CreateAccountWrapper>
            <Label fs={12} fw={500} mr={20}>
              {SIGN_IN.dontHaveAccount}
            </Label>

            <CreateButton onClick={redirectToCreateAccount}>
              {SIGN_IN.createYourAccount}
            </CreateButton>
          </CreateAccountWrapper>
        </Header>

        <Form onSubmit={handleSubmit(submitLogIn)}>
          <Title>{SIGN_IN.accessAccount}</Title>
          <InputWrapper>
            <Label fs={14} fw={500}>
              {SIGN_IN.informYourData}
            </Label>
            <Input
              name="email"
              {...register('email', {
                required: true,
                pattern: REGEX.email,
              })}
              placeholder={SIGN_IN.emailPlaceholder}
              errors={Boolean(errors?.email)}
            />
            {errors?.email?.type === 'required' && (
              <ErrorMessage>{SIGN_IN.requiredField}</ErrorMessage>
            )}
            {errors?.email?.type === 'pattern' && (
              <ErrorMessage>{SIGN_IN.invalidFormat}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              name="password"
              {...register('password', {
                required: true,
              })}
              placeholder={SIGN_IN.passwordPlaceholder}
              type="password"
              errors={Boolean(errors?.password)}
            />
            {errors?.password && (
              <ErrorMessage>{SIGN_IN.requiredField}</ErrorMessage>
            )}
          </InputWrapper>

          <ForgotPasswordLink>
            {SIGN_IN.forgotPassword}
          </ForgotPasswordLink>
          <Button type="submit">{SIGN_IN.enter}</Button>
        </Form>
      </Main>
    </Container>
  );
};
