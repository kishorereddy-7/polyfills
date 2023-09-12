//forEach

Array.prototype.myForEach = function (callback) {
  if (Array.isArray(this)) {
    if (typeof callback !== "function") {
      throw Error(callback + "is not a function");
    }
    let i = 0;
    while (i < this.length) {
      callback(this, this[i], i, this);
      i++;
    }
  } else {
    throw Error(this + "is not an Array");
  }
};

const a = [{ name: "ks" }, { name: "kks" }];

a.myForEach((item) => {
  item.name = "oo";
});

console.log(a);
