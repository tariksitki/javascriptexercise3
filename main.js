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


