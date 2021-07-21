import React, { FC } from 'react';
import ProjectIcon from '@fortawesome/fontawesome-free/svgs/solid/project-diagram.svg';
import D20Icon from '@fortawesome/fontawesome-free/svgs/solid/dice-d20.svg';
import BookIcon from '@fortawesome/fontawesome-free/svgs/solid/book.svg';

import { SpellDetailsBannersFragment } from '../../generated/graphql';

const SpellDetailsBanner: FC<{ icon: string; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex flex-row flex-nowrap justify-start items-center p-2 space-x-4 w-full border-t border-b border-fade">
    <img
      src={icon}
      alt="Material"
      className="inline-block w-8 h-8"
      height={32}
      width={32}
    />
    <span className="flex-1">{text}</span>
  </div>
);

const SpellDetailsBanners: FC<SpellDetailsBannersFragment> = ({
  dc,
  material,
  ritual,
}) => (
  <div className="flex flex-col flex-nowrap justify-center items-center space-y-4">
    {dc?.dc_type && (
      <SpellDetailsBanner
        icon={D20Icon}
        text={`${dc.dc_type.name || 'DEX'} saving throw`}
      />
    )}
    {material && <SpellDetailsBanner icon={ProjectIcon} text={material} />}
    {ritual && <SpellDetailsBanner icon={BookIcon} text="Ritual spell" />}
  </div>
);

export default SpellDetailsBanners;
