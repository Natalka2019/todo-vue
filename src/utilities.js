export const required = (val) => ({ status: !!val });

export const minLength = (num) => (val) => ({
  status: val.length >= num,
  value: num,
});

export const maxLength = (num) => (val) => ({
  status: val.length <= num,
  value: num,
});

export const noDigits = (val) => {
  return { status: /^([^0-9]*)$/.test(val) };
};

export const validEmail = (val) => {
  return { status: /(?=^.{1,64}@.{1,64}$)^(.+@.+\..+)$/.test(val) };
};

export const validPassword = (val) => {
  return {
    status: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,50}$/.test(val),
  };
};

export const validConfirmPassword = () => {
  return { status: false };
};
