function convertToRoman(num) 
{
  const list = {1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC",100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",1000:"M"};
  const numbers = Object.keys(list)
  var temp = num;
  var i = numbers.length-1;
  var result = "";
  while(temp>0 && i>=0)
  {
      if(parseInt(numbers[i])<=temp)
      {
        result=result+list[numbers[i]]
        temp = temp - parseInt(numbers[i]);
      }
      else
      {
        i--
      }
  }
  return result;
}

convertToRoman(36);