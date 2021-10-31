/**
 * Applet Properties Tolerance - APT
 * Author by Joenix
 * Wechat: ejoenix
 * ========== ========== ==========
 */
module.exports = Behavior({
  data: {
    APTConstructors: {
      [String]: "",
      [Number]: 0,
      [Boolean]: false,
      [Array]: [],
      [Object]: {},
      [Function]: function() {}
    },
    APTCache: {}
  },
  created: function() {
    this.APTInit();
  },
  methods: {
    // APT Foreach
    APTForeach(source, callback) {
      // Loop
      for (const key in source) {
        // Get Result
        const result = callback(source[key], key);

        // True for Continue
        if (result === true) {
          continue;
        }

        // False for Break
        if (result === false) {
          break;
        }
      }
    },

    // APT Empty
    APTEmpty(value) {
      return [null, undefined].includes(value);
    },

    // APT Make
    APTMake(type, value) {
      if (this.APTEmpty(value)) {
        value = this.data.APTConstructors[type];
      }

      return { type, value };
    },

    // APT Init
    APTInit() {
      // Set Source
      const source = this.data.APTCache;

      // Loop
      this.APTForeach(this.properties, (value, key) => {
        // No APT
        if (/^APT/.test(key)) {
          return;
        }

        // Check for Empty
        if (this.APTEmpty(value)) {
          return (source[key] = this.APTMake(Object));
        }

        // Any Set
        source[key] = this.APTMake(value.constructor, value);
      });

      // Endness
      return source;
    },

    // APT Reset
    APTReset(data) {
      // Set Source
      const source = this.data.APTCache;

      // Loop
      this.APTForeach(data, (value, key) => {
        // Get Item
        const item = source[key];

        // No Key in Source
        if (this.APTEmpty(item)) {
          return;
        }

        // Special for null
        if (this.APTEmpty(value)) {
          return (data[key] = item.value);
        }

        // Any Check
        if (value.constructor !== source[key].type) {
          data[key] = item.value;
        }
      });

      // Endness
      return data;
    }
  }
});
