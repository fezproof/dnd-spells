import React, { FC } from 'react';
import {
  ClassSpellListDocument,
  ClassSpellListQuery,
  ClassSpellListQueryVariables,
} from '../../generated/graphql';
import { CellSuccessProps, withCell } from '../../utils/withCell';
import SpellDetails from '../SpellDetails';
import SpellDetailsSkeleton from '../SpellDetails/SpellDetailsSkeleton';

const ClassSpellListContainer: FC = ({ children }) => (
  <div className="flex flex-col justify-center items-center">{children}</div>
);

const ClassSpellListLoading: FC = () => <SpellDetailsSkeleton />;

const ClassSpellListSuccess: FC<
  CellSuccessProps<ClassSpellListQuery, ClassSpellListQueryVariables>
> = ({ data }) => (
  <>
    {data?.spells && data.spells.length ? (
      data?.spells.map((spell) => (
        <SpellDetails key={spell.index} spell={spell} />
      ))
    ) : (
      <div className="italic">- No spells -</div>
    )}
  </>
);

const ClassSpellList = withCell<
  ClassSpellListQuery,
  ClassSpellListQueryVariables
>({
  QUERY: ClassSpellListDocument,
  Success: ClassSpellListSuccess,
  Loading: ClassSpellListLoading,
  Container: ClassSpellListContainer,
});

export default ClassSpellList;
