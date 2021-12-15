/** @type {import('react-select').StylesConfig} */
export const styles = {
  container: provided => ({
    ...provided,
    width: '100%',
    ':focus': {
      borderColor: '#f9fafb',
    },
  }),
  control: provided => ({
    ...provided,
    minHeight: 40,
    background: '#f9fafb',
    borderColor: '#e5e7eb',
    ':hover': {
      borderColor: '#e5e7eb',
    },
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: '#f9fafb',
  }),
  indicatorSeparator: () => ({}),
  multiValue: provided => ({
    ...provided,
    backgroundColor: '#f9fafb',
  }),
};
