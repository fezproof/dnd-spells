import BarbarianIcon from '../assets/classes/barbarian.svg';
import ClericIcon from '../assets/classes/cleric.svg';
import DruidIcon from '../assets/classes/druid.svg';
import BardIcon from '../assets/classes/bard.svg';
import FighterIcon from '../assets/classes/fighter.svg';
import PaladinIcon from '../assets/classes/paladin.svg';
import MonkIcon from '../assets/classes/monk.svg';
import RangerIcon from '../assets/classes/ranger.svg';
import SorcererIcon from '../assets/classes/sorcerer.svg';
import RogueIcon from '../assets/classes/rogue.svg';
import WarlockIcon from '../assets/classes/warlock.svg';
import WizardIcon from '../assets/classes/wizard.svg';

const classToIcon = (classIndex: string) => {
  if (classIndex === 'barbarian') return BarbarianIcon;
  if (classIndex === 'cleric') return ClericIcon;
  if (classIndex === 'druid') return DruidIcon;
  if (classIndex === 'bard') return BardIcon;
  if (classIndex === 'fighter') return FighterIcon;
  if (classIndex === 'paladin') return PaladinIcon;
  if (classIndex === 'monk') return MonkIcon;
  if (classIndex === 'ranger') return RangerIcon;
  if (classIndex === 'sorcerer') return SorcererIcon;
  if (classIndex === 'rogue') return RogueIcon;
  if (classIndex === 'warlock') return WarlockIcon;
  if (classIndex === 'wizard') return WizardIcon;
  return undefined;
};

export default classToIcon;
