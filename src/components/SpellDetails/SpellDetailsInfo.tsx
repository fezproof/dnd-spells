import React, { FC } from 'react';
import { Maybe, SpellDetailsInfoFragment } from '../../generated/graphql';
import ClockIcon from '@fortawesome/fontawesome-free/svgs/solid/clock.svg';
import BullseyeIcon from '@fortawesome/fontawesome-free/svgs/solid/hourglass.svg';
import HourglassIcon from '@fortawesome/fontawesome-free/svgs/solid/bullseye.svg';
import HeartbeatIcon from '@fortawesome/fontawesome-free/svgs/solid/heartbeat.svg';
import ProjectIcon from '@fortawesome/fontawesome-free/svgs/solid/project-diagram.svg';

const SpellInfo: FC<{ icon: string; text?: Maybe<string> }> = ({
  text,
  icon,
}) => (
  <div className="flex flex-col flex-nowrap justify-center items-center text-sm text-center capitalize">
    <img src={icon} className="mb-1 w-5 h-5" />
    {text}
  </div>
);

const SpellDetailsInfo: FC<SpellDetailsInfoFragment> = ({
  casting_time,
  range,
  duration,
  concentration,
  components,
}) => (
  <div className="grid grid-cols-5 justify-center items-center p-3 border-t border-b border-black">
    <SpellInfo icon={ClockIcon} text={casting_time}>
      <img src={ClockIcon} className="w-5 h-5" />
      {casting_time}
    </SpellInfo>
    <SpellInfo icon={BullseyeIcon} text={range}>
      <img src={BullseyeIcon} className="w-5 h-5" />
      {range}
    </SpellInfo>
    <SpellInfo icon={HourglassIcon} text={duration}>
      <img src={HourglassIcon} className="w-5 h-5" />
      {duration}
    </SpellInfo>
    <SpellInfo icon={HeartbeatIcon} text={concentration ? 'yes' : 'no'}>
      <img src={HeartbeatIcon} className="w-5 h-5" />
      {concentration ? 'yes' : 'no'}
    </SpellInfo>
    <SpellInfo icon={ProjectIcon} text={components?.join(' ')}>
      <img src={ProjectIcon} className="w-5 h-5" />
      {components}
    </SpellInfo>
  </div>
);

export default SpellDetailsInfo;
