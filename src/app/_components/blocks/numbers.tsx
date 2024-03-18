const Numbers = () => {
	return ( 
		<div className="py-16 bg-black">
			<div className="flex justify-between flex-col mx-2 md:grid md:grid-cols-3 !text-zinc-50 md:px-8 bg-black">
				<div className="flex flex-col md:max-w-[30vw] text-center">
					<p className="text-[5rem] md:!text-[15rem]">50M</p>
					<p className="!text-lg">Nous avons construit une <strong>plate-forme de crowdfunding</strong> qui a fait 50M d’euros de transactions en 3 ans.</p>
				</div>
				<div className="flex flex-col md:max-w-[30vw] text-center">
					<p className="text-[5rem] md:!text-[15rem]">1M</p>
					<p className="!text-lg">Pour un des <strong>leader des marketing automation</strong>, nous avons construit un outil de multi-postage sur les réseaux sociaux pour que des centaines de PME envoient plus d’un million de messages sur tiktok, pinterest, facebook, linkedin et twitter (mais pas myspace).</p>
				</div>
				<div className="flex flex-col md:max-w-[30vw] text-center">
					<p className="text-[5rem] md:!text-[15rem]">11.4M</p>
					<p className="!text-lg">Nous avons soutenu l’équipe technique d’un <strong>média scientifique national</strong> qui fait 11.4M de visites par mois (c’est 5x moins que le plus gros site de sport, mais c’est le plus gros pour la science :-) ).</p>
				</div>
			</div>
		</div>
	);
};

export default Numbers;