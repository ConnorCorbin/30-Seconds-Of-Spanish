import convertStringToId from 'common/services/covert-string-to-id';

describe('convertStringToId', () => {
  it('should remove punctuation and replace spaces with `-`', () => {
    expect(convertStringToId('¡Hello. My name, is Connor!')).toEqual('Hello-My-name-is-Connor');
  });
});
