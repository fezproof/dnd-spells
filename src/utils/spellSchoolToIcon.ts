import AbjurationIcon from '../assets/schools/abjuration.svg';
import ConjurationIcon from '../assets/schools/conjuration.svg';
import DivinationIcon from '../assets/schools/divination.svg';
import EnchantmentIcon from '../assets/schools/enchantment.svg';
import EvocationIcon from '../assets/schools/evocation.svg';
import IllusionIcon from '../assets/schools/illusion.svg';
import NecromancyIcon from '../assets/schools/necromancy.svg';
import TransmutationIcon from '../assets/schools/transmutation.svg';

const spellSchoolToIcon = (school: string) => {
  if (school.toLowerCase() === 'abjuration') return AbjurationIcon;
  if (school.toLowerCase() === 'conjuration') return ConjurationIcon;
  if (school.toLowerCase() === 'divination') return DivinationIcon;
  if (school.toLowerCase() === 'enchantment') return EnchantmentIcon;
  if (school.toLowerCase() === 'evocation') return EvocationIcon;
  if (school.toLowerCase() === 'illusion') return IllusionIcon;
  if (school.toLowerCase() === 'necromancy') return NecromancyIcon;
  if (school.toLowerCase() === 'transmutation') return TransmutationIcon;
  return undefined;
};

export default spellSchoolToIcon;
