function VerificationEmail(name, verifyCode) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Verify Your Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 40px auto;
                    background-color: #ffffff;
                    padding: 20px 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #ddd;
                }
                .header h1 {
                    color: #333;
                }
                .content {
                    margin-top: 30px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #555;
                }
                .code {
                    display: inline-block;
                    background-color: #f0f0f0;
                    padding: 12px 20px;
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    margin: 20px 0;
                    border-radius: 6px;
                    color: #222;
                }
                .footer {
                    margin-top: 40px;
                    font-size: 13px;
                    text-align: center;
                    color: #999;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Email Verification</h1>
                </div>
                <div class="content">
                    <p>Hi ${name},</p>
                    <p>Thank you for registering with our Ecommerce App. Please use the following verification code to verify your email address:</p>
                    <div class="code">${verifyCode}</div>
                    <p>This code will expire in 10 minutes.</p>
                    <p>If you did not request this, you can safely ignore this email.</p>
                    <p>Best regards,<br>Ecommerce App Team</p>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Ecommerce App. All rights reserved.
                </div>
            </div>
        </body>
        </html>
    `;
}

export default VerificationEmail