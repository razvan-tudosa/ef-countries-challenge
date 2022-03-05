export const convertObjToArray = (obj: Record<any, any>) => {
  const result = [];

  for (let prop in obj) {
    let newEntry: Record<any, any> = {
      key: prop,
    };

    if (obj[prop].length) {
      newEntry[prop] = obj[prop];
    } else {
      newEntry = {
        ...newEntry,
        ...obj[prop],
      };
    }

    result.push(newEntry);
  }

  return result;
};
