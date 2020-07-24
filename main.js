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

                          prime_num1.push(i);

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

                  






                  // Exercise 119

                  // Check whether a given integer has an increasing digits sequence.

                  // verilen bir tamsayinin artan basamak dizisine sahip olup olmadigini kontrol edin


                  function is_increasing_digits_Sequence(num) {

                    var arr_num = ('' + num).split('');

                    for (var i = 0; i<arr_num.length - 1; i++) {

                      if (parseInt(arr_num[i]) >= parseInt(arr_num[i+1]))

                      return false;
                    }
                    
                  }

                      console.log(is_increasing_digits_Sequence(123));

                      console.log(is_increasing_digits_Sequence(1223));

                      console.log(is_increasing_digits_Sequence(45677));





                // Exercise 125 

                // Belirli bir dizedeki en uzun dizeyi bulma



                function longest_str_in_array(arra) {

                  var max_str = arra[0].length;

                  var ans = arra[0];

                  for (var i = 1; i< arra.length; i++) {

                    var maxi = arra[i].length;

                    if(maxi > max_str) {

                      ans = arra[i];

                      max_str = maxi;
                    }
                  }
                  
                      return ans;
                }


                  console.log(longest_str_in_array(["ab","a","abcd"]));

                  console.log(longest_str_in_array(["ab","ab","ab"]));









                  // Exercise 126


                  function max_even(arra) {

                    arra.sort((x, y) => y - x);
                  
                    for (var i = 0; i < arra.length; i++) {
                      if (arra[i] % 2 == 0)
                        return arra[i];
                      }
                    }
                  
                  console.log(max_even([20, 40, 200]));
                  console.log(max_even([20, 40, 200, 301]));








                  // Exercise 127


                  function mirror_bits(n) {
                    return parseInt(n.toString(2).split("").reverse().join(""), 2);
                  }
                  
                  console.log(mirror_bits(56));
                  console.log(mirror_bits(234));






                  //  Exercise 128

                  function nearest_round_number(num) {
                    while (num % 10) {
                        num++;
                    }
                    return num;
                }
                
                console.log(nearest_round_number(56));
                console.log(nearest_round_number(592));




                //   Exercise 129


                function next_Prime_num(num) {
                  for (var i = num + 1;; i++) {
                      var isPrime = true;
                      for (var d = 2; d * d <= i; d++) {
                          if (i % d === 0) {
                              isPrime = false;
                              break;
                          }
                      }
                      if (isPrime) {
                          return i;
                      }
                  }
              }
              
              console.log(next_Prime_num(3));
              console.log(next_Prime_num(17));



              // Exercise 130


              
              function even_digits(num) {
                var ctr = 0;
                while (num) {
                  ctr += num % 2 === 0;
                  num = Math.floor(num / 10);
                }
                return ctr;
              }
              
              console.log(even_digits(123));
              console.log(even_digits(1020));
              console.log(even_digits(102));




              // Exercise 131 



              function prefix_sums(arr) {
                var new_arr = [];
                for (var i = 0; i < arr.length; i++) {
                  new_arr[i] = 0;
                  for (var j = 0; j < i + 1; j++) {
                    new_arr[i] += arr[j];
                  }
                }
                return new_arr;
              }
              
              console.log(prefix_sums([1, 2, 3, 4, 5]));
              
              console.log(prefix_sums([1, 2, -3, 4, 5]));





              // Exercise 132   



              function prime_factors(num) {
                function is_prime(num) {
                  for (let i = 2; i <= Math.sqrt(num); i++)
                  {
                    if (num % i === 0) return false;
                  }
                  return true;
                }
                const result = [];
                for (let i = 2; i <= num; i++)
                {
                  while (is_prime(i) && num % i === 0) 
                  {
                    if (!result.includes(i)) result.push(i);
                    num /= i;
                  }
                }
                return result;
              }
              console.log(prime_factors(100));
              console.log(prime_factors(101));
              console.log(prime_factors(103));
              console.log(prime_factors(104));
              console.log(prime_factors(105));





              // Exercise 133  




              function proper_improper_test(num) {
                return Math.abs(num[0] / num[1]) < 1
                  ? "Proper fraction."
                  : "Improper fraction.";
              }
              console.log(proper_improper_test([12, 300]));
              console.log(proper_improper_test([2, 4]));
              console.log(proper_improper_test([103, 3]));
              console.log(proper_improper_test([104, 2]));
              console.log(proper_improper_test([5, 40]));





              // Exercise 134 




              function change_char(str1) {
                var result = [];
                for (var i = 0; i < str1.length; i++)
                  {
                  var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
                    change_char = 25 - char_order + 'a'.charCodeAt(0);
                  result.push(String.fromCharCode(change_char));
                }
                return result.join("");
              }
              console.log(change_char("abcxyz"));
              console.log(change_char("python"));  





              //  Exercise 135


              function remove_duplicate_cchars(str) {
                var arr_char = str.split("");
                var result_arr = [];
              
                for (var i = 0; i < arr_char.length; i++) {
                  if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
                    result_arr.push(arr_char[i]);
                  }
              
                return result_arr.join("");
              }
              console.log(remove_duplicate_cchars("abcdabc"));
              console.log(remove_duplicate_cchars("python"));
              console.log(remove_duplicate_cchars("abcabc"));
              console.log(remove_duplicate_cchars("1365451"));






              // Exercise 136

              function replace_first_digit(input_str) {

                return input_str.replace(/[0-9]/, '$');
              }
              console.log(replace_first_digit("abc1dabc"));
              console.log(replace_first_digit("p3ython"));
              console.log(replace_first_digit("ab1cabc")); 

                        






                // Exercise 137


                function test_fifteen(num) 
                {
                    while(num<15){
                        num++;
                    }
                    return num;
                }
                console.log(test_fifteen("123"));
                console.log(test_fifteen("10"));
                console.log(test_fifteen("5"));




                // Exercise 138


                function sixteen_bits_reverse(num) {
                  var result = 0;
                  for (var i = 0; i < 16; i++) 
                    {
                    result = result * 2 + (num % 2);
                    num = Math.floor(num / 2);
                  }
                  return result;
                }
                console.log(sixteen_bits_reverse(12345));
                console.log(sixteen_bits_reverse(10));
                console.log(sixteen_bits_reverse(5));






                // Exercise 139



                function find_rightmost_round_number(input_arr) {

                  var result = 0;
                  for (var i = 0; i < input_arr.length; i++)
                  {
                    if (input_arr[i] % 10 === 0) {
                      result = i;
                    }
                  }
                
                  return result;
                }
                
                console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
                console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
                console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));





                // Exercise 140 



                function test_same_digit(num) {
                  var first = num % 10;
                  while (num) {
                    if (num % 10 !== first) return false;
                num = Math.floor(num / 10);
                  }
                  return true
                }
                
                console.log(test_same_digit(1234));
                console.log(test_same_digit(1111));
                console.log(test_same_digit(22222222));





                // Exercise 141


                function test_same_elements_both_arrays(arra1, arra2) {
                  var result = 0;
                  for(var i = 0; i < arra1.length; i++) {
                    for(var j = 0; j < arra2.length; j++){
                      if(arra1[i] === arra2[j])
                      {
                        result++;
                      }
                    }
                  }
                  return result;
                }
                console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
                console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
                console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));
              



                // Exercise 142 


                function simplify_path(main_path) {
                  var parts = main_path.split('/'),
                      new_path = [],
                      length = 0;
                  for (var i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    if (part === '.' || part === '' || part === '..') {
                      if (part === '..' && length > 0) {
                        length--;
                      }
                      continue;
                    }
                    new_path[length++] = part;
                  }
                
                  if (length === 0) {
                    return '/';
                  }
                
                  var result = '';
                  for (var i = 0; i < length; i++) {
                    result +=  '/'+new_path[i] ;
                  }
                
                  return result;
                }
                console.log(simplify_path("/home/var/./www/../html//sql/"));






                  // Exercise 143


                  function sort_by_string_length(arra) {
                    for (var i = 0; i < arra.length; i++) {
                      for (var j = i + 1; j < arra.length; j++) {
                        if (arra[i].length > arra[j].length) {
                          var m = arra[i];
                          arra[i] = arra[j];
                          arra[j] = m;
                        }
                      }
                    }
                    return arra;
                  }
                  var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
                  console.log("Original array: "+ arra+"\n");
                  console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));
                    
                    



                  // Exercise 144 


                  function break_address(url_add) {
                    var data = url_add.split("://")
                    var protocol = data[0];
                    data = data[1].split(".com");
                    var domain = data[0];
                    data = data[1].split("/");
                
                    if(data[1]){
                        return [protocol,domain,data[1]]
                    }
                
                    return [protocol,domain]
                }
                
                var url_add = "https://www.w3resource.com/javascript-exercises/"
                console.log("Original address: "+url_add)
                console.log(break_address(url_add))





                // Exercise 145



                function sumn(val) {
                  var sn = 0;
                  var i = 0;
                  while (sn <= val) {
                    sn += i++;
                  }
                  return i - 2;
                }
                console.log(sumn(11))
                console.log(sumn(15))




                // Exercise 146 



                function sum_Of_Cubes(n) {
                  var sumn = 0;
                
                  for (var i = 1; i <= n; i++) {
                    sumn += Math.pow(i, 3);
                  }
                  return sumn;
                }
                
                console.log(sum_Of_Cubes(3));
                console.log(sum_Of_Cubes(4));
                    




                // Exercise 146



                function sum_Of_Cubes(n) {
                  var sumn = 0;
                
                  for (var i = 1; i <= n; i++) {
                    sumn += Math.pow(i, 3);
                  }
                  return sumn;
                }
                
                console.log(sum_Of_Cubes(3));
                console.log(sum_Of_Cubes(4));
