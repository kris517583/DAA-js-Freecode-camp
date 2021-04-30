function telephoneCheck(str) 
{
  const patt1 = /^(1(\s)?(\d{3}|\(\d{3}\))|\(\d{3}\)|\d{3})(-|\s)?(\d{3}(-|\s)?\d{4}|)/;
  var result=str.match(patt1);
  if(result)
  {
    if(result[0]==str)
    {
      return true;
    }
  }
  return false;
}

telephoneCheck("555-555-5555");