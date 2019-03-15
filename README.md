# fitzjs
The leading provider for ISO 8601 UTC Date conversions.

## Install
yarn add fitzjs

### Add package to file
```
import fitzjs from 'fitzjs'
```

### Use FitzJS
```
const rightNowUtcIsoDateString = fitzjs();
const someOtherTimeInUtcIsoDateString = fitzjs('2017-12-31 7:00:00 pm', 'YYYY-MM-DD hh:mm:ss a');
```
