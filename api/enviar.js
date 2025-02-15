const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, apellido, email, ciudad, mensaje } = req.body;

  if (!nombre || !apellido || !email || !ciudad || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    // Configurar el transporte SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // O usa SMTP de otro proveedor
      auth: {
        user: "ferneyvallejogonzalez@gmail.com", // Cambia esto por tu email
        pass: "ccvq twqm pmdu bpzl", // Usa una contraseña segura o App Password
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: `"Formulario de Contacto" <ferneyvallejogonzalez@gmail.com>`,
      to: "ferneyvallejogonzalez@gmail.com", // Aquí recibe el mensaje
      subject: "Nuevo mensaje del formulario de contacto",
      text: `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nCiudad: ${ciudad}\nMensaje: ${mensaje}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al enviar el correo", details: error.message });
  }
}
