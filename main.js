// Exercise 83  To find the longest string from an given array of strings.



function longest_string(str_ara) {

    var max = str_ara[0].length;

    str_ara.map(v=> max = Math.max(max, v.length));

    result = str_ara.filter(v=> v.length == max);

    return result;
    
}


console.log(longest_string(['a', 'aa', 'aaa', 'aaaa' ]));







    // Exercise 84  



    function alphabet_char_Shift(str) {
        var all_chars = str.split("");
        for(var i = 0; i < all_chars.length; i++) {
          var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
          n = (n + 1) % 26; 
          all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
        }
        return all_chars.join("");
      }
      
      console.log(alphabet_char_Shift("abcdxyz"))








      //  Exercise 85  


      function alternate_Sums(arr) {
        var result = [0, 0];
        for(var i = 0; i < arr.length; i++) 
        {
          if(i % 2) result[1] += arr[i];
          else
            result[0] += arr[i];
        }
        return result
      }
      
      console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))





      // Exercise 86   





      function angle_Type(angle) {
        if(angle < 90) {
          return "Acute angle.";
        }
        if(angle === 90) {
          return "Right angle.";
        }
        if(angle < 180) {
          return "Obtuse angle.";
        }
        return "Straight angle.";
      }
      
      console.log(angle_Type(47))
      console.log(angle_Type(90))
      console.log(angle_Type(145))
      console.log(angle_Type(180))





      // Exercise 87   



      function array_checking(arra1, arra2) {

        for(var i = 0; i < arra1.length; i++) {
          for(var j = i; j < arra1.length; j++) {
            var result = true,
              temp = arra1[i];
            arra1[i] = arra1[j];
            arra1[j] = temp;
            for(var k = 0; k < arra1.length; k++) {
              if(arra1[k] !== arra2[k]) {
                result = false;
                break;
              }
            }
            if(result) {
              return true;
            }
            arra1[j] = arra1[i];
            arra1[i] = temp;
          }
        }
        return false;
      }
      
      console.log(array_checking([10,20,30], [10,20,30]))
      console.log(array_checking([10,20,30], [30,10,20]))
      console.log(array_checking([10,20,30,40], [10,30,20,40]))






      // Exercıse 88 




      function checking_numbers(x, y, divisor) {
        if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
          0) {
          return true;
        }
        return false;
      }
      
      console.log(checking_numbers(10, 25, 5))
      console.log(checking_numbers(10, 20, 5))
      console.log(checking_numbers(10, 20, 4))






      //  Exercıse 89





      function check_arithmetic_Expression(x, y, z) {
        return x + y == z || x * y == z || x / y == z || x - y == z;
      }
      
      console.log(check_arithmetic_Expression(10, 25, 35))
      console.log(check_arithmetic_Expression(10, 25, 250))
      console.log(check_arithmetic_Expression(30, 25, 5))
      console.log(check_arithmetic_Expression(100, 25, 4.0))
      console.log(check_arithmetic_Expression(100, 25, 25))







