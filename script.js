class HashMap {
  constructor(loadfactor, capacity) {
    this.loadfactor = loadfactor;
    this.capacity = capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % 17;
  }

  set(key, value) {
    
  }


}


const hash = new HashMap(1, 1);

console.log(hash.hash("kakakakaka"));