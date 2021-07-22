import React, { FC } from 'react';
import {
  ClassSpellLevelsDocument,
  ClassSpellLevelsQuery,
  ClassSpellLevelsQueryVariables,
} from '../../generated/graphql';
import { CellSuccessProps, withCell } from '../../utils/withCell';
import ClassSpellList from '../ClassSpellList';

const ClassSpellLevel: FC<{
  title: string;
  level: number;
  count: number;
  classIndex: string;
}> = ({ title, level, count, classIndex }) => {
  if (count === 0) return null;

  return (
    <div className="mx-auto mb-6 max-w-screen-md">
      <div className="flex flex-col flex-nowrap justify-center items-center py-2 border-t border-b border-fade">
        <h4 className="mb-4 text-lg">{title}</h4>
        <div>{count} slots per day</div>
      </div>
      <div className="mt-4">
        <ClassSpellList index={classIndex} level={level} />
      </div>
    </div>
  );
};

const ClassSpellLevelLoading: FC = () => (
  <div className="mx-auto mb-6 max-w-screen-md animate-pulse">
    <div className="flex flex-col flex-nowrap justify-center items-center py-2 border-t border-b border-fade">
      <div className=" mb-4 w-32 h-6 bg-gray-400 rounded" />
      <div className=" mb-4 w-8 h-4 bg-gray-400 rounded" />
    </div>
    {/* <div className="mt-4">
  <ClassSpellList index={classIndex} level={level} />
</div> */}
  </div>
);

const ClassSpellLevelsSuccess: FC<
  CellSuccessProps<ClassSpellLevelsQuery, ClassSpellLevelsQueryVariables>
> = ({ data, variables: { index } }) => (
  <>
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
  </>
);

const ClassSpellLevels = withCell<
  ClassSpellLevelsQuery,
  ClassSpellLevelsQueryVariables
>({
  QUERY: ClassSpellLevelsDocument,
  Success: ClassSpellLevelsSuccess,
  Loading: ClassSpellLevelLoading,
});

export default ClassSpellLevels;
