import { useContext } from 'react';
import { SelectOptionsContext } from '../contexts/SelectOptionsContext';

export const useSelectOptions = () => {
  const { jobList, availabilityList, courseTimeList, personalityList, skillList, idiomList } =
    useContext(SelectOptionsContext);

  return { jobList, availabilityList, courseTimeList, personalityList, skillList, idiomList };
};
