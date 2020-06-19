function tampilkanSemuaMenu() {
    $.getJSON('data/bk.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-3"><div class= "card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5> <a href="#" class="btn btn-primary" id="tombol">Pesan Sekarang</a></div></div ></div >');
        });
    });
}
function sortMenu(command = "asc") {
    return function menuSort(a, b) {
        var nameA = a.nama.toLowerCase();
        var nameB = b.nama.toLowerCase();
        var compare = 0;
        if (nameA > nameB) {
            compare = 1;
        } else if (nameA < nameB) {
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}



tampilkanSemuaMenu();

$('.nav-link').on('click', function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    $.getJSON('data/bk.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class= "card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5> <a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div ></div >';
            }
        });

        if (kategori == 'All Menu') {
            $('#daftar-menu').html('');
            tampilkanSemuaMenu();
            return;
        }

        $('#daftar-menu').html(content);
    });


});

// function sortByProperty(objArray, prop, direction){
//     if (arguments.length<2) throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
//     if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
//     const clone = objArray.slice(0);
//     const direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending
//     const propPath = (prop.constructor===Array) ? prop : prop.split(".");
//     clone.sort(function(a,b){
//         for (let p in propPath){
//                 if (a[propPath[p]] && b[propPath[p]]){
//                     a = a[propPath[p]];
//                     b = b[propPath[p]];
//                 }
//         }
//         // convert numeric strings to integers
//         a = a.match(/^\d+$/) ? +a : a;
//         b = b.match(/^\d+$/) ? +b : b;
//         return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
//     });
//     return clone;
// }

// const resultsByObjectId = sortByProperty(results, 'attributes.OBJECTID');
// const resultsByObjectIdDescending = sortByProperty(results, 'attributes.OBJECTID', -1);

$('#byp').on('click', function () {
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    // $('h1').html(kategori);
    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }
    $.getJSON('data/bk.json', function (data) {
        let menu = data.menu;
        let content = '';
        // menu.sort(function(a, b){
        //     return sortharga(a.harga, b.harga);
        //     return a.harga - b.harga;
        // });
        menu.sort(function (a, b) {
            return b.harga - a.harga
        }
        );
        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-3"><div class= "card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5> <a href="#" class="btn btn-primary" id="tombol">Pesan Sekarang</a></div></div ></div >'
            } else {
                content += '<div class="col-md-3"><div class= "card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5> <a href="#" class="btn btn-primary" id="tombol">Pesan Sekarang</a></div></div ></div >'
            }
        });
        $('#daftar-menu').html(content);
    });
});

$('#byn').on('click', function () {
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    // $('h1').html(kategori);
    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }
    $.getJSON('data/bk.json', function (data) {
        let menu = data.menu;
        let content = '';
        
        menu.sort(sortMenu("asc"));
        
        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-3"><div class= "card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5> <a href="#" class="btn btn-primary" id="tombol">Pesan Sekarang</a></div></div ></div >'
            } else {
                content += '<div class="col-md-3"><div class= "card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5> <a href="#" class="btn btn-primary" id="tombol">Pesan Sekarang</a></div></div ></div >'
            }
        });
        $('#daftar-menu').html(content);
    });
});


