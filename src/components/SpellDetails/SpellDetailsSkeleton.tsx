import React, { FC } from 'react';
import SkeletonImage from '../Skeletons/SkeletonImage';
import SkeletonText from '../Skeletons/SkeletonText';

const SpellDetailsSkeleton: FC = () => (
  <div className="flex flex-row flex-nowrap justify-center items-center w-full animate-pulse">
    <div className="flex flex-col flex-nowrap flex-1 px-4 pt-8 pb-10 my-4 space-y-4 max-w-prose max-h-screen border border-gray-400">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex-1">
          <div className="mb-1 w-2/3 h-6 bg-gray-400 rounded"></div>
          <div className="w-1/6 h-4 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center place-self-end text-sm text-center">
          <SkeletonImage className="mb-1 w-8 h-8" />
          <div className="w-full h-2 bg-gray-400 rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 justify-center items-center p-3 border-t border-b border-fade">
        <div className="flex flex-col flex-nowrap justify-center items-center min-w-0 text-sm text-center">
          <div className="mb-1 w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="w-3/4 h-2 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center min-w-0 text-sm text-center">
          <div className="mb-1 w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="w-3/4 h-2 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center min-w-0 text-sm text-center">
          <div className="mb-1 w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="w-3/4 h-2 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center min-w-0 text-sm text-center">
          <div className="mb-1 w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="w-3/4 h-2 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center min-w-0 text-sm text-center">
          <div className="mb-1 w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="w-3/4 h-2 bg-gray-400 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <SkeletonText lines={6} />
      </div>
      <div className="flex flex-col flex-nowrap justify-center items-center space-y-4">
        <div className="flex flex-row flex-nowrap justify-start items-center p-2 space-x-4 w-full border-t border-b border-fade">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <SkeletonText lines={2} />
      </div>
    </div>
  </div>
);

export default SpellDetailsSkeleton;
