import React, { FC } from 'react';

const SpellDetailsSkeleton: FC = () => (
  <div className="animate-pulse">
    <div className="flex flex-col flex-nowrap px-4 pt-8 pb-10 my-4 space-y-4 max-w-prose max-h-screen border border-gray-400">
      <div className="flex flex-row flex-nowrap">
        <div className="w-10 h-10 bg-gray-400 rounded-full" />
        <div className="flex flex-col flex-nowrap flex-1 justify-center items-center px-4 text-center">
          <div className="mb-2 w-full max-w-xs h-6 bg-gray-400 rounded"></div>
          <div className="w-6 h-4 bg-gray-400 rounded"></div>
        </div>
        <div className="w-10 h-10 bg-gray-400 rounded-full" />
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
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
      </div>
      <div className="flex flex-col flex-nowrap justify-center items-center space-y-4">
        <div className="flex flex-row flex-nowrap justify-start items-center p-2 space-x-4 w-full border-t border-b border-fade">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
      </div>
    </div>
  </div>
);

export default SpellDetailsSkeleton;
