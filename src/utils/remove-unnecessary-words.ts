export const removeUnnecessaryWord = (message: string) => {
  const messageWithoutPeriod = message.replace(".", "").toLowerCase();
  return messageWithoutPeriod;
};
