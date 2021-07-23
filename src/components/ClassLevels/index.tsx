import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import React, { FC, useMemo, useState } from 'react';
import {
  ClassLevelDetialsDocument,
  ClassLevelDetialsQuery,
  ClassLevelDetialsQueryVariables,
} from '../../generated/graphql';
import { CellSuccessProps, withCell } from '../../utils/withCell';
import ClassSpellLevels from '../ClassSpellLevels';

const ClassLevelDetialsSuccess: FC<
  CellSuccessProps<ClassLevelDetialsQuery, ClassLevelDetialsQueryVariables>
> = ({ data, variables: { index } }) => {
  const [level, setLevel] = useState(1);

  const subclasses = useMemo(() => {
    const subclassesChoices: {
      id: string;
      label?: string | null;
      description: string;
    }[] = [
      {
        id: 'none',
        label: 'No subclass',
        description: 'See spells for all subclasses',
      },
    ];

    const subclasses = data?.class?.subclasses;

    if (subclasses) {
      subclasses.forEach((subclass) => {
        if (subclass && subclass.index)
          subclassesChoices.push({
            id: subclass.index,
            label: subclass.name,
            description: `See spells for the "${subclass.name}" subclass`,
          });
      });
    }
    return subclassesChoices;
  }, [data?.class?.subclasses]);

  const [selected, setSelected] = useState(subclasses[0].id);

  return (
    <>
      <div className="mx-auto mb-8 max-w-md">
        <h3 className="mb-8 text-3xl font-bold text-center">Spells</h3>
        <div className="flex flex-col flex-nowrap">
          <label htmlFor="level-select">Select class level</label>
          <select
            id="level-select"
            value={level}
            onChange={(e) => {
              setLevel(Number(e.target.value));
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="py-16 px-4 w-full">
          <div className="mx-auto w-full max-w-md">
            <RadioGroup value={selected} onChange={setSelected}>
              {/* This Label is for the root `RadioGroup`.  */}
              <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>

              <div className="space-y-4">
                {subclasses.map(({ id, label, description }) => (
                  <RadioGroup.Option
                    value={id}
                    key={label}
                    className={({ checked }) =>
                      classNames(
                        'overflow-hidden bg-white rounded-md border-gray-400 relative border p-4 flex',
                        checked ? 'bg-gray-200' : '',
                      )
                    }
                  >
                    {({ checked }) => (
                      <div className="flex flex-col">
                        {/* This Label is for the `RadioGroup.Option`.  */}
                        <RadioGroup.Label
                          as="span"
                          className={classNames(
                            checked ? 'text-black' : 'text-gray-900',
                            'block text-sm font-medium',
                          )}
                        >
                          {label}
                        </RadioGroup.Label>

                        {/* This Description is for the `RadioGroup.Option`.  */}
                        <RadioGroup.Description
                          as="span"
                          className={classNames(
                            checked ? 'text-black' : 'text-gray-500',
                            'block text-sm',
                          )}
                        >
                          {description}
                        </RadioGroup.Description>
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <ClassSpellLevels
          index={index}
          level={level}
          subclassIndex={selected === 'none' ? undefined : selected}
        />
      </div>
    </>
  );
};

const ClassLevelDetials = withCell<
  ClassLevelDetialsQuery,
  ClassLevelDetialsQueryVariables
>({
  QUERY: ClassLevelDetialsDocument,
  Success: ClassLevelDetialsSuccess,
});

export default ClassLevelDetials;
