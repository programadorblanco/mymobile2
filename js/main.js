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
    var expresionn, expresionn2, expresionn3;
    var count = 0,
        count2 = 0;
    var respuesta = $('.result');

    // ***************************************************************************************************************************
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

        // VARIABLES PARA LAS OTRAS DIRECCIONES
        let address3 = $('#address_3').val();
        let city3 = $('#city_3').val();
        let zip_code3 = $('#zipcode_3').val();
        let month3 = $('#month_3').val();
        let year3 = $('#year_3').val();
        let month3__1 = $('#month_3-03').val();
        let year3__1 = $('#year_3-03').val();
        let address2_3 = $('#address-2_3').val();
        let state3 = $('#state_3').val();

        // INSERTAR DATOS DE LA SEGUNDA DIRECCION 
        // NO IMPORTA QUE ESTEN VACIOS
        inputs.address3 = address3;
        inputs.city3 = city3;
        inputs.zip_code3 = zip_code3;
        inputs.month3 = month3;
        inputs.year3 = year3;
        inputs.address2_3 = address2_3;
        inputs.state3 = state3;
        inputs.month3__1 = month3__1;
        inputs.year3__1 = year3__1;

        // VARIABLES PARA LAS OTRAS DIRECCIONES
        let address4 = $('#address_4').val();
        let city4 = $('#city_4').val();
        let zip_code4 = $('#zipcode_4').val();
        let month4 = $('#month_4').val();
        let year4 = $('#year_4').val();
        let month4__1 = $('#month_3-04').val();
        let year4__1 = $('#year_3-04').val();
        let address2_4 = $('#address-2_4').val();
        let state4 = $('#state_4').val();

        // INSERTAR DATOS DE LA TERCERA DIRECCION 
        // NO IMPORTA QUE ESTEN VACIOS
        inputs.address4 = address4;
        inputs.city4 = city4;
        inputs.zip_code4 = zip_code4;
        inputs.month4 = month4;
        inputs.year4 = year4;
        inputs.address2_4 = address2_4;
        inputs.state4 = state4;
        inputs.month4__1 = month4__1;
        inputs.year4__1 = year4__1;

        // ELEMENTOS NO OBLIGATORIOS
        let middle_name = $('#middleName').val();
        let address2 = $('#address-2').val();
        let other_name = $('#other-name').val();

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
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        inputs.middle = middle_name;
        inputs.address2 = address2;
        inputs.other_name = other_name;
        inputs.today = today;

        count3 = extensionImage();

        console.log(count, count2)
        console.log(inputs)
        if (count == 0 && count2 == -19 && count3 == true) {
            // LOS DATOS HAN SIDO VALIDADOS
            demoFromHTML();  
            respuesta.hide(500);
        }
        else{ 
            console.log("entro")
            respuesta.show(500);
        }
        count2 = 0;
    });
    // ***************************************************************************************************************************

    function extensionImage()
    {
        var fileInput = document.getElementById('txtFileID');
        var filePath = fileInput.value;
        var fileInput2 = document.getElementById('txtFileIDback');
        var filePath2 = fileInput2.value;
        var fileInput3 = document.getElementById('txtFileSelfie');
        var filePath3 = fileInput3.value;

        var allowedExtensions = /(.jpg)$/i;
        var allowedExtensions2 = /(.jpeg)$/i;

        if(allowedExtensions.exec(filePath))
        {
            console.log('.jpg');
            expresionn = 'JPG';
        }
        else if(allowedExtensions2.exec(filePath))
        {
            console.log('.jpeg');
            expresionn = 'JPEG';
        }
        else
        {
            return false;
        }

        if(allowedExtensions.exec(filePath2))
        {
            console.log('.jpg');
            expresionn2 = 'JPG';
        }
        else if(allowedExtensions2.exec(filePath2))
        {
            console.log('.jpeg');
            expresionn2 = 'JPEG';
        }
        else
        {
            return false;
        }

        if(allowedExtensions.exec(filePath3))
        {
            console.log('.jpg');
            expresionn3 = 'JPG';
        }
        else if(allowedExtensions2.exec(filePath3))
        {
            console.log('.jpeg');
            expresionn3 = 'JPEG';
        }else
        {
            return false;
        }

        return true;
    }

    function demoFromHTML() {
        var doc = new jsPDF('p', 'pt', 'letter');        
        doc.setFontSize(18);
        doc.text(260, 50, 'Authorization');
        doc.setLineWidth(1);
        doc.line(70, 55, 542, 55); 
        doc.setFontSize(12);
        doc.setFontType('bold');
        doc.text(70, 85, 'Authorization');
        doc.setLineWidth(0.5);
        doc.line(70, 88, 150, 88);
        doc.setFontType("normal");
        doc.text(147, 85, ':  By signing below, you authorize: (a) backgroundchecks.com ( “BGC” ) to');
        doc.text(70, 100, 'request information about you from any public or private information source;(b) anyone to');
        doc.text(70, 115, 'provide  information  about  you  to BGC; (c) BGC  to  provide  us My Mobile, LLC and its');
        doc.text(70, 130, 'client, TracFone Wireless, Inc., one or more reports based on that information; and (d) us');
        doc.text(70, 145, 'to share  those reports with  others for legitimate  business purposes related  to your em-');
        doc.text(70, 160, 'ployment.  BGC may investigate your education,  work history,  professional licenses and');
        doc.text(70, 175, 'credentials,  references,  address history,  social security number validity,  right  to  work,');
        doc.text(70, 190, 'criminal record, lawsuits, driving record, credit history, and any other information with pu-');
        doc.text(70, 205, 'blic  or  private  information  sources.  You  acknowledge  that  a  fax,  image,  or copy of');
        doc.text(70, 220, 'this authorization is as valid as the original. You make this authorization to be valid for as');
        doc.text(70, 235, 'long as you are an applicant or employee with us.');
        doc.text(70, 265, 'The  Consumer  Financial  Protection  Bureau ’s  “Summary  of  Your  Rights  under  the');
        doc.text(70, 280, 'Fair Credit  Reporting  Act”  is  attached  to  this  authorization. If  you  are  a  New  York');
        doc.text(70, 295, 'applicant, a  copy  of  New York’s  law on  the use  of  criminal  records  is  attached.  By');
        doc.text(70, 310, 'signing below, you acknowledge receipt of these documents.');
        doc.setFontType('bold');
        doc.text(70, 340, 'Personal  Information');
        doc.line(70, 343, 197, 343);
        doc.setFontType("normal");
        doc.text(194, 340, ': Please print the information requested below to identify yourself');
        doc.text(70, 355, 'for BGC.');
        doc.setFontSize(11);
        doc.text(70, 380, 'Printed name: ');
        doc.setFontSize(9);
        doc.text(190, 380, inputs.name);
        if(inputs.middle != "")
        {
            doc.text(265, 380, inputs.middle); 
        } 
        doc.text(390, 380, inputs.last_name);
        doc.line(190, 383, 542, 383);
        doc.text(190, 395, 'First');
        doc.text(265, 395, 'Middle');
        doc.text(390, 395, 'Last');

        doc.setFontSize(11);
        doc.text(70, 415, 'Other names used: ');
        doc.setFontSize(9);
        if(inputs.other_name != "")
        {
            doc.text(190, 415, inputs.other_name);
        } 
        doc.line(190, 418, 542, 418);

        doc.setFontSize(11);
        doc.text(70, 435, 'Current and former addresses: ');

        doc.setFontSize(10);
        //470
        doc.text(70, 470, inputs.month2 + "/" + inputs.year2); doc.text(180, 470, 'current'); doc.text(290, 470, inputs.address + ' ' + inputs.address2 + ', ' + inputs.city + ', ' + inputs.state + ' ' + inputs.zip);
        doc.line(70, 473, 160, 473); doc.line(180, 473, 270, 473); doc.line(290, 473, 542, 473);
        doc.text(70, 484, 'from Mo/Yr'); doc.text(180, 484, 'to Mo/Yr '); doc.text(290, 484, 'Street'); doc.text(455, 484, 'City, State & Zip');

        doc.text(70, 505, inputs.month3 + "/" + inputs.year3); doc.text(180, 505, inputs.month3__1 + "/" + inputs.year3__1); doc.text(290, 505, inputs.address3 + ' ' + inputs.address2_3 + ', ' + inputs.city3 + ', ' + inputs.state3 + ' ' + inputs.zip_code3);
        doc.line(70, 508, 160, 508); doc.line(180, 508, 270, 508); doc.line(290, 508, 542, 508);
        doc.text(70, 519, 'from Mo/Yr'); doc.text(180, 519, 'to Mo/Yr '); doc.text(290, 519, 'Street'); doc.text(455, 519, 'City, State & Zip');
        //540
        //!!!!!!!!!!!!!!!!!!!!!!!!!! AQUI FALTA CAMPOS DE DIRECCION3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        doc.text(70, 540, inputs.month4 + "/" + inputs.year4); doc.text(180, 540, inputs.month4__1 + "/" + inputs.year4__1); doc.text(290, 540, inputs.address4 + ' ' + inputs.address2_4 + ', ' + inputs.city4 + ', ' + inputs.state4 + ' ' + inputs.zip_code4);
        doc.line(70, 543, 160, 543); doc.line(180, 543, 270, 543); doc.line(290, 543, 542, 543);
        doc.text(70, 554, 'from Mo/Yr'); doc.text(180, 554, 'to Mo/Yr '); doc.text(290, 554, 'Street'); doc.text(455, 554, 'City, State & Zip');

        doc.addImage(signature, 'PNG', 110, 590, 116, 116);
        doc.line(70, 709, 276, 709);
        doc.text(70, 720, 'Signature');

        doc.text(336, 706, inputs.today);
        doc.line(336, 709, 542, 709);
        doc.text(336, 720, 'Date');

        // ******************** NUEVA PAGINA ********************
        doc.addPage();
        doc.setFontSize(18);
        doc.text(265, 50, 'Disclosure');
        doc.setLineWidth(1);
        doc.line(70, 55, 542, 55); 
        doc.setFontSize(12);
        doc.text(70, 85, 'We');
        doc.setFontType('bold');
        doc.text(92, 85, 'My Mobile, LLC');
        doc.setFontType("normal");
        doc.text(184 , 85, 'and our client, TracFone Wireless, Inc., will obtain one or more con-');
        doc.text(70, 100, 'sumer  reports  or  investigative  consumer  reports (or both) about  you  for  purposes  of');
        doc.text(70, 115, 'employment with');
        doc.setFontType('bold');
        doc.text(164, 115, 'My Mobile, LLC');
        doc.setFontType("normal");
        doc.text(254 , 115, ' and  potential assignment  to work on  projects for our');
        doc.text(70, 130, 'client  TracFone  Wireless,  Inc. These  purposes  may  include  hiring,  contract,  assign-');
        doc.text(70, 145, 'ment,  promotion,  re-assignment,  and termination.  The reports  will include  information');
        doc.text(70, 160, 'about your character, general reputation, personal characteristics, and mode of living.');
        doc.text(70, 185, 'We will obtain these reports through a consumer reporting agency.  Our consumer repor-');
        doc.text(70, 200, 'ting agency is backgroundchecks.com (“BGC”). BGC’s address is P.O. Box 353, Chapin,');
        doc.text(70, 215, 'blic  or  private  information  sources.  You  acknowledge  that  a  fax,  image,  or copy of');
        doc.text(70, 230, 'SC   29036.   BGC ’s   telephone   number   is   (866)   265 - 6602.   BGC ’s   website   is');
        doc.text(70, 245, 'www.backgroundchecks.com,  where  you  can  find  information  about  whether  BGC’s');
        doc.text(70, 260, 'international privacy practices.');
        doc.text(70, 285, 'To prepare the reports,  BGC may investigate your education, work history,  professional');
        doc.text(70, 300, 'licenses  and  credentials, references, address  history,  social  security  number  validity,');
        doc.text(70, 315, 'right  to  work,  criminal  record,  lawsuits,  driving  record,  credit  history, and  any  other');
        doc.text(70, 330, 'with public or private information sources.');
        doc.text(70, 355, 'You  may  obtain  a copy of  any  report  that BGC  provides and  BGC’s files  about  you');
        doc.text(70, 370, 'in  person, by  mail, or  by  phone)  by  providing  dentification  to  BGC. If  you  do, BGC');
        doc.text(70, 385, 'tion of any codes. Another person may accompany you by providing identification.');
        doc.text(70, 410, 'If BGC obtains any information by interview, you have the right to obtain a complete and');
        doc.text(70, 425, 'accurate disclosure of the scope and nature of the investigation performed.');
        doc.text(70, 450, 'Please sign below to acknowledge your receipt of this disclosure.');
        doc.setFontSize(10);
        doc.addImage(signature, 'PNG', 110, 490, 116, 116);
        doc.line(70, 609, 276, 609);
        doc.text(70, 620, 'Signature');
        doc.setFontSize(9);
        doc.text(336, 606, inputs.today);
        doc.line(336, 609, 542, 609);
        doc.text(336, 620, 'Date');
        if(inputs.middle != "")
        {
            doc.text(70, 666, (inputs.name + ' ' + inputs.middle + ' ' + inputs.last_name));
        } 
        else
        {
            doc.text(70, 666, (inputs.name + ' ' + inputs.last_name));
        }
        doc.line(70, 669, 276, 669);
        doc.text(70, 680, 'Printed Name');
         
        // ******************** NUEVA PAGINA ********************
        doc.addPage();
        doc.setFontSize(18);
        doc.text(265, 50, 'Information');
        doc.setLineWidth(1);
        doc.line(70, 55, 542, 55); 
        doc.setFontSize(12);
        if(inputs.middle != "")
        {
            doc.text(70, 330, ('Full name: ' + inputs.name + ' ' + inputs.middle + ' ' + inputs.last_name));
        } 
        else
        {
            doc.text(70, 330, ('Full name: ' + inputs.name + ' ' + inputs.last_name));
        }
        doc.text(70, 345, ('SSN: ' + inputs.ssn));
        doc.text(70, 360, ('Date of birth: ' + inputs.month + '/' + inputs.day + '/' + inputs.year));
        doc.text(70, 375, ('Gender: ' + inputs.gender));
        doc.text(70, 390, ('Phone: ' + inputs.phone));
        doc.text(70, 405, ('Email: ' + inputs.email));
        doc.text(70, 420, ('Phone: ' + inputs.phone));
        doc.text(70, 435, ('T-shirt size: ' + inputs.size));
        doc.addImage(direccion3, expresionn3, 210, 80, 200, 230);
        doc.addImage(direccion1, expresionn, 40, 470, 260, 200);
        doc.addImage(direccion2, expresionn2, 312, 470, 260, 200);

        doc.save('Test.pdf');
    }

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