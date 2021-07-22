import classNames from 'classnames';
import React, { FC } from 'react';

const SkeletonImage: FC<{ className?: string }> = ({ className }) => (
  <div className={classNames(className, 'bg-gray-400 rounded-full')} />
);

export default SkeletonImage;
