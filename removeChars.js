function removeChars(string, chars) {
  return string.replace(RegExp(`[${chars}]`, 'g'), '');
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));