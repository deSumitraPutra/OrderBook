import React, { ChangeEvent, FunctionComponent } from 'react';

import { GroupingSelectBoxStyles } from './GroupingSelectBox.styles';

interface GroupingSelectBoxProps {
  options: number[],
  onChange: (selectedOption: number) => void
}

const GroupingSelectBox: FunctionComponent<GroupingSelectBoxProps> = (props) => {
  const { options, onChange } = props;
  const [defaultValue] = options;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onChange(Number(event.target.value));

  return (
    <GroupingSelectBoxStyles>
      <select
        data-testid="groupings"
        name="groupings"
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {options.map((option, idx) =>
          <option
            key={idx}
            value={option}
          >
            Group {option}
          </option>
        )}
      </select>
    </GroupingSelectBoxStyles>
  );
};

export default GroupingSelectBox;
