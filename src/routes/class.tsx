import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ClassSpellList from '../components/ClassSpellList';

const ClassPage: FC = () => {
  const params = useParams();
  return <ClassSpellList class={params.index} />;
};

export default ClassPage;
