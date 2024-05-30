// Mehrere Mixins
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = true;
    toggleActive() {
      this.isActive = !this.isActive;
    }
  };
}

class BaseClass {
  baseProperty = "base property";
}

const MixedClass = Activatable(Timestamped(BaseClass));

export const mixedInstance = new MixedClass();
// console.log('mixedInstance.baseProperty:', mixedInstance.baseProperty); // "base property"
// console.log('mixedInstance.timestamp:', mixedInstance.timestamp); // aktuelles Datum und Uhrzeit
// console.log('mixedInstance.isActive:', mixedInstance.isActive); // true
// mixedInstance.toggleActive();
// console.log('mixedInstance.isActive:', mixedInstance.isActive); // false
