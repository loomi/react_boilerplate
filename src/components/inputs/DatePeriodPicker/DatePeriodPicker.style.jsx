import styled, { createGlobalStyle } from 'styled-components';
import DatePicker from 'components/inputs/DatePicker';

// TODO: add colors and sizes variables.

export const GlobalRangePickerOverride = createGlobalStyle`
  .gaes-custom-range-picker .ant-picker {
    &-panel-container {
      display: flex;
      flex-direction: row-reverse;
      background-color: transparent;
      box-shadow: none;
    }

    &-time-panel-column {
      background-color: white;
    }

    &-date-panel, &-ranges {
      background: white;
      border-radius: 8px;
      height: 100%;
    }

    &-date-panel {
      margin-left: 24px;
    }

    &-ranges {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      li {
        display: block;
        padding: 4px 24px;
        font-weight: bold;
        color: black;

        &:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, .1);
        }

        span.ant-tag {
          font-size: 14px;
          background: none !important;
          border: 0 !important;

          &:not(:hover) {
            color: black !important;
          }
        }
      }
    }

    &-footer {
      min-width: auto;
    }
  }
`;

export const StyledDatePeriodPicker = styled(DatePicker.RangePicker)`
  width: 100%;
`;

export default ({
  DatePeriodPicker: StyledDatePeriodPicker,
});
