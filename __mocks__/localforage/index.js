export default new Proxy(
  {},
  {
    get(target, prop) {
      if (prop === 'createInstance') {
        return () => ({
          getItem: async () => null,
          setItem: async () => {},
          clear: async () => {},
          removeItem: async () => {},
        });
      } else {
        return () => {};
      }
    },
  }
);
