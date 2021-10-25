import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { REGEX } from '../../common/utils/regex';
import { PAGES } from '../../common/pages';
import { CREATE_ACCOUNT } from '../../common/translate';

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

  const redirectToSignIn = () => history.push(PAGES.SIGNIN);

  const submitCreateAccount = async (values) => {
    await createAccount(values);
  };

  return (
    <Container>
      <Header>
        <Title fs={24}>{CREATE_ACCOUNT.linkMe}</Title>
        <SignInWrapper>
          <Label mr={20}>{CREATE_ACCOUNT.haveAccount}</Label>

          <SignInButton onClick={redirectToSignIn}>
            {CREATE_ACCOUNT.enter}
          </SignInButton>
        </SignInWrapper>
      </Header>
      <Main>
        <Form onSubmit={handleSubmit(submitCreateAccount)}>
          <Title fs={50}>{CREATE_ACCOUNT.createYourAccount}</Title>
          <InputWrapper>
            <Label fs={14} fw={500}>
              {CREATE_ACCOUNT.name}
            </Label>
            <Input
              name="name"
              {...register('name', { required: true })}
              placeholder={CREATE_ACCOUNT.namePlaceholder}
              type="name"
              errors={Boolean(errors?.name)}
            />
            {errors?.name && (
              <ErrorMessage>
                {CREATE_ACCOUNT.requiredField}
              </ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label fs={14} fw={500}>
              {CREATE_ACCOUNT.email}
            </Label>
            <Input
              name="email"
              {...register('email', {
                required: true,
                pattern: REGEX.email,
              })}
              placeholder={CREATE_ACCOUNT.emailPlaceholder}
              errors={Boolean(errors?.email)}
            />
            {errors?.email?.type === 'required' && (
              <ErrorMessage>
                {CREATE_ACCOUNT.requiredField}
              </ErrorMessage>
            )}
            {errors?.email?.type === 'pattern' && (
              <ErrorMessage>
                {CREATE_ACCOUNT.invalidFormat}
              </ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label fs={14} fw={500}>
              {CREATE_ACCOUNT.password}
            </Label>
            <Input
              name="password"
              {...register('password', {
                required: true,
                minLength: 6,
              })}
              placeholder={CREATE_ACCOUNT.passwordPlaceholder}
              type="password"
              errors={Boolean(errors?.password)}
            />
            {errors?.password?.type === 'required' && (
              <ErrorMessage>
                {CREATE_ACCOUNT.requiredField}
              </ErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <ErrorMessage>
                {CREATE_ACCOUNT.passwordMinLength}
              </ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label fs={14} fw={500}>
              {CREATE_ACCOUNT.accountType}
            </Label>
            <RadioWrapper mt={10} mb={10}>
              <Radio
                type="radio"
                name="type"
                value="trainee"
                {...register('type', { required: true })}
              />
              <Label fs={14} fw={500} ml={10}>
                {CREATE_ACCOUNT.trainee}
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
                {CREATE_ACCOUNT.company}
              </Label>
            </RadioWrapper>

            {errors?.type && (
              <ErrorMessage>
                {CREATE_ACCOUNT.requiredField}
              </ErrorMessage>
            )}
          </InputWrapper>
          <Button type="submit">{CREATE_ACCOUNT.register}</Button>
        </Form>
      </Main>
    </Container>
  );
};
