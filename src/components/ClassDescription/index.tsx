import React, { FC } from 'react';
import {
  ClassDescriptionQueryVariables,
  useClassDescriptionQuery,
} from '../../generated/graphql';

const ClassDescription: FC<ClassDescriptionQueryVariables> = ({ index }) => {
  const [result] = useClassDescriptionQuery({
    variables: {
      index,
    },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="mx-auto max-w-prose">
      <h2 className="mb-8 text-4xl font-bold text-center">
        {data?.class?.name}
      </h2>
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
    </div>
  );
};

export default ClassDescription;
