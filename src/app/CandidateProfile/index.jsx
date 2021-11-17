import React, {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { useForm, Controller } from 'react-hook-form';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { ErrorMessage } from '../../common/components/ErrorMessage';
import { LevelChip } from '../../common/components/LevelChip';

import { STATES } from '../../common/utils/states';

import { getStorage } from '../../common/utils/storage';

import { CANDIDATE_PROFILE } from '../../common/translate';

import { JobService } from '../../common/services/jobService';
import { AvailabilityService } from '../../common/services/availabilityService';
import { CourseTimeService } from '../../common/services/courseTimeService';
import { PersonalityService } from '../../common/services/personalityService';
import { SkillService } from '../../common/services/skillService';
import { IdiomService } from '../../common/services/idiomService';
import { CandidateService } from '../../common/services/candidateService';

import {
  Container,
  Title,
  Label,
  SInput,
  SSelect,
  Box,
  FlexDiv,
  FieldWrapper,
  Chip,
  ChipWrapper,
} from './StyledComponents';

const Context = createContext();

export const CandidateProfile = () => {
  const userData = getStorage('user');

  const [jobList, setjobList] = useState([]);
  const [availabilityList, setAvailabilityList] = useState([]);
  const [courseTimeList, setCourseTimeList] = useState([]);
  const [personalityList, setPersonalityList] = useState([]);
  const [skillList, setSkillList] = useState([]);
  const [idiomList, setIdiomList] = useState([]);

  const [candidate, setCandidate] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  const { job, skill, idiom } = getValues();

  const findAllJobs = async () => {
    const { data } = await JobService.findAll();
    if (data?.length) {
      setjobList(
        data.map((item) => ({
          value: item?.id,
          label: item?.name,
          level: null,
        })),
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
        data.map((item) => ({
          value: item?.id,
          label: item?.name,
          level: null,
        })),
      );
    }
  };

  const findAllIdioms = async () => {
    const { data } = await IdiomService.findAll();
    if (data?.length) {
      setIdiomList(
        data.map((item) => ({
          value: item?.id,
          label: item?.name,
          level: null,
        })),
      );
    }
  };

  const findCandidateById = async () => {
    const { data } = await CandidateService.findAll({
      userId: userData?.id,
    });
    if (data?.length) {
      setCandidate(data[0]);
      const {
        user,
        job,
        availability,
        skill,
        idiom,
        courseTime,
        personality,
      } = data[0];

      reset({
        name: user?.name,
        email: user?.email,
        state:
          {
            value: user?.address?.state,
            label: user?.address?.state,
          } || null,
        city: user?.address?.city || null,
        neighborhood: user?.address?.neighborhood || null,
        job:
          {
            value: job[0]?.job?.id,
            label: job[0]?.job?.name,
            level: job[0]?.level,
          } || null,
        availability:
          availability.map((item) => ({
            value: item?.id,
            label: item?.availability?.name,
          })) || null,
        courseTime: {
          value: courseTime[0]?.courseTime?.id,
          label: courseTime[0]?.courseTime?.name,
        },
        personality:
          personality.map((item) => ({
            value: item?.id,
            label: item?.personality?.name,
          })) || null,

        skill:
          skill.map((item) => ({
            value: item?.id,
            label: item?.skill?.name,
            level: item?.level,
          })) || null,
        idiom:
          idiom.map((item) => ({
            value: item?.id,
            label: item?.idiom?.name,
            level: item?.level,
          })) || null,
      });
    }
  };

  useEffect(() => {
    findAllJobs();
    findAllAvailabilities();
    findAllCourseTime();
    findAllPersonalities();
    findAllSkills();
    findAllIdioms();
    findCandidateById();
  }, []);

  const context = {
    register,
    errors,
    control,
    watch,
    jobList,
    availabilityList,
    courseTimeList,
    personalityList,
    skillList,
    idiomList,
    candidate,
    skill,
    idiom,
    job,
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
  const { register, errors, watch } = useContext(Context);

  return (
    <Box>
      <Title>Dados da conta</Title>
      <FlexDiv fw={'wrap'}>
        <FieldWrapper mr={20}>
          <Label fs={14} fw={500}>
            Nome
          </Label>
          <SInput
            name="name"
            {...register('name', {
              required: true,
            })}
            value={watch('name')}
            placeholder={'Seu nome'}
            errors={Boolean(errors?.name)}
          />
          {errors?.name && (
            <ErrorMessage>
              {CANDIDATE_PROFILE.requiredField}
            </ErrorMessage>
          )}
        </FieldWrapper>
        <FieldWrapper mr={20}>
          <Label fs={14} fw={500}>
            E-mail
          </Label>

          <SInput
            name="email"
            {...register('email')}
            value={watch('email')}
            placeholder={'Seu nome'}
            errors={Boolean(errors?.email)}
            disabled
          />
        </FieldWrapper>
      </FlexDiv>
    </Box>
  );
};

const Address = () => {
  const { register, errors, control, watch } = useContext(Context);

  return (
    <Box>
      <Title>Endereço</Title>
      <FlexDiv fw={'wrap'}>
        <FieldWrapper mr={20}>
          <Label fs={14} fw={500}>
            Estado
          </Label>
          <Controller
            name="state"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <SSelect
                {...field}
                placeholder="Selecione"
                options={STATES}
              />
            )}
          />
          {errors?.state && (
            <ErrorMessage>
              {CANDIDATE_PROFILE.requiredField}
            </ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper mr={20}>
          <Label fs={14} fw={500}>
            Cidade
          </Label>
          <SInput
            name="city"
            {...register('city', {
              required: true,
            })}
            value={watch('city')}
            placeholder={'Sua cidade'}
            errors={Boolean(errors?.city)}
          />
          {errors?.city && (
            <ErrorMessage>
              {CANDIDATE_PROFILE.requiredField}
            </ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label fs={14} fw={500}>
            Bairro
          </Label>
          <SInput
            name="neighborhood"
            {...register('neighborhood', {
              required: true,
            })}
            value={watch('neighborhood')}
            placeholder={'Seu bairro'}
            errors={Boolean(errors?.neighborhood)}
            mw={400}
          />
          {errors?.neighborhood && (
            <ErrorMessage>
              {CANDIDATE_PROFILE.requiredField}
            </ErrorMessage>
          )}
        </FieldWrapper>
      </FlexDiv>
    </Box>
  );
};

const Job = () => {
  const { errors, control, jobList, job } = useContext(Context);

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
          <SSelect
            {...field}
            placeholder="Selecione"
            options={jobList}
          />
        )}
      />
      {errors?.job && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <Label fs={16} fw={600} mb={10} mt={20}>
        Nível
      </Label>
      <div>
        <LevelChip level={job?.level} />
      </div>
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
          <SSelect
            {...field}
            placeholder="Selecione"
            options={availabilityList}
            isMulti={true}
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
          <SSelect
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
          <SSelect
            {...field}
            placeholder="Selecione"
            options={personalityList}
            isMulti={true}
          />
        )}
      />
      {errors?.personality && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
    </Box>
  );
};

const Skill = () => {
  const { errors, control, skillList, skill } = useContext(Context);

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
          <SSelect
            {...field}
            placeholder="Selecione"
            options={skillList}
            isMulti={true}
          />
        )}
      />
      {errors?.skill && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <Label fs={16} fw={600} mb={10} mt={20}>
        Nível
      </Label>
      <div>
        {skill?.map((item) => (
          <ChipWrapper key={item.id}>
            <Chip>{item?.label}</Chip>
            <LevelChip level={item?.level} />
          </ChipWrapper>
        ))}
      </div>
    </Box>
  );
};

const Idiom = () => {
  const { errors, control, idiomList, idiom } = useContext(Context);

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
          <SSelect
            {...field}
            placeholder="Selecione"
            options={idiomList}
            isMulti={true}
          />
        )}
      />
      {errors?.idiom && (
        <ErrorMessage>{CANDIDATE_PROFILE.requiredField}</ErrorMessage>
      )}
      <Label fs={16} fw={600} mb={10} mt={20}>
        Nível
      </Label>
      <div>
        {idiom?.map((item) => (
          <ChipWrapper key={item.id}>
            <Chip>{item?.label}</Chip>
            <LevelChip level={item?.level} />
          </ChipWrapper>
        ))}
      </div>
    </Box>
  );
};
