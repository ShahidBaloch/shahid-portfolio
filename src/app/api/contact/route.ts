import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const name = String(body?.name ?? "").trim();
        const email = String(body?.email ?? "").trim();
        const message = String(body?.message ?? "").trim();

        if (!name || !email || !message) {
            return Response.json(
                { ok: false, error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Basic email check (good enough for portfolio)
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isEmailValid) {
            return Response.json({ ok: false, error: "Invalid email." }, { status: 400 });
        }

        const host = process.env.SMTP_HOST;
        const port = Number(process.env.SMTP_PORT || 587);
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;
        const to = process.env.CONTACT_TO || process.env.SMTP_USER;

        if (!host || !user || !pass || !to) {
            return Response.json(
                { ok: false, error: "Email is not configured on server." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
        });
        await transporter.sendMail({
            from: `"Portfolio Contact" <${user}>`,
            replyTo: email,
            to,
            subject: `New Portfolio Message from ${name}`,
            html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    </div>
  `,
        });


        return Response.json({ ok: true });
    } catch (err) {
        return Response.json(
            { ok: false, error: "Something went wrong." },
            { status: 500 }
        );
    }
}