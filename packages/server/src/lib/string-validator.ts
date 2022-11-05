import { UpdatePizzaInput, UpdateToppingInput } from 'src/application/schema/types/schema';

const validateStringInputs = (input: UpdateToppingInput | UpdatePizzaInput): Boolean => {
  let result = true;
  for (const [key, value] of Object.entries(input)) {
    if (value === '' || value === null) {
      result = false;
    }
  }
  return result;
};

export default validateStringInputs;
