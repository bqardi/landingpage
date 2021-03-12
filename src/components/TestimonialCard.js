import "./TestimonialCard.scss";

function TestimonialCard({src, alt, text}){
	return (
		<article className="TestimonialCard">
			<img className="TestimonialCard__image" src={src} alt={alt}/>
			<p className="TestimonialCard__text">{text}</p>
		</article>
	);
}

export default TestimonialCard;