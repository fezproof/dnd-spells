import React, { FC } from 'react';

const SkeletonText: FC<{ lines: number }> = ({ lines }) => (
  <>
    {new Array(lines)
      .fill(0)
      .map((_, index, arr) =>
        index !== arr.length - 1 || arr.length === 1 ? (
          <div className="w-full h-4 bg-gray-400 rounded" />
        ) : (
          <div className="w-5/6 h-4 bg-gray-400 rounded" />
        ),
      )}
  </>
);

export default SkeletonText;
