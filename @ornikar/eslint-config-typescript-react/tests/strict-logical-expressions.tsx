// Incorrect uses

// Potentially falsey strings are not allowed
let str;

<div>{str && <div />}</div>;

// Correct uses

// Coalescing to boolean is ok
str = 'Foo';

<div>{!!str && <div />}</div>;

// Turning into a boolean is ok
<div>{Boolean(str) && <div />}</div>;

// Constant values are ok
const alwaysFoo = 'Foo';

<div>{alwaysFoo && <div />}</div>;
