export const json = (json) => {
  // This function cannot be optimised, it's best to
  // keep it small!
  var parsed

  try {
    parsed = JSON.parse(json)
  } catch (e) {
    return {};
  }

  return parsed
}
