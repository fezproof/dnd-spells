import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  ClassesDocument,
  ClassesQuery,
  ClassesQueryVariables,
} from '../../generated/graphql';
import classToIcon from '../../utils/classToIcon';
import { CellSuccessProps, withCell } from '../../utils/withCell';
import SkeletonImage from '../Skeletons/SkeletonImage';
import SkeletonText from '../Skeletons/SkeletonText';

const ClassListItem: FC = ({ children }) => (
  <div className="flex flex-col flex-nowrap justify-center items-center p-4 space-y-4 w-40 h-52 hover:bg-gray-200 rounded-md border border-gray-400">
    {children}
  </div>
);

const ClassListContainer: FC = ({ children }) => (
  <main className="flex flex-row flex-wrap gap-10 justify-center items-center mx-auto">
    {children}
  </main>
);

const ClassListLoading: FC = () => (
  <>
    {new Array(12).fill(0).map((_, index) => {
      return (
        <div key={index} className="animate-pulse">
          <ClassListItem>
            <SkeletonImage className="w-20 h-20" />
            <SkeletonText lines={1} />
          </ClassListItem>
        </div>
      );
    })}
  </>
);

const ClassListSuccess: FC<
  CellSuccessProps<ClassesQuery, ClassesQueryVariables>
> = ({ data }) => (
  <>
    {data?.classes.map(({ index, name }) => {
      return (
        index && (
          <Link key={index} to={`class/${index}/`}>
            <ClassListItem>
              <img
                src={classToIcon(index)}
                alt="name"
                className="w-20 h-20"
                height={80}
                width={80}
              />
              <h2 className="text-2xl">{name}</h2>
            </ClassListItem>
          </Link>
        )
      );
    })}
  </>
);

const ClassList = withCell<ClassesQuery, ClassesQueryVariables>({
  QUERY: ClassesDocument,
  Success: ClassListSuccess,
  Loading: ClassListLoading,
  Container: ClassListContainer,
});

export default ClassList;
