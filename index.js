const SystemErrors = [
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
];

function isInstance(e) {
  return (type) => {
    if(e instanceof type) {
      throw e;
    }
  }
};

function rethrow(error, type = 'native') {
  switch (type) {
    case 'any':
    case 'all':
      throw error;

    case 'native':
      return SystemErrors.forEach(isInstance(error));

    default: 
      throw '`type` provided to `rebote.rethrow` shoud be of type: `native`, `any`.';
  }
}

module.exports = { rethrow }
