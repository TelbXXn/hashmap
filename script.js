class HashMap {
  constructor(loadfactor = 0.75, capacity = 16) {
    this.loadfactor = loadfactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
  }

  hash(key) {
    if (typeof(key) !== 'string') throw new Error('Input needs to be a string!');
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
        this.buckets[hashCode] = [];
        this.buckets[hashCode].push([key, value]);
    } else {
        let bucket = this.buckets[hashCode];
        for (let b of bucket) {
            if (b[0] === key) {
                b[1] = value;
                return console.log(`Key is already found: Updating value...`);
            }
        }             
        this.buckets[hashCode].push([key, value]);
        return console.log(`adding new entry`);
    }
  }

  get(key) {
    let hashCode = this.hash(key);
    if (!this.buckets[hashCode]) return;
    let bucket = this.buckets[hashCode];

    for (let entry of bucket) {
      if (entry[0] === key) return entry[1];
    }
  }

}


//   set(key, value) {
//     let hashCode = this.hash(key);

//     if (!this.buckets[hashCode]) {
//       this.buckets[hashCode] = [{[key]: value}];
//     } 
//     else if (this.buckets[hashCode]) {
//       let bucket = this.buckets[hashCode];
//         for (let b of bucket) {
//             if (b.hasOwnProperty(key) === true) {
//                 b[key] = value;
//                 return console.log("Key value already exists... updating to new value");
//             }
//         }
//         this.buckets[hashCode].push({[key]: value});
//         return console.log('Pushed a new object');
    
//       }

//   }
// }