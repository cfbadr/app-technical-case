import  { extractCurrency, extractLanguage, sortArrayOfObjects } from "../src/helpers/data";

describe('extractCurrency', () => {
  it('should return an array of currency names and codes', () => {
    const countryDetail = {
      currencies: {
        USD: { name: 'US Dollar' },
        EUR: { name: 'Euro' },
      },
    };
    const result = extractCurrency(countryDetail);
    expect(result).toEqual(['US Dollar(USD)', 'Euro(EUR)']);
  });

  it('should return an empty array for missing currencies', () => {
    const countryDetail = {};
    const result = extractCurrency(countryDetail);
    expect(result).toEqual([]);
  });
});

describe('extractLanguage', () => {
  it('should return an array of language names', () => {
    const countryDetail = {
      languages: {
        en: 'English',
        fr: 'French',
      },
    };
    const result = extractLanguage(countryDetail);
    expect(result).toEqual(['English', 'French']);
  });
  it('should return an empty array for missing languages', () => {
    const countryDetail = {};
    const result = extractLanguage(countryDetail);
    expect(result).toEqual([]);
  });
});

describe('sortArrayOfObjects', () => {
  const data = [
    { code: "no", name: "Norway", flag: "no" },
    { code: "dk", name: "Denmark", flag: "dk" },
    { code: "se", name: "Sweden", flag: "se" },
  ];

  it('should sort objects in ascending order by a specified property', () => {
    const sortedData = sortArrayOfObjects(data, 'name', true);
    expect(sortedData).toEqual([
      { code: "dk", name: "Denmark", flag: "dk" },
      { code: "no", name: "Norway", flag: "no" },
      { code: "se", name: "Sweden", flag: "se" },
    ]);
  });
  it('should sort objects in descending order by a specified property', () => {
    const sortedData = sortArrayOfObjects(data, 'name', false);

    expect(sortedData).toEqual([
      { code: "se", name: "Sweden", flag: "se" },
      { code: "no", name: "Norway", flag: "no" },
      { code: "dk", name: "Denmark", flag: "dk" },
    ]);
  });
});