var button = document.querySelector('.btn')
    //Tên người đặt
var username = document.getElementById('name')
var usernameDiv = document.querySelectorAll('.validate')[0]
var usernameError = document.querySelectorAll('span')[0]
    //Số điện thoại
var sdt = document.getElementById('sdt')
var sdtDiv = document.querySelectorAll('.validate')[1]
var sdtError = document.querySelectorAll('span')[1]
    //Khung giờ
var time = document.getElementById('time')
var timeDiv = document.querySelectorAll('.validate')[2]
var timeError = document.querySelectorAll('span')[2]
    //Số giờ
var hour = document.getElementById('hour')
var hourDiv = document.querySelectorAll('.validate')[3]
var hourError = document.querySelectorAll('span')[3]
    //Số người chơi
var playerNumber = document.getElementById('playerNumber')
var playerNumberDiv = document.querySelectorAll('.validate')[4]
var playerNumberError = document.querySelectorAll('span')[4]
    //Số đội chơi
var teamNumber = document.getElementById('teamNumber')
var teamNumberDiv = document.querySelectorAll('.validate')[5]
var teamNumberError = document.querySelectorAll('span')[5]

button.addEventListener('click', checkInputs)

function checkInputs() {

    //Tên người đặt
    if (username.value === "") {
        usernameDiv.setAttribute('class', 'validate-error')
        usernameError.innerText = 'Hãy điền tên của bạn.'
    } else if (username.value.length > 50) {
        usernameDiv.setAttribute('class', 'validate-error')
        usernameError.innerText = 'Tên không dài quá 50 kí tự.'
    } else {
        usernameDiv.setAttribute('class', 'validate-success')
    }

    //Số điện thoại
    if (sdt.value === "") {
        sdtDiv.setAttribute('class', 'validate-error')
        sdtError.innerText = 'Hãy điền số điện thoại của bạn.'
    } else if (sdt.value.length > 50) {
        sdtDiv.setAttribute('class', 'validate-error')
        sdtError.innerText = 'Số điện thoại không dài quá 50 kí tự.'
    } else {
        sdtDiv.setAttribute('class', 'validate-success')
    }

    //Khung giờ
    if (time.value === "") {
        timeDiv.setAttribute('class', 'validate-error')
        timeError.innerText = 'Hãy chọn khung giờ muốn đặt sân.'
    } else {
        timeDiv.setAttribute('class', 'validate-success')
    }

    //Số giờ
    if (hour.value === "") {
        hourDiv.setAttribute('class', 'validate-error')
        hourError.innerText = 'Hãy nhập số giờ muốn đặt sân.'
    } else if (hour.value < 0) {
        hourDiv.setAttribute('class', 'validate-error')
        hourError.innerText = 'Chỉ được phép nhập số dương.'
    } else {
        hourDiv.setAttribute('class', 'validate-success')
    }

    //Số người chơi
    if (playerNumber.value === "") {
        playerNumberDiv.setAttribute('class', 'validate-error')
        playerNumberError.innerText = 'Hãy nhập số người chơi.'
    } else if (playerNumber.value < 0) {
        playerNumberDiv.setAttribute('class', 'validate-error')
        playerNumberError.innerText = 'Chỉ được phép nhập số dương.'
    } else {
        playerNumberDiv.setAttribute('class', 'validate-success')
    }

    //Số đội chơi
    if (teamNumber.value === "") {
        teamNumberDiv.setAttribute('class', 'validate-error')
        teamNumberError.innerText = 'Hãy nhập số đội chơi.'
    } else if (teamNumber.value < 0) {
        teamNumberDiv.setAttribute('class', 'validate-error')
        teamNumberError.innerText = 'Chỉ được phép nhập số dương.'
    } else {
        teamNumberDiv.setAttribute('class', 'validate-success')
    }



}


//Tính tiền
var uniform = document.getElementById('uniform')
var referee = document.getElementById('referee')

function calcUniform() {
    if (uniform.checked) {
        uniform.value = 300000
    } else {
        uniform.value = 0
    }
    //console.log(uniform.value)
}

function calcReferee() {
    if (referee.checked) {
        referee.value = 200000
    } else {
        referee.value = 0
    }
    //console.log(referee.value)
}


function payment() {
    var tienSan = time.value * hour.value
    var tienUniform = uniform.value * teamNumber.value
    var tienReferee = referee.value * hour.value
    const formatter = new Intl.NumberFormat('vi')
    document.querySelector('.tongTien h2').innerHTML = "Tổng tiền: " + formatter.format(tienSan + tienUniform + tienReferee) + " VNĐ"
}