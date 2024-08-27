// Leetcode 1672 সমস্যার সমাধান

// আমরা একটি 2D অ্যারে (accounts) পাই, যেখানে প্রতিটি সাব-অ্যারে একজন কাস্টমারের ব্যাংক অ্যাকাউন্টের ব্যালেন্স সংরক্ষিত থাকে।
// আমাদের কাজ হল প্রতিটি কাস্টমারের জন্য তাদের সম্পদের যোগফল বের করা এবং সর্বোচ্চ যোগফল (wealth) রিটার্ন করা।

var maximumWealth = function (accounts) {
  // সর্বোচ্চ wealth রাখার জন্য একটি ভ্যারিয়েবল ব্যবহার করছি।
  let maxWealth = 0;

  // প্রতিটি কাস্টমারের অ্যাকাউন্টের জন্য লুপ চালাচ্ছি।
  for (let i = 0; i < accounts.length; i++) {
    // বর্তমান কাস্টমারের সম্পদের যোগফল বের করছি।
    let currentWealth = accounts[i].reduce((a, b) => a + b, 0);

    // যদি বর্তমান কাস্টমারের সম্পদ আগের থেকে বেশি হয়, তাহলে সেটাকে সর্বোচ্চ হিসাবে ধরে নিচ্ছি।
    if (currentWealth > maxWealth) {
      maxWealth = currentWealth;
    }
  }

  // সর্বোচ্চ wealth রিটার্ন করছি।
  return maxWealth;
};

let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
