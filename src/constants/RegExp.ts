const RegexExpression = Object.freeze({
  NumbersOnly: /^\d+$/,
  IntegersOnly: /^[1-9]\d*(\.\d+)?$/,
  NumberRangePattern: /^(10|[1-9])$/,
  CharactersAndIntegers: /\d/,
  Email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[\W_]).{8,16}$/,
  // eslint-disable-next-line no-useless-escape
  SpecialChars: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  Alphabhets: /[a-zA-Z]/,
  ParseQueryParams: /[?&]([^=#]+)=([^&#]*)/g,
  NoZeroFirst: /^(?!0)\d*/,
});

const replaceFirstZero = (text: string) => {
  return text?.replace(/^0+(?=\d)?/, "");
};

export { RegexExpression, replaceFirstZero };
