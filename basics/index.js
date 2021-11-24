// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.
for (let i = 0; i < 100; i++) {
    console.log(i+1)
}


// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
for (let i = 60; i > 30; i--) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+##
// ###+###
// ##+####
// #+#####
// +######
let string = ''
for (let i = 0; i < 7; i++) {
    for (let j = 7; j > 0; j--) {
        if (j - 1 === i) {
            string += '+'


        } else {
            string += '#'
        }
    }
    console.log(string)
    string = ''
}
// console.log(string)

// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй
function convertRegNum(reg) {
    let err = reg.split('')
    let old = true;
    err.shift()
    err.shift()

    let year = err.splice(0, 2,)
    if (Number(year[0]) === 0 || Number(year[0]) === 1 || Number(year[0]) === 2) {
        year = year.join('')
        console.log('20' + year + ' onii')
        old = false
    } else {
        year = year.join('')
        console.log('19' + year + ' onii')
        old = true
    }

    let month = err.splice(0, 2,)
    if (old) {
        month = month.join('')
        console.log(month + ' sariin')
    } else {
        month = month.join('')
        console.log( month-20 + ' sariin')
    }

    let day = err.splice(0, 2,)
  
        day = day.join('')
        console.log(day + ' nii odor')
  

    let huis = Number(err) % 10
    if (huis % 2 === 0) {
        console.log('emegtei')
    } else {
        console.log('eregtei')
    }
}
convertRegNum('АБ92122323')




// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
let $redbox = document.querySelectorAll('.red-boxes')
for (let i = 0; i < $redbox.length; i++) {
    $redbox[i].style.color = 'red'
}

// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
let $bluebox = document.getElementById('blue-box box')
$bluebox.style.color = 'blue'

// 7. Бүх div - ийг бор болго;
let $brownbox = document.querySelectorAll('div')
for (let i = 0; i < $brownbox.length; i++) {
    $brownbox[i].style.color = 'brown'
}

// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
let Section = document.createElement("section");
Section.classList.add('box')
Section.style.backgroundColor = 'black'
let Article = document.createElement("article");
Article.classList.add('box')
Article.style.backgroundColor = 'red'
Article.style.borderRadius = '500px'
function onClick() {
    Article.style.backgroundColor = 'green'
}
Article.onclick = onClick
Section.append(Article)
let $body = document.querySelector('body')
$body.append(Section)













