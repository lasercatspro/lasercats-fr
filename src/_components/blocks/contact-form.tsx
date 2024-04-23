"use client";
import { ChangeEvent, FormEvent, useCallback, useReducer, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { emailRegex } from "@/lib/utils";
import SpecialButton from "../special-button";

interface Action {
  type: "handle_text";
  field: "name" | "email" | "message";
  payload: string;
}
interface State {
	message: {
		value: string;
		error: boolean;
	};
  name: {
		value: string;
		error: boolean;
	}
  email: {
		value: string;
		error: boolean;
	};
}

interface Notif {
	isError: boolean; 
	message: undefined | string;
}

const Contact = () => {
	const initialState = {
		message: {
			value: "",
			error: false,
		},
		name: {
			value: "",
			error: false,
		},
		email: {
			value: "",
			error: false,
		},
	};
	function reducer(state: State, action: Action) {
		switch (action.type) {
		case "handle_text":
			return {
				...state,
				[action.field]: {
					value: action.payload,
					error: false
				}
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
	const [notif, setNotif] = useState<Notif>({isError: false, message: undefined});
	const [sendOk, setSendOk] = useState<boolean>(false);

	const isValidated = useCallback(() => {
		(Object.keys(state) as ("email" | "name" | "message")[]).forEach((input) => {
			if (state[input]?.value === "") {
				state[input].error = true;
			}
		});
		if (Object.values(state).filter((v: State["email" | "message" |"name"]) => v.error).length > 0) {
			setNotif({isError: true, message: "Veuillez remplir les champs"});
			return false;
		}
		return true;
	}, [state]);

	const generateJSON = useCallback((someState: State) => {
		const result: any = {};
		for (const key in state) {
			if (Object.hasOwnProperty.call(someState, key)) {
				result[key] = someState[key as "email" | "name" | "message"]?.value;
			}
		}
		return result;
	}, []);

	const submitFn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSendOk(false);
		if (!isValidated()) return;
		const jsonData = generateJSON(state);

		try {
			const response = await axios.post("api/send-email",{
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(jsonData)
			});
			setNotif({...notif, message: response.data});
			setSendOk(true);
		} catch (error) {
			setNotif({isError: true, message: (error as AxiosError)?.message});
		}
	};
	const isMobile = useIsMobile({ forIpad: true });

	return (
		<div id="contact" className=" !text-zinc-50 pt-16 relative bg-custom-dark min-h-screen">
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
						bg-opacity-10 relative
					"
					>
						<Transition
							show={notif.message !== undefined}
							enter="transition-all duration-150"
							enterFrom="translate-x-10 opacity-0"
							enterTo="translate-x-0 opacity-100"
							leave="transition-all duration-75"
							leaveFrom="translate-x-0 opacity-100"
							leaveTo="translate-x-10 opacity-0"
							className={"absolute top-20 lg:-top-12 right-0 lg:right-8 z-30 bg-zinc-50 rounded-md text-custom-dark w-full lg:w-[91%] border border-zinc-500 shadow-2xl"}
						>
							<div className="flex gap-2 relative p-6 shadow-lg">
								{notif.isError ?
									<XCircleIcon className="h-6 w-6 text-red-600" />
									:
									<CheckCircleIcon className="h-6 w-6 text-primary" />
								}
								{notif.message}
								<button type="button" className="absolute top-2 right-2 hover:cursor-pointer" onClick={() => {
									setNotif({isError: false, message: undefined});
									setSendOk(false);
								}}>
									<span className="sr-only">Close</span>
									<XMarkIcon className="h-[1.45rem] w-[1.45rem] rounded-md border border-gray-500 p-1" />
								</button>
							</div>
						</Transition>
						<div className="flex gap-4 items-center">
							<div className="h-2 w-2 bg-primary rounded-full" />
							<p className="!text-zinc-50">Démarrer un échange</p>
						</div>
						<div className="grid grid-cols-2 gap-4">
							{Object.keys(initialState).map(
								(input) =>
									<div key={input} className={`flex flex-col w-full gap-2 ${input === "message" ? "col-span-2" : "col-span-2 lg:col-span-1"}`}>
										<label className="sr-only" htmlFor={input}>
											{input}
										</label>
										{input !== "message" ? 
											<input
												type={input === "email" ? "email" : "text"}
												name={input}
												className={`custom-input ${state[input as "email" | "name"]?.error  ? "!border-red-500" : ""}`}
												onChange={(e) => handleTextChange(e)}
												placeholder={`Votre ${input.toLowerCase()}`}
												required
												pattern={input === "email" ? `${emailRegex}` : "^.*"}
												disabled={sendOk}
											/>
											:
											<textarea
												name={input}
												cols={10}
												rows={isMobile ? 7 : 12}
												className={`custom-input rounded-sm text-xl min-h-[40vh] lg:min-h-[50vh] ${state.message.error ? "!border-red-500" : "border-none"}`}
												onChange={(e) => handleTextChange(e)}
												placeholder="Laissez nous un petit mot"
												required
												disabled={sendOk}
											/>
										}
									</div>
							)}
						</div>
						{isMobile ? (
							<button type={"submit"} role={"button"}className={"primary"} disabled={sendOk}>Envoyer</button>
						) : (
							<button type={"submit"} role={"button"}className={`h-10 rounded-sm ${sendOk && "cursor-not-allowed "}`} disabled={sendOk}>
								<SpecialButton title={"Envoyer"} fullWidth isDisabled={sendOk} />
							</button>)}
					</form>
					<ul className="hidden md:flex items-end justify-between w-2/3">
						<li className="flex flex-col justify-between h-[100px]">
							<p className="text-2xl text-zinc-50 !text-opacity-80">Bureaux</p>
							<div className="flex flex-col">
								<span className="text-xl text-zinc-50 !text-opacity-80">
                  2 avenue Jean Janvier
								</span>
								<span className="text-xl text-zinc-50 !text-opacity-80">35000 RENNES</span>
							</div>
						</li>
						<li className="flex flex-col justify-between gap-8 h-[100px]">
							<p className="text-2xl text-zinc-50 !text-opacity-80">Contact</p>
							<Link
								className="text-xl text-zinc-50 !text-opacity-80"
								href="mailto:contact@lasercats.fr"
							>
                contact@lasercats.fr
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
