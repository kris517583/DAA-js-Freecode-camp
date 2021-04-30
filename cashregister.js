function checkCashRegister(price, cash, cid) 
{
  var result={};
  const currency_unit = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  var inserted = [];
  result["status"] = "CLOSED"
  result["change"] = [];
  var diff = cash - price;
  for(var i=currency_unit.length-1;i>=0 && diff>0;i--)
  {
      if(diff>=currency_unit[i])
      {
        var n = parseInt(diff/currency_unit[i]);
        if(n*currency_unit[i]<=cid[i][1] && cid[i][1]!=0)
        {
          result["change"].push([cid[i][0],n*currency_unit[i]])
          diff = diff - n*currency_unit[i]
          cid[i][1] = cid[i][1] - n*currency_unit[i]
          if(cid[i][1]>0 && result["status"] =="CLOSED")
          {
            result["status"] = "OPEN"
          }
        }
        else if(cid[i][1]!=0)
        {
          result["change"].push([cid[i][0],cid[i][1]])
          diff = diff - cid[i][1]
          cid[i][1] = 0;
          inserted.push(i);
        }
        else
        {
          inserted.splice(0,0,[cid[i][0],cid[i][1]])
        }
        diff = Math.round(diff * 100)/100
      }
      else
      {
        inserted.splice(0,0,[cid[i][0],cid[i][1]])
      }
  }
  if(diff!=0)
  {
    result["status"] = "INSUFFICIENT_FUNDS"
    result["change"] = [];
  }
  if(result["status"] == "CLOSED")
  {
    result["change"] = result["change"].concat(inserted)
  }
  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));