import axios from "axios";

export async function POST(req: Request) {
	const request = await req.json();
	const { email, message, nom } = JSON.parse(request.body);
	const SLACK_TOKEN = process.env.SLACK_TOKEN;

	const url = "https://slack.com/api/chat.postMessage";
	const res = await axios.post(
		url,
		{
			channel: `#${process.env.SLACK_CHANNEL}`,
			text: `:sunrise: Voici un message provenant de notre site lasercats.fr :point_down:\n  \`\`\`${message} \`\`\`\n\n de *${nom}*  :email: \`${email}\``,
		},
		{
			headers: {
				authorization: `Bearer ${SLACK_TOKEN}`,
				"Content-type": "application/json; charset=utf-8",
			},
		}
	);
	if (res.data?.ok) {
		return new Response("Votre message a bien été envoyé !", { status: 200 });
	} else {
		return new Response("Votre message n'a pas pu être délivré. Veuillez réessayer !", { status: 500 });
	}
}
