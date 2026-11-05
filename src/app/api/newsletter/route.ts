import nodemailer from "nodemailer";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Inscrição na newsletter do rodapé — envia os dados por e-mail para a APAE
export async function POST(request: Request) {
  try {
    const { nome, email } = await request.json();

    if (!nome || !email) {
      return Response.json({ success: false, error: "Campos obrigatórios ausentes" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "localhost",
      port: parseInt(process.env.EMAIL_PORT ?? "", 10) || 1025,
      secure: process.env.EMAIL_SECURE === "true",
      auth: process.env.EMAIL_USER && process.env.EMAIL_PASS
        ? { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        : undefined,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      replyTo: String(email),
      subject: `Nova inscrição na newsletter — ${String(nome)}`,
      html: `<html>
      <body style="font-family: Arial, sans-serif; color: #1B1E19; background: #FFFBF0; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-top: 6px solid #F6D31A;">
          <div style="background: #0E3B22; color: #fff; padding: 16px 20px;">
            <h1 style="margin: 0; font-size: 22px;">Newsletter — APAE de Joinville</h1>
          </div>
          <div style="padding: 10px 20px 20px; font-size: 16px; line-height: 1.5;">
            <p><b>Nome:</b> ${escapeHtml(nome)}</p>
            <p><b>E-mail:</b> ${escapeHtml(email)}</p>
          </div>
        </div>
      </body>
      </html>`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
