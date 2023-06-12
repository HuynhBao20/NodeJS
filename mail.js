var mail = require('nodemailer');

const option = {
    service: 'Gmail',
    auth: {
        user: 'huynhthebao.201020020@gmail.com', // email hoặc username
        pass: 'mwg@0334661938' // password
    }
};
var transporter = mail.createTransport(option);

transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else { //Nếu thành công.
        console.log('Kết nối thành công!');
    }
});