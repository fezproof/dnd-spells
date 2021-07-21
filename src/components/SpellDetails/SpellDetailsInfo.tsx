import HourglassIcon from '@fortawesome/fontawesome-free/svgs/solid/bullseye.svg';
import ClockIcon from '@fortawesome/fontawesome-free/svgs/solid/clock.svg';
import HeartbeatIcon from '@fortawesome/fontawesome-free/svgs/solid/heartbeat.svg';
import BullseyeIcon from '@fortawesome/fontawesome-free/svgs/solid/hourglass.svg';
import ProjectIcon from '@fortawesome/fontawesome-free/svgs/solid/project-diagram.svg';
import React, { FC } from 'react';
import { Maybe, SpellDetailsInfoFragment } from '../../generated/graphql';

const SpellInfo: FC<{ icon: string; text?: Maybe<string>; type: string }> = ({
  text,
  icon,
  type,
}) => (
  <div className="flex flex-col flex-nowrap justify-center items-center min-w-0 text-sm text-center">
    <img
      src={icon}
      className="mb-1 w-5 h-5"
      alt={text || 'info'}
      title={`${type}: ${text || 'info'}`}
    />
    <span className="overflow-hidden max-w-[8ch] sm:max-w-none overflow-ellipsis whitespace-nowrap">
      {text}
    </span>
  </div>
);

const SpellDetailsInfo: FC<SpellDetailsInfoFragment> = ({
  casting_time,
  range,
  duration,
  concentration,
  components,
}) => (
  <div className="grid grid-cols-5 gap-2 justify-center items-center p-3 border-t border-b border-fade">
    <SpellInfo type="Cast time" icon={ClockIcon} text={casting_time} />
    <SpellInfo type="Range" icon={BullseyeIcon} text={range} />
    <SpellInfo type="Duration" icon={HourglassIcon} text={duration} />
    <SpellInfo
      type="Concentration"
      icon={HeartbeatIcon}
      text={concentration ? 'Yes' : 'No'}
    />
    <SpellInfo
      type="Components"
      icon={ProjectIcon}
      text={components?.join(' ')}
    />
  </div>
);

export default SpellDetailsInfo;
