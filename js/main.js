    var validateSignature = "data:image/png;base64,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";
    // ********************************************************
    // ********************************************************
    // CAPTURAR FIRMA
    // ********************************************************
    // ********************************************************
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var cw = (canvas.width = 290),
        cx = cw / 2;
    var ch = (canvas.height = 290),
        cy = ch / 2;
    ctx.strokeStyle = "#000";
    var dibujando = false;
    var m = {
        x: 0,
        y: 0
    };

    var eventsRy = [{
        event: "mousedown",
        func: "onStart"
    }, {
        event: "touchstart",
        func: "onStart"
    }, {
        event: "mousemove",
        func: "onMove"
    }, {
        event: "touchmove",
        func: "onMove"
    }, {
        event: "mouseup",
        func: "onEnd"
    }, {
        event: "touchend",
        func: "onEnd"
    }, {
        event: "mouseout",
        func: "onEnd"
    }];

    function onStart(evt) {
        m = oMousePos(canvas, evt);
        ctx.beginPath();
        dibujando = true;
    }

    function onMove(evt) {
        if (dibujando) {
            ctx.moveTo(m.x, m.y);
            m = oMousePos(canvas, evt);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
        }
    }

    var firma;

    function onEnd(evt) {
        dibujando = false;
        firma = canvas.toDataURL("image/png");
    }

    function oMousePos(canvas, evt) {
        var ClientRect = canvas.getBoundingClientRect();
        var e = evt.touches ? evt.touches[0] : evt;

        return {
            x: Math.round(e.clientX - ClientRect.left),
            y: Math.round(e.clientY - ClientRect.top)
        };
    }

    for (var i = 0; i < eventsRy.length; i++) {
        (function(i) {
            var e = eventsRy[i].event;
            var f = eventsRy[i].func;
            console.log(f);
            canvas.addEventListener(e, function(evt) {
                evt.preventDefault();
                window[f](evt);
                return;
            }, false);
        })(i);
    }

    clear.addEventListener(
        "click",
        function() {
            ctx.clearRect(0, 0, cw, ch);
        },
        false
    );
    // ********************************************************
    // ********************************************************
    // ********************************************************

    // VARIABLES GLOBALES
    var inputs = {};
    var signature;
    var count = 0,
        count2 = 0;
    var respuesta = $('.result');
    $(document).on("submit", "#form", function(evt) {
        evt.preventDefault();
        // ELEMENTOS OBLIGATORIOS
        let name = $('#name');
        let last_name = $('#lName');
        let ssn = $('#ssn-full');
        let phone = $('#phone');
        let email = $('#email');
        let address = $('#address');
        let city = $('#city');
        let zip_code = $('#zipcode');
        let day = $('#day');
        let month = $('#month');
        let year = $('#year');
        let gender = $('#gender');
        let size = $('#sizes');
        let month2 = $('#month2');
        let year2 = $('#year2');
        let state = $('#state');
        let can = $('canvas');
        let id_front = direccion1;
        let txtFront = $('#lbl-front');
        let id_back = direccion2;
        let txtBack = $('#lbl-back');
        let id_selfie = direccion3;
        let txtSelfie = $('#lbl-selfie');
        signature = canvas.toDataURL("image/png");

        // ELEMENTOS NO OBLIGATORIOS
        let middle_name = $('#middleName').val();
        let address2 = $('#address-2').val();

        // VALIDAR FIRMA
        if (signature == validateSignature) {
            count = 1;
            can.css("border", "1px solid red");
        } else {
            count = 0;
            can.css("border", "1px solid #c7c7c7");
            inputs.signature = signature;
        }

        // VALIDACION PARA INPUT
        ValidarInput(name.val(), name, "name");
        ValidarInput(last_name.val(), last_name, "last");
        ValidarInput(ssn.val(), ssn, "ssn");
        ValidarInput(phone.val(), phone, "phone");
        ValidarInput(email.val(), email, "email");
        ValidarInput(address.val(), address, "address");
        ValidarInput(city.val(), city, "city");
        ValidarInput(zip_code.val(), zip_code, "zip");
        ValidarInput(day.val(), day, "day");
        ValidarInput(month.val(), month, "month");
        ValidarInput(year.val(), year, "year");
        ValidarInput(gender.val(), gender, "gender");
        ValidarInput(size.val(), size, "size");
        ValidarInput(month2.val(), month2, "month2");
        ValidarInput(year2.val(), year2, "year2");
        ValidarInput(state.val(), state, "state");
        ValidarInput(id_front, txtFront, "front");
        ValidarInput(id_back, txtBack, "back");
        ValidarInput(id_selfie, txtSelfie, "selfie");



        // ASIGNACION DE VALORES NO OBLIGATORIOS EN ARRAY, NO IMPORTA QUE SEA VACIO
        inputs.middle = middle_name;
        inputs.address2 = address2;


        console.log(count, count2)
        console.log(inputs)
        if (count == 0 && count2 == -19) {
            // LOS DATOS HAN SIDO VALIDADOS
            respuesta.hide(500);
        }
        else{
            console.log("entro")
            respuesta.show(500);
        }
        count2 = 0;
    });


    function ValidarInput(value, element, name) {
        if (value == "" || value == "default") {
            count2++;
            element.css("border", "1px solid red");
        } else {
            InsertarDatos(name, value);
            element.css("border", "1px solid #c7c7c7");
        }
    }

    function InsertarDatos(name, value) {
        if (name == "name") {
            count2--;
            inputs.name = value;
        } else if (name == "last") {
            count2--;
            inputs.last_name = value;
        } else if (name == "ssn") {
            count2--;
            inputs.ssn = value;
        } else if (name == "phone") {
            count2--;
            inputs.phone = value;
        } else if (name == "email") {
            count2--;
            inputs.email = value;
        } else if (name == "address") {
            count2--;
            inputs.address = value;
        } else if (name == "city") {
            count2--;
            inputs.city = value;
        } else if (name == "zip") {
            count2--;
            inputs.zip = value;
        } else if (name == "day") {
            count2--;
            inputs.day = value;
        } else if (name == "month") {
            count2--;
            inputs.month = value;
        } else if (name == "year") {
            count2--;
            inputs.year = value;
        } else if (name == "gender") {
            count2--;
            inputs.gender = value;
        } else if (name == "size") {
            count2--;
            inputs.size = value;
        } else if (name == "month2") {
            count2--;
            inputs.month2 = value;
        } else if (name == "year2") {
            count2--;
            inputs.year2 = value;
        } else if (name == "state") {
            count2--;
            inputs.state = value;
        } else if (name == "front") {
            count2--;
            inputs.front = value;
        } else if (name == "back") {
            count2--;
            inputs.back = value;
        } else if (name == "selfie") {
            count2--;
            inputs.selfie = value;
        }
    }

    // EVENTO PARA CARGAR LA FOTO ID DE LA PARTE DE DELANTERA
    var direccion1 = "";
    var loadID = document.querySelector('#txtFileID');
    loadID.addEventListener('change', function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            direccion1 = reader.result;
            $('#lbl-front').css("color", "#46f746");
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // EVENTO PARA CARGAR LA FOTO ID DE LA PARTE DE TRASERA
    var direccion2 = "";
    var loadIDback = document.querySelector('#txtFileIDback');
    loadIDback.addEventListener('change', function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            direccion2 = reader.result;
            $('#lbl-back').css("color", "#46f746");
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // EVENTO PARA CARGAR LA FOTO SELFIE
    var direccion3 = "";
    var loadSelfie = document.querySelector('#txtFileSelfie');
    loadSelfie.addEventListener('change', function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            direccion3 = reader.result;
            $('#lbl-selfie').css("color", "#46f746");
        };
        reader.readAsDataURL(event.target.files[0]);

    });