import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
};

export type AbilityScore = {
  __typename?: 'AbilityScore';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars['String']>;
};

export type AbilityScoreSkills = {
  __typename?: 'AbilityScoreSkills';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type Alignment = {
  __typename?: 'Alignment';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Background = {
  __typename?: 'Background';
  _id: Scalars['String'];
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  starting_proficiencies?: Maybe<Array<Maybe<BackgroundStarting_Proficiencies>>>;
  language_options?: Maybe<BackgroundLanguage_Options>;
  url?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<BackgroundStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<BackgroundStarting_Equipment_Options>>>;
  feature?: Maybe<BackgroundFeature>;
  personality_traits?: Maybe<BackgroundPersonality_Traits>;
  ideals?: Maybe<BackgroundIdeals>;
  bonds?: Maybe<BackgroundBonds>;
  flaws?: Maybe<BackgroundFlaws>;
};

export type BackgroundBonds = {
  __typename?: 'BackgroundBonds';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BackgroundFlaws = {
  __typename?: 'BackgroundFlaws';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdeals = {
  __typename?: 'BackgroundIdeals';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundIdealsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdealsFrom = {
  __typename?: 'BackgroundIdealsFrom';
  desc?: Maybe<Scalars['String']>;
  alignments?: Maybe<Array<Maybe<BackgroundIdealsFromAlignments>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type BackgroundIdealsFromAlignments = {
  __typename?: 'BackgroundIdealsFromAlignments';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type BackgroundLanguage_Options = {
  __typename?: 'BackgroundLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundLanguage_OptionsFrom = {
  __typename?: 'BackgroundLanguage_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type BackgroundPersonality_Traits = {
  __typename?: 'BackgroundPersonality_traits';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment = {
  __typename?: 'BackgroundStarting_equipment';
  equipment?: Maybe<BackgroundStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_EquipmentEquipment = {
  __typename?: 'BackgroundStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_Options = {
  __typename?: 'BackgroundStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_OptionsFrom = {
  __typename?: 'BackgroundStarting_equipment_optionsFrom';
  equipment?: Maybe<BackgroundStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'BackgroundStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Proficiencies = {
  __typename?: 'BackgroundStarting_proficiencies';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type Class = {
  __typename?: 'Class';
  _id: Scalars['String'];
  class_levels?: Maybe<Scalars['String']>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<ClassProficiencies>>>;
  proficiency_choices?: Maybe<Array<Maybe<ClassProficiency_Choices>>>;
  saving_throws?: Maybe<Array<Maybe<ClassSaving_Throws>>>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<ClassStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<ClassStarting_Equipment_Options>>>;
  subclasses?: Maybe<Array<Maybe<ClassSubclasses>>>;
  url?: Maybe<Scalars['String']>;
};

export type ClassProficiencies = {
  __typename?: 'ClassProficiencies';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassProficiency_Choices = {
  __typename?: 'ClassProficiency_choices';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassProficiency_ChoicesFrom = {
  __typename?: 'ClassProficiency_choicesFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassSaving_Throws = {
  __typename?: 'ClassSaving_throws';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info?: Maybe<Array<Maybe<ClassSpellcastingInfo>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<ClassSpellcastingSpellcasting_Ability>;
};

export type ClassSpellcastingInfo = {
  __typename?: 'ClassSpellcastingInfo';
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassSpellcastingSpellcasting_Ability = {
  __typename?: 'ClassSpellcastingSpellcasting_ability';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment = {
  __typename?: 'ClassStarting_equipment';
  equipment?: Maybe<ClassStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassStarting_EquipmentEquipment = {
  __typename?: 'ClassStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment_Options = {
  __typename?: 'ClassStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassStarting_Equipment_OptionsFrom = {
  __typename?: 'ClassStarting_equipment_optionsFrom';
  equipment?: Maybe<ClassStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ClassStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'ClassStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSubclasses = {
  __typename?: 'ClassSubclasses';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type Condition = {
  __typename?: 'Condition';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DamageType = {
  __typename?: 'DamageType';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  _id: Scalars['String'];
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<EquipmentArmor_Class>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<EquipmentContents>>>;
  cost?: Maybe<EquipmentCost>;
  damage?: Maybe<EquipmentDamage>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<EquipmentEquipment_Category>;
  gear_category?: Maybe<EquipmentGear_Category>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<EquipmentProperties>>>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<EquipmentRange>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<EquipmentSpeed>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<EquipmentThrow_Range>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<EquipmentTwo_Handed_Damage>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type EquipmentArmor_Class = {
  __typename?: 'EquipmentArmor_class';
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  _id: Scalars['String'];
  equipment?: Maybe<Array<Maybe<EquipmentCategoryEquipment>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentCategoryEquipment = {
  __typename?: 'EquipmentCategoryEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type EquipmentContents = {
  __typename?: 'EquipmentContents';
  item?: Maybe<EquipmentContentsItem>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type EquipmentContentsItem = {
  __typename?: 'EquipmentContentsItem';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentCost = {
  __typename?: 'EquipmentCost';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentDamage = {
  __typename?: 'EquipmentDamage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<EquipmentDamageDamage_Type>;
};

export type EquipmentDamageDamage_Type = {
  __typename?: 'EquipmentDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentEquipment_Category = {
  __typename?: 'EquipmentEquipment_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentGear_Category = {
  __typename?: 'EquipmentGear_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentProperties = {
  __typename?: 'EquipmentProperties';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type EquipmentRange = {
  __typename?: 'EquipmentRange';
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type EquipmentSpeed = {
  __typename?: 'EquipmentSpeed';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentThrow_Range = {
  __typename?: 'EquipmentThrow_range';
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type EquipmentTwo_Handed_Damage = {
  __typename?: 'EquipmentTwo_handed_damage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<EquipmentTwo_Handed_DamageDamage_Type>;
};

export type EquipmentTwo_Handed_DamageDamage_Type = {
  __typename?: 'EquipmentTwo_handed_damageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Feature = {
  __typename?: 'Feature';
  _id: Scalars['String'];
  choice?: Maybe<FeatureChoice>;
  class?: Maybe<FeatureClass>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  parent?: Maybe<FeatureParent>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FeaturePrerequisites>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<FeatureSubclass>;
  feature_specific?: Maybe<FeatureFeature_Specific>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureChoice = {
  __typename?: 'FeatureChoice';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureChoiceFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureChoiceFrom = {
  __typename?: 'FeatureChoiceFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FeatureClass = {
  __typename?: 'FeatureClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureFeature_Specific = {
  __typename?: 'FeatureFeature_specific';
  subfeature_options?: Maybe<FeatureFeature_SpecificSubfeature_Options>;
  expertise_options?: Maybe<FeatureFeature_SpecificExpertise_Options>;
};

export type FeatureFeature_SpecificExpertise_Options = {
  __typename?: 'FeatureFeature_specificExpertise_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureFeature_SpecificExpertise_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificExpertise_OptionsFrom = {
  __typename?: 'FeatureFeature_specificExpertise_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FeatureFeature_SpecificSubfeature_Options = {
  __typename?: 'FeatureFeature_specificSubfeature_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureFeature_SpecificSubfeature_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificSubfeature_OptionsFrom = {
  __typename?: 'FeatureFeature_specificSubfeature_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FeatureParent = {
  __typename?: 'FeatureParent';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeaturePrerequisites = {
  __typename?: 'FeaturePrerequisites';
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FeatureSubclass = {
  __typename?: 'FeatureSubclass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAbilityScoreFull_NameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAbilityScoreIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAbilityScoreInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyAbilityScoreOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyAbilityScoreInput>>;
  AND?: Maybe<Array<FilterFindManyAbilityScoreInput>>;
};

export type FilterFindManyAbilityScoreNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAbilityScoreOperatorsInput = {
  _id?: Maybe<FilterFindManyAbilityScore_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyAbilityScoreDescOperatorsInput>;
  full_name?: Maybe<FilterFindManyAbilityScoreFull_NameOperatorsInput>;
  index?: Maybe<FilterFindManyAbilityScoreIndexOperatorsInput>;
  name?: Maybe<FilterFindManyAbilityScoreNameOperatorsInput>;
  url?: Maybe<FilterFindManyAbilityScoreUrlOperatorsInput>;
};

export type FilterFindManyAbilityScoreSkillsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyAbilityScoreUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAbilityScore_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAlignmentAbbreviationOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAlignmentDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAlignmentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAlignmentInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyAlignmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyAlignmentInput>>;
  AND?: Maybe<Array<FilterFindManyAlignmentInput>>;
};

export type FilterFindManyAlignmentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAlignmentOperatorsInput = {
  _id?: Maybe<FilterFindManyAlignment_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyAlignmentDescOperatorsInput>;
  abbreviation?: Maybe<FilterFindManyAlignmentAbbreviationOperatorsInput>;
  index?: Maybe<FilterFindManyAlignmentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyAlignmentNameOperatorsInput>;
  url?: Maybe<FilterFindManyAlignmentUrlOperatorsInput>;
};

export type FilterFindManyAlignmentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyAlignment_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundBondsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundBondsFromOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundBondsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundBondsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundBondsChooseOperatorsInput>;
  from?: Maybe<FilterFindManyBackgroundBondsFromOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundBondsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundBondsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundFeatureDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundFeatureInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterFindManyBackgroundFeatureNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundFeatureOperatorsInput = {
  name?: Maybe<FilterFindManyBackgroundFeatureNameOperatorsInput>;
  desc?: Maybe<FilterFindManyBackgroundFeatureDescOperatorsInput>;
};

export type FilterFindManyBackgroundFlawsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundFlawsFromOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundFlawsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundFlawsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundFlawsChooseOperatorsInput>;
  from?: Maybe<FilterFindManyBackgroundFlawsFromOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundFlawsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundFlawsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundIdealsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundIdealsFromAlignmentsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyBackgroundIdealsFromInput = {
  desc?: Maybe<Scalars['String']>;
  alignments?: Maybe<Array<Maybe<FilterFindManyBackgroundIdealsFromAlignmentsInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyBackgroundIdealsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundIdealsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundIdealsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundIdealsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundIdealsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundInput = {
  _id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_ProficienciesInput>>>;
  language_options?: Maybe<FilterFindManyBackgroundLanguage_OptionsInput>;
  url?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsInput>>>;
  feature?: Maybe<FilterFindManyBackgroundFeatureInput>;
  personality_traits?: Maybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  ideals?: Maybe<FilterFindManyBackgroundIdealsInput>;
  bonds?: Maybe<FilterFindManyBackgroundBondsInput>;
  flaws?: Maybe<FilterFindManyBackgroundFlawsInput>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyBackgroundOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyBackgroundInput>>;
  AND?: Maybe<Array<FilterFindManyBackgroundInput>>;
};

export type FilterFindManyBackgroundLanguage_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundLanguage_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyBackgroundLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundLanguage_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBackgroundOperatorsInput = {
  _id?: Maybe<FilterFindManyBackground_IdOperatorsInput>;
  index?: Maybe<FilterFindManyBackgroundIndexOperatorsInput>;
  name?: Maybe<FilterFindManyBackgroundNameOperatorsInput>;
  language_options?: Maybe<FilterFindManyBackgroundLanguage_OptionsOperatorsInput>;
  url?: Maybe<FilterFindManyBackgroundUrlOperatorsInput>;
  feature?: Maybe<FilterFindManyBackgroundFeatureOperatorsInput>;
  personality_traits?: Maybe<FilterFindManyBackgroundPersonality_TraitsOperatorsInput>;
  ideals?: Maybe<FilterFindManyBackgroundIdealsOperatorsInput>;
  bonds?: Maybe<FilterFindManyBackgroundBondsOperatorsInput>;
  flaws?: Maybe<FilterFindManyBackgroundFlawsOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundPersonality_TraitsFromOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundPersonality_TraitsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundPersonality_TraitsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundPersonality_TraitsChooseOperatorsInput>;
  from?: Maybe<FilterFindManyBackgroundPersonality_TraitsFromOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundPersonality_TraitsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackgroundStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyBackgroundStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_ProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyBackgroundUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyBackground_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassClass_LevelsOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassHit_DieOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassInput = {
  _id?: Maybe<Scalars['String']>;
  class_levels?: Maybe<Scalars['String']>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyClassProficienciesInput>>>;
  proficiency_choices?: Maybe<Array<Maybe<FilterFindManyClassProficiency_ChoicesInput>>>;
  saving_throws?: Maybe<Array<Maybe<FilterFindManyClassSaving_ThrowsInput>>>;
  spellcasting?: Maybe<FilterFindManyClassSpellcastingInput>;
  spells?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindManyClassStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindManyClassStarting_Equipment_OptionsInput>>>;
  subclasses?: Maybe<Array<Maybe<FilterFindManyClassSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyClassOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyClassInput>>;
  AND?: Maybe<Array<FilterFindManyClassInput>>;
};

export type FilterFindManyClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyClassOperatorsInput = {
  _id?: Maybe<FilterFindManyClass_IdOperatorsInput>;
  class_levels?: Maybe<FilterFindManyClassClass_LevelsOperatorsInput>;
  hit_die?: Maybe<FilterFindManyClassHit_DieOperatorsInput>;
  index?: Maybe<FilterFindManyClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyClassNameOperatorsInput>;
  spellcasting?: Maybe<FilterFindManyClassSpellcastingOperatorsInput>;
  spells?: Maybe<FilterFindManyClassSpellsOperatorsInput>;
  url?: Maybe<FilterFindManyClassUrlOperatorsInput>;
};

export type FilterFindManyClassProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassProficiency_ChoicesFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassProficiency_ChoicesInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyClassProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassSaving_ThrowsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassSpellcastingInfoInput = {
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassSpellcastingInput = {
  info?: Maybe<Array<Maybe<FilterFindManyClassSpellcastingInfoInput>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityInput>;
};

export type FilterFindManyClassSpellcastingLevelOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassSpellcastingOperatorsInput = {
  level?: Maybe<FilterFindManyClassSpellcastingLevelOperatorsInput>;
  spellcasting_ability?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityOperatorsInput>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityOperatorsInput = {
  index?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityIndexOperatorsInput>;
  name?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityNameOperatorsInput>;
  url?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityUrlOperatorsInput>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassSpellsOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClassStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyClassStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyClassStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyClassStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassSubclassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyClass_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyConditionDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyConditionIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyConditionInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyConditionOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyConditionInput>>;
  AND?: Maybe<Array<FilterFindManyConditionInput>>;
};

export type FilterFindManyConditionNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyConditionOperatorsInput = {
  _id?: Maybe<FilterFindManyCondition_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyConditionDescOperatorsInput>;
  index?: Maybe<FilterFindManyConditionIndexOperatorsInput>;
  name?: Maybe<FilterFindManyConditionNameOperatorsInput>;
  url?: Maybe<FilterFindManyConditionUrlOperatorsInput>;
};

export type FilterFindManyConditionUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyCondition_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyDamageTypeDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyDamageTypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyDamageTypeInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyDamageTypeOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyDamageTypeInput>>;
  AND?: Maybe<Array<FilterFindManyDamageTypeInput>>;
};

export type FilterFindManyDamageTypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyDamageTypeOperatorsInput = {
  _id?: Maybe<FilterFindManyDamageType_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyDamageTypeDescOperatorsInput>;
  index?: Maybe<FilterFindManyDamageTypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyDamageTypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyDamageTypeUrlOperatorsInput>;
};

export type FilterFindManyDamageTypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyDamageType_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentArmor_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentArmor_ClassBaseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentArmor_ClassDex_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentArmor_ClassInput = {
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentArmor_ClassMax_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentArmor_ClassOperatorsInput = {
  base?: Maybe<FilterFindManyEquipmentArmor_ClassBaseOperatorsInput>;
  dex_bonus?: Maybe<FilterFindManyEquipmentArmor_ClassDex_BonusOperatorsInput>;
  max_bonus?: Maybe<FilterFindManyEquipmentArmor_ClassMax_BonusOperatorsInput>;
};

export type FilterFindManyEquipmentCapacityOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentCategoryEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyEquipmentCategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentCategoryInput = {
  _id?: Maybe<Scalars['String']>;
  equipment?: Maybe<Array<Maybe<FilterFindManyEquipmentCategoryEquipmentInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyEquipmentCategoryOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyEquipmentCategoryInput>>;
  AND?: Maybe<Array<FilterFindManyEquipmentCategoryInput>>;
};

export type FilterFindManyEquipmentCategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEquipmentCategoryOperatorsInput = {
  _id?: Maybe<FilterFindManyEquipmentCategory_IdOperatorsInput>;
  index?: Maybe<FilterFindManyEquipmentCategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentCategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentCategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentCategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentCategory_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentCategory_RangeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentContentsInput = {
  item?: Maybe<FilterFindManyEquipmentContentsItemInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyEquipmentContentsItemInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCostInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCostOperatorsInput = {
  quantity?: Maybe<FilterFindManyEquipmentCostQuantityOperatorsInput>;
  unit?: Maybe<FilterFindManyEquipmentCostUnitOperatorsInput>;
};

export type FilterFindManyEquipmentCostQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentCostUnitOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentDamageDamage_DiceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentDamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentDamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentDamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyEquipmentDamageDamage_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentDamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindManyEquipmentDamageDamage_TypeInput>;
};

export type FilterFindManyEquipmentDamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindManyEquipmentDamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindManyEquipmentDamageDamage_TypeOperatorsInput>;
};

export type FilterFindManyEquipmentDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentEquipment_CategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentEquipment_CategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentEquipment_CategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentGear_CategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentGear_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentGear_CategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentGear_CategoryOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentGear_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentGear_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentGear_CategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentGear_CategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentInput = {
  _id?: Maybe<Scalars['String']>;
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<FilterFindManyEquipmentArmor_ClassInput>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<FilterFindManyEquipmentContentsInput>>>;
  cost?: Maybe<FilterFindManyEquipmentCostInput>;
  damage?: Maybe<FilterFindManyEquipmentDamageInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindManyEquipmentEquipment_CategoryInput>;
  gear_category?: Maybe<FilterFindManyEquipmentGear_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<FilterFindManyEquipmentPropertiesInput>>>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<FilterFindManyEquipmentRangeInput>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<FilterFindManyEquipmentSpeedInput>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<FilterFindManyEquipmentThrow_RangeInput>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageInput>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyEquipmentInput>>;
  AND?: Maybe<Array<FilterFindManyEquipmentInput>>;
};

export type FilterFindManyEquipmentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindManyEquipment_IdOperatorsInput>;
  armor_category?: Maybe<FilterFindManyEquipmentArmor_CategoryOperatorsInput>;
  armor_class?: Maybe<FilterFindManyEquipmentArmor_ClassOperatorsInput>;
  capacity?: Maybe<FilterFindManyEquipmentCapacityOperatorsInput>;
  category_range?: Maybe<FilterFindManyEquipmentCategory_RangeOperatorsInput>;
  cost?: Maybe<FilterFindManyEquipmentCostOperatorsInput>;
  damage?: Maybe<FilterFindManyEquipmentDamageOperatorsInput>;
  desc?: Maybe<FilterFindManyEquipmentDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindManyEquipmentEquipment_CategoryOperatorsInput>;
  gear_category?: Maybe<FilterFindManyEquipmentGear_CategoryOperatorsInput>;
  index?: Maybe<FilterFindManyEquipmentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentNameOperatorsInput>;
  quantity?: Maybe<FilterFindManyEquipmentQuantityOperatorsInput>;
  range?: Maybe<FilterFindManyEquipmentRangeOperatorsInput>;
  special?: Maybe<FilterFindManyEquipmentSpecialOperatorsInput>;
  speed?: Maybe<FilterFindManyEquipmentSpeedOperatorsInput>;
  stealth_disadvantage?: Maybe<FilterFindManyEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: Maybe<FilterFindManyEquipmentStr_MinimumOperatorsInput>;
  throw_range?: Maybe<FilterFindManyEquipmentThrow_RangeOperatorsInput>;
  tool_category?: Maybe<FilterFindManyEquipmentTool_CategoryOperatorsInput>;
  two_handed_damage?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentUrlOperatorsInput>;
  vehicle_category?: Maybe<FilterFindManyEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: Maybe<FilterFindManyEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: Maybe<FilterFindManyEquipmentWeapon_RangeOperatorsInput>;
  weight?: Maybe<FilterFindManyEquipmentWeightOperatorsInput>;
};

export type FilterFindManyEquipmentPropertiesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyEquipmentQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentRangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentRangeLongOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentRangeNormalOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentRangeOperatorsInput = {
  long?: Maybe<FilterFindManyEquipmentRangeLongOperatorsInput>;
  normal?: Maybe<FilterFindManyEquipmentRangeNormalOperatorsInput>;
};

export type FilterFindManyEquipmentSpecialOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentSpeedInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentSpeedOperatorsInput = {
  quantity?: Maybe<FilterFindManyEquipmentSpeedQuantityOperatorsInput>;
  unit?: Maybe<FilterFindManyEquipmentSpeedUnitOperatorsInput>;
};

export type FilterFindManyEquipmentSpeedQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentSpeedUnitOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentStealth_DisadvantageOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentStr_MinimumOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentThrow_RangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentThrow_RangeLongOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentThrow_RangeNormalOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentThrow_RangeOperatorsInput = {
  long?: Maybe<FilterFindManyEquipmentThrow_RangeLongOperatorsInput>;
  normal?: Maybe<FilterFindManyEquipmentThrow_RangeNormalOperatorsInput>;
};

export type FilterFindManyEquipmentTool_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeInput>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput>;
};

export type FilterFindManyEquipmentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentVehicle_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentWeapon_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentWeapon_RangeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipmentWeightOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureChoiceChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureChoiceFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyFeatureChoiceInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyFeatureChoiceFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureChoiceOperatorsInput = {
  choose?: Maybe<FilterFindManyFeatureChoiceChooseOperatorsInput>;
  type?: Maybe<FilterFindManyFeatureChoiceTypeOperatorsInput>;
};

export type FilterFindManyFeatureChoiceTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureClassOperatorsInput = {
  index?: Maybe<FilterFindManyFeatureClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureClassNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureClassUrlOperatorsInput>;
};

export type FilterFindManyFeatureClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureFeature_SpecificInput = {
  subfeature_options?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsInput>;
  expertise_options?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsInput>;
};

export type FilterFindManyFeatureFeature_SpecificOperatorsInput = {
  subfeature_options?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsOperatorsInput>;
  expertise_options?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureInput = {
  _id?: Maybe<Scalars['String']>;
  choice?: Maybe<FilterFindManyFeatureChoiceInput>;
  class?: Maybe<FilterFindManyFeatureClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  parent?: Maybe<FilterFindManyFeatureParentInput>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FilterFindManyFeaturePrerequisitesInput>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<FilterFindManyFeatureSubclassInput>;
  feature_specific?: Maybe<FilterFindManyFeatureFeature_SpecificInput>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFeatureOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFeatureInput>>;
  AND?: Maybe<Array<FilterFindManyFeatureInput>>;
};

export type FilterFindManyFeatureLevelOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFeatureOperatorsInput = {
  _id?: Maybe<FilterFindManyFeature_IdOperatorsInput>;
  choice?: Maybe<FilterFindManyFeatureChoiceOperatorsInput>;
  class?: Maybe<FilterFindManyFeatureClassOperatorsInput>;
  desc?: Maybe<FilterFindManyFeatureDescOperatorsInput>;
  parent?: Maybe<FilterFindManyFeatureParentOperatorsInput>;
  index?: Maybe<FilterFindManyFeatureIndexOperatorsInput>;
  level?: Maybe<FilterFindManyFeatureLevelOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureNameOperatorsInput>;
  reference?: Maybe<FilterFindManyFeatureReferenceOperatorsInput>;
  subclass?: Maybe<FilterFindManyFeatureSubclassOperatorsInput>;
  feature_specific?: Maybe<FilterFindManyFeatureFeature_SpecificOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureUrlOperatorsInput>;
};

export type FilterFindManyFeatureParentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureParentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureParentOperatorsInput = {
  index?: Maybe<FilterFindManyFeatureParentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureParentNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureParentUrlOperatorsInput>;
};

export type FilterFindManyFeatureParentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeaturePrerequisitesInput = {
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyFeatureReferenceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureSubclassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureSubclassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureSubclassOperatorsInput = {
  index?: Maybe<FilterFindManyFeatureSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureSubclassUrlOperatorsInput>;
};

export type FilterFindManyFeatureSubclassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeatureUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFeature_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguageDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguageIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguageInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyLanguageOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyLanguageInput>>;
  AND?: Maybe<Array<FilterFindManyLanguageInput>>;
};

export type FilterFindManyLanguageNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLanguageOperatorsInput = {
  _id?: Maybe<FilterFindManyLanguage_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyLanguageDescOperatorsInput>;
  index?: Maybe<FilterFindManyLanguageIndexOperatorsInput>;
  name?: Maybe<FilterFindManyLanguageNameOperatorsInput>;
  script?: Maybe<FilterFindManyLanguageScriptOperatorsInput>;
  type?: Maybe<FilterFindManyLanguageTypeOperatorsInput>;
  typical_speakers?: Maybe<FilterFindManyLanguageTypical_SpeakersOperatorsInput>;
  url?: Maybe<FilterFindManyLanguageUrlOperatorsInput>;
};

export type FilterFindManyLanguageScriptOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguageTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguageTypical_SpeakersOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguageUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLanguage_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelAbility_Score_BonusesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLevelClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClassOperatorsInput = {
  index?: Maybe<FilterFindManyLevelClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyLevelClassNameOperatorsInput>;
  url?: Maybe<FilterFindManyLevelClassUrlOperatorsInput>;
};

export type FilterFindManyLevelClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificAction_SurgesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificAura_RangeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificBardic_Inspiration_DieOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificBrutal_Critical_DiceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput = {
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyLevelClass_SpecificDestroy_Undead_CrOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificExtra_AttacksOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificFavored_EnemiesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificFavored_TerrainOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificIndomitable_UsesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificInput = {
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificInvocations_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificKi_PointsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsOperatorsInput = {
  dice_count?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificMetamagic_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificOperatorsInput = {
  action_surges?: Maybe<FilterFindManyLevelClass_SpecificAction_SurgesOperatorsInput>;
  arcane_recovery_levels?: Maybe<FilterFindManyLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput>;
  aura_range?: Maybe<FilterFindManyLevelClass_SpecificAura_RangeOperatorsInput>;
  bardic_inspiration_die?: Maybe<FilterFindManyLevelClass_SpecificBardic_Inspiration_DieOperatorsInput>;
  brutal_critical_dice?: Maybe<FilterFindManyLevelClass_SpecificBrutal_Critical_DiceOperatorsInput>;
  channel_divinity_charges?: Maybe<FilterFindManyLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput>;
  destroy_undead_cr?: Maybe<FilterFindManyLevelClass_SpecificDestroy_Undead_CrOperatorsInput>;
  extra_attacks?: Maybe<FilterFindManyLevelClass_SpecificExtra_AttacksOperatorsInput>;
  favored_enemies?: Maybe<FilterFindManyLevelClass_SpecificFavored_EnemiesOperatorsInput>;
  favored_terrain?: Maybe<FilterFindManyLevelClass_SpecificFavored_TerrainOperatorsInput>;
  indomitable_uses?: Maybe<FilterFindManyLevelClass_SpecificIndomitable_UsesOperatorsInput>;
  invocations_known?: Maybe<FilterFindManyLevelClass_SpecificInvocations_KnownOperatorsInput>;
  ki_points?: Maybe<FilterFindManyLevelClass_SpecificKi_PointsOperatorsInput>;
  magical_secrets_max_5?: Maybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput>;
  magical_secrets_max_7?: Maybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput>;
  magical_secrets_max_9?: Maybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput>;
  martial_arts?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsOperatorsInput>;
  metamagic_known?: Maybe<FilterFindManyLevelClass_SpecificMetamagic_KnownOperatorsInput>;
  mystic_arcanum_level_6?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput>;
  mystic_arcanum_level_7?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput>;
  mystic_arcanum_level_8?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput>;
  mystic_arcanum_level_9?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput>;
  rage_count?: Maybe<FilterFindManyLevelClass_SpecificRage_CountOperatorsInput>;
  rage_damage_bonus?: Maybe<FilterFindManyLevelClass_SpecificRage_Damage_BonusOperatorsInput>;
  sneak_attack?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackOperatorsInput>;
  song_of_rest_die?: Maybe<FilterFindManyLevelClass_SpecificSong_Of_Rest_DieOperatorsInput>;
  sorcery_points?: Maybe<FilterFindManyLevelClass_SpecificSorcery_PointsOperatorsInput>;
  unarmored_movement?: Maybe<FilterFindManyLevelClass_SpecificUnarmored_MovementOperatorsInput>;
  wild_shape_fly?: Maybe<FilterFindManyLevelClass_SpecificWild_Shape_FlyOperatorsInput>;
  wild_shape_max_cr?: Maybe<FilterFindManyLevelClass_SpecificWild_Shape_Max_CrOperatorsInput>;
  wild_shape_swim?: Maybe<FilterFindManyLevelClass_SpecificWild_Shape_SwimOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificRage_CountOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificRage_Damage_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackDice_CountOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackOperatorsInput = {
  dice_count?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificSong_Of_Rest_DieOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificSorcery_PointsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificUnarmored_MovementOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_FlyOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_Max_CrOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_SwimOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelFeature_ChoicesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyLevelFeaturesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyLevelIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelInput = {
  _id?: Maybe<Scalars['String']>;
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<FilterFindManyLevelClassInput>;
  class_specific?: Maybe<FilterFindManyLevelClass_SpecificInput>;
  feature_choices?: Maybe<Array<Maybe<FilterFindManyLevelFeature_ChoicesInput>>>;
  features?: Maybe<Array<Maybe<FilterFindManyLevelFeaturesInput>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<FilterFindManyLevelSpellcastingInput>;
  subclass?: Maybe<FilterFindManyLevelSubclassInput>;
  subclass_specific?: Maybe<FilterFindManyLevelSubclass_SpecificInput>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyLevelOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyLevelInput>>;
  AND?: Maybe<Array<FilterFindManyLevelInput>>;
};

export type FilterFindManyLevelLevelOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLevelOperatorsInput = {
  _id?: Maybe<FilterFindManyLevel_IdOperatorsInput>;
  ability_score_bonuses?: Maybe<FilterFindManyLevelAbility_Score_BonusesOperatorsInput>;
  class?: Maybe<FilterFindManyLevelClassOperatorsInput>;
  class_specific?: Maybe<FilterFindManyLevelClass_SpecificOperatorsInput>;
  index?: Maybe<FilterFindManyLevelIndexOperatorsInput>;
  level?: Maybe<FilterFindManyLevelLevelOperatorsInput>;
  prof_bonus?: Maybe<FilterFindManyLevelProf_BonusOperatorsInput>;
  spellcasting?: Maybe<FilterFindManyLevelSpellcastingOperatorsInput>;
  subclass?: Maybe<FilterFindManyLevelSubclassOperatorsInput>;
  subclass_specific?: Maybe<FilterFindManyLevelSubclass_SpecificOperatorsInput>;
  url?: Maybe<FilterFindManyLevelUrlOperatorsInput>;
};

export type FilterFindManyLevelProf_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingCantrips_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingInput = {
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelSpellcastingOperatorsInput = {
  cantrips_known?: Maybe<FilterFindManyLevelSpellcastingCantrips_KnownOperatorsInput>;
  spell_slots_level_1?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_1OperatorsInput>;
  spell_slots_level_2?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_2OperatorsInput>;
  spell_slots_level_3?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_3OperatorsInput>;
  spell_slots_level_4?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_4OperatorsInput>;
  spell_slots_level_5?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_5OperatorsInput>;
  spell_slots_level_6?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_6OperatorsInput>;
  spell_slots_level_7?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_7OperatorsInput>;
  spell_slots_level_8?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_8OperatorsInput>;
  spell_slots_level_9?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_9OperatorsInput>;
  spells_known?: Maybe<FilterFindManyLevelSpellcastingSpells_KnownOperatorsInput>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_1OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_2OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_3OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_4OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_5OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_6OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_7OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_8OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_9OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSpellcastingSpells_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSubclassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLevelSubclassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSubclassOperatorsInput = {
  index?: Maybe<FilterFindManyLevelSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyLevelSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindManyLevelSubclassUrlOperatorsInput>;
};

export type FilterFindManyLevelSubclassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSubclass_SpecificAura_RangeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelSubclass_SpecificOperatorsInput = {
  additional_magical_secrets_max_lvl?: Maybe<FilterFindManyLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput>;
  aura_range?: Maybe<FilterFindManyLevelSubclass_SpecificAura_RangeOperatorsInput>;
};

export type FilterFindManyLevelUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevel_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItemDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItemEquipment_CategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItemEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMagicItemEquipment_CategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItemEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindManyMagicItemEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyMagicItemEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyMagicItemEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindManyMagicItemEquipment_CategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItemIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItemInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindManyMagicItemEquipment_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMagicItemOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMagicItemInput>>;
  AND?: Maybe<Array<FilterFindManyMagicItemInput>>;
};

export type FilterFindManyMagicItemNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMagicItemOperatorsInput = {
  _id?: Maybe<FilterFindManyMagicItem_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyMagicItemDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindManyMagicItemEquipment_CategoryOperatorsInput>;
  index?: Maybe<FilterFindManyMagicItemIndexOperatorsInput>;
  name?: Maybe<FilterFindManyMagicItemNameOperatorsInput>;
  url?: Maybe<FilterFindManyMagicItemUrlOperatorsInput>;
};

export type FilterFindManyMagicItemUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicItem_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicSchoolDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicSchoolIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicSchoolInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMagicSchoolOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMagicSchoolInput>>;
  AND?: Maybe<Array<FilterFindManyMagicSchoolInput>>;
};

export type FilterFindManyMagicSchoolNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMagicSchoolOperatorsInput = {
  _id?: Maybe<FilterFindManyMagicSchool_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyMagicSchoolDescOperatorsInput>;
  index?: Maybe<FilterFindManyMagicSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindManyMagicSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindManyMagicSchoolUrlOperatorsInput>;
};

export type FilterFindManyMagicSchoolUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMagicSchool_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterActionsDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsDamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindManyMonsterActionsDamageDamage_TypeInput>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterActionsInput = {
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<FilterFindManyMonsterActionsDamageInput>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterAlignmentOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterArmor_ClassOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterChallenge_RatingOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterCharismaOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterCondition_ImmunitiesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterConstitutionOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterDexterityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterFormsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterHit_DiceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterHit_PointsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterInput = {
  _id?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<FilterFindManyMonsterActionsInput>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<FilterFindManyMonsterCondition_ImmunitiesInput>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<FilterFindManyMonsterFormsInput>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<FilterFindManyMonsterLegendary_ActionsInput>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyMonsterProficienciesInput>>>;
  reactions?: Maybe<Array<Maybe<FilterFindManyMonsterReactionsInput>>>;
  senses?: Maybe<FilterFindManyMonsterSensesInput>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<FilterFindManyMonsterSpecial_AbilitiesInput>>>;
  speed?: Maybe<FilterFindManyMonsterSpeedInput>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMonsterOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMonsterInput>>;
  AND?: Maybe<Array<FilterFindManyMonsterInput>>;
};

export type FilterFindManyMonsterIntelligenceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterLanguagesOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterLegendary_ActionsInput = {
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMonsterOperatorsInput = {
  _id?: Maybe<FilterFindManyMonster_IdOperatorsInput>;
  alignment?: Maybe<FilterFindManyMonsterAlignmentOperatorsInput>;
  armor_class?: Maybe<FilterFindManyMonsterArmor_ClassOperatorsInput>;
  challenge_rating?: Maybe<FilterFindManyMonsterChallenge_RatingOperatorsInput>;
  charisma?: Maybe<FilterFindManyMonsterCharismaOperatorsInput>;
  constitution?: Maybe<FilterFindManyMonsterConstitutionOperatorsInput>;
  dexterity?: Maybe<FilterFindManyMonsterDexterityOperatorsInput>;
  hit_dice?: Maybe<FilterFindManyMonsterHit_DiceOperatorsInput>;
  hit_points?: Maybe<FilterFindManyMonsterHit_PointsOperatorsInput>;
  index?: Maybe<FilterFindManyMonsterIndexOperatorsInput>;
  intelligence?: Maybe<FilterFindManyMonsterIntelligenceOperatorsInput>;
  languages?: Maybe<FilterFindManyMonsterLanguagesOperatorsInput>;
  name?: Maybe<FilterFindManyMonsterNameOperatorsInput>;
  senses?: Maybe<FilterFindManyMonsterSensesOperatorsInput>;
  size?: Maybe<FilterFindManyMonsterSizeOperatorsInput>;
  speed?: Maybe<FilterFindManyMonsterSpeedOperatorsInput>;
  strength?: Maybe<FilterFindManyMonsterStrengthOperatorsInput>;
  subtype?: Maybe<FilterFindManyMonsterSubtypeOperatorsInput>;
  type?: Maybe<FilterFindManyMonsterTypeOperatorsInput>;
  url?: Maybe<FilterFindManyMonsterUrlOperatorsInput>;
  wisdom?: Maybe<FilterFindManyMonsterWisdomOperatorsInput>;
  xp?: Maybe<FilterFindManyMonsterXpOperatorsInput>;
};

export type FilterFindManyMonsterProficienciesInput = {
  proficiency?: Maybe<FilterFindManyMonsterProficienciesProficiencyInput>;
  value?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterProficienciesProficiencyInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterReactionsInput = {
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterSensesBlindsightOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSensesDarkvisionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSensesInput = {
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterSensesOperatorsInput = {
  blindsight?: Maybe<FilterFindManyMonsterSensesBlindsightOperatorsInput>;
  darkvision?: Maybe<FilterFindManyMonsterSensesDarkvisionOperatorsInput>;
  passive_perception?: Maybe<FilterFindManyMonsterSensesPassive_PerceptionOperatorsInput>;
  tremorsense?: Maybe<FilterFindManyMonsterSensesTremorsenseOperatorsInput>;
  truesight?: Maybe<FilterFindManyMonsterSensesTruesightOperatorsInput>;
};

export type FilterFindManyMonsterSensesPassive_PerceptionOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSensesTremorsenseOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSensesTruesightOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSizeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSpecial_AbilitiesInput = {
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyMonsterSpeedBurrowOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSpeedClimbOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSpeedFlyOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSpeedHoverOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSpeedInput = {
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterSpeedOperatorsInput = {
  burrow?: Maybe<FilterFindManyMonsterSpeedBurrowOperatorsInput>;
  climb?: Maybe<FilterFindManyMonsterSpeedClimbOperatorsInput>;
  fly?: Maybe<FilterFindManyMonsterSpeedFlyOperatorsInput>;
  hover?: Maybe<FilterFindManyMonsterSpeedHoverOperatorsInput>;
  swim?: Maybe<FilterFindManyMonsterSpeedSwimOperatorsInput>;
  walk?: Maybe<FilterFindManyMonsterSpeedWalkOperatorsInput>;
};

export type FilterFindManyMonsterSpeedSwimOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSpeedWalkOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterStrengthOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterSubtypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterWisdomOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonsterXpOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyMonster_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProficiencyClassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyProficiencyIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProficiencyInput = {
  _id?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<FilterFindManyProficiencyClassesInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<FilterFindManyProficiencyRacesInput>>>;
  references?: Maybe<Array<Maybe<FilterFindManyProficiencyReferencesInput>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyProficiencyOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyProficiencyInput>>;
  AND?: Maybe<Array<FilterFindManyProficiencyInput>>;
};

export type FilterFindManyProficiencyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProficiencyOperatorsInput = {
  _id?: Maybe<FilterFindManyProficiency_IdOperatorsInput>;
  index?: Maybe<FilterFindManyProficiencyIndexOperatorsInput>;
  name?: Maybe<FilterFindManyProficiencyNameOperatorsInput>;
  type?: Maybe<FilterFindManyProficiencyTypeOperatorsInput>;
  url?: Maybe<FilterFindManyProficiencyUrlOperatorsInput>;
};

export type FilterFindManyProficiencyRacesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyProficiencyReferencesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyProficiencyTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProficiencyUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProficiency_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromInput = {
  ability_score?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsFromAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceAbility_Bonus_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindManyRaceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceAgeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceAlignmentOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceInput = {
  _id?: Maybe<Scalars['String']>;
  ability_bonus_options?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindManyRaceAbility_BonusesInput>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindManyRaceLanguage_OptionsInput>;
  languages?: Maybe<Array<Maybe<FilterFindManyRaceLanguagesInput>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindManyRaceStarting_ProficienciesInput>>>;
  starting_proficiency_options?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsInput>;
  subraces?: Maybe<Array<Maybe<FilterFindManyRaceSubracesInput>>>;
  traits?: Maybe<Array<Maybe<FilterFindManyRaceTraitsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRaceOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRaceInput>>;
  AND?: Maybe<Array<FilterFindManyRaceInput>>;
};

export type FilterFindManyRaceLanguage_DescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceLanguage_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceLanguage_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyRaceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyRaceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceLanguage_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceLanguagesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRaceOperatorsInput = {
  _id?: Maybe<FilterFindManyRace_IdOperatorsInput>;
  ability_bonus_options?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsOperatorsInput>;
  age?: Maybe<FilterFindManyRaceAgeOperatorsInput>;
  alignment?: Maybe<FilterFindManyRaceAlignmentOperatorsInput>;
  index?: Maybe<FilterFindManyRaceIndexOperatorsInput>;
  language_desc?: Maybe<FilterFindManyRaceLanguage_DescOperatorsInput>;
  language_options?: Maybe<FilterFindManyRaceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindManyRaceNameOperatorsInput>;
  size?: Maybe<FilterFindManyRaceSizeOperatorsInput>;
  size_description?: Maybe<FilterFindManyRaceSize_DescriptionOperatorsInput>;
  speed?: Maybe<FilterFindManyRaceSpeedOperatorsInput>;
  starting_proficiency_options?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsOperatorsInput>;
  url?: Maybe<FilterFindManyRaceUrlOperatorsInput>;
};

export type FilterFindManyRaceSizeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceSize_DescriptionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceSpeedOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceStarting_ProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceStarting_Proficiency_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRaceSubracesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceTraitsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRaceUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRace_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections?: Maybe<Array<Maybe<FilterFindManyRuleSubsectionsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRuleOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRuleInput>>;
  AND?: Maybe<Array<FilterFindManyRuleInput>>;
};

export type FilterFindManyRuleNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRuleOperatorsInput = {
  _id?: Maybe<FilterFindManyRule_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyRuleDescOperatorsInput>;
  index?: Maybe<FilterFindManyRuleIndexOperatorsInput>;
  name?: Maybe<FilterFindManyRuleNameOperatorsInput>;
  url?: Maybe<FilterFindManyRuleUrlOperatorsInput>;
};

export type FilterFindManyRuleSectionDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleSectionIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleSectionInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRuleSectionOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRuleSectionInput>>;
  AND?: Maybe<Array<FilterFindManyRuleSectionInput>>;
};

export type FilterFindManyRuleSectionNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRuleSectionOperatorsInput = {
  _id?: Maybe<FilterFindManyRuleSection_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyRuleSectionDescOperatorsInput>;
  index?: Maybe<FilterFindManyRuleSectionIndexOperatorsInput>;
  name?: Maybe<FilterFindManyRuleSectionNameOperatorsInput>;
  url?: Maybe<FilterFindManyRuleSectionUrlOperatorsInput>;
};

export type FilterFindManyRuleSectionUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleSection_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRuleSubsectionsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyRuleUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRule_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySpellArea_Of_EffectInput = {
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellClassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySpellDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellDamageInput = {
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<FilterFindManySpellDamageDamage_TypeInput>;
};

export type FilterFindManySpellDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellDcInput = {
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<FilterFindManySpellDcDc_TypeInput>;
  desc?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellInput = {
  _id?: Maybe<Scalars['String']>;
  area_of_effect?: Maybe<FilterFindManySpellArea_Of_EffectInput>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<FilterFindManySpellClassesInput>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<FilterFindManySpellDamageInput>;
  dc?: Maybe<FilterFindManySpellDcInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<FilterFindManySpellSchoolInput>;
  subclasses?: Maybe<Array<Maybe<FilterFindManySpellSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySpellOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySpellInput>>;
  AND?: Maybe<Array<FilterFindManySpellInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySpellOperatorsInput = {
  _id?: Maybe<FilterFindManySpell_IdOperatorsInput>;
  school?: Maybe<FilterFindManySpellSchoolOperatorsInput>;
};

export type FilterFindManySpellSchoolIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySpellSchoolInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellSchoolNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySpellSchoolOperatorsInput = {
  index?: Maybe<FilterFindManySpellSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindManySpellSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindManySpellSchoolUrlOperatorsInput>;
};

export type FilterFindManySpellSchoolUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySpellSubclassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySpell_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyStartingEquipmentClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyStartingEquipmentClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyStartingEquipmentClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyStartingEquipmentClassOperatorsInput = {
  index?: Maybe<FilterFindManyStartingEquipmentClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyStartingEquipmentClassNameOperatorsInput>;
  url?: Maybe<FilterFindManyStartingEquipmentClassUrlOperatorsInput>;
};

export type FilterFindManyStartingEquipmentClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyStartingEquipmentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyStartingEquipmentInput = {
  _id?: Maybe<Scalars['String']>;
  class?: Maybe<FilterFindManyStartingEquipmentClassInput>;
  index?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindManyStartingEquipmentStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindManyStartingEquipmentStarting_Equipment_OptionsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyStartingEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyStartingEquipmentInput>>;
  AND?: Maybe<Array<FilterFindManyStartingEquipmentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyStartingEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindManyStartingEquipment_IdOperatorsInput>;
  class?: Maybe<FilterFindManyStartingEquipmentClassOperatorsInput>;
  index?: Maybe<FilterFindManyStartingEquipmentIndexOperatorsInput>;
  url?: Maybe<FilterFindManyStartingEquipmentUrlOperatorsInput>;
};

export type FilterFindManyStartingEquipmentStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyStartingEquipmentStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyStartingEquipmentStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyStartingEquipmentStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyStartingEquipmentStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyStartingEquipmentStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyStartingEquipmentStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyStartingEquipmentStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyStartingEquipmentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyStartingEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubclassClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassClassOperatorsInput = {
  index?: Maybe<FilterFindManySubclassClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManySubclassClassNameOperatorsInput>;
  url?: Maybe<FilterFindManySubclassClassUrlOperatorsInput>;
};

export type FilterFindManySubclassClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassInput = {
  _id?: Maybe<Scalars['String']>;
  class?: Maybe<FilterFindManySubclassClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<FilterFindManySubclassSpellsInput>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySubclassOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySubclassInput>>;
  AND?: Maybe<Array<FilterFindManySubclassInput>>;
};

export type FilterFindManySubclassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySubclassOperatorsInput = {
  _id?: Maybe<FilterFindManySubclass_IdOperatorsInput>;
  class?: Maybe<FilterFindManySubclassClassOperatorsInput>;
  desc?: Maybe<FilterFindManySubclassDescOperatorsInput>;
  index?: Maybe<FilterFindManySubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindManySubclassNameOperatorsInput>;
  subclass_flavor?: Maybe<FilterFindManySubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: Maybe<FilterFindManySubclassSubclass_LevelsOperatorsInput>;
  url?: Maybe<FilterFindManySubclassUrlOperatorsInput>;
};

export type FilterFindManySubclassSpellsInput = {
  prerequisites?: Maybe<Array<Maybe<FilterFindManySubclassSpellsPrerequisitesInput>>>;
  spell?: Maybe<FilterFindManySubclassSpellsSpellInput>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySubclassSpellsPrerequisitesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySubclassSpellsSpellInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubclassSubclass_FlavorOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassSubclass_LevelsOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubclass_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindManySubraceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySubraceDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceInput = {
  _id?: Maybe<Scalars['String']>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindManySubraceAbility_BonusesInput>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindManySubraceLanguage_OptionsInput>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<FilterFindManySubraceRaceInput>;
  racial_traits?: Maybe<Array<Maybe<FilterFindManySubraceRacial_TraitsInput>>>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindManySubraceStarting_ProficienciesInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySubraceOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySubraceInput>>;
  AND?: Maybe<Array<FilterFindManySubraceInput>>;
};

export type FilterFindManySubraceLanguage_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceLanguage_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySubraceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManySubraceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManySubraceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManySubraceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManySubraceLanguage_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySubraceOperatorsInput = {
  _id?: Maybe<FilterFindManySubrace_IdOperatorsInput>;
  desc?: Maybe<FilterFindManySubraceDescOperatorsInput>;
  index?: Maybe<FilterFindManySubraceIndexOperatorsInput>;
  language_options?: Maybe<FilterFindManySubraceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindManySubraceNameOperatorsInput>;
  race?: Maybe<FilterFindManySubraceRaceOperatorsInput>;
  url?: Maybe<FilterFindManySubraceUrlOperatorsInput>;
};

export type FilterFindManySubraceRaceIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceRaceInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceRaceNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceRaceOperatorsInput = {
  index?: Maybe<FilterFindManySubraceRaceIndexOperatorsInput>;
  name?: Maybe<FilterFindManySubraceRaceNameOperatorsInput>;
  url?: Maybe<FilterFindManySubraceRaceUrlOperatorsInput>;
};

export type FilterFindManySubraceRaceUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubraceRacial_TraitsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySubraceStarting_ProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySubraceUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySubrace_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyTraitProficienciesInput>>>;
  proficiency_choices?: Maybe<FilterFindManyTraitProficiency_ChoicesInput>;
  races?: Maybe<Array<Maybe<FilterFindManyTraitRacesInput>>>;
  subraces?: Maybe<Array<Maybe<FilterFindManyTraitSubracesInput>>>;
  parent?: Maybe<FilterFindManyTraitParentInput>;
  trait_specific?: Maybe<FilterFindManyTraitTrait_SpecificInput>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyTraitOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyTraitInput>>;
  AND?: Maybe<Array<FilterFindManyTraitInput>>;
};

export type FilterFindManyTraitNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTraitOperatorsInput = {
  _id?: Maybe<FilterFindManyTrait_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyTraitDescOperatorsInput>;
  index?: Maybe<FilterFindManyTraitIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitNameOperatorsInput>;
  proficiency_choices?: Maybe<FilterFindManyTraitProficiency_ChoicesOperatorsInput>;
  parent?: Maybe<FilterFindManyTraitParentOperatorsInput>;
  trait_specific?: Maybe<FilterFindManyTraitTrait_SpecificOperatorsInput>;
  url?: Maybe<FilterFindManyTraitUrlOperatorsInput>;
};

export type FilterFindManyTraitParentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitParentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitParentOperatorsInput = {
  index?: Maybe<FilterFindManyTraitParentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitParentNameOperatorsInput>;
  url?: Maybe<FilterFindManyTraitParentUrlOperatorsInput>;
};

export type FilterFindManyTraitParentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitProficiency_ChoicesChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitProficiency_ChoicesFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitProficiency_ChoicesInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyTraitProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesOperatorsInput = {
  choose?: Maybe<FilterFindManyTraitProficiency_ChoicesChooseOperatorsInput>;
  type?: Maybe<FilterFindManyTraitProficiency_ChoicesTypeOperatorsInput>;
};

export type FilterFindManyTraitProficiency_ChoicesTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitRacesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitSubracesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput = {
  damage_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeInput>;
  success_type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcOperatorsInput = {
  dc_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput>;
  success_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  usage?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput>;
  dc?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput>;
  damage?: Maybe<Array<Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput>>>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponOperatorsInput = {
  name?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponNameOperatorsInput>;
  desc?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDescOperatorsInput>;
  usage?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageOperatorsInput>;
  dc?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput = {
  type?: Maybe<Scalars['String']>;
  times?: Maybe<Scalars['Float']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageOperatorsInput = {
  type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput>;
  times?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificInput = {
  subtrait_options?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput>;
  spell_options?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsInput>;
  damage_type?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeInput>;
  breath_weapon?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponInput>;
};

export type FilterFindManyTraitTrait_SpecificOperatorsInput = {
  subtrait_options?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsOperatorsInput>;
  spell_options?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsOperatorsInput>;
  damage_type?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeOperatorsInput>;
  breath_weapon?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTraitUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyTrait_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyWeaponPropertyDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyWeaponPropertyIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyWeaponPropertyInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyWeaponPropertyOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyWeaponPropertyInput>>;
  AND?: Maybe<Array<FilterFindManyWeaponPropertyInput>>;
};

export type FilterFindManyWeaponPropertyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyWeaponPropertyOperatorsInput = {
  _id?: Maybe<FilterFindManyWeaponProperty_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyWeaponPropertyDescOperatorsInput>;
  index?: Maybe<FilterFindManyWeaponPropertyIndexOperatorsInput>;
  name?: Maybe<FilterFindManyWeaponPropertyNameOperatorsInput>;
  url?: Maybe<FilterFindManyWeaponPropertyUrlOperatorsInput>;
};

export type FilterFindManyWeaponPropertyUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyWeaponProperty_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAbilityScoreDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAbilityScoreFull_NameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAbilityScoreIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAbilityScoreInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneAbilityScoreOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneAbilityScoreInput>>;
  AND?: Maybe<Array<FilterFindOneAbilityScoreInput>>;
};

export type FilterFindOneAbilityScoreNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAbilityScoreOperatorsInput = {
  _id?: Maybe<FilterFindOneAbilityScore_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneAbilityScoreDescOperatorsInput>;
  full_name?: Maybe<FilterFindOneAbilityScoreFull_NameOperatorsInput>;
  index?: Maybe<FilterFindOneAbilityScoreIndexOperatorsInput>;
  name?: Maybe<FilterFindOneAbilityScoreNameOperatorsInput>;
  url?: Maybe<FilterFindOneAbilityScoreUrlOperatorsInput>;
};

export type FilterFindOneAbilityScoreSkillsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneAbilityScoreUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAbilityScore_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAlignmentAbbreviationOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAlignmentDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAlignmentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAlignmentInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneAlignmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneAlignmentInput>>;
  AND?: Maybe<Array<FilterFindOneAlignmentInput>>;
};

export type FilterFindOneAlignmentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAlignmentOperatorsInput = {
  _id?: Maybe<FilterFindOneAlignment_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneAlignmentDescOperatorsInput>;
  abbreviation?: Maybe<FilterFindOneAlignmentAbbreviationOperatorsInput>;
  index?: Maybe<FilterFindOneAlignmentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneAlignmentNameOperatorsInput>;
  url?: Maybe<FilterFindOneAlignmentUrlOperatorsInput>;
};

export type FilterFindOneAlignmentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneAlignment_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundBondsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundBondsFromOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundBondsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundBondsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundBondsChooseOperatorsInput>;
  from?: Maybe<FilterFindOneBackgroundBondsFromOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundBondsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundBondsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundFeatureDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundFeatureInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterFindOneBackgroundFeatureNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundFeatureOperatorsInput = {
  name?: Maybe<FilterFindOneBackgroundFeatureNameOperatorsInput>;
  desc?: Maybe<FilterFindOneBackgroundFeatureDescOperatorsInput>;
};

export type FilterFindOneBackgroundFlawsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundFlawsFromOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundFlawsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundFlawsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundFlawsChooseOperatorsInput>;
  from?: Maybe<FilterFindOneBackgroundFlawsFromOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundFlawsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundFlawsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundIdealsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundIdealsFromAlignmentsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneBackgroundIdealsFromInput = {
  desc?: Maybe<Scalars['String']>;
  alignments?: Maybe<Array<Maybe<FilterFindOneBackgroundIdealsFromAlignmentsInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneBackgroundIdealsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundIdealsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundIdealsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundIdealsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundIdealsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundInput = {
  _id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_ProficienciesInput>>>;
  language_options?: Maybe<FilterFindOneBackgroundLanguage_OptionsInput>;
  url?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsInput>>>;
  feature?: Maybe<FilterFindOneBackgroundFeatureInput>;
  personality_traits?: Maybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  ideals?: Maybe<FilterFindOneBackgroundIdealsInput>;
  bonds?: Maybe<FilterFindOneBackgroundBondsInput>;
  flaws?: Maybe<FilterFindOneBackgroundFlawsInput>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneBackgroundOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneBackgroundInput>>;
  AND?: Maybe<Array<FilterFindOneBackgroundInput>>;
};

export type FilterFindOneBackgroundLanguage_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundLanguage_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneBackgroundLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundLanguage_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneBackgroundOperatorsInput = {
  _id?: Maybe<FilterFindOneBackground_IdOperatorsInput>;
  index?: Maybe<FilterFindOneBackgroundIndexOperatorsInput>;
  name?: Maybe<FilterFindOneBackgroundNameOperatorsInput>;
  language_options?: Maybe<FilterFindOneBackgroundLanguage_OptionsOperatorsInput>;
  url?: Maybe<FilterFindOneBackgroundUrlOperatorsInput>;
  feature?: Maybe<FilterFindOneBackgroundFeatureOperatorsInput>;
  personality_traits?: Maybe<FilterFindOneBackgroundPersonality_TraitsOperatorsInput>;
  ideals?: Maybe<FilterFindOneBackgroundIdealsOperatorsInput>;
  bonds?: Maybe<FilterFindOneBackgroundBondsOperatorsInput>;
  flaws?: Maybe<FilterFindOneBackgroundFlawsOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundPersonality_TraitsFromOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundPersonality_TraitsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundPersonality_TraitsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundPersonality_TraitsChooseOperatorsInput>;
  from?: Maybe<FilterFindOneBackgroundPersonality_TraitsFromOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundPersonality_TraitsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackgroundStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneBackgroundStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_ProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneBackgroundUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneBackground_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassClass_LevelsOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassHit_DieOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassInput = {
  _id?: Maybe<Scalars['String']>;
  class_levels?: Maybe<Scalars['String']>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneClassProficienciesInput>>>;
  proficiency_choices?: Maybe<Array<Maybe<FilterFindOneClassProficiency_ChoicesInput>>>;
  saving_throws?: Maybe<Array<Maybe<FilterFindOneClassSaving_ThrowsInput>>>;
  spellcasting?: Maybe<FilterFindOneClassSpellcastingInput>;
  spells?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindOneClassStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindOneClassStarting_Equipment_OptionsInput>>>;
  subclasses?: Maybe<Array<Maybe<FilterFindOneClassSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneClassOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneClassInput>>;
  AND?: Maybe<Array<FilterFindOneClassInput>>;
};

export type FilterFindOneClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneClassOperatorsInput = {
  _id?: Maybe<FilterFindOneClass_IdOperatorsInput>;
  class_levels?: Maybe<FilterFindOneClassClass_LevelsOperatorsInput>;
  hit_die?: Maybe<FilterFindOneClassHit_DieOperatorsInput>;
  index?: Maybe<FilterFindOneClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneClassNameOperatorsInput>;
  spellcasting?: Maybe<FilterFindOneClassSpellcastingOperatorsInput>;
  spells?: Maybe<FilterFindOneClassSpellsOperatorsInput>;
  url?: Maybe<FilterFindOneClassUrlOperatorsInput>;
};

export type FilterFindOneClassProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassProficiency_ChoicesFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassProficiency_ChoicesInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneClassProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassSaving_ThrowsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassSpellcastingInfoInput = {
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassSpellcastingInput = {
  info?: Maybe<Array<Maybe<FilterFindOneClassSpellcastingInfoInput>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityInput>;
};

export type FilterFindOneClassSpellcastingLevelOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassSpellcastingOperatorsInput = {
  level?: Maybe<FilterFindOneClassSpellcastingLevelOperatorsInput>;
  spellcasting_ability?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityOperatorsInput>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityOperatorsInput = {
  index?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityIndexOperatorsInput>;
  name?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityNameOperatorsInput>;
  url?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityUrlOperatorsInput>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassSpellsOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClassStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneClassStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneClassStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneClassStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassSubclassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneClass_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneConditionDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneConditionIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneConditionInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneConditionOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneConditionInput>>;
  AND?: Maybe<Array<FilterFindOneConditionInput>>;
};

export type FilterFindOneConditionNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneConditionOperatorsInput = {
  _id?: Maybe<FilterFindOneCondition_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneConditionDescOperatorsInput>;
  index?: Maybe<FilterFindOneConditionIndexOperatorsInput>;
  name?: Maybe<FilterFindOneConditionNameOperatorsInput>;
  url?: Maybe<FilterFindOneConditionUrlOperatorsInput>;
};

export type FilterFindOneConditionUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneCondition_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneDamageTypeDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneDamageTypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneDamageTypeInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneDamageTypeOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneDamageTypeInput>>;
  AND?: Maybe<Array<FilterFindOneDamageTypeInput>>;
};

export type FilterFindOneDamageTypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneDamageTypeOperatorsInput = {
  _id?: Maybe<FilterFindOneDamageType_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneDamageTypeDescOperatorsInput>;
  index?: Maybe<FilterFindOneDamageTypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneDamageTypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneDamageTypeUrlOperatorsInput>;
};

export type FilterFindOneDamageTypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneDamageType_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentArmor_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentArmor_ClassBaseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentArmor_ClassDex_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentArmor_ClassInput = {
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentArmor_ClassMax_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentArmor_ClassOperatorsInput = {
  base?: Maybe<FilterFindOneEquipmentArmor_ClassBaseOperatorsInput>;
  dex_bonus?: Maybe<FilterFindOneEquipmentArmor_ClassDex_BonusOperatorsInput>;
  max_bonus?: Maybe<FilterFindOneEquipmentArmor_ClassMax_BonusOperatorsInput>;
};

export type FilterFindOneEquipmentCapacityOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentCategoryEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneEquipmentCategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentCategoryInput = {
  _id?: Maybe<Scalars['String']>;
  equipment?: Maybe<Array<Maybe<FilterFindOneEquipmentCategoryEquipmentInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneEquipmentCategoryOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneEquipmentCategoryInput>>;
  AND?: Maybe<Array<FilterFindOneEquipmentCategoryInput>>;
};

export type FilterFindOneEquipmentCategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEquipmentCategoryOperatorsInput = {
  _id?: Maybe<FilterFindOneEquipmentCategory_IdOperatorsInput>;
  index?: Maybe<FilterFindOneEquipmentCategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentCategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentCategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentCategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentCategory_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentCategory_RangeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentContentsInput = {
  item?: Maybe<FilterFindOneEquipmentContentsItemInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneEquipmentContentsItemInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCostInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCostOperatorsInput = {
  quantity?: Maybe<FilterFindOneEquipmentCostQuantityOperatorsInput>;
  unit?: Maybe<FilterFindOneEquipmentCostUnitOperatorsInput>;
};

export type FilterFindOneEquipmentCostQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentCostUnitOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentDamageDamage_DiceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentDamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentDamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentDamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneEquipmentDamageDamage_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentDamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindOneEquipmentDamageDamage_TypeInput>;
};

export type FilterFindOneEquipmentDamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindOneEquipmentDamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindOneEquipmentDamageDamage_TypeOperatorsInput>;
};

export type FilterFindOneEquipmentDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentEquipment_CategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentEquipment_CategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentEquipment_CategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentGear_CategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentGear_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentGear_CategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentGear_CategoryOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentGear_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentGear_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentGear_CategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentGear_CategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentInput = {
  _id?: Maybe<Scalars['String']>;
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<FilterFindOneEquipmentArmor_ClassInput>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<FilterFindOneEquipmentContentsInput>>>;
  cost?: Maybe<FilterFindOneEquipmentCostInput>;
  damage?: Maybe<FilterFindOneEquipmentDamageInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindOneEquipmentEquipment_CategoryInput>;
  gear_category?: Maybe<FilterFindOneEquipmentGear_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<FilterFindOneEquipmentPropertiesInput>>>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<FilterFindOneEquipmentRangeInput>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<FilterFindOneEquipmentSpeedInput>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<FilterFindOneEquipmentThrow_RangeInput>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageInput>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneEquipmentInput>>;
  AND?: Maybe<Array<FilterFindOneEquipmentInput>>;
};

export type FilterFindOneEquipmentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindOneEquipment_IdOperatorsInput>;
  armor_category?: Maybe<FilterFindOneEquipmentArmor_CategoryOperatorsInput>;
  armor_class?: Maybe<FilterFindOneEquipmentArmor_ClassOperatorsInput>;
  capacity?: Maybe<FilterFindOneEquipmentCapacityOperatorsInput>;
  category_range?: Maybe<FilterFindOneEquipmentCategory_RangeOperatorsInput>;
  cost?: Maybe<FilterFindOneEquipmentCostOperatorsInput>;
  damage?: Maybe<FilterFindOneEquipmentDamageOperatorsInput>;
  desc?: Maybe<FilterFindOneEquipmentDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindOneEquipmentEquipment_CategoryOperatorsInput>;
  gear_category?: Maybe<FilterFindOneEquipmentGear_CategoryOperatorsInput>;
  index?: Maybe<FilterFindOneEquipmentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentNameOperatorsInput>;
  quantity?: Maybe<FilterFindOneEquipmentQuantityOperatorsInput>;
  range?: Maybe<FilterFindOneEquipmentRangeOperatorsInput>;
  special?: Maybe<FilterFindOneEquipmentSpecialOperatorsInput>;
  speed?: Maybe<FilterFindOneEquipmentSpeedOperatorsInput>;
  stealth_disadvantage?: Maybe<FilterFindOneEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: Maybe<FilterFindOneEquipmentStr_MinimumOperatorsInput>;
  throw_range?: Maybe<FilterFindOneEquipmentThrow_RangeOperatorsInput>;
  tool_category?: Maybe<FilterFindOneEquipmentTool_CategoryOperatorsInput>;
  two_handed_damage?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentUrlOperatorsInput>;
  vehicle_category?: Maybe<FilterFindOneEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: Maybe<FilterFindOneEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: Maybe<FilterFindOneEquipmentWeapon_RangeOperatorsInput>;
  weight?: Maybe<FilterFindOneEquipmentWeightOperatorsInput>;
};

export type FilterFindOneEquipmentPropertiesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneEquipmentQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentRangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentRangeLongOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentRangeNormalOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentRangeOperatorsInput = {
  long?: Maybe<FilterFindOneEquipmentRangeLongOperatorsInput>;
  normal?: Maybe<FilterFindOneEquipmentRangeNormalOperatorsInput>;
};

export type FilterFindOneEquipmentSpecialOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentSpeedInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentSpeedOperatorsInput = {
  quantity?: Maybe<FilterFindOneEquipmentSpeedQuantityOperatorsInput>;
  unit?: Maybe<FilterFindOneEquipmentSpeedUnitOperatorsInput>;
};

export type FilterFindOneEquipmentSpeedQuantityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentSpeedUnitOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentStealth_DisadvantageOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentStr_MinimumOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentThrow_RangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentThrow_RangeLongOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentThrow_RangeNormalOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentThrow_RangeOperatorsInput = {
  long?: Maybe<FilterFindOneEquipmentThrow_RangeLongOperatorsInput>;
  normal?: Maybe<FilterFindOneEquipmentThrow_RangeNormalOperatorsInput>;
};

export type FilterFindOneEquipmentTool_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeInput>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput>;
};

export type FilterFindOneEquipmentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentVehicle_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentWeapon_CategoryOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentWeapon_RangeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipmentWeightOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureChoiceChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureChoiceFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneFeatureChoiceInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneFeatureChoiceFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureChoiceOperatorsInput = {
  choose?: Maybe<FilterFindOneFeatureChoiceChooseOperatorsInput>;
  type?: Maybe<FilterFindOneFeatureChoiceTypeOperatorsInput>;
};

export type FilterFindOneFeatureChoiceTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureClassOperatorsInput = {
  index?: Maybe<FilterFindOneFeatureClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureClassUrlOperatorsInput>;
};

export type FilterFindOneFeatureClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureFeature_SpecificInput = {
  subfeature_options?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsInput>;
  expertise_options?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsInput>;
};

export type FilterFindOneFeatureFeature_SpecificOperatorsInput = {
  subfeature_options?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsOperatorsInput>;
  expertise_options?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureInput = {
  _id?: Maybe<Scalars['String']>;
  choice?: Maybe<FilterFindOneFeatureChoiceInput>;
  class?: Maybe<FilterFindOneFeatureClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  parent?: Maybe<FilterFindOneFeatureParentInput>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FilterFindOneFeaturePrerequisitesInput>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<FilterFindOneFeatureSubclassInput>;
  feature_specific?: Maybe<FilterFindOneFeatureFeature_SpecificInput>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFeatureOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFeatureInput>>;
  AND?: Maybe<Array<FilterFindOneFeatureInput>>;
};

export type FilterFindOneFeatureLevelOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFeatureOperatorsInput = {
  _id?: Maybe<FilterFindOneFeature_IdOperatorsInput>;
  choice?: Maybe<FilterFindOneFeatureChoiceOperatorsInput>;
  class?: Maybe<FilterFindOneFeatureClassOperatorsInput>;
  desc?: Maybe<FilterFindOneFeatureDescOperatorsInput>;
  parent?: Maybe<FilterFindOneFeatureParentOperatorsInput>;
  index?: Maybe<FilterFindOneFeatureIndexOperatorsInput>;
  level?: Maybe<FilterFindOneFeatureLevelOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureNameOperatorsInput>;
  reference?: Maybe<FilterFindOneFeatureReferenceOperatorsInput>;
  subclass?: Maybe<FilterFindOneFeatureSubclassOperatorsInput>;
  feature_specific?: Maybe<FilterFindOneFeatureFeature_SpecificOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureUrlOperatorsInput>;
};

export type FilterFindOneFeatureParentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureParentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureParentOperatorsInput = {
  index?: Maybe<FilterFindOneFeatureParentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureParentNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureParentUrlOperatorsInput>;
};

export type FilterFindOneFeatureParentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeaturePrerequisitesInput = {
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneFeatureReferenceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureSubclassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureSubclassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureSubclassOperatorsInput = {
  index?: Maybe<FilterFindOneFeatureSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureSubclassUrlOperatorsInput>;
};

export type FilterFindOneFeatureSubclassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeatureUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFeature_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguageDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguageIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguageInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneLanguageOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneLanguageInput>>;
  AND?: Maybe<Array<FilterFindOneLanguageInput>>;
};

export type FilterFindOneLanguageNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLanguageOperatorsInput = {
  _id?: Maybe<FilterFindOneLanguage_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneLanguageDescOperatorsInput>;
  index?: Maybe<FilterFindOneLanguageIndexOperatorsInput>;
  name?: Maybe<FilterFindOneLanguageNameOperatorsInput>;
  script?: Maybe<FilterFindOneLanguageScriptOperatorsInput>;
  type?: Maybe<FilterFindOneLanguageTypeOperatorsInput>;
  typical_speakers?: Maybe<FilterFindOneLanguageTypical_SpeakersOperatorsInput>;
  url?: Maybe<FilterFindOneLanguageUrlOperatorsInput>;
};

export type FilterFindOneLanguageScriptOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguageTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguageTypical_SpeakersOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguageUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLanguage_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelAbility_Score_BonusesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLevelClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClassOperatorsInput = {
  index?: Maybe<FilterFindOneLevelClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneLevelClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneLevelClassUrlOperatorsInput>;
};

export type FilterFindOneLevelClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificAction_SurgesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificAura_RangeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificBardic_Inspiration_DieOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificBrutal_Critical_DiceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput = {
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneLevelClass_SpecificDestroy_Undead_CrOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificExtra_AttacksOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificFavored_EnemiesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificFavored_TerrainOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificIndomitable_UsesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificInput = {
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificInvocations_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificKi_PointsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsOperatorsInput = {
  dice_count?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificMetamagic_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificOperatorsInput = {
  action_surges?: Maybe<FilterFindOneLevelClass_SpecificAction_SurgesOperatorsInput>;
  arcane_recovery_levels?: Maybe<FilterFindOneLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput>;
  aura_range?: Maybe<FilterFindOneLevelClass_SpecificAura_RangeOperatorsInput>;
  bardic_inspiration_die?: Maybe<FilterFindOneLevelClass_SpecificBardic_Inspiration_DieOperatorsInput>;
  brutal_critical_dice?: Maybe<FilterFindOneLevelClass_SpecificBrutal_Critical_DiceOperatorsInput>;
  channel_divinity_charges?: Maybe<FilterFindOneLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput>;
  destroy_undead_cr?: Maybe<FilterFindOneLevelClass_SpecificDestroy_Undead_CrOperatorsInput>;
  extra_attacks?: Maybe<FilterFindOneLevelClass_SpecificExtra_AttacksOperatorsInput>;
  favored_enemies?: Maybe<FilterFindOneLevelClass_SpecificFavored_EnemiesOperatorsInput>;
  favored_terrain?: Maybe<FilterFindOneLevelClass_SpecificFavored_TerrainOperatorsInput>;
  indomitable_uses?: Maybe<FilterFindOneLevelClass_SpecificIndomitable_UsesOperatorsInput>;
  invocations_known?: Maybe<FilterFindOneLevelClass_SpecificInvocations_KnownOperatorsInput>;
  ki_points?: Maybe<FilterFindOneLevelClass_SpecificKi_PointsOperatorsInput>;
  magical_secrets_max_5?: Maybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput>;
  magical_secrets_max_7?: Maybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput>;
  magical_secrets_max_9?: Maybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput>;
  martial_arts?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsOperatorsInput>;
  metamagic_known?: Maybe<FilterFindOneLevelClass_SpecificMetamagic_KnownOperatorsInput>;
  mystic_arcanum_level_6?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput>;
  mystic_arcanum_level_7?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput>;
  mystic_arcanum_level_8?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput>;
  mystic_arcanum_level_9?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput>;
  rage_count?: Maybe<FilterFindOneLevelClass_SpecificRage_CountOperatorsInput>;
  rage_damage_bonus?: Maybe<FilterFindOneLevelClass_SpecificRage_Damage_BonusOperatorsInput>;
  sneak_attack?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackOperatorsInput>;
  song_of_rest_die?: Maybe<FilterFindOneLevelClass_SpecificSong_Of_Rest_DieOperatorsInput>;
  sorcery_points?: Maybe<FilterFindOneLevelClass_SpecificSorcery_PointsOperatorsInput>;
  unarmored_movement?: Maybe<FilterFindOneLevelClass_SpecificUnarmored_MovementOperatorsInput>;
  wild_shape_fly?: Maybe<FilterFindOneLevelClass_SpecificWild_Shape_FlyOperatorsInput>;
  wild_shape_max_cr?: Maybe<FilterFindOneLevelClass_SpecificWild_Shape_Max_CrOperatorsInput>;
  wild_shape_swim?: Maybe<FilterFindOneLevelClass_SpecificWild_Shape_SwimOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificRage_CountOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificRage_Damage_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackDice_CountOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackOperatorsInput = {
  dice_count?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificSong_Of_Rest_DieOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificSorcery_PointsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificUnarmored_MovementOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_FlyOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_Max_CrOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_SwimOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelFeature_ChoicesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneLevelFeaturesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneLevelIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelInput = {
  _id?: Maybe<Scalars['String']>;
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<FilterFindOneLevelClassInput>;
  class_specific?: Maybe<FilterFindOneLevelClass_SpecificInput>;
  feature_choices?: Maybe<Array<Maybe<FilterFindOneLevelFeature_ChoicesInput>>>;
  features?: Maybe<Array<Maybe<FilterFindOneLevelFeaturesInput>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<FilterFindOneLevelSpellcastingInput>;
  subclass?: Maybe<FilterFindOneLevelSubclassInput>;
  subclass_specific?: Maybe<FilterFindOneLevelSubclass_SpecificInput>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneLevelOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneLevelInput>>;
  AND?: Maybe<Array<FilterFindOneLevelInput>>;
};

export type FilterFindOneLevelLevelOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLevelOperatorsInput = {
  _id?: Maybe<FilterFindOneLevel_IdOperatorsInput>;
  ability_score_bonuses?: Maybe<FilterFindOneLevelAbility_Score_BonusesOperatorsInput>;
  class?: Maybe<FilterFindOneLevelClassOperatorsInput>;
  class_specific?: Maybe<FilterFindOneLevelClass_SpecificOperatorsInput>;
  index?: Maybe<FilterFindOneLevelIndexOperatorsInput>;
  level?: Maybe<FilterFindOneLevelLevelOperatorsInput>;
  prof_bonus?: Maybe<FilterFindOneLevelProf_BonusOperatorsInput>;
  spellcasting?: Maybe<FilterFindOneLevelSpellcastingOperatorsInput>;
  subclass?: Maybe<FilterFindOneLevelSubclassOperatorsInput>;
  subclass_specific?: Maybe<FilterFindOneLevelSubclass_SpecificOperatorsInput>;
  url?: Maybe<FilterFindOneLevelUrlOperatorsInput>;
};

export type FilterFindOneLevelProf_BonusOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingCantrips_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingInput = {
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelSpellcastingOperatorsInput = {
  cantrips_known?: Maybe<FilterFindOneLevelSpellcastingCantrips_KnownOperatorsInput>;
  spell_slots_level_1?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_1OperatorsInput>;
  spell_slots_level_2?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_2OperatorsInput>;
  spell_slots_level_3?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_3OperatorsInput>;
  spell_slots_level_4?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_4OperatorsInput>;
  spell_slots_level_5?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_5OperatorsInput>;
  spell_slots_level_6?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_6OperatorsInput>;
  spell_slots_level_7?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_7OperatorsInput>;
  spell_slots_level_8?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_8OperatorsInput>;
  spell_slots_level_9?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_9OperatorsInput>;
  spells_known?: Maybe<FilterFindOneLevelSpellcastingSpells_KnownOperatorsInput>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_1OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_2OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_3OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_4OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_5OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_6OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_7OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_8OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_9OperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSpellcastingSpells_KnownOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSubclassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLevelSubclassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSubclassOperatorsInput = {
  index?: Maybe<FilterFindOneLevelSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneLevelSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindOneLevelSubclassUrlOperatorsInput>;
};

export type FilterFindOneLevelSubclassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSubclass_SpecificAura_RangeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelSubclass_SpecificOperatorsInput = {
  additional_magical_secrets_max_lvl?: Maybe<FilterFindOneLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput>;
  aura_range?: Maybe<FilterFindOneLevelSubclass_SpecificAura_RangeOperatorsInput>;
};

export type FilterFindOneLevelUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevel_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItemDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItemEquipment_CategoryIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItemEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMagicItemEquipment_CategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItemEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindOneMagicItemEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneMagicItemEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneMagicItemEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindOneMagicItemEquipment_CategoryUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItemIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItemInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindOneMagicItemEquipment_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMagicItemOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMagicItemInput>>;
  AND?: Maybe<Array<FilterFindOneMagicItemInput>>;
};

export type FilterFindOneMagicItemNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMagicItemOperatorsInput = {
  _id?: Maybe<FilterFindOneMagicItem_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneMagicItemDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindOneMagicItemEquipment_CategoryOperatorsInput>;
  index?: Maybe<FilterFindOneMagicItemIndexOperatorsInput>;
  name?: Maybe<FilterFindOneMagicItemNameOperatorsInput>;
  url?: Maybe<FilterFindOneMagicItemUrlOperatorsInput>;
};

export type FilterFindOneMagicItemUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicItem_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicSchoolDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicSchoolIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicSchoolInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMagicSchoolOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMagicSchoolInput>>;
  AND?: Maybe<Array<FilterFindOneMagicSchoolInput>>;
};

export type FilterFindOneMagicSchoolNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMagicSchoolOperatorsInput = {
  _id?: Maybe<FilterFindOneMagicSchool_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneMagicSchoolDescOperatorsInput>;
  index?: Maybe<FilterFindOneMagicSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindOneMagicSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindOneMagicSchoolUrlOperatorsInput>;
};

export type FilterFindOneMagicSchoolUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMagicSchool_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterActionsDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsDamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindOneMonsterActionsDamageDamage_TypeInput>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterActionsInput = {
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<FilterFindOneMonsterActionsDamageInput>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterAlignmentOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterArmor_ClassOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterChallenge_RatingOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterCharismaOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterCondition_ImmunitiesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterConstitutionOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterDexterityOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterFormsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterHit_DiceOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterHit_PointsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterInput = {
  _id?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<FilterFindOneMonsterActionsInput>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<FilterFindOneMonsterCondition_ImmunitiesInput>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<FilterFindOneMonsterFormsInput>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<FilterFindOneMonsterLegendary_ActionsInput>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneMonsterProficienciesInput>>>;
  reactions?: Maybe<Array<Maybe<FilterFindOneMonsterReactionsInput>>>;
  senses?: Maybe<FilterFindOneMonsterSensesInput>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<FilterFindOneMonsterSpecial_AbilitiesInput>>>;
  speed?: Maybe<FilterFindOneMonsterSpeedInput>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMonsterOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMonsterInput>>;
  AND?: Maybe<Array<FilterFindOneMonsterInput>>;
};

export type FilterFindOneMonsterIntelligenceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterLanguagesOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterLegendary_ActionsInput = {
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMonsterOperatorsInput = {
  _id?: Maybe<FilterFindOneMonster_IdOperatorsInput>;
  alignment?: Maybe<FilterFindOneMonsterAlignmentOperatorsInput>;
  armor_class?: Maybe<FilterFindOneMonsterArmor_ClassOperatorsInput>;
  challenge_rating?: Maybe<FilterFindOneMonsterChallenge_RatingOperatorsInput>;
  charisma?: Maybe<FilterFindOneMonsterCharismaOperatorsInput>;
  constitution?: Maybe<FilterFindOneMonsterConstitutionOperatorsInput>;
  dexterity?: Maybe<FilterFindOneMonsterDexterityOperatorsInput>;
  hit_dice?: Maybe<FilterFindOneMonsterHit_DiceOperatorsInput>;
  hit_points?: Maybe<FilterFindOneMonsterHit_PointsOperatorsInput>;
  index?: Maybe<FilterFindOneMonsterIndexOperatorsInput>;
  intelligence?: Maybe<FilterFindOneMonsterIntelligenceOperatorsInput>;
  languages?: Maybe<FilterFindOneMonsterLanguagesOperatorsInput>;
  name?: Maybe<FilterFindOneMonsterNameOperatorsInput>;
  senses?: Maybe<FilterFindOneMonsterSensesOperatorsInput>;
  size?: Maybe<FilterFindOneMonsterSizeOperatorsInput>;
  speed?: Maybe<FilterFindOneMonsterSpeedOperatorsInput>;
  strength?: Maybe<FilterFindOneMonsterStrengthOperatorsInput>;
  subtype?: Maybe<FilterFindOneMonsterSubtypeOperatorsInput>;
  type?: Maybe<FilterFindOneMonsterTypeOperatorsInput>;
  url?: Maybe<FilterFindOneMonsterUrlOperatorsInput>;
  wisdom?: Maybe<FilterFindOneMonsterWisdomOperatorsInput>;
  xp?: Maybe<FilterFindOneMonsterXpOperatorsInput>;
};

export type FilterFindOneMonsterProficienciesInput = {
  proficiency?: Maybe<FilterFindOneMonsterProficienciesProficiencyInput>;
  value?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterProficienciesProficiencyInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterReactionsInput = {
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterSensesBlindsightOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSensesDarkvisionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSensesInput = {
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterSensesOperatorsInput = {
  blindsight?: Maybe<FilterFindOneMonsterSensesBlindsightOperatorsInput>;
  darkvision?: Maybe<FilterFindOneMonsterSensesDarkvisionOperatorsInput>;
  passive_perception?: Maybe<FilterFindOneMonsterSensesPassive_PerceptionOperatorsInput>;
  tremorsense?: Maybe<FilterFindOneMonsterSensesTremorsenseOperatorsInput>;
  truesight?: Maybe<FilterFindOneMonsterSensesTruesightOperatorsInput>;
};

export type FilterFindOneMonsterSensesPassive_PerceptionOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSensesTremorsenseOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSensesTruesightOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSizeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSpecial_AbilitiesInput = {
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneMonsterSpeedBurrowOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSpeedClimbOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSpeedFlyOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSpeedHoverOperatorsInput = {
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSpeedInput = {
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterSpeedOperatorsInput = {
  burrow?: Maybe<FilterFindOneMonsterSpeedBurrowOperatorsInput>;
  climb?: Maybe<FilterFindOneMonsterSpeedClimbOperatorsInput>;
  fly?: Maybe<FilterFindOneMonsterSpeedFlyOperatorsInput>;
  hover?: Maybe<FilterFindOneMonsterSpeedHoverOperatorsInput>;
  swim?: Maybe<FilterFindOneMonsterSpeedSwimOperatorsInput>;
  walk?: Maybe<FilterFindOneMonsterSpeedWalkOperatorsInput>;
};

export type FilterFindOneMonsterSpeedSwimOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSpeedWalkOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterStrengthOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterSubtypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterWisdomOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonsterXpOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneMonster_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProficiencyClassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneProficiencyIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProficiencyInput = {
  _id?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<FilterFindOneProficiencyClassesInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<FilterFindOneProficiencyRacesInput>>>;
  references?: Maybe<Array<Maybe<FilterFindOneProficiencyReferencesInput>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneProficiencyOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneProficiencyInput>>;
  AND?: Maybe<Array<FilterFindOneProficiencyInput>>;
};

export type FilterFindOneProficiencyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProficiencyOperatorsInput = {
  _id?: Maybe<FilterFindOneProficiency_IdOperatorsInput>;
  index?: Maybe<FilterFindOneProficiencyIndexOperatorsInput>;
  name?: Maybe<FilterFindOneProficiencyNameOperatorsInput>;
  type?: Maybe<FilterFindOneProficiencyTypeOperatorsInput>;
  url?: Maybe<FilterFindOneProficiencyUrlOperatorsInput>;
};

export type FilterFindOneProficiencyRacesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneProficiencyReferencesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneProficiencyTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProficiencyUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProficiency_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromInput = {
  ability_score?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsFromAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceAbility_Bonus_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindOneRaceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceAgeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceAlignmentOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceInput = {
  _id?: Maybe<Scalars['String']>;
  ability_bonus_options?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindOneRaceAbility_BonusesInput>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindOneRaceLanguage_OptionsInput>;
  languages?: Maybe<Array<Maybe<FilterFindOneRaceLanguagesInput>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindOneRaceStarting_ProficienciesInput>>>;
  starting_proficiency_options?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsInput>;
  subraces?: Maybe<Array<Maybe<FilterFindOneRaceSubracesInput>>>;
  traits?: Maybe<Array<Maybe<FilterFindOneRaceTraitsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRaceOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRaceInput>>;
  AND?: Maybe<Array<FilterFindOneRaceInput>>;
};

export type FilterFindOneRaceLanguage_DescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceLanguage_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceLanguage_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneRaceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneRaceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceLanguage_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceLanguagesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRaceOperatorsInput = {
  _id?: Maybe<FilterFindOneRace_IdOperatorsInput>;
  ability_bonus_options?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsOperatorsInput>;
  age?: Maybe<FilterFindOneRaceAgeOperatorsInput>;
  alignment?: Maybe<FilterFindOneRaceAlignmentOperatorsInput>;
  index?: Maybe<FilterFindOneRaceIndexOperatorsInput>;
  language_desc?: Maybe<FilterFindOneRaceLanguage_DescOperatorsInput>;
  language_options?: Maybe<FilterFindOneRaceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindOneRaceNameOperatorsInput>;
  size?: Maybe<FilterFindOneRaceSizeOperatorsInput>;
  size_description?: Maybe<FilterFindOneRaceSize_DescriptionOperatorsInput>;
  speed?: Maybe<FilterFindOneRaceSpeedOperatorsInput>;
  starting_proficiency_options?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsOperatorsInput>;
  url?: Maybe<FilterFindOneRaceUrlOperatorsInput>;
};

export type FilterFindOneRaceSizeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceSize_DescriptionOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceSpeedOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceStarting_ProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceStarting_Proficiency_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRaceSubracesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceTraitsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRaceUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRace_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections?: Maybe<Array<Maybe<FilterFindOneRuleSubsectionsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRuleOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRuleInput>>;
  AND?: Maybe<Array<FilterFindOneRuleInput>>;
};

export type FilterFindOneRuleNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRuleOperatorsInput = {
  _id?: Maybe<FilterFindOneRule_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneRuleDescOperatorsInput>;
  index?: Maybe<FilterFindOneRuleIndexOperatorsInput>;
  name?: Maybe<FilterFindOneRuleNameOperatorsInput>;
  url?: Maybe<FilterFindOneRuleUrlOperatorsInput>;
};

export type FilterFindOneRuleSectionDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleSectionIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleSectionInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRuleSectionOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRuleSectionInput>>;
  AND?: Maybe<Array<FilterFindOneRuleSectionInput>>;
};

export type FilterFindOneRuleSectionNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRuleSectionOperatorsInput = {
  _id?: Maybe<FilterFindOneRuleSection_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneRuleSectionDescOperatorsInput>;
  index?: Maybe<FilterFindOneRuleSectionIndexOperatorsInput>;
  name?: Maybe<FilterFindOneRuleSectionNameOperatorsInput>;
  url?: Maybe<FilterFindOneRuleSectionUrlOperatorsInput>;
};

export type FilterFindOneRuleSectionUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleSection_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRuleSubsectionsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneRuleUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRule_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSpellArea_Of_EffectInput = {
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellClassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSpellDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellDamageInput = {
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<FilterFindOneSpellDamageDamage_TypeInput>;
};

export type FilterFindOneSpellDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellDcInput = {
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<FilterFindOneSpellDcDc_TypeInput>;
  desc?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellInput = {
  _id?: Maybe<Scalars['String']>;
  area_of_effect?: Maybe<FilterFindOneSpellArea_Of_EffectInput>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<FilterFindOneSpellClassesInput>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<FilterFindOneSpellDamageInput>;
  dc?: Maybe<FilterFindOneSpellDcInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<FilterFindOneSpellSchoolInput>;
  subclasses?: Maybe<Array<Maybe<FilterFindOneSpellSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSpellOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSpellInput>>;
  AND?: Maybe<Array<FilterFindOneSpellInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSpellOperatorsInput = {
  _id?: Maybe<FilterFindOneSpell_IdOperatorsInput>;
  school?: Maybe<FilterFindOneSpellSchoolOperatorsInput>;
};

export type FilterFindOneSpellSchoolIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSpellSchoolInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellSchoolNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSpellSchoolOperatorsInput = {
  index?: Maybe<FilterFindOneSpellSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSpellSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindOneSpellSchoolUrlOperatorsInput>;
};

export type FilterFindOneSpellSchoolUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSpellSubclassesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSpell_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneStartingEquipmentClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneStartingEquipmentClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneStartingEquipmentClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneStartingEquipmentClassOperatorsInput = {
  index?: Maybe<FilterFindOneStartingEquipmentClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneStartingEquipmentClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneStartingEquipmentClassUrlOperatorsInput>;
};

export type FilterFindOneStartingEquipmentClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneStartingEquipmentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneStartingEquipmentInput = {
  _id?: Maybe<Scalars['String']>;
  class?: Maybe<FilterFindOneStartingEquipmentClassInput>;
  index?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindOneStartingEquipmentStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindOneStartingEquipmentStarting_Equipment_OptionsInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneStartingEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneStartingEquipmentInput>>;
  AND?: Maybe<Array<FilterFindOneStartingEquipmentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneStartingEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindOneStartingEquipment_IdOperatorsInput>;
  class?: Maybe<FilterFindOneStartingEquipmentClassOperatorsInput>;
  index?: Maybe<FilterFindOneStartingEquipmentIndexOperatorsInput>;
  url?: Maybe<FilterFindOneStartingEquipmentUrlOperatorsInput>;
};

export type FilterFindOneStartingEquipmentStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneStartingEquipmentStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneStartingEquipmentStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneStartingEquipmentStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneStartingEquipmentStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneStartingEquipmentStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneStartingEquipmentStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneStartingEquipmentStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneStartingEquipmentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneStartingEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassClassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubclassClassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassClassOperatorsInput = {
  index?: Maybe<FilterFindOneSubclassClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSubclassClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneSubclassClassUrlOperatorsInput>;
};

export type FilterFindOneSubclassClassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassInput = {
  _id?: Maybe<Scalars['String']>;
  class?: Maybe<FilterFindOneSubclassClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<FilterFindOneSubclassSpellsInput>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSubclassOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSubclassInput>>;
  AND?: Maybe<Array<FilterFindOneSubclassInput>>;
};

export type FilterFindOneSubclassNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSubclassOperatorsInput = {
  _id?: Maybe<FilterFindOneSubclass_IdOperatorsInput>;
  class?: Maybe<FilterFindOneSubclassClassOperatorsInput>;
  desc?: Maybe<FilterFindOneSubclassDescOperatorsInput>;
  index?: Maybe<FilterFindOneSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSubclassNameOperatorsInput>;
  subclass_flavor?: Maybe<FilterFindOneSubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: Maybe<FilterFindOneSubclassSubclass_LevelsOperatorsInput>;
  url?: Maybe<FilterFindOneSubclassUrlOperatorsInput>;
};

export type FilterFindOneSubclassSpellsInput = {
  prerequisites?: Maybe<Array<Maybe<FilterFindOneSubclassSpellsPrerequisitesInput>>>;
  spell?: Maybe<FilterFindOneSubclassSpellsSpellInput>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSubclassSpellsPrerequisitesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSubclassSpellsSpellInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubclassSubclass_FlavorOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassSubclass_LevelsOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclassUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubclass_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindOneSubraceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSubraceDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceInput = {
  _id?: Maybe<Scalars['String']>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindOneSubraceAbility_BonusesInput>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindOneSubraceLanguage_OptionsInput>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<FilterFindOneSubraceRaceInput>;
  racial_traits?: Maybe<Array<Maybe<FilterFindOneSubraceRacial_TraitsInput>>>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindOneSubraceStarting_ProficienciesInput>>>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSubraceOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSubraceInput>>;
  AND?: Maybe<Array<FilterFindOneSubraceInput>>;
};

export type FilterFindOneSubraceLanguage_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceLanguage_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSubraceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneSubraceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneSubraceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneSubraceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneSubraceLanguage_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSubraceOperatorsInput = {
  _id?: Maybe<FilterFindOneSubrace_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneSubraceDescOperatorsInput>;
  index?: Maybe<FilterFindOneSubraceIndexOperatorsInput>;
  language_options?: Maybe<FilterFindOneSubraceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindOneSubraceNameOperatorsInput>;
  race?: Maybe<FilterFindOneSubraceRaceOperatorsInput>;
  url?: Maybe<FilterFindOneSubraceUrlOperatorsInput>;
};

export type FilterFindOneSubraceRaceIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceRaceInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceRaceNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceRaceOperatorsInput = {
  index?: Maybe<FilterFindOneSubraceRaceIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSubraceRaceNameOperatorsInput>;
  url?: Maybe<FilterFindOneSubraceRaceUrlOperatorsInput>;
};

export type FilterFindOneSubraceRaceUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubraceRacial_TraitsInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSubraceStarting_ProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSubraceUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSubrace_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneTraitProficienciesInput>>>;
  proficiency_choices?: Maybe<FilterFindOneTraitProficiency_ChoicesInput>;
  races?: Maybe<Array<Maybe<FilterFindOneTraitRacesInput>>>;
  subraces?: Maybe<Array<Maybe<FilterFindOneTraitSubracesInput>>>;
  parent?: Maybe<FilterFindOneTraitParentInput>;
  trait_specific?: Maybe<FilterFindOneTraitTrait_SpecificInput>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneTraitOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneTraitInput>>;
  AND?: Maybe<Array<FilterFindOneTraitInput>>;
};

export type FilterFindOneTraitNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTraitOperatorsInput = {
  _id?: Maybe<FilterFindOneTrait_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneTraitDescOperatorsInput>;
  index?: Maybe<FilterFindOneTraitIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitNameOperatorsInput>;
  proficiency_choices?: Maybe<FilterFindOneTraitProficiency_ChoicesOperatorsInput>;
  parent?: Maybe<FilterFindOneTraitParentOperatorsInput>;
  trait_specific?: Maybe<FilterFindOneTraitTrait_SpecificOperatorsInput>;
  url?: Maybe<FilterFindOneTraitUrlOperatorsInput>;
};

export type FilterFindOneTraitParentIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitParentNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitParentOperatorsInput = {
  index?: Maybe<FilterFindOneTraitParentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitParentNameOperatorsInput>;
  url?: Maybe<FilterFindOneTraitParentUrlOperatorsInput>;
};

export type FilterFindOneTraitParentUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitProficienciesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitProficiency_ChoicesChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitProficiency_ChoicesFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitProficiency_ChoicesInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneTraitProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesOperatorsInput = {
  choose?: Maybe<FilterFindOneTraitProficiency_ChoicesChooseOperatorsInput>;
  type?: Maybe<FilterFindOneTraitProficiency_ChoicesTypeOperatorsInput>;
};

export type FilterFindOneTraitProficiency_ChoicesTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitRacesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitSubracesInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput = {
  damage_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeInput>;
  success_type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcOperatorsInput = {
  dc_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput>;
  success_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  usage?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput>;
  dc?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput>;
  damage?: Maybe<Array<Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput>>>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponOperatorsInput = {
  name?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponNameOperatorsInput>;
  desc?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDescOperatorsInput>;
  usage?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageOperatorsInput>;
  dc?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput = {
  type?: Maybe<Scalars['String']>;
  times?: Maybe<Scalars['Float']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageOperatorsInput = {
  type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput>;
  times?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificInput = {
  subtrait_options?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput>;
  spell_options?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsInput>;
  damage_type?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeInput>;
  breath_weapon?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponInput>;
};

export type FilterFindOneTraitTrait_SpecificOperatorsInput = {
  subtrait_options?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsOperatorsInput>;
  spell_options?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsOperatorsInput>;
  damage_type?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeOperatorsInput>;
  breath_weapon?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsFromInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTraitUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneTrait_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneWeaponPropertyDescOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneWeaponPropertyIndexOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneWeaponPropertyInput = {
  _id?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneWeaponPropertyOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneWeaponPropertyInput>>;
  AND?: Maybe<Array<FilterFindOneWeaponPropertyInput>>;
};

export type FilterFindOneWeaponPropertyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneWeaponPropertyOperatorsInput = {
  _id?: Maybe<FilterFindOneWeaponProperty_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneWeaponPropertyDescOperatorsInput>;
  index?: Maybe<FilterFindOneWeaponPropertyIndexOperatorsInput>;
  name?: Maybe<FilterFindOneWeaponPropertyNameOperatorsInput>;
  url?: Maybe<FilterFindOneWeaponPropertyUrlOperatorsInput>;
};

export type FilterFindOneWeaponPropertyUrlOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneWeaponProperty_IdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};


export type Language = {
  __typename?: 'Language';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type Level = {
  __typename?: 'Level';
  _id: Scalars['String'];
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<LevelClass>;
  class_specific?: Maybe<LevelClass_Specific>;
  feature_choices?: Maybe<Array<Maybe<LevelFeature_Choices>>>;
  features?: Maybe<Array<Maybe<LevelFeatures>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<LevelSubclass>;
  subclass_specific?: Maybe<LevelSubclass_Specific>;
  url?: Maybe<Scalars['String']>;
};

export type LevelClass = {
  __typename?: 'LevelClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LevelClass_Specific = {
  __typename?: 'LevelClass_specific';
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<LevelClass_SpecificCreating_Spell_Slots>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<LevelClass_SpecificMartial_Arts>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<LevelClass_SpecificSneak_Attack>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type LevelClass_SpecificCreating_Spell_Slots = {
  __typename?: 'LevelClass_specificCreating_spell_slots';
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type LevelClass_SpecificMartial_Arts = {
  __typename?: 'LevelClass_specificMartial_arts';
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type LevelClass_SpecificSneak_Attack = {
  __typename?: 'LevelClass_specificSneak_attack';
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type LevelFeature_Choices = {
  __typename?: 'LevelFeature_choices';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type LevelFeatures = {
  __typename?: 'LevelFeatures';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type LevelSpellcasting = {
  __typename?: 'LevelSpellcasting';
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type LevelSubclass = {
  __typename?: 'LevelSubclass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LevelSubclass_Specific = {
  __typename?: 'LevelSubclass_specific';
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type MagicItem = {
  __typename?: 'MagicItem';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<MagicItemEquipment_Category>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MagicItemEquipment_Category = {
  __typename?: 'MagicItemEquipment_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MagicSchool = {
  __typename?: 'MagicSchool';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type Monster = {
  __typename?: 'Monster';
  _id: Scalars['String'];
  actions?: Maybe<Array<Maybe<MonsterActions>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<MonsterCondition_Immunities>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<MonsterForms>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<MonsterLegendary_Actions>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<MonsterProficiencies>>>;
  reactions?: Maybe<Array<Maybe<MonsterReactions>>>;
  senses?: Maybe<MonsterSenses>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<MonsterSpecial_Abilities>>>;
  speed?: Maybe<MonsterSpeed>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

export type MonsterActions = {
  __typename?: 'MonsterActions';
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterActionsDamage = {
  __typename?: 'MonsterActionsDamage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<MonsterActionsDamageDamage_Type>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterActionsDamageDamage_Type = {
  __typename?: 'MonsterActionsDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterCondition_Immunities = {
  __typename?: 'MonsterCondition_immunities';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterForms = {
  __typename?: 'MonsterForms';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterLegendary_Actions = {
  __typename?: 'MonsterLegendary_actions';
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterProficiencies = {
  __typename?: 'MonsterProficiencies';
  proficiency?: Maybe<MonsterProficienciesProficiency>;
  value?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterProficienciesProficiency = {
  __typename?: 'MonsterProficienciesProficiency';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterReactions = {
  __typename?: 'MonsterReactions';
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterSenses = {
  __typename?: 'MonsterSenses';
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type MonsterSpecial_Abilities = {
  __typename?: 'MonsterSpecial_abilities';
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type MonsterSpeed = {
  __typename?: 'MonsterSpeed';
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type Proficiency = {
  __typename?: 'Proficiency';
  _id: Scalars['String'];
  classes?: Maybe<Array<Maybe<ProficiencyClasses>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<ProficiencyRaces>>>;
  references?: Maybe<Array<Maybe<ProficiencyReferences>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyClasses = {
  __typename?: 'ProficiencyClasses';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ProficiencyRaces = {
  __typename?: 'ProficiencyRaces';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type ProficiencyReferences = {
  __typename?: 'ProficiencyReferences';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type Query = {
  __typename?: 'Query';
  abilityScore?: Maybe<AbilityScore>;
  abilityScores: Array<AbilityScore>;
  alignment?: Maybe<Alignment>;
  alignments: Array<Alignment>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  damageType?: Maybe<DamageType>;
  damageTypes: Array<DamageType>;
  equipment?: Maybe<Equipment>;
  equipments: Array<Equipment>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipmentCategories: Array<EquipmentCategory>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  level?: Maybe<Level>;
  levels: Array<Level>;
  magicItem?: Maybe<MagicItem>;
  magicItems: Array<MagicItem>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools: Array<MagicSchool>;
  monster?: Maybe<Monster>;
  monsters: Array<Monster>;
  proficiency?: Maybe<Proficiency>;
  proficiencies: Array<Proficiency>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  rules: Array<Rule>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections: Array<RuleSection>;
  spell?: Maybe<Spell>;
  spells: Array<Spell>;
  startingequipment?: Maybe<StartingEquipment>;
  startingequipments: Array<StartingEquipment>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  weaponProperty?: Maybe<WeaponProperty>;
  weaponProperties: Array<WeaponProperty>;
};


export type QueryAbilityScoreArgs = {
  filter?: Maybe<FilterFindOneAbilityScoreInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneAbilityScoreInput>;
};


export type QueryAbilityScoresArgs = {
  filter?: Maybe<FilterFindManyAbilityScoreInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyAbilityScoreInput>;
};


export type QueryAlignmentArgs = {
  filter?: Maybe<FilterFindOneAlignmentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneAlignmentInput>;
};


export type QueryAlignmentsArgs = {
  filter?: Maybe<FilterFindManyAlignmentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyAlignmentInput>;
};


export type QueryBackgroundArgs = {
  filter?: Maybe<FilterFindOneBackgroundInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneBackgroundInput>;
};


export type QueryBackgroundsArgs = {
  filter?: Maybe<FilterFindManyBackgroundInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyBackgroundInput>;
};


export type QueryConditionArgs = {
  filter?: Maybe<FilterFindOneConditionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneConditionInput>;
};


export type QueryConditionsArgs = {
  filter?: Maybe<FilterFindManyConditionInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyConditionInput>;
};


export type QueryClassArgs = {
  filter?: Maybe<FilterFindOneClassInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneClassInput>;
};


export type QueryClassesArgs = {
  filter?: Maybe<FilterFindManyClassInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyClassInput>;
};


export type QueryDamageTypeArgs = {
  filter?: Maybe<FilterFindOneDamageTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneDamageTypeInput>;
};


export type QueryDamageTypesArgs = {
  filter?: Maybe<FilterFindManyDamageTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyDamageTypeInput>;
};


export type QueryEquipmentArgs = {
  filter?: Maybe<FilterFindOneEquipmentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneEquipmentInput>;
};


export type QueryEquipmentsArgs = {
  filter?: Maybe<FilterFindManyEquipmentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEquipmentInput>;
};


export type QueryEquipmentCategoryArgs = {
  filter?: Maybe<FilterFindOneEquipmentCategoryInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneEquipmentCategoryInput>;
};


export type QueryEquipmentCategoriesArgs = {
  filter?: Maybe<FilterFindManyEquipmentCategoryInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEquipmentCategoryInput>;
};


export type QueryFeatureArgs = {
  filter?: Maybe<FilterFindOneFeatureInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFeatureInput>;
};


export type QueryFeaturesArgs = {
  filter?: Maybe<FilterFindManyFeatureInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFeatureInput>;
};


export type QueryLanguageArgs = {
  filter?: Maybe<FilterFindOneLanguageInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneLanguageInput>;
};


export type QueryLanguagesArgs = {
  filter?: Maybe<FilterFindManyLanguageInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLanguageInput>;
};


export type QueryLevelArgs = {
  filter?: Maybe<FilterFindOneLevelInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneLevelInput>;
};


export type QueryLevelsArgs = {
  filter?: Maybe<FilterFindManyLevelInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLevelInput>;
};


export type QueryMagicItemArgs = {
  filter?: Maybe<FilterFindOneMagicItemInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMagicItemInput>;
};


export type QueryMagicItemsArgs = {
  filter?: Maybe<FilterFindManyMagicItemInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMagicItemInput>;
};


export type QueryMagicSchoolArgs = {
  filter?: Maybe<FilterFindOneMagicSchoolInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMagicSchoolInput>;
};


export type QueryMagicSchoolsArgs = {
  filter?: Maybe<FilterFindManyMagicSchoolInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMagicSchoolInput>;
};


export type QueryMonsterArgs = {
  filter?: Maybe<FilterFindOneMonsterInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMonsterInput>;
};


export type QueryMonstersArgs = {
  filter?: Maybe<FilterFindManyMonsterInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMonsterInput>;
};


export type QueryProficiencyArgs = {
  filter?: Maybe<FilterFindOneProficiencyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneProficiencyInput>;
};


export type QueryProficienciesArgs = {
  filter?: Maybe<FilterFindManyProficiencyInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProficiencyInput>;
};


export type QueryRaceArgs = {
  filter?: Maybe<FilterFindOneRaceInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRaceInput>;
};


export type QueryRacesArgs = {
  filter?: Maybe<FilterFindManyRaceInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRaceInput>;
};


export type QueryRuleArgs = {
  filter?: Maybe<FilterFindOneRuleInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRuleInput>;
};


export type QueryRulesArgs = {
  filter?: Maybe<FilterFindManyRuleInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRuleInput>;
};


export type QueryRuleSectionArgs = {
  filter?: Maybe<FilterFindOneRuleSectionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRuleSectionInput>;
};


export type QueryRuleSectionsArgs = {
  filter?: Maybe<FilterFindManyRuleSectionInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRuleSectionInput>;
};


export type QuerySpellArgs = {
  filter?: Maybe<FilterFindOneSpellInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSpellInput>;
};


export type QuerySpellsArgs = {
  filter?: Maybe<FilterFindManySpellInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySpellInput>;
};


export type QueryStartingequipmentArgs = {
  filter?: Maybe<FilterFindOneStartingEquipmentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneStartingEquipmentInput>;
};


export type QueryStartingequipmentsArgs = {
  filter?: Maybe<FilterFindManyStartingEquipmentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyStartingEquipmentInput>;
};


export type QuerySubclassArgs = {
  filter?: Maybe<FilterFindOneSubclassInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSubclassInput>;
};


export type QuerySubclassesArgs = {
  filter?: Maybe<FilterFindManySubclassInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySubclassInput>;
};


export type QuerySubraceArgs = {
  filter?: Maybe<FilterFindOneSubraceInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSubraceInput>;
};


export type QuerySubracesArgs = {
  filter?: Maybe<FilterFindManySubraceInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySubraceInput>;
};


export type QueryTraitArgs = {
  filter?: Maybe<FilterFindOneTraitInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneTraitInput>;
};


export type QueryTraitsArgs = {
  filter?: Maybe<FilterFindManyTraitInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTraitInput>;
};


export type QueryWeaponPropertyArgs = {
  filter?: Maybe<FilterFindOneWeaponPropertyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneWeaponPropertyInput>;
};


export type QueryWeaponPropertiesArgs = {
  filter?: Maybe<FilterFindManyWeaponPropertyInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyWeaponPropertyInput>;
};

export type Race = {
  __typename?: 'Race';
  _id: Scalars['String'];
  ability_bonus_options?: Maybe<RaceAbility_Bonus_Options>;
  ability_bonuses?: Maybe<Array<Maybe<RaceAbility_Bonuses>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<RaceLanguage_Options>;
  languages?: Maybe<Array<Maybe<RaceLanguages>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<RaceStarting_Proficiencies>>>;
  starting_proficiency_options?: Maybe<RaceStarting_Proficiency_Options>;
  subraces?: Maybe<Array<Maybe<RaceSubraces>>>;
  traits?: Maybe<Array<Maybe<RaceTraits>>>;
  url?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonus_Options = {
  __typename?: 'RaceAbility_bonus_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceAbility_Bonus_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonus_OptionsFrom = {
  __typename?: 'RaceAbility_bonus_optionsFrom';
  ability_score?: Maybe<RaceAbility_Bonus_OptionsFromAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceAbility_Bonus_OptionsFromAbility_Score = {
  __typename?: 'RaceAbility_bonus_optionsFromAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonuses = {
  __typename?: 'RaceAbility_bonuses';
  ability_score?: Maybe<RaceAbility_BonusesAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceAbility_BonusesAbility_Score = {
  __typename?: 'RaceAbility_bonusesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceLanguage_Options = {
  __typename?: 'RaceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceLanguage_OptionsFrom = {
  __typename?: 'RaceLanguage_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceLanguages = {
  __typename?: 'RaceLanguages';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceStarting_Proficiencies = {
  __typename?: 'RaceStarting_proficiencies';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceStarting_Proficiency_Options = {
  __typename?: 'RaceStarting_proficiency_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceStarting_Proficiency_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiency_OptionsFrom = {
  __typename?: 'RaceStarting_proficiency_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceSubraces = {
  __typename?: 'RaceSubraces';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type RaceTraits = {
  __typename?: 'RaceTraits';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};


export type Rule = {
  __typename?: 'Rule';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections?: Maybe<Array<Maybe<RuleSubsections>>>;
  url?: Maybe<Scalars['String']>;
};

export type RuleSection = {
  __typename?: 'RuleSection';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RuleSubsections = {
  __typename?: 'RuleSubsections';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export enum SortFindManyAbilityScoreInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyAlignmentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyBackgroundInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  FeatureNameAsc = 'FEATURE__NAME_ASC',
  FeatureNameDesc = 'FEATURE__NAME_DESC',
  FeatureDescAsc = 'FEATURE__DESC_ASC',
  FeatureDescDesc = 'FEATURE__DESC_DESC',
  PersonalityTraitsChooseAsc = 'PERSONALITY_TRAITS__CHOOSE_ASC',
  PersonalityTraitsChooseDesc = 'PERSONALITY_TRAITS__CHOOSE_DESC',
  PersonalityTraitsFromAsc = 'PERSONALITY_TRAITS__FROM_ASC',
  PersonalityTraitsFromDesc = 'PERSONALITY_TRAITS__FROM_DESC',
  PersonalityTraitsTypeAsc = 'PERSONALITY_TRAITS__TYPE_ASC',
  PersonalityTraitsTypeDesc = 'PERSONALITY_TRAITS__TYPE_DESC',
  IdealsChooseAsc = 'IDEALS__CHOOSE_ASC',
  IdealsChooseDesc = 'IDEALS__CHOOSE_DESC',
  IdealsTypeAsc = 'IDEALS__TYPE_ASC',
  IdealsTypeDesc = 'IDEALS__TYPE_DESC',
  BondsChooseAsc = 'BONDS__CHOOSE_ASC',
  BondsChooseDesc = 'BONDS__CHOOSE_DESC',
  BondsFromAsc = 'BONDS__FROM_ASC',
  BondsFromDesc = 'BONDS__FROM_DESC',
  BondsTypeAsc = 'BONDS__TYPE_ASC',
  BondsTypeDesc = 'BONDS__TYPE_DESC',
  FlawsChooseAsc = 'FLAWS__CHOOSE_ASC',
  FlawsChooseDesc = 'FLAWS__CHOOSE_DESC',
  FlawsFromAsc = 'FLAWS__FROM_ASC',
  FlawsFromDesc = 'FLAWS__FROM_DESC',
  FlawsTypeAsc = 'FLAWS__TYPE_ASC',
  FlawsTypeDesc = 'FLAWS__TYPE_DESC'
}

export enum SortFindManyClassInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ClassLevelsAsc = 'CLASS_LEVELS_ASC',
  ClassLevelsDesc = 'CLASS_LEVELS_DESC',
  HitDieAsc = 'HIT_DIE_ASC',
  HitDieDesc = 'HIT_DIE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellcastingLevelAsc = 'SPELLCASTING__LEVEL_ASC',
  SpellcastingLevelDesc = 'SPELLCASTING__LEVEL_DESC',
  SpellcastingSpellcastingAbilityIndexAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC',
  SpellcastingSpellcastingAbilityIndexDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC',
  SpellcastingSpellcastingAbilityNameAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC',
  SpellcastingSpellcastingAbilityNameDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC',
  SpellcastingSpellcastingAbilityUrlAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC',
  SpellcastingSpellcastingAbilityUrlDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC',
  SpellsAsc = 'SPELLS_ASC',
  SpellsDesc = 'SPELLS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyConditionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyDamageTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyEquipmentCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyEquipmentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ArmorCategoryAsc = 'ARMOR_CATEGORY_ASC',
  ArmorCategoryDesc = 'ARMOR_CATEGORY_DESC',
  ArmorClassBaseAsc = 'ARMOR_CLASS__BASE_ASC',
  ArmorClassBaseDesc = 'ARMOR_CLASS__BASE_DESC',
  ArmorClassDexBonusAsc = 'ARMOR_CLASS__DEX_BONUS_ASC',
  ArmorClassDexBonusDesc = 'ARMOR_CLASS__DEX_BONUS_DESC',
  ArmorClassMaxBonusAsc = 'ARMOR_CLASS__MAX_BONUS_ASC',
  ArmorClassMaxBonusDesc = 'ARMOR_CLASS__MAX_BONUS_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  CostQuantityAsc = 'COST__QUANTITY_ASC',
  CostQuantityDesc = 'COST__QUANTITY_DESC',
  CostUnitAsc = 'COST__UNIT_ASC',
  CostUnitDesc = 'COST__UNIT_DESC',
  DamageDamageDiceAsc = 'DAMAGE__DAMAGE_DICE_ASC',
  DamageDamageDiceDesc = 'DAMAGE__DAMAGE_DICE_DESC',
  DamageDamageTypeIndexAsc = 'DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  DamageDamageTypeIndexDesc = 'DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  DamageDamageTypeNameAsc = 'DAMAGE__DAMAGE_TYPE__NAME_ASC',
  DamageDamageTypeNameDesc = 'DAMAGE__DAMAGE_TYPE__NAME_DESC',
  DamageDamageTypeUrlAsc = 'DAMAGE__DAMAGE_TYPE__URL_ASC',
  DamageDamageTypeUrlDesc = 'DAMAGE__DAMAGE_TYPE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  GearCategoryIndexAsc = 'GEAR_CATEGORY__INDEX_ASC',
  GearCategoryIndexDesc = 'GEAR_CATEGORY__INDEX_DESC',
  GearCategoryNameAsc = 'GEAR_CATEGORY__NAME_ASC',
  GearCategoryNameDesc = 'GEAR_CATEGORY__NAME_DESC',
  GearCategoryUrlAsc = 'GEAR_CATEGORY__URL_ASC',
  GearCategoryUrlDesc = 'GEAR_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  RangeLongAsc = 'RANGE__LONG_ASC',
  RangeLongDesc = 'RANGE__LONG_DESC',
  RangeNormalAsc = 'RANGE__NORMAL_ASC',
  RangeNormalDesc = 'RANGE__NORMAL_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  SpeedQuantityAsc = 'SPEED__QUANTITY_ASC',
  SpeedQuantityDesc = 'SPEED__QUANTITY_DESC',
  SpeedUnitAsc = 'SPEED__UNIT_ASC',
  SpeedUnitDesc = 'SPEED__UNIT_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ThrowRangeLongAsc = 'THROW_RANGE__LONG_ASC',
  ThrowRangeLongDesc = 'THROW_RANGE__LONG_DESC',
  ThrowRangeNormalAsc = 'THROW_RANGE__NORMAL_ASC',
  ThrowRangeNormalDesc = 'THROW_RANGE__NORMAL_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  TwoHandedDamageDamageDiceAsc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC',
  TwoHandedDamageDamageDiceDesc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC',
  TwoHandedDamageDamageTypeIndexAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  TwoHandedDamageDamageTypeIndexDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  TwoHandedDamageDamageTypeNameAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC',
  TwoHandedDamageDamageTypeNameDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC',
  TwoHandedDamageDamageTypeUrlAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC',
  TwoHandedDamageDamageTypeUrlDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VehicleCategoryAsc = 'VEHICLE_CATEGORY_ASC',
  VehicleCategoryDesc = 'VEHICLE_CATEGORY_DESC',
  WeaponCategoryAsc = 'WEAPON_CATEGORY_ASC',
  WeaponCategoryDesc = 'WEAPON_CATEGORY_DESC',
  WeaponRangeAsc = 'WEAPON_RANGE_ASC',
  WeaponRangeDesc = 'WEAPON_RANGE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC'
}

export enum SortFindManyFeatureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ChoiceChooseAsc = 'CHOICE__CHOOSE_ASC',
  ChoiceChooseDesc = 'CHOICE__CHOOSE_DESC',
  ChoiceTypeAsc = 'CHOICE__TYPE_ASC',
  ChoiceTypeDesc = 'CHOICE__TYPE_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  FeatureSpecificSubfeatureOptionsChooseAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificSubfeatureOptionsChooseDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificSubfeatureOptionsTypeAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC',
  FeatureSpecificSubfeatureOptionsTypeDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC',
  FeatureSpecificExpertiseOptionsChooseAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificExpertiseOptionsChooseDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificExpertiseOptionsTypeAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC',
  FeatureSpecificExpertiseOptionsTypeDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyLanguageInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyLevelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  AbilityScoreBonusesAsc = 'ABILITY_SCORE_BONUSES_ASC',
  AbilityScoreBonusesDesc = 'ABILITY_SCORE_BONUSES_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  ClassSpecificActionSurgesAsc = 'CLASS_SPECIFIC__ACTION_SURGES_ASC',
  ClassSpecificActionSurgesDesc = 'CLASS_SPECIFIC__ACTION_SURGES_DESC',
  ClassSpecificArcaneRecoveryLevelsAsc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC',
  ClassSpecificArcaneRecoveryLevelsDesc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC',
  ClassSpecificAuraRangeAsc = 'CLASS_SPECIFIC__AURA_RANGE_ASC',
  ClassSpecificAuraRangeDesc = 'CLASS_SPECIFIC__AURA_RANGE_DESC',
  ClassSpecificBardicInspirationDieAsc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC',
  ClassSpecificBardicInspirationDieDesc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC',
  ClassSpecificBrutalCriticalDiceAsc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC',
  ClassSpecificBrutalCriticalDiceDesc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC',
  ClassSpecificChannelDivinityChargesAsc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC',
  ClassSpecificChannelDivinityChargesDesc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC',
  ClassSpecificDestroyUndeadCrAsc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC',
  ClassSpecificDestroyUndeadCrDesc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC',
  ClassSpecificExtraAttacksAsc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_ASC',
  ClassSpecificExtraAttacksDesc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_DESC',
  ClassSpecificFavoredEnemiesAsc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_ASC',
  ClassSpecificFavoredEnemiesDesc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_DESC',
  ClassSpecificFavoredTerrainAsc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_ASC',
  ClassSpecificFavoredTerrainDesc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_DESC',
  ClassSpecificIndomitableUsesAsc = 'CLASS_SPECIFIC__INDOMITABLE_USES_ASC',
  ClassSpecificIndomitableUsesDesc = 'CLASS_SPECIFIC__INDOMITABLE_USES_DESC',
  ClassSpecificInvocationsKnownAsc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC',
  ClassSpecificInvocationsKnownDesc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC',
  ClassSpecificKiPointsAsc = 'CLASS_SPECIFIC__KI_POINTS_ASC',
  ClassSpecificKiPointsDesc = 'CLASS_SPECIFIC__KI_POINTS_DESC',
  ClassSpecificMagicalSecretsMax_5Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC',
  ClassSpecificMagicalSecretsMax_5Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC',
  ClassSpecificMagicalSecretsMax_7Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC',
  ClassSpecificMagicalSecretsMax_7Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC',
  ClassSpecificMagicalSecretsMax_9Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC',
  ClassSpecificMagicalSecretsMax_9Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC',
  ClassSpecificMartialArtsDiceCountAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC',
  ClassSpecificMartialArtsDiceCountDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC',
  ClassSpecificMartialArtsDiceValueAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC',
  ClassSpecificMartialArtsDiceValueDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC',
  ClassSpecificMetamagicKnownAsc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC',
  ClassSpecificMetamagicKnownDesc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC',
  ClassSpecificMysticArcanumLevel_6Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC',
  ClassSpecificMysticArcanumLevel_6Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC',
  ClassSpecificMysticArcanumLevel_7Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC',
  ClassSpecificMysticArcanumLevel_7Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC',
  ClassSpecificMysticArcanumLevel_8Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC',
  ClassSpecificMysticArcanumLevel_8Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC',
  ClassSpecificMysticArcanumLevel_9Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC',
  ClassSpecificMysticArcanumLevel_9Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC',
  ClassSpecificRageCountAsc = 'CLASS_SPECIFIC__RAGE_COUNT_ASC',
  ClassSpecificRageCountDesc = 'CLASS_SPECIFIC__RAGE_COUNT_DESC',
  ClassSpecificRageDamageBonusAsc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC',
  ClassSpecificRageDamageBonusDesc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC',
  ClassSpecificSneakAttackDiceCountAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC',
  ClassSpecificSneakAttackDiceCountDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC',
  ClassSpecificSneakAttackDiceValueAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC',
  ClassSpecificSneakAttackDiceValueDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC',
  ClassSpecificSongOfRestDieAsc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC',
  ClassSpecificSongOfRestDieDesc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC',
  ClassSpecificSorceryPointsAsc = 'CLASS_SPECIFIC__SORCERY_POINTS_ASC',
  ClassSpecificSorceryPointsDesc = 'CLASS_SPECIFIC__SORCERY_POINTS_DESC',
  ClassSpecificUnarmoredMovementAsc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC',
  ClassSpecificUnarmoredMovementDesc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC',
  ClassSpecificWildShapeFlyAsc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC',
  ClassSpecificWildShapeFlyDesc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC',
  ClassSpecificWildShapeMaxCrAsc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC',
  ClassSpecificWildShapeMaxCrDesc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC',
  ClassSpecificWildShapeSwimAsc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC',
  ClassSpecificWildShapeSwimDesc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  SpellcastingCantripsKnownAsc = 'SPELLCASTING__CANTRIPS_KNOWN_ASC',
  SpellcastingCantripsKnownDesc = 'SPELLCASTING__CANTRIPS_KNOWN_DESC',
  SpellcastingSpellSlotsLevel_1Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC',
  SpellcastingSpellSlotsLevel_1Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC',
  SpellcastingSpellSlotsLevel_2Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC',
  SpellcastingSpellSlotsLevel_2Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC',
  SpellcastingSpellSlotsLevel_3Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC',
  SpellcastingSpellSlotsLevel_3Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC',
  SpellcastingSpellSlotsLevel_4Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC',
  SpellcastingSpellSlotsLevel_4Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC',
  SpellcastingSpellSlotsLevel_5Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC',
  SpellcastingSpellSlotsLevel_5Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC',
  SpellcastingSpellSlotsLevel_6Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC',
  SpellcastingSpellSlotsLevel_6Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC',
  SpellcastingSpellSlotsLevel_7Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC',
  SpellcastingSpellSlotsLevel_7Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC',
  SpellcastingSpellSlotsLevel_8Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC',
  SpellcastingSpellSlotsLevel_8Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC',
  SpellcastingSpellSlotsLevel_9Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC',
  SpellcastingSpellSlotsLevel_9Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC',
  SpellcastingSpellsKnownAsc = 'SPELLCASTING__SPELLS_KNOWN_ASC',
  SpellcastingSpellsKnownDesc = 'SPELLCASTING__SPELLS_KNOWN_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlAsc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlDesc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC',
  SubclassSpecificAuraRangeAsc = 'SUBCLASS_SPECIFIC__AURA_RANGE_ASC',
  SubclassSpecificAuraRangeDesc = 'SUBCLASS_SPECIFIC__AURA_RANGE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyMagicItemInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyMagicSchoolInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyMonsterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  ArmorClassAsc = 'ARMOR_CLASS_ASC',
  ArmorClassDesc = 'ARMOR_CLASS_DESC',
  ChallengeRatingAsc = 'CHALLENGE_RATING_ASC',
  ChallengeRatingDesc = 'CHALLENGE_RATING_DESC',
  CharismaAsc = 'CHARISMA_ASC',
  CharismaDesc = 'CHARISMA_DESC',
  ConstitutionAsc = 'CONSTITUTION_ASC',
  ConstitutionDesc = 'CONSTITUTION_DESC',
  DexterityAsc = 'DEXTERITY_ASC',
  DexterityDesc = 'DEXTERITY_DESC',
  HitDiceAsc = 'HIT_DICE_ASC',
  HitDiceDesc = 'HIT_DICE_DESC',
  HitPointsAsc = 'HIT_POINTS_ASC',
  HitPointsDesc = 'HIT_POINTS_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IntelligenceAsc = 'INTELLIGENCE_ASC',
  IntelligenceDesc = 'INTELLIGENCE_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SensesBlindsightAsc = 'SENSES__BLINDSIGHT_ASC',
  SensesBlindsightDesc = 'SENSES__BLINDSIGHT_DESC',
  SensesDarkvisionAsc = 'SENSES__DARKVISION_ASC',
  SensesDarkvisionDesc = 'SENSES__DARKVISION_DESC',
  SensesPassivePerceptionAsc = 'SENSES__PASSIVE_PERCEPTION_ASC',
  SensesPassivePerceptionDesc = 'SENSES__PASSIVE_PERCEPTION_DESC',
  SensesTremorsenseAsc = 'SENSES__TREMORSENSE_ASC',
  SensesTremorsenseDesc = 'SENSES__TREMORSENSE_DESC',
  SensesTruesightAsc = 'SENSES__TRUESIGHT_ASC',
  SensesTruesightDesc = 'SENSES__TRUESIGHT_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeedBurrowAsc = 'SPEED__BURROW_ASC',
  SpeedBurrowDesc = 'SPEED__BURROW_DESC',
  SpeedClimbAsc = 'SPEED__CLIMB_ASC',
  SpeedClimbDesc = 'SPEED__CLIMB_DESC',
  SpeedFlyAsc = 'SPEED__FLY_ASC',
  SpeedFlyDesc = 'SPEED__FLY_DESC',
  SpeedHoverAsc = 'SPEED__HOVER_ASC',
  SpeedHoverDesc = 'SPEED__HOVER_DESC',
  SpeedSwimAsc = 'SPEED__SWIM_ASC',
  SpeedSwimDesc = 'SPEED__SWIM_DESC',
  SpeedWalkAsc = 'SPEED__WALK_ASC',
  SpeedWalkDesc = 'SPEED__WALK_DESC',
  StrengthAsc = 'STRENGTH_ASC',
  StrengthDesc = 'STRENGTH_DESC',
  SubtypeAsc = 'SUBTYPE_ASC',
  SubtypeDesc = 'SUBTYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WisdomAsc = 'WISDOM_ASC',
  WisdomDesc = 'WISDOM_DESC',
  XpAsc = 'XP_ASC',
  XpDesc = 'XP_DESC'
}

export enum SortFindManyProficiencyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyRaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  AbilityBonusOptionsChooseAsc = 'ABILITY_BONUS_OPTIONS__CHOOSE_ASC',
  AbilityBonusOptionsChooseDesc = 'ABILITY_BONUS_OPTIONS__CHOOSE_DESC',
  AbilityBonusOptionsTypeAsc = 'ABILITY_BONUS_OPTIONS__TYPE_ASC',
  AbilityBonusOptionsTypeDesc = 'ABILITY_BONUS_OPTIONS__TYPE_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  StartingProficiencyOptionsChooseAsc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC',
  StartingProficiencyOptionsChooseDesc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC',
  StartingProficiencyOptionsTypeAsc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_ASC',
  StartingProficiencyOptionsTypeDesc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyRuleInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyRuleSectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManySpellInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  SchoolIndexAsc = 'SCHOOL__INDEX_ASC',
  SchoolIndexDesc = 'SCHOOL__INDEX_DESC',
  SchoolNameAsc = 'SCHOOL__NAME_ASC',
  SchoolNameDesc = 'SCHOOL__NAME_DESC',
  SchoolUrlAsc = 'SCHOOL__URL_ASC',
  SchoolUrlDesc = 'SCHOOL__URL_DESC'
}

export enum SortFindManyStartingEquipmentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManySubclassInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SubclassFlavorAsc = 'SUBCLASS_FLAVOR_ASC',
  SubclassFlavorDesc = 'SUBCLASS_FLAVOR_DESC',
  SubclassLevelsAsc = 'SUBCLASS_LEVELS_ASC',
  SubclassLevelsDesc = 'SUBCLASS_LEVELS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManySubraceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RaceIndexAsc = 'RACE__INDEX_ASC',
  RaceIndexDesc = 'RACE__INDEX_DESC',
  RaceNameAsc = 'RACE__NAME_ASC',
  RaceNameDesc = 'RACE__NAME_DESC',
  RaceUrlAsc = 'RACE__URL_ASC',
  RaceUrlDesc = 'RACE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyTraitInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProficiencyChoicesChooseAsc = 'PROFICIENCY_CHOICES__CHOOSE_ASC',
  ProficiencyChoicesChooseDesc = 'PROFICIENCY_CHOICES__CHOOSE_DESC',
  ProficiencyChoicesTypeAsc = 'PROFICIENCY_CHOICES__TYPE_ASC',
  ProficiencyChoicesTypeDesc = 'PROFICIENCY_CHOICES__TYPE_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  TraitSpecificSubtraitOptionsChooseAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC',
  TraitSpecificSubtraitOptionsChooseDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC',
  TraitSpecificSubtraitOptionsTypeAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC',
  TraitSpecificSubtraitOptionsTypeDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC',
  TraitSpecificSpellOptionsChooseAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC',
  TraitSpecificSpellOptionsChooseDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC',
  TraitSpecificSpellOptionsTypeAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC',
  TraitSpecificSpellOptionsTypeDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC',
  TraitSpecificDamageTypeIndexAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC',
  TraitSpecificDamageTypeIndexDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC',
  TraitSpecificDamageTypeNameAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC',
  TraitSpecificDamageTypeNameDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC',
  TraitSpecificDamageTypeUrlAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC',
  TraitSpecificDamageTypeUrlDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC',
  TraitSpecificBreathWeaponNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC',
  TraitSpecificBreathWeaponNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC',
  TraitSpecificBreathWeaponDescAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC',
  TraitSpecificBreathWeaponDescDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC',
  TraitSpecificBreathWeaponUsageTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC',
  TraitSpecificBreathWeaponUsageTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC',
  TraitSpecificBreathWeaponUsageTimesAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC',
  TraitSpecificBreathWeaponUsageTimesDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC',
  TraitSpecificBreathWeaponDcDcTypeIndexAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC',
  TraitSpecificBreathWeaponDcDcTypeIndexDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC',
  TraitSpecificBreathWeaponDcDcTypeNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC',
  TraitSpecificBreathWeaponDcDcTypeNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC',
  TraitSpecificBreathWeaponDcDcTypeUrlAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC',
  TraitSpecificBreathWeaponDcDcTypeUrlDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC',
  TraitSpecificBreathWeaponDcSuccessTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC',
  TraitSpecificBreathWeaponDcSuccessTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindManyWeaponPropertyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneAbilityScoreInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneAlignmentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneBackgroundInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  FeatureNameAsc = 'FEATURE__NAME_ASC',
  FeatureNameDesc = 'FEATURE__NAME_DESC',
  FeatureDescAsc = 'FEATURE__DESC_ASC',
  FeatureDescDesc = 'FEATURE__DESC_DESC',
  PersonalityTraitsChooseAsc = 'PERSONALITY_TRAITS__CHOOSE_ASC',
  PersonalityTraitsChooseDesc = 'PERSONALITY_TRAITS__CHOOSE_DESC',
  PersonalityTraitsFromAsc = 'PERSONALITY_TRAITS__FROM_ASC',
  PersonalityTraitsFromDesc = 'PERSONALITY_TRAITS__FROM_DESC',
  PersonalityTraitsTypeAsc = 'PERSONALITY_TRAITS__TYPE_ASC',
  PersonalityTraitsTypeDesc = 'PERSONALITY_TRAITS__TYPE_DESC',
  IdealsChooseAsc = 'IDEALS__CHOOSE_ASC',
  IdealsChooseDesc = 'IDEALS__CHOOSE_DESC',
  IdealsTypeAsc = 'IDEALS__TYPE_ASC',
  IdealsTypeDesc = 'IDEALS__TYPE_DESC',
  BondsChooseAsc = 'BONDS__CHOOSE_ASC',
  BondsChooseDesc = 'BONDS__CHOOSE_DESC',
  BondsFromAsc = 'BONDS__FROM_ASC',
  BondsFromDesc = 'BONDS__FROM_DESC',
  BondsTypeAsc = 'BONDS__TYPE_ASC',
  BondsTypeDesc = 'BONDS__TYPE_DESC',
  FlawsChooseAsc = 'FLAWS__CHOOSE_ASC',
  FlawsChooseDesc = 'FLAWS__CHOOSE_DESC',
  FlawsFromAsc = 'FLAWS__FROM_ASC',
  FlawsFromDesc = 'FLAWS__FROM_DESC',
  FlawsTypeAsc = 'FLAWS__TYPE_ASC',
  FlawsTypeDesc = 'FLAWS__TYPE_DESC'
}

export enum SortFindOneClassInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ClassLevelsAsc = 'CLASS_LEVELS_ASC',
  ClassLevelsDesc = 'CLASS_LEVELS_DESC',
  HitDieAsc = 'HIT_DIE_ASC',
  HitDieDesc = 'HIT_DIE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellcastingLevelAsc = 'SPELLCASTING__LEVEL_ASC',
  SpellcastingLevelDesc = 'SPELLCASTING__LEVEL_DESC',
  SpellcastingSpellcastingAbilityIndexAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC',
  SpellcastingSpellcastingAbilityIndexDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC',
  SpellcastingSpellcastingAbilityNameAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC',
  SpellcastingSpellcastingAbilityNameDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC',
  SpellcastingSpellcastingAbilityUrlAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC',
  SpellcastingSpellcastingAbilityUrlDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC',
  SpellsAsc = 'SPELLS_ASC',
  SpellsDesc = 'SPELLS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneConditionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneDamageTypeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneEquipmentCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneEquipmentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ArmorCategoryAsc = 'ARMOR_CATEGORY_ASC',
  ArmorCategoryDesc = 'ARMOR_CATEGORY_DESC',
  ArmorClassBaseAsc = 'ARMOR_CLASS__BASE_ASC',
  ArmorClassBaseDesc = 'ARMOR_CLASS__BASE_DESC',
  ArmorClassDexBonusAsc = 'ARMOR_CLASS__DEX_BONUS_ASC',
  ArmorClassDexBonusDesc = 'ARMOR_CLASS__DEX_BONUS_DESC',
  ArmorClassMaxBonusAsc = 'ARMOR_CLASS__MAX_BONUS_ASC',
  ArmorClassMaxBonusDesc = 'ARMOR_CLASS__MAX_BONUS_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  CostQuantityAsc = 'COST__QUANTITY_ASC',
  CostQuantityDesc = 'COST__QUANTITY_DESC',
  CostUnitAsc = 'COST__UNIT_ASC',
  CostUnitDesc = 'COST__UNIT_DESC',
  DamageDamageDiceAsc = 'DAMAGE__DAMAGE_DICE_ASC',
  DamageDamageDiceDesc = 'DAMAGE__DAMAGE_DICE_DESC',
  DamageDamageTypeIndexAsc = 'DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  DamageDamageTypeIndexDesc = 'DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  DamageDamageTypeNameAsc = 'DAMAGE__DAMAGE_TYPE__NAME_ASC',
  DamageDamageTypeNameDesc = 'DAMAGE__DAMAGE_TYPE__NAME_DESC',
  DamageDamageTypeUrlAsc = 'DAMAGE__DAMAGE_TYPE__URL_ASC',
  DamageDamageTypeUrlDesc = 'DAMAGE__DAMAGE_TYPE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  GearCategoryIndexAsc = 'GEAR_CATEGORY__INDEX_ASC',
  GearCategoryIndexDesc = 'GEAR_CATEGORY__INDEX_DESC',
  GearCategoryNameAsc = 'GEAR_CATEGORY__NAME_ASC',
  GearCategoryNameDesc = 'GEAR_CATEGORY__NAME_DESC',
  GearCategoryUrlAsc = 'GEAR_CATEGORY__URL_ASC',
  GearCategoryUrlDesc = 'GEAR_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  RangeLongAsc = 'RANGE__LONG_ASC',
  RangeLongDesc = 'RANGE__LONG_DESC',
  RangeNormalAsc = 'RANGE__NORMAL_ASC',
  RangeNormalDesc = 'RANGE__NORMAL_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  SpeedQuantityAsc = 'SPEED__QUANTITY_ASC',
  SpeedQuantityDesc = 'SPEED__QUANTITY_DESC',
  SpeedUnitAsc = 'SPEED__UNIT_ASC',
  SpeedUnitDesc = 'SPEED__UNIT_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ThrowRangeLongAsc = 'THROW_RANGE__LONG_ASC',
  ThrowRangeLongDesc = 'THROW_RANGE__LONG_DESC',
  ThrowRangeNormalAsc = 'THROW_RANGE__NORMAL_ASC',
  ThrowRangeNormalDesc = 'THROW_RANGE__NORMAL_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  TwoHandedDamageDamageDiceAsc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC',
  TwoHandedDamageDamageDiceDesc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC',
  TwoHandedDamageDamageTypeIndexAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  TwoHandedDamageDamageTypeIndexDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  TwoHandedDamageDamageTypeNameAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC',
  TwoHandedDamageDamageTypeNameDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC',
  TwoHandedDamageDamageTypeUrlAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC',
  TwoHandedDamageDamageTypeUrlDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VehicleCategoryAsc = 'VEHICLE_CATEGORY_ASC',
  VehicleCategoryDesc = 'VEHICLE_CATEGORY_DESC',
  WeaponCategoryAsc = 'WEAPON_CATEGORY_ASC',
  WeaponCategoryDesc = 'WEAPON_CATEGORY_DESC',
  WeaponRangeAsc = 'WEAPON_RANGE_ASC',
  WeaponRangeDesc = 'WEAPON_RANGE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC'
}

export enum SortFindOneFeatureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ChoiceChooseAsc = 'CHOICE__CHOOSE_ASC',
  ChoiceChooseDesc = 'CHOICE__CHOOSE_DESC',
  ChoiceTypeAsc = 'CHOICE__TYPE_ASC',
  ChoiceTypeDesc = 'CHOICE__TYPE_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  FeatureSpecificSubfeatureOptionsChooseAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificSubfeatureOptionsChooseDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificSubfeatureOptionsTypeAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC',
  FeatureSpecificSubfeatureOptionsTypeDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC',
  FeatureSpecificExpertiseOptionsChooseAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificExpertiseOptionsChooseDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificExpertiseOptionsTypeAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC',
  FeatureSpecificExpertiseOptionsTypeDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneLanguageInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneLevelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  AbilityScoreBonusesAsc = 'ABILITY_SCORE_BONUSES_ASC',
  AbilityScoreBonusesDesc = 'ABILITY_SCORE_BONUSES_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  ClassSpecificActionSurgesAsc = 'CLASS_SPECIFIC__ACTION_SURGES_ASC',
  ClassSpecificActionSurgesDesc = 'CLASS_SPECIFIC__ACTION_SURGES_DESC',
  ClassSpecificArcaneRecoveryLevelsAsc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC',
  ClassSpecificArcaneRecoveryLevelsDesc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC',
  ClassSpecificAuraRangeAsc = 'CLASS_SPECIFIC__AURA_RANGE_ASC',
  ClassSpecificAuraRangeDesc = 'CLASS_SPECIFIC__AURA_RANGE_DESC',
  ClassSpecificBardicInspirationDieAsc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC',
  ClassSpecificBardicInspirationDieDesc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC',
  ClassSpecificBrutalCriticalDiceAsc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC',
  ClassSpecificBrutalCriticalDiceDesc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC',
  ClassSpecificChannelDivinityChargesAsc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC',
  ClassSpecificChannelDivinityChargesDesc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC',
  ClassSpecificDestroyUndeadCrAsc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC',
  ClassSpecificDestroyUndeadCrDesc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC',
  ClassSpecificExtraAttacksAsc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_ASC',
  ClassSpecificExtraAttacksDesc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_DESC',
  ClassSpecificFavoredEnemiesAsc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_ASC',
  ClassSpecificFavoredEnemiesDesc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_DESC',
  ClassSpecificFavoredTerrainAsc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_ASC',
  ClassSpecificFavoredTerrainDesc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_DESC',
  ClassSpecificIndomitableUsesAsc = 'CLASS_SPECIFIC__INDOMITABLE_USES_ASC',
  ClassSpecificIndomitableUsesDesc = 'CLASS_SPECIFIC__INDOMITABLE_USES_DESC',
  ClassSpecificInvocationsKnownAsc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC',
  ClassSpecificInvocationsKnownDesc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC',
  ClassSpecificKiPointsAsc = 'CLASS_SPECIFIC__KI_POINTS_ASC',
  ClassSpecificKiPointsDesc = 'CLASS_SPECIFIC__KI_POINTS_DESC',
  ClassSpecificMagicalSecretsMax_5Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC',
  ClassSpecificMagicalSecretsMax_5Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC',
  ClassSpecificMagicalSecretsMax_7Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC',
  ClassSpecificMagicalSecretsMax_7Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC',
  ClassSpecificMagicalSecretsMax_9Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC',
  ClassSpecificMagicalSecretsMax_9Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC',
  ClassSpecificMartialArtsDiceCountAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC',
  ClassSpecificMartialArtsDiceCountDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC',
  ClassSpecificMartialArtsDiceValueAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC',
  ClassSpecificMartialArtsDiceValueDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC',
  ClassSpecificMetamagicKnownAsc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC',
  ClassSpecificMetamagicKnownDesc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC',
  ClassSpecificMysticArcanumLevel_6Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC',
  ClassSpecificMysticArcanumLevel_6Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC',
  ClassSpecificMysticArcanumLevel_7Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC',
  ClassSpecificMysticArcanumLevel_7Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC',
  ClassSpecificMysticArcanumLevel_8Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC',
  ClassSpecificMysticArcanumLevel_8Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC',
  ClassSpecificMysticArcanumLevel_9Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC',
  ClassSpecificMysticArcanumLevel_9Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC',
  ClassSpecificRageCountAsc = 'CLASS_SPECIFIC__RAGE_COUNT_ASC',
  ClassSpecificRageCountDesc = 'CLASS_SPECIFIC__RAGE_COUNT_DESC',
  ClassSpecificRageDamageBonusAsc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC',
  ClassSpecificRageDamageBonusDesc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC',
  ClassSpecificSneakAttackDiceCountAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC',
  ClassSpecificSneakAttackDiceCountDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC',
  ClassSpecificSneakAttackDiceValueAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC',
  ClassSpecificSneakAttackDiceValueDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC',
  ClassSpecificSongOfRestDieAsc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC',
  ClassSpecificSongOfRestDieDesc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC',
  ClassSpecificSorceryPointsAsc = 'CLASS_SPECIFIC__SORCERY_POINTS_ASC',
  ClassSpecificSorceryPointsDesc = 'CLASS_SPECIFIC__SORCERY_POINTS_DESC',
  ClassSpecificUnarmoredMovementAsc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC',
  ClassSpecificUnarmoredMovementDesc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC',
  ClassSpecificWildShapeFlyAsc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC',
  ClassSpecificWildShapeFlyDesc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC',
  ClassSpecificWildShapeMaxCrAsc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC',
  ClassSpecificWildShapeMaxCrDesc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC',
  ClassSpecificWildShapeSwimAsc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC',
  ClassSpecificWildShapeSwimDesc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  SpellcastingCantripsKnownAsc = 'SPELLCASTING__CANTRIPS_KNOWN_ASC',
  SpellcastingCantripsKnownDesc = 'SPELLCASTING__CANTRIPS_KNOWN_DESC',
  SpellcastingSpellSlotsLevel_1Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC',
  SpellcastingSpellSlotsLevel_1Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC',
  SpellcastingSpellSlotsLevel_2Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC',
  SpellcastingSpellSlotsLevel_2Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC',
  SpellcastingSpellSlotsLevel_3Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC',
  SpellcastingSpellSlotsLevel_3Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC',
  SpellcastingSpellSlotsLevel_4Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC',
  SpellcastingSpellSlotsLevel_4Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC',
  SpellcastingSpellSlotsLevel_5Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC',
  SpellcastingSpellSlotsLevel_5Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC',
  SpellcastingSpellSlotsLevel_6Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC',
  SpellcastingSpellSlotsLevel_6Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC',
  SpellcastingSpellSlotsLevel_7Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC',
  SpellcastingSpellSlotsLevel_7Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC',
  SpellcastingSpellSlotsLevel_8Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC',
  SpellcastingSpellSlotsLevel_8Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC',
  SpellcastingSpellSlotsLevel_9Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC',
  SpellcastingSpellSlotsLevel_9Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC',
  SpellcastingSpellsKnownAsc = 'SPELLCASTING__SPELLS_KNOWN_ASC',
  SpellcastingSpellsKnownDesc = 'SPELLCASTING__SPELLS_KNOWN_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlAsc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlDesc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC',
  SubclassSpecificAuraRangeAsc = 'SUBCLASS_SPECIFIC__AURA_RANGE_ASC',
  SubclassSpecificAuraRangeDesc = 'SUBCLASS_SPECIFIC__AURA_RANGE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneMagicItemInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneMagicSchoolInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneMonsterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  ArmorClassAsc = 'ARMOR_CLASS_ASC',
  ArmorClassDesc = 'ARMOR_CLASS_DESC',
  ChallengeRatingAsc = 'CHALLENGE_RATING_ASC',
  ChallengeRatingDesc = 'CHALLENGE_RATING_DESC',
  CharismaAsc = 'CHARISMA_ASC',
  CharismaDesc = 'CHARISMA_DESC',
  ConstitutionAsc = 'CONSTITUTION_ASC',
  ConstitutionDesc = 'CONSTITUTION_DESC',
  DexterityAsc = 'DEXTERITY_ASC',
  DexterityDesc = 'DEXTERITY_DESC',
  HitDiceAsc = 'HIT_DICE_ASC',
  HitDiceDesc = 'HIT_DICE_DESC',
  HitPointsAsc = 'HIT_POINTS_ASC',
  HitPointsDesc = 'HIT_POINTS_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IntelligenceAsc = 'INTELLIGENCE_ASC',
  IntelligenceDesc = 'INTELLIGENCE_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SensesBlindsightAsc = 'SENSES__BLINDSIGHT_ASC',
  SensesBlindsightDesc = 'SENSES__BLINDSIGHT_DESC',
  SensesDarkvisionAsc = 'SENSES__DARKVISION_ASC',
  SensesDarkvisionDesc = 'SENSES__DARKVISION_DESC',
  SensesPassivePerceptionAsc = 'SENSES__PASSIVE_PERCEPTION_ASC',
  SensesPassivePerceptionDesc = 'SENSES__PASSIVE_PERCEPTION_DESC',
  SensesTremorsenseAsc = 'SENSES__TREMORSENSE_ASC',
  SensesTremorsenseDesc = 'SENSES__TREMORSENSE_DESC',
  SensesTruesightAsc = 'SENSES__TRUESIGHT_ASC',
  SensesTruesightDesc = 'SENSES__TRUESIGHT_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeedBurrowAsc = 'SPEED__BURROW_ASC',
  SpeedBurrowDesc = 'SPEED__BURROW_DESC',
  SpeedClimbAsc = 'SPEED__CLIMB_ASC',
  SpeedClimbDesc = 'SPEED__CLIMB_DESC',
  SpeedFlyAsc = 'SPEED__FLY_ASC',
  SpeedFlyDesc = 'SPEED__FLY_DESC',
  SpeedHoverAsc = 'SPEED__HOVER_ASC',
  SpeedHoverDesc = 'SPEED__HOVER_DESC',
  SpeedSwimAsc = 'SPEED__SWIM_ASC',
  SpeedSwimDesc = 'SPEED__SWIM_DESC',
  SpeedWalkAsc = 'SPEED__WALK_ASC',
  SpeedWalkDesc = 'SPEED__WALK_DESC',
  StrengthAsc = 'STRENGTH_ASC',
  StrengthDesc = 'STRENGTH_DESC',
  SubtypeAsc = 'SUBTYPE_ASC',
  SubtypeDesc = 'SUBTYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WisdomAsc = 'WISDOM_ASC',
  WisdomDesc = 'WISDOM_DESC',
  XpAsc = 'XP_ASC',
  XpDesc = 'XP_DESC'
}

export enum SortFindOneProficiencyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneRaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  AbilityBonusOptionsChooseAsc = 'ABILITY_BONUS_OPTIONS__CHOOSE_ASC',
  AbilityBonusOptionsChooseDesc = 'ABILITY_BONUS_OPTIONS__CHOOSE_DESC',
  AbilityBonusOptionsTypeAsc = 'ABILITY_BONUS_OPTIONS__TYPE_ASC',
  AbilityBonusOptionsTypeDesc = 'ABILITY_BONUS_OPTIONS__TYPE_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  StartingProficiencyOptionsChooseAsc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC',
  StartingProficiencyOptionsChooseDesc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC',
  StartingProficiencyOptionsTypeAsc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_ASC',
  StartingProficiencyOptionsTypeDesc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneRuleInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneRuleSectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneSpellInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  SchoolIndexAsc = 'SCHOOL__INDEX_ASC',
  SchoolIndexDesc = 'SCHOOL__INDEX_DESC',
  SchoolNameAsc = 'SCHOOL__NAME_ASC',
  SchoolNameDesc = 'SCHOOL__NAME_DESC',
  SchoolUrlAsc = 'SCHOOL__URL_ASC',
  SchoolUrlDesc = 'SCHOOL__URL_DESC'
}

export enum SortFindOneStartingEquipmentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneSubclassInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SubclassFlavorAsc = 'SUBCLASS_FLAVOR_ASC',
  SubclassFlavorDesc = 'SUBCLASS_FLAVOR_DESC',
  SubclassLevelsAsc = 'SUBCLASS_LEVELS_ASC',
  SubclassLevelsDesc = 'SUBCLASS_LEVELS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneSubraceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RaceIndexAsc = 'RACE__INDEX_ASC',
  RaceIndexDesc = 'RACE__INDEX_DESC',
  RaceNameAsc = 'RACE__NAME_ASC',
  RaceNameDesc = 'RACE__NAME_DESC',
  RaceUrlAsc = 'RACE__URL_ASC',
  RaceUrlDesc = 'RACE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneTraitInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProficiencyChoicesChooseAsc = 'PROFICIENCY_CHOICES__CHOOSE_ASC',
  ProficiencyChoicesChooseDesc = 'PROFICIENCY_CHOICES__CHOOSE_DESC',
  ProficiencyChoicesTypeAsc = 'PROFICIENCY_CHOICES__TYPE_ASC',
  ProficiencyChoicesTypeDesc = 'PROFICIENCY_CHOICES__TYPE_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  TraitSpecificSubtraitOptionsChooseAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC',
  TraitSpecificSubtraitOptionsChooseDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC',
  TraitSpecificSubtraitOptionsTypeAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC',
  TraitSpecificSubtraitOptionsTypeDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC',
  TraitSpecificSpellOptionsChooseAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC',
  TraitSpecificSpellOptionsChooseDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC',
  TraitSpecificSpellOptionsTypeAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC',
  TraitSpecificSpellOptionsTypeDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC',
  TraitSpecificDamageTypeIndexAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC',
  TraitSpecificDamageTypeIndexDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC',
  TraitSpecificDamageTypeNameAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC',
  TraitSpecificDamageTypeNameDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC',
  TraitSpecificDamageTypeUrlAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC',
  TraitSpecificDamageTypeUrlDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC',
  TraitSpecificBreathWeaponNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC',
  TraitSpecificBreathWeaponNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC',
  TraitSpecificBreathWeaponDescAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC',
  TraitSpecificBreathWeaponDescDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC',
  TraitSpecificBreathWeaponUsageTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC',
  TraitSpecificBreathWeaponUsageTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC',
  TraitSpecificBreathWeaponUsageTimesAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC',
  TraitSpecificBreathWeaponUsageTimesDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC',
  TraitSpecificBreathWeaponDcDcTypeIndexAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC',
  TraitSpecificBreathWeaponDcDcTypeIndexDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC',
  TraitSpecificBreathWeaponDcDcTypeNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC',
  TraitSpecificBreathWeaponDcDcTypeNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC',
  TraitSpecificBreathWeaponDcDcTypeUrlAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC',
  TraitSpecificBreathWeaponDcDcTypeUrlDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC',
  TraitSpecificBreathWeaponDcSuccessTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC',
  TraitSpecificBreathWeaponDcSuccessTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export enum SortFindOneWeaponPropertyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export type Spell = {
  __typename?: 'Spell';
  _id: Scalars['String'];
  area_of_effect?: Maybe<SpellArea_Of_Effect>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<SpellClasses>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<SpellSchool>;
  subclasses?: Maybe<Array<Maybe<SpellSubclasses>>>;
  url?: Maybe<Scalars['String']>;
};

export type SpellArea_Of_Effect = {
  __typename?: 'SpellArea_of_effect';
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type SpellClasses = {
  __typename?: 'SpellClasses';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<SpellDamageDamage_Type>;
};

export type SpellDamageDamage_Type = {
  __typename?: 'SpellDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellDc = {
  __typename?: 'SpellDc';
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<SpellDcDc_Type>;
  desc?: Maybe<Scalars['String']>;
};

export type SpellDcDc_Type = {
  __typename?: 'SpellDcDc_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellSchool = {
  __typename?: 'SpellSchool';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellSubclasses = {
  __typename?: 'SpellSubclasses';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type StartingEquipment = {
  __typename?: 'StartingEquipment';
  _id: Scalars['String'];
  class?: Maybe<StartingEquipmentClass>;
  index?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<StartingEquipmentStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<StartingEquipmentStarting_Equipment_Options>>>;
  url?: Maybe<Scalars['String']>;
};

export type StartingEquipmentClass = {
  __typename?: 'StartingEquipmentClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StartingEquipmentStarting_Equipment = {
  __typename?: 'StartingEquipmentStarting_equipment';
  equipment?: Maybe<StartingEquipmentStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type StartingEquipmentStarting_EquipmentEquipment = {
  __typename?: 'StartingEquipmentStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StartingEquipmentStarting_Equipment_Options = {
  __typename?: 'StartingEquipmentStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<StartingEquipmentStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type StartingEquipmentStarting_Equipment_OptionsFrom = {
  __typename?: 'StartingEquipmentStarting_equipment_optionsFrom';
  equipment?: Maybe<StartingEquipmentStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type StartingEquipmentStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'StartingEquipmentStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Subclass = {
  __typename?: 'Subclass';
  _id: Scalars['String'];
  class?: Maybe<SubclassClass>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<SubclassSpells>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubclassClass = {
  __typename?: 'SubclassClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubclassSpells = {
  __typename?: 'SubclassSpells';
  prerequisites?: Maybe<Array<Maybe<SubclassSpellsPrerequisites>>>;
  spell?: Maybe<SubclassSpellsSpell>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SubclassSpellsPrerequisites = {
  __typename?: 'SubclassSpellsPrerequisites';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SubclassSpellsSpell = {
  __typename?: 'SubclassSpellsSpell';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Subrace = {
  __typename?: 'Subrace';
  _id: Scalars['String'];
  ability_bonuses?: Maybe<Array<Maybe<SubraceAbility_Bonuses>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<SubraceLanguage_Options>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<SubraceRace>;
  racial_traits?: Maybe<Array<Maybe<SubraceRacial_Traits>>>;
  starting_proficiencies?: Maybe<Array<Maybe<SubraceStarting_Proficiencies>>>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceAbility_Bonuses = {
  __typename?: 'SubraceAbility_bonuses';
  ability_score?: Maybe<SubraceAbility_BonusesAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SubraceAbility_BonusesAbility_Score = {
  __typename?: 'SubraceAbility_bonusesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceLanguage_Options = {
  __typename?: 'SubraceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<SubraceLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type SubraceLanguage_OptionsFrom = {
  __typename?: 'SubraceLanguage_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SubraceRace = {
  __typename?: 'SubraceRace';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceRacial_Traits = {
  __typename?: 'SubraceRacial_traits';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SubraceStarting_Proficiencies = {
  __typename?: 'SubraceStarting_proficiencies';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type Trait = {
  __typename?: 'Trait';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<TraitProficiencies>>>;
  proficiency_choices?: Maybe<TraitProficiency_Choices>;
  races?: Maybe<Array<Maybe<TraitRaces>>>;
  subraces?: Maybe<Array<Maybe<TraitSubraces>>>;
  parent?: Maybe<TraitParent>;
  trait_specific?: Maybe<TraitTrait_Specific>;
  url?: Maybe<Scalars['String']>;
};

export type TraitParent = {
  __typename?: 'TraitParent';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitProficiencies = {
  __typename?: 'TraitProficiencies';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type TraitProficiency_Choices = {
  __typename?: 'TraitProficiency_choices';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitProficiency_ChoicesFrom = {
  __typename?: 'TraitProficiency_choicesFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type TraitRaces = {
  __typename?: 'TraitRaces';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type TraitSubraces = {
  __typename?: 'TraitSubraces';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type TraitTrait_Specific = {
  __typename?: 'TraitTrait_specific';
  subtrait_options?: Maybe<TraitTrait_SpecificSubtrait_Options>;
  spell_options?: Maybe<TraitTrait_SpecificSpell_Options>;
  damage_type?: Maybe<TraitTrait_SpecificDamage_Type>;
  breath_weapon?: Maybe<TraitTrait_SpecificBreath_Weapon>;
};

export type TraitTrait_SpecificBreath_Weapon = {
  __typename?: 'TraitTrait_specificBreath_weapon';
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  usage?: Maybe<TraitTrait_SpecificBreath_WeaponUsage>;
  dc?: Maybe<TraitTrait_SpecificBreath_WeaponDc>;
  damage?: Maybe<Array<Maybe<TraitTrait_SpecificBreath_WeaponDamage>>>;
};

export type TraitTrait_SpecificBreath_WeaponDamage = {
  __typename?: 'TraitTrait_specificBreath_weaponDamage';
  damage_type?: Maybe<TraitTrait_SpecificBreath_WeaponDamageDamage_Type>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type TraitTrait_SpecificBreath_WeaponDamageDamage_Type = {
  __typename?: 'TraitTrait_specificBreath_weaponDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponDc = {
  __typename?: 'TraitTrait_specificBreath_weaponDc';
  dc_type?: Maybe<TraitTrait_SpecificBreath_WeaponDcDc_Type>;
  success_type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponDcDc_Type = {
  __typename?: 'TraitTrait_specificBreath_weaponDcDc_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponUsage = {
  __typename?: 'TraitTrait_specificBreath_weaponUsage';
  type?: Maybe<Scalars['String']>;
  times?: Maybe<Scalars['Float']>;
};

export type TraitTrait_SpecificDamage_Type = {
  __typename?: 'TraitTrait_specificDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSpell_Options = {
  __typename?: 'TraitTrait_specificSpell_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitTrait_SpecificSpell_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSpell_OptionsFrom = {
  __typename?: 'TraitTrait_specificSpell_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type TraitTrait_SpecificSubtrait_Options = {
  __typename?: 'TraitTrait_specificSubtrait_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitTrait_SpecificSubtrait_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSubtrait_OptionsFrom = {
  __typename?: 'TraitTrait_specificSubtrait_optionsFrom';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type WeaponProperty = {
  __typename?: 'WeaponProperty';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassDescriptionQueryVariables = Exact<{
  index: Scalars['String'];
}>;


export type ClassDescriptionQuery = (
  { __typename?: 'Query' }
  & { class?: Maybe<(
    { __typename?: 'Class' }
    & Pick<Class, 'index' | 'name'>
    & { spellcasting?: Maybe<(
      { __typename?: 'ClassSpellcasting' }
      & Pick<ClassSpellcasting, 'level'>
      & { info?: Maybe<Array<Maybe<(
        { __typename?: 'ClassSpellcastingInfo' }
        & Pick<ClassSpellcastingInfo, 'name' | 'desc'>
      )>>>, spellcasting_ability?: Maybe<(
        { __typename?: 'ClassSpellcastingSpellcasting_ability' }
        & Pick<ClassSpellcastingSpellcasting_Ability, 'index' | 'name'>
      )> }
    )> }
  )> }
);

export type ClassLevelDetialsQueryVariables = Exact<{
  index: Scalars['String'];
}>;


export type ClassLevelDetialsQuery = (
  { __typename?: 'Query' }
  & { class?: Maybe<(
    { __typename?: 'Class' }
    & Pick<Class, 'index'>
    & { spellcasting?: Maybe<(
      { __typename?: 'ClassSpellcasting' }
      & Pick<ClassSpellcasting, 'level'>
    )>, subclasses?: Maybe<Array<Maybe<(
      { __typename?: 'ClassSubclasses' }
      & Pick<ClassSubclasses, 'index' | 'name'>
    )>>> }
  )> }
);

export type ClassesQueryVariables = Exact<{ [key: string]: never; }>;


export type ClassesQuery = (
  { __typename?: 'Query' }
  & { classes: Array<(
    { __typename?: 'Class' }
    & Pick<Class, 'index' | 'name'>
  )> }
);

export type ClassSpellLevelsQueryVariables = Exact<{
  index: Scalars['String'];
  level: Scalars['Float'];
}>;


export type ClassSpellLevelsQuery = (
  { __typename?: 'Query' }
  & { level?: Maybe<(
    { __typename?: 'Level' }
    & Pick<Level, 'index'>
    & { spellcasting?: Maybe<(
      { __typename?: 'LevelSpellcasting' }
      & Pick<LevelSpellcasting, 'cantrips_known' | 'spell_slots_level_1' | 'spell_slots_level_2' | 'spell_slots_level_3' | 'spell_slots_level_4' | 'spell_slots_level_5' | 'spell_slots_level_6' | 'spell_slots_level_7' | 'spell_slots_level_8' | 'spell_slots_level_9' | 'spells_known'>
    )> }
  )> }
);

export type ClassSpellListQueryVariables = Exact<{
  index: Scalars['String'];
  subclass?: Maybe<Array<Maybe<FilterFindManySpellSubclassesInput>> | Maybe<FilterFindManySpellSubclassesInput>>;
  level: Scalars['Float'];
}>;


export type ClassSpellListQuery = (
  { __typename?: 'Query' }
  & { spells: Array<(
    { __typename?: 'Spell' }
    & SpellDetailsFragment
  )> }
);

export type SpellDetailsFragment = (
  { __typename?: 'Spell' }
  & Pick<Spell, 'index'>
  & SpellDetailsHeaderFragment
  & SpellDetailsInfoFragment
  & SpellDetailsDescFragment
  & SpellDetailsBannersFragment
  & SpellDetailsHigherLevelsFragment
);

export type SpellDetailsHeaderFragment = (
  { __typename?: 'Spell' }
  & Pick<Spell, 'name' | 'level'>
  & { school?: Maybe<(
    { __typename?: 'SpellSchool' }
    & Pick<SpellSchool, 'index' | 'name'>
  )> }
);

export type SpellDetailsInfoFragment = (
  { __typename?: 'Spell' }
  & Pick<Spell, 'casting_time' | 'range' | 'duration' | 'concentration' | 'components'>
);

export type SpellDetailsDescFragment = (
  { __typename?: 'Spell' }
  & Pick<Spell, 'desc'>
);

export type SpellDetailsBannersFragment = (
  { __typename?: 'Spell' }
  & Pick<Spell, 'material' | 'ritual'>
  & { dc?: Maybe<(
    { __typename?: 'SpellDc' }
    & Pick<SpellDc, 'dc_success' | 'desc'>
    & { dc_type?: Maybe<(
      { __typename?: 'SpellDcDc_type' }
      & Pick<SpellDcDc_Type, 'index' | 'name'>
    )> }
  )> }
);

export type SpellDetailsHigherLevelsFragment = (
  { __typename?: 'Spell' }
  & Pick<Spell, 'higher_level'>
);

export const SpellDetailsHeaderFragmentDoc = gql`
    fragment SpellDetailsHeader on Spell {
  name
  school {
    index
    name
  }
  level
}
    `;
export const SpellDetailsInfoFragmentDoc = gql`
    fragment SpellDetailsInfo on Spell {
  casting_time
  range
  duration
  concentration
  components
}
    `;
export const SpellDetailsDescFragmentDoc = gql`
    fragment SpellDetailsDesc on Spell {
  desc
}
    `;
export const SpellDetailsBannersFragmentDoc = gql`
    fragment SpellDetailsBanners on Spell {
  dc {
    dc_success
    dc_type {
      index
      name
    }
    desc
  }
  material
  ritual
}
    `;
export const SpellDetailsHigherLevelsFragmentDoc = gql`
    fragment SpellDetailsHigherLevels on Spell {
  higher_level
}
    `;
export const SpellDetailsFragmentDoc = gql`
    fragment SpellDetails on Spell {
  index
  ...SpellDetailsHeader
  ...SpellDetailsInfo
  ...SpellDetailsDesc
  ...SpellDetailsBanners
  ...SpellDetailsHigherLevels
}
    ${SpellDetailsHeaderFragmentDoc}
${SpellDetailsInfoFragmentDoc}
${SpellDetailsDescFragmentDoc}
${SpellDetailsBannersFragmentDoc}
${SpellDetailsHigherLevelsFragmentDoc}`;
export const ClassDescriptionDocument = gql`
    query ClassDescription($index: String!) {
  class(filter: {index: $index}) {
    index
    name
    spellcasting {
      level
      info {
        name
        desc
      }
      spellcasting_ability {
        index
        name
      }
    }
  }
}
    `;

export function useClassDescriptionQuery(options: Omit<Urql.UseQueryArgs<ClassDescriptionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClassDescriptionQuery>({ query: ClassDescriptionDocument, ...options });
};
export const ClassLevelDetialsDocument = gql`
    query ClassLevelDetials($index: String!) {
  class(filter: {index: $index}) {
    index
    spellcasting {
      level
    }
    subclasses {
      index
      name
    }
  }
}
    `;

export function useClassLevelDetialsQuery(options: Omit<Urql.UseQueryArgs<ClassLevelDetialsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClassLevelDetialsQuery>({ query: ClassLevelDetialsDocument, ...options });
};
export const ClassesDocument = gql`
    query Classes {
  classes {
    index
    name
  }
}
    `;

export function useClassesQuery(options: Omit<Urql.UseQueryArgs<ClassesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClassesQuery>({ query: ClassesDocument, ...options });
};
export const ClassSpellLevelsDocument = gql`
    query ClassSpellLevels($index: String!, $level: Float!) {
  level(filter: {class: {index: $index}, level: $level}) {
    index
    spellcasting {
      cantrips_known
      spell_slots_level_1
      spell_slots_level_2
      spell_slots_level_3
      spell_slots_level_4
      spell_slots_level_5
      spell_slots_level_6
      spell_slots_level_7
      spell_slots_level_8
      spell_slots_level_9
      spells_known
    }
  }
}
    `;

export function useClassSpellLevelsQuery(options: Omit<Urql.UseQueryArgs<ClassSpellLevelsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClassSpellLevelsQuery>({ query: ClassSpellLevelsDocument, ...options });
};
export const ClassSpellListDocument = gql`
    query ClassSpellList($index: String!, $subclass: [FilterFindManySpellSubclassesInput], $level: Float!) {
  spells(
    filter: {classes: [{index: $index}], level: $level, subclasses: $subclass}
    sort: _ID_ASC
    limit: 500
  ) {
    ...SpellDetails
  }
}
    ${SpellDetailsFragmentDoc}`;

export function useClassSpellListQuery(options: Omit<Urql.UseQueryArgs<ClassSpellListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClassSpellListQuery>({ query: ClassSpellListDocument, ...options });
};