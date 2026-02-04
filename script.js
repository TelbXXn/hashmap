class HashMap {
  constructor(loadfactor = 0.75, capacity = 16) {
    this.loadfactor = loadfactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
  }

  hash(key) {
    if (typeof(key) !== 'string') return console.log('Key must be a string');
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;


    }

    return hashCode;
  }

  set(key, value) {
    let hashCode = this.hash(key);

    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = ({[key]: value});
    }
    else if (this.buckets[hashCode]) 

    else if (this.buckets[hashCode].hasOwnProperty(key) === true) {
      this.buckets[hashCode][key] = value;
      return console.log("Key value already exists... updating to new value");
    }
  }
}