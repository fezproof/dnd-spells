import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ClassDescription from '../components/ClassDescription';
import ClassSpellLevels from '../components/ClassSpellLevels';

const ClassPage: FC = () => {
  const { index } = useParams();
  return (
    <main>
      <section className="mb-16">
        <ClassDescription index={index} />
      </section>
      <section className="mb-16">
        <ClassSpellLevels index={index} level={1} />
      </section>
    </main>
  );
};

export default ClassPage;
