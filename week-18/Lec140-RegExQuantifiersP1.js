/*
  Regular Expression

  Quantifiers محددو الكمية
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

let mailsRe = /\w+@\w+.(com|net)/gi;
console.log(mails.match(mailsRe));

let mailsRe2 = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe2));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0

let numsRe = /0\d+0/gi;
console.log(nums.match(numsRe));

let numsRe2 = /0\d*0/gi;
console.log(nums.match(numsRe2));

let urls = "https://google.com http://www.website.net web.com elzero.org"; // http + https

let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

let urlsRe2 = /(https?:\/\/)?(www.)?\w+.(net|com)/gi;
console.log(urls.match(urlsRe2));
