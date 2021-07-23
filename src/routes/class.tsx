import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ClassDescription from '../components/ClassDescription';
import ClassLevelDetials from '../components/ClassLevels';

const ClassPage: FC = () => {
  const { index } = useParams();

  return (
    <main>
      <section className="mb-16">
        <ClassDescription index={index} />
      </section>
      <section className="mx-auto mb-8 max-w-md">
        <ClassLevelDetials index={index} />
      </section>
    </main>
  );
};

export default ClassPage;
