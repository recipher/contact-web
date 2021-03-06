import memoize from 'lru-memoize';
import { createValidator, required, maxLength } from '@recipher/validation';

export default memoize(10)(createValidator({
  name: [ required() ]
, email: [ required() ]
, text: [ required(), maxLength(1000) ]
}));
