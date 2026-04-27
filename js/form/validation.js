const createValidator = (form, config, rules) => {
  const pristine = new Pristine(form, config);

  rules.forEach((rule) => {
    pristine.addValidator(
      rule.element,
      rule.validate,
      rule.message
    );
  });

  const validate = () => pristine.validate();

  return { pristine, validate };
};

export { createValidator };
