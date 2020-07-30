import passwordValidator from "password-validator";

export function createSchema(requirement) {
  const schema = new passwordValidator();

  if (requirement.minLength) {
    schema.is().min(requirement.minLength);
  }

  if (requirement.maxLength) {
    schema.is().max(requirement.maxLength);
  }

  if (requirement.mustHaveUppercase) {
    schema.has().uppercase();
  }

  if (requirement.mustHaveLowercase) {
    schema.has().lowercase();
  }

  if (requirement.mustHaveDigits) {
    schema.has().digits();
  }

  if (requirement.mustNotHaveSpaces) {
    schema.has().not().spaces();
  }

  if (requirement.blacklist) {
    schema.is().not().oneOf(requirement.blacklist);
  }

  return schema;
}
