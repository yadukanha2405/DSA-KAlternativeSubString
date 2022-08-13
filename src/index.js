import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// find the minimum flip to make alternative (0101 or 1010) k size substring
// let string=111011 tp string = 010101;
let arr = "111011";

let prefSum = [];
let k = 4;
let flip = 0;
let minFlip = k;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == i % 2) {
    prefSum.push(0);
  } else {
    prefSum.push(1);
  }
}

for (let i = 1; i < prefSum.length; i++) {
  prefSum[i] = prefSum[i - 1] + prefSum[i];
}

for (let i = 0; i + k < prefSum.length; i++) {
  if (i > 0) {
    flip = prefSum[i + (k - 1)] - prefSum[i - 1];
  } else {
    flip = prefSum[i + k - 1];
  }
  minFlip = Math.min(minFlip, flip, k - flip);
}

console.log(minFlip);
