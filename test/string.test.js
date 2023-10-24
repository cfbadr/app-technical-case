import { getFlagEmoji } from "../src/helpers/string";

describe('getFlagEmoji', () => {
  it('should return danish emoji flags', () => {
    
    const result = getFlagEmoji('dk');
    expect(result).toEqual('🇩🇰');
  });

  it('should return empty array', () => {
    const result = getFlagEmoji('');
    expect(result).toEqual('');
  });
});