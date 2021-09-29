export const delay = async (milliseconds) =>
  await new Promise((r) => setTimeout(r, milliseconds));
