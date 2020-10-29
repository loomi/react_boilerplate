import React from 'react';

import { dateRangeValues } from 'helpers/dates';
import { StyledDatePeriodPicker, GlobalRangePickerOverride } from './DatePeriodPicker.style';

// TODO: translate, format date to pt-br

function DatePeriodPicker(props) {
  const minutesRange = () => {
    const result = [];
    for (let i = 0; i < 61; i += 1) {
      if (i % 10 !== 0) {
        result.push(i);
      }
    }
    return result;
  };

  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledMinutes: minutesRange(),
      };
    }
    return {
      disabledMinutes: minutesRange(),
    };
  }
  return (
    <>
      <GlobalRangePickerOverride />

      <StyledDatePeriodPicker
        {...props}
        dropdownClassName="gaes-custom-range-picker"
        ranges={dateRangeValues()}
        disabledMinutes={minutesRange}
        showTime={{
          hideDisabledOptions: true,
        }}
      />
    </>
  );
}

export default DatePeriodPicker;
