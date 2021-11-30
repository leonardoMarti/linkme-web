import { createContext, useEffect, useState } from 'react';

import { JobService } from '../common/services/jobService';
import { AvailabilityService } from '../common/services/availabilityService';
import { CourseTimeService } from '../common/services/courseTimeService';
import { PersonalityService } from '../common/services/personalityService';
import { SkillService } from '../common/services/skillService';
import { IdiomService } from '../common/services/idiomService';

export const SelectOptionsContext = createContext();

export const SelectOptionsContextProvider = (props) => {
  const [jobList, setjobList] = useState([]);
  const [availabilityList, setAvailabilityList] = useState([]);
  const [courseTimeList, setCourseTimeList] = useState([]);
  const [personalityList, setPersonalityList] = useState([]);
  const [skillList, setSkillList] = useState([]);
  const [idiomList, setIdiomList] = useState([]);

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
      setAvailabilityList(data.map((item) => ({ value: item?.id, label: item?.name })));
    }
  };

  const findAllCourseTime = async () => {
    const { data } = await CourseTimeService.findAll();
    if (data?.length) {
      setCourseTimeList(data.map((item) => ({ value: item?.id, label: item?.name })));
    }
  };

  const findAllPersonalities = async () => {
    const { data } = await PersonalityService.findAll();
    if (data?.length) {
      setPersonalityList(data.map((item) => ({ value: item?.id, label: item?.name })));
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

  useEffect(() => {
    findAllJobs();
    findAllAvailabilities();
    findAllCourseTime();
    findAllPersonalities();
    findAllSkills();
    findAllIdioms();
  }, []);

  const context = {
    jobList,
    availabilityList,
    courseTimeList,
    personalityList,
    skillList,
    idiomList,
  };

  return <SelectOptionsContext.Provider value={context}>{props.children}</SelectOptionsContext.Provider>;
};
