"use strict";

function binariSearch(list, item) {
    let low = 0;
    let high = list.length - 1;
    let counter = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            counter += 1;
            console.log(counter);
            return (mid);
        }
        if (guess > item) {
            high = mid - 1;
            counter += 1;
        } else {
            low = mid + 1;
            counter += 1;
        }
    }

    return null;
}

//console.log(binariSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,120,21,22,23,24,25,26,27,28,29,30,31,32], 10));
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at ducimus est itaque molestiae non, numquam sapiente sit veniam? Accusantium asperiores atque cupiditate deserunt dignissimos, eos esse ipsum natus odit provident quaerat quam totam veritatis. Accusamus atque dolorum eaque esse eum illum incidunt ipsam ipsum libero maxime minima nihil pariatur perferendis, provident quasi quod repellat tempore tenetur, vero voluptates. Accusantium culpa dolor dolorum ex nemo quae unde vero voluptate? Ab accusantium, ad animi assumenda beatae consectetur consequatur eaque eos esse eum exercitationem facilis fugiat incidunt laboriosam, laborum magni mollitia quod ratione? Ab autem fugit itaque minus, molestiae neque nihil perferendis perspiciatis placeat possimus, sequi, veritatis. Dolore ipsa itaque obcaecati veniam. Aut consequatur deserunt doloribus enim inventore mollitia numquam odit omnis perferendis reiciendis repudiandae sed ullam, velit vitae voluptatum? Aperiam ducimus hic nesciunt odit, quidem repellat. Aut deleniti dolorum eos facilis minima, natus obcaecati quaerat quam quos voluptatum? Ad asperiores at beatae doloremque eos error est iure minima nisi perferendis porro provident, qui rem repellat sed sunt veritatis voluptas. Architecto asperiores consequatur deleniti fugiat laboriosam maiores minus nam, quidem reiciendis rem veniam voluptatibus. Accusantium architecto assumenda aut consectetur dolorem inventore neque, possimus quos rerum vel! Ad beatae commodi dignissimos distinctio dolorem ducimus eius eligendi ex exercitationem explicabo ipsam itaque iusto, magni maiores maxime molestias nihil, nobis, nulla optio praesentium quam repellendus rerum sapiente sequi sint unde ut voluptas! Dicta fugiat harum id illo in magnam maiores molestiae officia, placeat quas quasi quidem, quod recusandae sequi similique vero voluptate! A aliquam amet animi culpa dolorum in laborum tempore?';
const textArr = text.toLowerCase().split(/\s+/g).sort();
console.log(textArr);
console.log(textArr[binariSearch(textArr, 'a')], binariSearch(textArr, 'a'));
