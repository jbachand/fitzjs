# fitzjs
[![NPM](https://img.shields.io/npm/v/fitzjs.svg)](https://www.npmjs.com/package/fitzjs)
[![Downloads per week](https://img.shields.io/npm/dw/fitzjs.svg)](https://www.npmjs.com/package/fitzjs)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/jbachand/fitzjs.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jbachand/fitzjs/context:javascript)
[![DeepScan grade](https://deepscan.io/api/teams/5049/projects/7003/branches/63746/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5049&pid=7003&bid=63746)

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

### Run unit tests
```
yarn fitzTest
```