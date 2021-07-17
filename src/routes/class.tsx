import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ClassDescription from '../components/ClassDescription';
import ClassSpellLevels from '../components/ClassSpellLevels';

const ClassPage: FC = () => {
  const { index } = useParams();
  return (
    <main>
      <section>
        <ClassDescription index={index} />
      </section>
      <section>
        <ClassSpellLevels index={index} level={20} />
      </section>
    </main>
  );
};

export default ClassPage;
