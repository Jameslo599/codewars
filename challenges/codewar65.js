// Using Closures to Share Class State

var Cat = (function () {
  const _weight = [];
  const averageWeight = () => {
    return _weight.reduce((acc, curr) => acc + curr) / _weight.length;
  };
  function CatConstructor(name, argWeight) {
    if (name === undefined || argWeight === undefined) throw "error";
    this.name = name;
    _weight.push(argWeight);

    Object.defineProperty(this, "weight", {
      get() {
        return argWeight;
      },
      set(newValue) {
        const oldIndex = _weight.findIndex((e) => e === argWeight);
        _weight[oldIndex] = newValue;
        argWeight = newValue;
      },
      configurable: true,
    });
  }
  CatConstructor.averageWeight = averageWeight;
  return CatConstructor;
})();


