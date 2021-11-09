import React, {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { useForm, Controller } from 'react-hook-form';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { Select } from '../../common/components/Select';
import { ErrorMessage } from '../../common/components/ErrorMessage';

import { REGEX } from '../../common/utils/regex';
import { STATES } from '../../common/utils/states';
import { CANDIDATE_PROFILE } from '../../common/translate';

import { JobService } from '../../common/services/jobService';
import { AvailabilityService } from '../../common/services/availabilityService';
import { CourseTimeService } from '../../common/services/courseTimeService';
import { PersonalityService } from '../../common/services/personalityService';
import { SkillService } from '../../common/services/skillService';
import { IdiomService } from '../../common/services/idiomService';

import {
  Container,
  Title,
  SInput,
  Box,
  Email,
} from './StyledComponents';

const Context = createContext();

export const CandidateProfile = () => {
  const [jobList, setjobList] = useState([]);
  const [availabilityList, setAvailabilityList] = useState([]);
  const [courseTimeList, setCourseTimeList] = useState([]);
  const [personalityList, setPersonalityList] = useState([]);
  const [skillList, setSkillList] = useState([]);
  const [idiomList, setIdiomList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
  });

  const findAllJobs = async () => {
    const { data } = await JobService.findAll();
    if (data?.length) {
      setjobList(
        data.map((item) => ({ value: item?.id, label: item?.name })),
      );
    }
  };

  const findAllAvailabilities = async () => {
    const { data } = await AvailabilityService.findAll();
    if (data?.length) {
      setAvailabilityList(
        data.map((item) => ({ value: item?.id, label: item?.name })),
      );
    }
  };

  const findAllCourseTime = async () => {
    const { data } = await CourseTimeService.findAll();
    if (data?.length) {
      setCourseTimeList(
        data.map((item) => ({ value: item?.id, label: item?.name })),
      );
    }
  };

  const findAllPersonalities = async () => {
    const { data } = await PersonalityService.findAll();
    if (data?.length) {
      setPersonalityList(
        data.map((item) => ({ value: item?.id, label: item?.name })),
      );
    }
  };

  const findAllSkills = async () => {
    const { data } = await SkillService.findAll();
    if (data?.length) {
      setSkillList(
        data.map((item) => ({ value: item?.id, label: item?.name })),
      );
    }
  };

  const findAllIdioms = async () => {
    const { data } = await IdiomService.findAll();
    if (data?.length) {
      setIdiomList(
        data.map((item) => ({ value: item?.id, label: item?.name })),
      );
    }
  };

  useEffect(() => {
    findAllJobs();
    findAllAvailabilities();
    findAllCourseTime();
    findAllPersonalities();
    findAllSkills();
    findAllIdioms();
  }, []);

  const context = {
    register,
    errors,
    control,
    jobList,
    availabilityList,
    courseTimeList,
    personalityList,
    skillList,
    idiomList,
  };

  return (
    <LayoutStructure>
      <Context.Provider value={context}>
        <Container>
          <UserInfo />
          <Address />
          <Job />
          <Availability />
          <CourseTime />
          <Personality />
          <Skill />
          <Idiom />
        </Container>
      </Context.Provider>
    </LayoutStructure>
  );
};

const UserInfo = () => {
  const { register, errors } = useContext(Context);

  return (
    <Box>
      <Title>Dados da conta</Title>
      <SInput
        name="name"
        {...register('name', {
          required: true,
        })}
        placeholder={'Seu nome'}
        errors={Boolean(errors?.name)}
      />
      {errors?.name && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <Email>E-mail</Email>
      <SInput
        name="password"
        {...register('password', {
          required: true,
        })}
        placeholder={'Sua senha'}
        type="password"
        errors={Boolean(errors?.password)}
      />
      {errors?.password && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
    </Box>
  );
};

const Address = () => {
  const { register, errors, control } = useContext(Context);

  return (
    <Box>
      <Title>Endereço</Title>
      <Controller
        name="state"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={STATES}
          />
        )}
      />
      {errors?.state && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <SInput
        name="city"
        {...register('city', {
          required: true,
        })}
        placeholder={'Sua cidade'}
        errors={Boolean(errors?.city)}
      />
      {errors?.city && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <SInput
        name="neighborhood"
        {...register('neighborhood', {
          required: true,
        })}
        placeholder={'Seu bairro'}
        errors={Boolean(errors?.neighborhood)}
      />
      {errors?.neighborhood && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
    </Box>
  );
};

const Job = () => {
  const { errors, control, jobList } = useContext(Context);

  return (
    <Box>
      <Title>Sua vaga de interesse</Title>
      <Controller
        name="job"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={jobList}
          />
        )}
      />
      {errors?.job && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <div>Nível</div>
    </Box>
  );
};

const Availability = () => {
  const { errors, control, availabilityList } = useContext(Context);

  return (
    <Box>
      <Title>Qual é sua disponibilidade?</Title>
      <Controller
        name="availability"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={availabilityList}
          />
        )}
      />
      {errors?.availability && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
    </Box>
  );
};

const CourseTime = () => {
  const { errors, control, courseTimeList } = useContext(Context);

  return (
    <Box>
      <Title>Quanto tempo você tempo de curso?</Title>
      <Controller
        name="courseTime"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={courseTimeList}
          />
        )}
      />
      {errors?.courseTime && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
    </Box>
  );
};

const Personality = () => {
  const { errors, control, personalityList } = useContext(Context);

  return (
    <Box>
      <Title>
        Como você se avalia com relação a sua personalidade?
      </Title>
      <Controller
        name="personality"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={personalityList}
          />
        )}
      />
      {errors?.personality && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <div>Nível</div>
    </Box>
  );
};

const Skill = () => {
  const { errors, control, skillList } = useContext(Context);

  return (
    <Box>
      <Title>
        Quais são suas habilidades com relação a sua vaga?
      </Title>
      <Controller
        name="skill"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={skillList}
          />
        )}
      />
      {errors?.skill && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <div>Nível</div>
    </Box>
  );
};

const Idiom = () => {
  const { errors, control, idiomList } = useContext(Context);

  return (
    <Box>
      <Title>Quais são seus idiomas de domínio?</Title>
      <Controller
        name="idiom"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Selecione"
            options={idiomList}
          />
        )}
      />
      {errors?.idiom && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <div>Nível</div>
    </Box>
  );
};
