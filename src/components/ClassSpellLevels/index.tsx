import React, { FC } from 'react';
import {
  ClassSpellLevelsQueryVariables,
  useClassSpellLevelsQuery,
} from '../../generated/graphql';
import ClassSpellList from '../ClassSpellList';

const ClassSpellLevel: FC<{
  title: string;
  level: number;
  count: number;
  classIndex: string;
}> = ({ title, level, count, classIndex }) => {
  return (
    <div>
      <h4 className="mb-4 text-lg">{title}</h4>
      <div>{count}</div>
      <ClassSpellList index={classIndex} level={level} />
    </div>
  );
};

const ClassSpellLevels: FC<ClassSpellLevelsQueryVariables> = ({
  index,
  level,
}) => {
  const [result] = useClassSpellLevelsQuery({
    variables: {
      index,
      level,
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h3 className="mb-4 text-xl">Spells Levels</h3>
      <ClassSpellLevel
        classIndex={index}
        count={data?.level?.spellcasting?.cantrips_known || 0}
        title="Cantrips"
        level={0}
      />
      {data?.level?.spellcasting?.spell_slots_level_1 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_1}
          title="Level 1"
          level={1}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_2 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_2}
          title="Level 2"
          level={2}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_3 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_3}
          title="Level 3"
          level={3}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_4 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_4}
          title="Level 4"
          level={4}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_5 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_5}
          title="Level 5"
          level={5}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_6 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_6}
          title="Level 6"
          level={6}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_7 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_7}
          title="Level 7"
          level={7}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_8 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_8}
          title="Level 8"
          level={8}
        />
      ) : null}
      {data?.level?.spellcasting?.spell_slots_level_9 ? (
        <ClassSpellLevel
          classIndex={index}
          count={data.level.spellcasting.spell_slots_level_9}
          title="Level 9"
          level={9}
        />
      ) : null}
    </div>
  );
};

export default ClassSpellLevels;
