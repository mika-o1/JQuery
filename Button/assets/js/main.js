// 1 - variant
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').css('color', 'red');       
//     });
// });

// 2 - variant обращаемся ко всем параграфам чтоб при клике на кнопку менялся на текст
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').html('qwerty');       
//     });
// });

// 3 variant обращается к параграфу, но при клике меняется один
// $(document).ready(function() {
//     $('p').click(function() {
//         $(this).html('qwerty');       
//     });
// });

//  4 вариант общается при клике только 3 меняется
// $(document).ready(function() {
//     $('button').click(function() {
//         $('div p:nth-child(3)').html('qwerty');     
//     });
// });

// 5 variant добавляет класс в коде либо можно добисать "this"
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').attr('class', 'hello');
//     });
// });

// 6 variant  отправляет facebook при нажатии на кнопку
// $(document).ready(function() {
//     $('button').click(function() {
//         $('a').attr('href', 'https://facebook.com');
//     });
// });

// 7 variant добавляет всем классам active в параграфах
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').addClass('active');
//     });
// });

// 8 variant удаляет активные классы при клике
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').removeClass('active');
//     });
// });

// 9 variant предназначен для добавления там где нету класса актив 
// и нужен для 10 варианта при нажатии кнопки
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').toggleClass('active');
//     });
// });

// 10 вариант с массивами ввыдит привет олжас при клике
// a = ["hello", "world"];
// b = { name: "Olzhas", surname: "Alidarov", car: "BMW" }

// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').html(a[0] + ", " + b.name);
//     });
// });

// 11 вариант с массивами выводит модульное окно и все замирает
// a = ["hello", "world"];
// b = { name: "Olzhas", surname: "Alidarov", car: "BMW" }

// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').html(a[0] + ", " + b.name);
//         alert(a[0] + ", " + b.name)
//     });
// });

// 12 вариант с массивами выводит модульное окно и в разделе просмотреть код - есть "консоль" для разработки необходимо
// a = ["hello", "world"];
// b = { name: "Olzhas", surname: "Alidarov", car: "BMW" }

// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').html(a[0] + ", " + b.name);
//         console.log(a[1] + ", " + b.name);
//         alert(a[0] + ", " + b.name)
//     });
// });

// 13 вариант if, else samostoyatelnaya
// a = 10;
// $(document).ready(function() {
//     $('button').click(function() {
//         if (a = 10) {
//             $('p').html('верно');
//         } else if (a != 10) {
//             $('p').html('неверно');
//         }
//     });
// });

// a = 10;
// $(document).ready(function() {
//     $('button').click(function() {
//         if (a > 0 && a > 5) {
//             $('p').html('верно');
//         } else {
//             $('p').html('неверно');
//         }
//     });
// });

// 14 variant при двойном клике цвет меняется
// a = ["hello", "world"];
// str = "abcde";
// b = {
//     name: "Olzhas",
//     surname: "Alidarov",
//     car: "BMW"
// }

// $(document).ready(function() {
//     $('button').dblclick(function() {
//         $('p').css('color', 'red');
//     });
// });

// 15 вариант
a = ["hello", "world"];
str = "abcde";
b = {
    name: "Olzhas",
    surname: "Alidarov",
    car: "BMW"
}

$(document).ready(function() {
    // при клике увеличьте текст
    $('button').click(function() {
        $('p').css('color', 'red');
    });
    // при двойном клике цвет меняется на зеленый
    $('p').dblclick(function() {
        $(this).css('color', 'green');
    });
    // при наведении мышки желтый при клике красный 
    $('button').mouseenter(function() {
        $('p').css('color', 'yellow');
    });
    // при отведении мышкой на параграф цвет розовый
    $('button').mouseleave(function() {
        $('p').css('color', 'pink');
    });
});




