# miniprogram-properties-reset

```sh
yarn add miniprogram-properties-reset
```

```js
// in Miniprogram
const MPReset = require("miniprogram-properties-reset")

Component({
  behaviors: [MPReset],

  properties: {
    iString: String,
    iNumber: Number,
    iBoolean: Boolean,
    iArray: Array,
    iObject: Object,
    iJson: {
      type: Object,
      value: {
        key: `value`
      }
    }
  },

  ready() {
    const mock = this.APTReset({
      iString: 100,
      iNumber: `miniprogram`,
      iBoolean: true,
      iArray: ["a", "b", "c"],
      iObject: null,
      iJson: null
    })

    console.log(mock)

    /**
     * {
     *   iString: '',
     *   iNumber: 0,
     *   iBoolean: true,
     *   iArray: ['a', 'b', 'c'],
     *   iObject: {},
     *   iJson: {
     *     key: `value`
     *   }
     * }
     */
  }
})
```

```js
// Built-In

{
  [String]: '',
  [Number]: 0,
  [Boolean]: false,
  [Array]: [],
  [Object]: {},
  [Function]: function() {}
}
```
