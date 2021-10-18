import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { REGEX } from '../../common/utils/regex';

import { useAuth } from 'hooks/useAuth';

import { ErrorMessage } from '../../common/components/ErrorMessage';
import { Button } from '../../common/components/Button';
import { Input } from '../../common/components/Input';
import { Radio } from '../../common/components/Radio';

import {
  Container,
  Main,
  Header,
  Label,
  Title,
  SignInWrapper,
  SignInButton,
  Form,
  InputWrapper,
  RadioWrapper,
} from './StyledComponents';

export const CreateAccount = () => {
  const { createAccount } = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const redirectToSignIn = () => history.push();

  const submitCreateAccount = async (values) => {
    await createAccount(values);
  };

  return (
    <Container>
      <Header>
        <Title fs={24}>LinkMe</Title>
        <SignInWrapper>
          <Label mr={20}>Já possuo conta</Label>

          <SignInButton onClick={redirectToSignIn}>
            Entrar
          </SignInButton>
        </SignInWrapper>
      </Header>
      <Main>
        <Form onSubmit={handleSubmit(submitCreateAccount)}>
          <Title fs={50}>Cadastre-se</Title>
          <InputWrapper>
            <Label fs={14} fw={500}>
              Nome
            </Label>
            <Input
              name="name"
              {...register('name', { required: true })}
              placeholder="Seu nome completo"
              type="name"
              errors={Boolean(errors?.name)}
            />
            {errors?.name && (
              <ErrorMessage>Campo obrigatório</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label fs={14} fw={500}>
              E-mail
            </Label>
            <Input
              name="email"
              {...register('email', {
                required: true,
                pattern: REGEX.email,
              })}
              placeholder="E-mail para acesso"
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
            <Label fs={14} fw={500}>
              Senha
            </Label>
            <Input
              name="password"
              {...register('password', {
                required: true,
                minLength: 6,
              })}
              placeholder="Sua senha"
              type="password"
              errors={Boolean(errors?.password)}
            />
            {errors?.password?.type === 'required' && (
              <ErrorMessage>Campo obrigatório</ErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <ErrorMessage>
                A senha precisa de no mínimo 6 caracteres
              </ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label fs={14} fw={500}>
              Tipo de conta
            </Label>
            <RadioWrapper mt={10} mb={10}>
              <Radio
                type="radio"
                name="type"
                value="trainee"
                {...register('type', { required: true })}
              />
              <Label fs={14} fw={500} ml={10}>
                Estágiario
              </Label>
            </RadioWrapper>

            <RadioWrapper>
              <Radio
                type="radio"
                name="type"
                value="company"
                {...register('type', { required: true })}
              />
              <Label fs={14} fw={500} ml={10}>
                Empresa
              </Label>
            </RadioWrapper>

            {errors?.type && (
              <ErrorMessage>Campo obrigatório</ErrorMessage>
            )}
          </InputWrapper>
          <Button type="submit">Cadastre-se</Button>
        </Form>
      </Main>
    </Container>
  );
};
