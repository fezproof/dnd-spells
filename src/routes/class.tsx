import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ClassSpellList from '../components/ClassSpellList';

const ClassPage: FC = () => {
  const { index } = useParams();
  return <ClassSpellList index={index} />;
};

export default ClassPage;
