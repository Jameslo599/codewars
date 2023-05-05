// Find Smallest Integer

class SmallestIntegerFinder {
    findSmallestInt(args) {
      const sorted = args.sort((a, b) => a - b);
      return sorted[0]
    };
  }