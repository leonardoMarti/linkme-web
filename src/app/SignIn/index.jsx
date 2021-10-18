import React from 'react';
import { useHistory } from 'react-router-dom';
import { COLORS } from '../../common/utils/colors';
import { useForm } from 'react-hook-form';

import { REGEX } from '../../common/utils/regex';
import { ROUTES } from '../../common/routes';

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
    history.push(ROUTES.CREATEACCOUNT);

  const submitLogIn = async (values) => {
    const { email, password } = values;
    const response = await signIn({ email, password });
    if (response) return history.push(ROUTES.USERMANAGEMENT);
  };

  return (
    <Container>
      <Aside>
        <BackgroundLogo>
          <Label color={COLORS.WHITE} fs={80} fw={700}>
            LinkMe
          </Label>
        </BackgroundLogo>
      </Aside>
      <Main>
        <Header>
          <MobileTitle>LinkMe</MobileTitle>
          <CreateAccountWrapper>
            <Label fs={12} fw={500} mr={20}>
              Não tem uma conta ainda?
            </Label>

            <CreateButton onClick={redirectToCreateAccount}>
              Criar conta
            </CreateButton>
          </CreateAccountWrapper>
        </Header>

        <Form onSubmit={handleSubmit(submitLogIn)}>
          <Title>Acesse sua conta</Title>
          <InputWrapper>
            <Label fs={14} fw={500}>
              Informe seus dados de acesso
            </Label>
            <Input
              name="email"
              {...register('email', {
                required: true,
                pattern: REGEX.email,
              })}
              placeholder="E-mail"
              errors={Boolean(errors?.email)}
            />
            {errors?.email?.type === 'required' && (
              <ErrorMessage>Campo obrigatório</ErrorMessage>
            )}
            {errors?.email?.type === 'pattern' && (
              <ErrorMessage>Formato inválido</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              name="password"
              {...register('password', {
                required: true,
              })}
              placeholder="Senha"
              type="password"
              errors={Boolean(errors?.password)}
            />
            {errors?.password && (
              <ErrorMessage>Campo obrigatório</ErrorMessage>
            )}
          </InputWrapper>

          <ForgotPasswordLink>Esqueci minha senha</ForgotPasswordLink>
          <Button type="submit">Entrar</Button>
        </Form>
      </Main>
    </Container>
  );
};
