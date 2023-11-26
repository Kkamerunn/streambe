const options = {
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", options);
};
