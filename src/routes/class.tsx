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
        <h3 className="mb-8 text-2xl font-bold text-center">Spells Levels</h3>
        <ClassSpellLevels index={index} level={1} />
      </section>
    </main>
  );
};

export default ClassPage;
