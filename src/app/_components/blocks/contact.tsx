"use client";
import { ChangeEvent, FormEvent, useReducer } from "react";
import Button from "../button";

interface Action {
  type: "handle_text";
  field: "nom" | "prenom" | "email" | "message";
  payload: string;
}
interface State {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

const Contact = () => {
	const initialState = {
		nom: "",
		prenom: "",
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

	const handleTextChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({
			type: "handle_text",
			field: event.target.name as Action["field"],
			payload: event.target.value,
		});
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const inputs = ["Nom", "Prénom", "Email", "Message"];

	const submitFn = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		return console.log(state);
	};

	return (
		<div id="contact" className="px-4 md:px-40 py-40">
			<div className="lg:w-2/3 max-w-7xl mx-auto">
				<div className="text-center text-6xl py-12">
					<p>Besoin ponctuel ?</p>
					<p>Nouveau projet ?</p>
				</div>
				<form
					id="form"
					action="#"
					onSubmit={(e) => submitFn(e)}
					className="flex flex-col gap-8 my-8 lg:w-9/12 mx-auto"
				>
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex flex-col w-full gap-2 ">
							<label htmlFor={inputs[0]}>{inputs[0]}</label>
							<input
								type="text"
								name={inputs[0]}
								className="custom-input"
								onChange={(e) => handleTextChange(e)}
							/>
						</div>
						<div className="flex flex-col w-full gap-2">
							<label htmlFor={inputs[1]}>{inputs[1]}</label>
							<input
								type="text"
								name={inputs[1]}
								className="custom-input"
								onChange={(e) => handleTextChange(e)}
							/>
						</div>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor={inputs[2]}>{inputs[2]}</label>
						<input
							type="email"
							name={inputs[2]}
							className="custom-input"
							onChange={(e) => handleTextChange(e)}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor={inputs[3]}>{inputs[3]}</label>
						<textarea
							name={inputs[3]}
							cols={10}
							rows={10}
							className="custom-input !border-2 rounded-sm"
							onChange={(e) => handleTextChange(e)}
						/>
					</div>
					<Button title="Envoyer" role="alter-black" type="submit" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
