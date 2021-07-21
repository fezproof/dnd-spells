import React, { FC } from 'react';
import {
  ClassSpellListDocument,
  ClassSpellListQuery,
  ClassSpellListQueryVariables,
} from '../../generated/graphql';
import { CellSuccessProps, withCell } from '../../utils/withCell';
import SpellDetails from '../SpellDetails';
import SpellDetailsSkeleton from '../SpellDetails/SpellDetailsSkeleton';

const ClassSpellListLoading: FC = () => (
  <div>
    <SpellDetailsSkeleton />
  </div>
);

const ClassSpellListSuccess: FC<
  CellSuccessProps<ClassSpellListQuery, ClassSpellListQueryVariables>
> = ({ data }) => (
  <div>
    {data?.spells && data.spells.length
      ? data?.spells.map((spell) => (
          <SpellDetails key={spell.index} spell={spell} />
        ))
      : 'No spells'}
  </div>
);

const ClassSpellList = withCell<
  ClassSpellListQuery,
  ClassSpellListQueryVariables
>({
  QUERY: ClassSpellListDocument,
  Success: ClassSpellListSuccess,
  Loading: ClassSpellListLoading,
});

export default ClassSpellList;
