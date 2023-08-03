//Replicate 'new'

const nouveau = (Constructor, ...arg) => {
  const instance = Object.create(Constructor.prototype);
  const obj = Constructor.call(instance);
  if (obj === null) return instance;
  Constructor.apply(instance, arg);

  return typeof obj !== "object" && typeof obj !== "function" ? instance : obj;
};

// Easiest Solution
// const instance = Reflect.construct(Constructor, arg);
