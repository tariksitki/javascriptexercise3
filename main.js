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




      // Exercıse 90     





      function Kth_greatest_in_array(arr, k) {

        for (var i = 0; i < k; i++) {
          var max_index = i,
            tmp = arr[i];
      
          for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max_index]) {
              max_index = j;
            }
          }
      
          arr[i] = arr[max_index];
          arr[max_index] = tmp;
        }
      
        return arr[k - 1];
      }
      
      console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
      console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))







      // Exercise 91   






      function array_max_consecutive_sum(nums, k) {
        let result = 0;
        let temp_sum = 0;
        for (var i = 0; i < k - 1; i++) {
          temp_sum += nums[i];
        }
        for (var i = k - 1; i < nums.length; i++) {
          temp_sum += nums[i];
          if (temp_sum > result) {
            result = temp_sum;
          }
          temp_sum -= nums[i - k + 1];
        }
        return result;
      }
      
      console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
      console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
      console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))






      // Exercıse 92 

      function max_difference(arr) {
        var max = -1;
          var temp;
        for (var i = 0; i < arr.length - 1; i++)
            {
          temp = Math.abs(arr[i] - arr[i + 1]);
          max = Math.max(max, temp);
          }
        return max;
      }
      
      console.log(max_difference([1, 2, 3, 8, 9]))
      console.log(max_difference([1, 2, 3, 18, 9]))
      console.log(max_difference([13, 2, 3, 8, 9]))




      //  Exercise 93    Verilen degerler arasindaki mataématiksel olarak en yüksek deger farkini bulma
      


        function array_max_diff(arr) {
          
          var max_result = 0;

          for (var i = 0; i<arr.length; i++) {
            
            for (var k=0; k!=i && k<arr.length; k++)

            {   var diff = Math.abs(arr[i] - arr[k]) ;

                max_result = Math.max(max_result, diff);



             }
            
          }
                return max_result;
        }

          console.log(array_max_diff([1,2,3,8,9]));

          console.log(array_max_diff([1,2,3,18,9]));

          console.log(array_max_diff([13,2,3,8,9]));









          // Exercise 94


          function array_element_mode(arr) {
            var ctr = [],
              ans = 0;
          
            for(var i = 0; i < 10; i++) {
              ctr.push(0);
            }
            for(var i = 0; i < arr.length; i++) {
              ctr[arr[i] - 1]++;
              if(ctr[arr[i] - 1] > ctr[ans]) {
                ans = arr[i] - 1;
              }
            }
            return ans + 1;  
          }
          console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))







          // Exercise 95



          function array_element_replace(arr, old_value, new_value) {
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] === old_value) {
                arr[i] = new_value;
              }
            }
            return arr;
          }
          num = [1, 2, 3, 2, 2, 8, 1, 9];
          console.log("Original Array: "+num);
          console.log(array_element_replace(num, 2, 5));






          //  Exercise 96  Compute the sum of absolute difference of consecutive numbers of a given array of integers

          //   Verilen dizedeki sayilarin farklarini toplamak





            function sum_adjacent_difference(arr) {

              var result = 0;

              for( var i = 1; i < arr.length; i++) { 

                result += Math.abs(arr[i] - arr[i - 1]);
              }
              
                  return result ;
            }

              console.log(sum_adjacent_difference([1,2,3,2,-5]));







              // Exercise 98   Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case
              
              // Kücük yada Büyük harfle yazili olarak Verilen string i  en az harfi degistirerek ya hepsini büyük yada hepsini kücük yapmak






                      function change_case(new_str) {

                        var x = 0;
    
                        var y = 0;
    
                        for (var i = 0; i< new_str.length; i++) { 
    
                          if(/[A-Z]/.test(new_str[i])) {
    
                            x++;
                          }  
                              else y++ ;
                        }
                        
                            if (y > x) return new_str.toLowerCase();
    
                            return new_str.toUpperCase();
                      }
    
                          console.log(change_case("Write"));
    
                          console.log(change_case("PHp"));






                          // Exercıse 99




                          function rearrangement_characters(str1, str2) {

                            var first_set = str1.split(''),
                                second_set = str2.split(''),
                                result = true;
                          
                            first_set.sort();
                            second_set.sort();
                          
                            for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
                              if (first_set[i] !== second_set[i]) {
                                result = false;
                              }
                            }
                          
                            return result;
                          }
                          
                          console.log(rearrangement_characters("xyz", "zyx"))
                          console.log(rearrangement_characters("xyz", "zyp"))







           // Exercise     100 




           function check_common_element(arra1, arra2) {
            for (var i = 0; i < arra1.length; i++)
            {
              if (arra2.indexOf(arra1[i]) != -1) 
                return true;
            }
            return false;
          }
          console.log(check_common_element([1,2,3], [3,4,5]));   
          console.log(check_common_element([1,2,3], [5,6,7]));   





          // Exercise 102  Find the number of inversions od a specified array of integers

          //   Verilen array in dönüsüm sayisini bulmak




                function number_of_InversionsNaive(arr) {

                    var ctr = 0;

                    for (var i= 0; i < arr.length; i++) {

                      for (var j = i + 1; j < arr.length; j++) {

                        if ( arr[i] > arr[j]) 

                          ctr++;
                      }
                    }

                        return ctr;
                  
                }


                    console.log(number_of_InversionsNaive([0,3,2,5,9]));

                    console.log(number_of_InversionsNaive([1,5,4,3]));

                    console.log(number_of_InversionsNaive([10,30,20,-10]));




                    // Exercise 103       Sort an array of all prime numbers between 1 and a given integer

                    //   Verilen bir sayiya kadar bulunan asal sayilari gösterme( Mesela 19 verildi 2,3,5,7,11........)


                    function sort_prime(num) {

                      var prime_num1 = [];

                          prime_num2 = [];

                      for ( var i = 0; i <= num; i++) {

                        prime_num2.push(true);
                      }

                      for (var i = 2; i<=num; i++){

                        if (prime_num2[i]) {

                          prime_num1.push(i);s

                            for ( var j =1; i * j <=num; j++) {

                            prime_num2[i * j] = false;
                          }
                        }
                      }
                      

                            return prime_num1;
                    }


                        console.log(sort_prime(5));

                        console.log(sort_prime(11));

                        console.log(sort_prime(19));





                        // Exercise 112  
                        
                        
                        function trailing_zeros_factorial(n) {
                          var result = 0;
                          for (var i = 5; i <= n; i += 5) {
                              var num = i;
                              while (num % 5 === 0) {
                                  num /= 5;
                                  result++;
                              }
                          }
                          return result;
                      }
                      
                      console.log(trailing_zeros_factorial(8))
                      console.log(trailing_zeros_factorial(9))
                      console.log(trailing_zeros_factorial(10))





                      // Exercise 113  
                        
                      function int_sum(num) {
                        var s_sum = 0;
                        while (num > 0) {
                            s_sum += num;
                            num = Math.floor(num / 2);
                        }
                        return s_sum;
                    }
                    console.log(int_sum(8))
                    console.log(int_sum(9))
                    console.log(int_sum(26))





                    // Exercise 114  


                    function is_correct_Sentence(input_str) {
                      var first_char = input_str[0];
                      var last_char = input_str[input_str.length - 1];
                      return /[A-Z]/.test(first_char) && last_char == "."
                  }
                  console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
                  console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
                  console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));




                    // Exercise 115 



                    function is_diagonal_matrix(user_matrix) {
                      for (var i = 0; i < user_matrix.length; i++) {
                          for (var j = 0; j < user_matrix.length; j++) {
                              if (i !== j && user_matrix[i][j] !== 0) 
                                return false;
                          }
                      }
                      return true;
                  }
                  
                  
                  console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
                  console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));

                  


                        



              






                    
                    
                    

