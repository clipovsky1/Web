function palindrome(str)
{
    let word = str.toLowerCase().replace(/[^a-z1-9]/g, '');

    if (word.length % 2 != 0)
    {
      for (var i = 0; i < Math.floor(word.length / 2); i++)
      {
        if (word[i] != word[(word.length-1)-i])
          return false;
      }
      return true;
    }

    for (var i = 0; i < (word.length / 2); i++)
    {
      if (word[i] != word[(word.length-1)-i])
        return false;
    }
    return true;
}
