'use strict';

const someFunction = () => {};

// Incorrect uses
// eslint-disable-next-line jest/prefer-called-with
expect(someFunction).toBeCalled();
// eslint-disable-next-line jest/prefer-called-with
expect(someFunction).toHaveBeenCalled();

// Correct uses
expect(someFunction).toBeCalledWith();
expect(someFunction).toBeCalledWith(expect.anything(), expect.any(Date));
expect(someFunction).toBeCalledTimes(1);
expect(someFunction).not.toBeCalled();
