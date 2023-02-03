/**
 * 给定一个字符串 s，找到 s 中最长的回文子串
 * @params s 输入的字符串s
 * @return 最长回文子串
 */
export default function longestPalindrome(s: string): string {
  let res: string = '';
  let len: number = s.length;
  for (let i = 0; i < len; i++) {
    // 寻找长度为奇数的回文子串（以当前元素向两边扩散）
    const s1 = palindrome(s, i, i);
    // 寻找长度为偶数的回文子串（以s[i], s[i+1]向两边扩散）
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
}

function palindrome(s: string, l: number, r: number): string {
  // 左右指针，从s[l] 和 s[r] 向两边扩散，找到最长回文串
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++; 
  }
  return s.substr(l + 1, r - l - 1);
}

console.log(longestPalindrome('abbccba'));
