// Source : https://leetcode.com/problems/validate-ip-address/

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    
  if(!IP.length) {
      return 'Neither';
  }
  
  function isIPv4() {
      
      for(var i=0;i < IP.length; i++) {
          if('0123456789'.indexOf(IP.charAt(i)) == -1 && IP.charAt(i) !== '.') {   
              return false;
          } 
      }
      var myIpArr = IP.split('.');
      
      if (myIpArr.length !== 4) {
          return false;
      } 
  
      for(var i=0; i< myIpArr.length; i++) {
          
          if(myIpArr[i].length == 0) {
              return false;
          }
          
          if(myIpArr[i].length > 1 && myIpArr[i][0] == 0) {
              return false;
          }
           
           if(!(myIpArr[i] > -1 && myIpArr[i] < 256)) {
               return false;
           }
           
      }
      return true;
  }
  
   function isIPv6(IP) {
       var hexChars = "0123456789abcdefABCDEF";
       
      var arr =  IP.split(':');
       
       if(arr.length !== 8) {
           return false;
       }
       
       for(var i=0; i< arr.length; i++) {
          if(arr[i].length == 0 ) {
               return false;
           }
           if(arr[i].length > 4 ) {
               return false;
           }
           for(var j=0; j < arr[i].length; j++) {
               if(hexChars.indexOf(arr[i][j]) == -1) {
                   return false;
               }
       }
   }
       return true;
   
   }
  
  
  if (isIPv4(IP)) {
      return 'IPv4';
  }
  
  if (isIPv6(IP)) {
      return 'IPv6';
  }
  
  return 'Neither';
  
};


var validIPAddress = function(IP) {
  const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
  const ipv6 = /^([\da-f]{1,4}:){8}$/i;
  return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither';
};

