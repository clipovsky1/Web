function palindrome(str) {
    let word = str.toLowerCase().replace(/[^a-z]/g, '');
    var spot = 0;
    for (var i = spot; spot < word.length; i++)
    {
      if (word[spot] != word[word.length - (++spot)])
        return false;
      spot++;
    }
    return true;
  }