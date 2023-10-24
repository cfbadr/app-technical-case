export const extractCurrency = (countryDetail) =>  {
  if (countryDetail.currencies) {
      const currencyArray = Object.entries(countryDetail.currencies);
      const result = currencyArray.map(([currencyCode, currencyInfo]) => {
          return (`${currencyInfo.name}(${currencyCode})`)
      });
      return result;
  }
  return []
}

export const extractLanguage = (countryDetail) =>  {
  if (countryDetail.languages) {
    const languagesArray = Object.entries(countryDetail.languages);
    const result = languagesArray.map((languageInfo) => {
        return languageInfo[languageInfo.length - 1];
    });
    return result;
  }
  return []
}

export const sortArrayOfObjects = (array, property, ascending = true) => {
  const sortedArray = [...array];
  sortedArray.sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];
    if (ascending) {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
  return sortedArray;
}

export const extractRandomItemsFromArray = (data, numItems) => {
  if (numItems <= 0 || numItems > data.length) {
    return [];
  }

  const randomItems = [];
  const usedIndices = new Set();

  while (randomItems.length < numItems) {
    const randomIndex = Math.floor(Math.random() * data.length);

    if (!usedIndices.has(randomIndex)) {
      randomItems.push(data[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return randomItems;
};