function check() { 
    if (document.getElementById('password').value ==
    document.getElementById('confirm').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Passwords are matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Passwords are not matching';
  }
}
