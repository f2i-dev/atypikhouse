// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { to, subject, text } = req.body;

//     // Create a transporter using SMTP
//     let transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     try {
//       // Send mail with defined transport object
//       let info = await transporter.sendMail({
//         from: '"Atypik House Contact Form" <noreply@atypikhouse.com>',
//         to: to,
//         subject: subject,
//         text: text,
//       });

//       console.log("Message sent: %s", info.messageId);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
