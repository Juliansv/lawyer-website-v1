"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./FormSchema";
import { sendEmail } from "@/app/actions";

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({ resolver: zodResolver(schema) });

	const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
		try {
			const response = await sendEmail(data);
			console.log(response);
		} catch (error) {
			setError("root", { message: "Error en root" });
		}
	};
	return (
		<div className="w-full max-w-xl xl:w-5/12">
			<div className="bg-alabaster-bg rounded shadow-2xl p-7 sm:p-10">
				<h3 className="mb-4 text-woodsmoke-txt text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
					Reserve su turno o realice su consulta
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className=" flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
						<div className="relative mb-4">
							<label
								htmlFor="name"
								className="leading-7 text-sm text-woodsmoke-txt "
							>
								Nombre y Apellido
							</label>
							<input
								{...register("name")}
								type="text"
								id="name"
								name="name"
								className="w-full text-woodsmoke-txt bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							></input>
							{errors.name && (
								<span className="text-red-500">
									{errors.name.message}
								</span>
							)}
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="phone"
								className="leading-7 text-sm text-woodsmoke-txt "
							>
								Telefono
							</label>
							<input
								{...register("phone")}
								type="number"
								pattern="[0-9]+"
								id="phone"
								name="phone"
								className="w-full text-woodsmoke-txt bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							></input>
							{errors.phone && (
								<span className="text-red-500">
									{errors.phone.message}
								</span>
							)}
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="email"
								className="leading-7 text-sm text-woodsmoke-txt "
							>
								Email
							</label>
							<input
								{...register("email")}
								type="email"
								id="email"
								name="email"
								className="w-full text-woodsmoke-txt bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							></input>
							{errors.email && (
								<span className="text-red-500">
									{errors.email.message}
								</span>
							)}
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="message"
								className="leading-7 text-sm text-woodsmoke-txt "
							>
								Escriba su consulta
							</label>
							<textarea
								{...register("message")}
								id="message"
								name="message"
								className="w-full text-woodsmoke-txt bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							></textarea>
							{errors.message && (
								<span className="text-red-500">
									{errors.message.message}
								</span>
							)}
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="text-porcelain-txt bg-boctonic-acc border-0 py-2 px-6 focus:outline-none hover:bg-persian-blue-prim rounded text-lg"
						>
							{isSubmitting ? "Enviando..." : "Enviar"}
						</button>
						{errors.root && (
							<span className="text-red-500">
								{errors.root.message}
							</span>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
