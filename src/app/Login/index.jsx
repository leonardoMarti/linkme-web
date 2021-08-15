import React from 'react';
import { useHistory } from 'react-router-dom';
import { COLORS } from '../../common/utils/colors';
import {
  Container,
  Main,
  Aside,
  Header,
  Label,
  Title,
  Button,
  Form,
  Input,
  BackgroundLogo,
  ForgotPasswordLink,
  MobileTitle,
  CreateAccountWrapper,
} from './StyledComponents';

export const Login = () => {
  const history = useHistory();

  const redirectToAppointment = () => {
    return history.push('/manage-appointment');
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
            <Button pd={'0 10px'}>
              <Label fs={14} fw={500} pointer>
                Criar conta
              </Label>
            </Button>
          </CreateAccountWrapper>
        </Header>

        <Form>
          <Title>Acesse sua conta</Title>
          <Label fs={12} fw={500} mb={10}>
            Informe seus dados de acesso
          </Label>
          <Input placeholder="E-mail" mb={20} />
          <Input placeholder="Senha" mb={10} />
          <ForgotPasswordLink>Esqueci minha senha</ForgotPasswordLink>
          <Button>Entrar</Button>
        </Form>
      </Main>
    </Container>
  );
};
