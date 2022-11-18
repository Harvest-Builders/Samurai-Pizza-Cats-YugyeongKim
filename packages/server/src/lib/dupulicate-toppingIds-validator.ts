function validatedToppingIdsInput(toppingIds: string[]): Promise<String[]> {
  if (!toppingIds) {
    return toppingIds;
  }
  return toppingIds.filter((id, index) => toppingIds.indexOf(id) === index);
}

export default validateStringInputs;
