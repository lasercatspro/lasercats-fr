"use client";
import { ChangeEvent, FormEvent, useReducer } from "react";
import Button from "../button";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";

interface Action {
  type: "handle_text";
  field: "nom" | "prenom" | "email" | "message";
  payload: string;
}
interface State {
  nom: string;
  email: string;
  message: string;
}

const Contact = () => {
	const initialState = {
		nom: "",
		email: "",
		message: "",
	};
	function reducer(state: State, action: Action) {
		switch (action.type) {
		case "handle_text":
			return {
				...state,
				[action.field]: action.payload,
			};
		default:
			return state;
		}
	}

	const handleTextChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		dispatch({
			type: "handle_text",
			field: event.target.name as Action["field"],
			payload: event.target.value,
		});
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const inputs = ["Email", "Nom", "Message"];

	const submitFn = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		return console.log(state);
	};
	const isMobile = useIsMobile({ forIpad: true });

	return (
		<div id="contact" className=" !text-zinc-50 pt-16 relative bg-custom-dark">
			<div className="bg-cover bg-[url(/assets/images/backgrounds/svg-blue.svg)]">
				<div className="grid grid-col-1 gap-8 lg:grid-rows-2 lg:grid-cols-2 max-w-[1400px] mx-8 lg:mx-auto py-12 lg:py-24">
					<h1 className="!text-zinc-50 !text-5xl lg:!text-[8rem]">
            Nous contacter
					</h1>
					<form
						id="form"
						action="#"
						onSubmit={(e) => submitFn(e)}
						className="
						lg:row-span-2
						flex flex-col gap-8 border border-zinc-400 
						rounded-lg p-8 backdrop-blur-sm bg-zinc-50 
						bg-opacity-10
					"
					>
						<div className="flex gap-4 items-center">
							<div className="h-2 w-2 bg-primary rounded-full" />
							<p className="!text-zinc-50">Démarrer un échange</p>
						</div>
						<div className="flex flex-col w-full gap-2">
							<label className="sr-only" htmlFor={inputs.at(-1)}>
								{inputs.at(-1)}
							</label>
							<textarea
								name={inputs[3]}
								cols={10}
								rows={isMobile ? 7 : 12}
								className="custom-input !border-none rounded-sm text-3xl"
								onChange={(e) => handleTextChange(e)}
								placeholder="Laissez nous un petit mot"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							{inputs.map(
								(input) =>
									input !== inputs.at(-1) && (
										<div key={input} className="flex flex-col w-full gap-2 ">
											<label className="sr-only" htmlFor={input}>
												{input}
											</label>
											<input
												type="text"
												name={input}
												className="custom-input"
												onChange={(e) => handleTextChange(e)}
												placeholder={`Votre ${input.toLowerCase()}`}
											/>
										</div>
									)
							)}
						</div>
						<Button title="Envoyer" role="primary" type="submit" />
					</form>
					<ul className="hidden md:flex items-end justify-between w-2/3">
						<li className="flex flex-col justify-between gap-8">
							<p className="text-2xl text-zinc-50">Bureaux</p>
							<div className="flex flex-col">
								<span className="text-xl text-zinc-50">
                  2 avenue Jean Janvier
								</span>
								<span className="text-xl text-zinc-50">35000 RENNES</span>
							</div>
						</li>
						<li className="flex flex-col justify-between gap-8">
							<p className="text-2xl text-zinc-50">Contact</p>
							<div className="">
								<span className="text-xl text-zinc-50">+330234567890</span>
								<br />
								<Link
									className="text-xl text-zinc-50"
									href="mailto:contact@lasercats.fr"
								>
                contact@lasercats.fr
								</Link>

							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
