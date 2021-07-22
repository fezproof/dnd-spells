import React, { FC } from 'react';
import {
  ClassDescriptionDocument,
  ClassDescriptionQuery,
  ClassDescriptionQueryVariables,
} from '../../generated/graphql';
import { CellSuccessProps, withCell } from '../../utils/withCell';
import SkeletonText from '../Skeletons/SkeletonText';

const ClassDescriptionContainer: FC = ({ children }) => (
  <div className="mx-auto max-w-prose">{children}</div>
);

const ClassDescriptionLoading: FC = () => (
  <div className="animate-pulse">
    <div className="mx-auto mb-8 w-20 h-10 bg-gray-400 rounded" />
    <div className="mb-4 text-2xl font-bold">Spellcasting</div>
    <div className="mb-4 w-24 h-6 bg-gray-400 rounded" />
    <div>
      <div className="mb-2 w-24 h-6 bg-gray-400 rounded" />
      <div className="mb-4 space-y-2">
        <SkeletonText lines={10} />
      </div>
      <div className="mb-2 w-24 h-6 bg-gray-400 rounded" />
      <div className="mb-4 space-y-2">
        <SkeletonText lines={10} />
      </div>
    </div>
  </div>
);

const ClassDescriptionSuccess: FC<
  CellSuccessProps<ClassDescriptionQuery, ClassDescriptionQueryVariables>
> = ({ data }) => (
  <>
    <h2 className="mb-8 text-4xl font-bold text-center">{data?.class?.name}</h2>
    <h3 className="mb-4 text-2xl font-bold">Spellcasting</h3>
    <p className="mb-4 text-lg font-semibold">
      Starting Level: {data?.class?.spellcasting?.level}
    </p>
    <div>
      {data?.class?.spellcasting?.info?.map((spellinfo, index) => (
        <div key={index}>
          <h4 className="mb-2 text-lg font-semibold">{spellinfo?.name}</h4>
          {spellinfo?.desc?.map((desc, index) => (
            <p key={index} className="mb-2 last:mb-6">
              {desc}
            </p>
          ))}
        </div>
      ))}
    </div>
  </>
);

const ClassDescription = withCell<
  ClassDescriptionQuery,
  ClassDescriptionQueryVariables
>({
  QUERY: ClassDescriptionDocument,
  Success: ClassDescriptionSuccess,
  Container: ClassDescriptionContainer,
  Loading: ClassDescriptionLoading,
});

export default ClassDescription;
