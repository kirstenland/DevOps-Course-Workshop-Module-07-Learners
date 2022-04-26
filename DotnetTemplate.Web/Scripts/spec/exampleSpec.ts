import { functionOne, functionTwo } from '../home/example';

describe('Example', () => {
  it('can run functionOne', () => {
    // Given
    const one = 1;

    // When
    functionOne();

    // Then
    expect(1).toEqual(one);
  });

  it('can run functionTwo', () => {
    // When
    functionTwo();
  });
});
