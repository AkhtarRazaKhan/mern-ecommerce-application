
import sendEmail from "./emailService.js";

// // const sendEmailFun = async(to,subject,Text,html)=>{
// //     const result= await sendEmail(to, subject, Text, html);

// //     if(result.success){
// //         return true;
        
// //     }
// //     else {
// //         return false
// //     }
// // }


const sendEmailFun = async ({ sendTo, subject, text, html }) => {
    const result = await sendEmail(sendTo, subject, text, html);

    if (result.success) {
        console.log("Email sent successfully");
        return true;
    } else {
        console.error("Failed to send email:", result.error);
        return false;
    }
}

export default sendEmailFun;
