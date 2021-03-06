export const titleCase = (str) =>
    str[0].toUpperCase() + str.slice(1).toLowerCase();

export const formatTag = (str) => str.replace(/-/g, " ");

export const formatNumber = (num) => num / 10;
