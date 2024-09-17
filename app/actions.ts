"use server";

import { z } from "zod";
import { schema } from "@/app/components/Form/FormSchema";
import { Resend } from "resend";
import EmailTemplate from "./emails";

type ContactFormInputs = z.infer<typeof schema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
	const result = schema.safeParse(data);

	if (result.success) {
		const { name, email, phone, message } = result.data;
		try {
			const data = await resend.emails.send({
				from: "Daniela website <onboarding@resend.dev>",
				to: ["juliansv22@gmail.com"],
				subject: "Consulta desde la web",
				text: `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}`,
				react: EmailTemplate({ firstName: name }),
			});
			return { success: true, data };
		} catch (error) {
			return { success: false, error };
		}
	}

	if (result.error) {
		return { success: false, error: result.error.format() };
	}
}
