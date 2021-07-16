    // AUTOR: EDUARDO BLANCO
    // 02/07/21

    // IMPRIMIR OPTION DENTRO DE SELECT EN FECHA
    // DAY
    let day = $('#day');
    for (let i = 1; i < 32; i++) {
        day.append("<option value='" + i + "'>" + i + "</option>");
    }

    // MONTH
    let month = $('#month');
    let month2 = $('#month2');
    let arraymonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    arraymonth.forEach(valor => {
        month.append("<option value='" + valor + "'>" + valor + "</option>");
        month2.append("<option value='" + valor + "'>" + valor + "</option>");
    });

    // YEAR
    let year = $('#year');
    let year2 = $('#year2');
    var today = new Date();
    var yyyy = today.getFullYear();
    for (let i = (yyyy - 18); i > (yyyy - 50); i--) {
        year.append("<option value='" + i + "'>" + i + "</option>");
        year2.append("<option value='" + i + "'>" + i + "</option>");
    }
    for (let i = yyyy; i > (yyyy - 50); i--) {
        year.append("<option value='" + i + "'>" + i + "</option>");
        year2.append("<option value='" + i + "'>" + i + "</option>");
    }

    // STATE
    let state = $('#state');
    let arrayState = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Massachusetts", "Maryland", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    arrayState.forEach(valor => {
        state.append("<option value='" + valor + "'>" + valor + "</option>");
    });

    // GENDER
    let gender = $('#gender');
    gender.append("<option value='Man'>Man</option>");
    gender.append("<option value='Woman'>Woman</option>");


    // SIZE
    let sizes = $('#sizes');
    let arraySizes = ["XS", "S", "M", "L", "XL", "XXL"];
    arraySizes.forEach(valor => {
        sizes.append("<option value='" + valor + "'>" + valor + "</option>");
    });