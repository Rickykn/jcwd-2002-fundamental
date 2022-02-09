const benar = true;
const salah = false;

const password = "mypassword"

if (password.length >= 8) {
    console.log("strong password")
} else if (password.length > 6 && password.length < 8) {
    console.log("medium password")
} else {
    console.log("weak password")
}