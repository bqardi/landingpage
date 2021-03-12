import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

function Testimonials(){
	return (
		<section className="Testimonials">
			<TestimonialCard
				src="https://picsum.photos/200/150?random=0"
				alt="Lorem picsum"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem iusto doloremque totam rem nostrum blanditiis, illo cumque repellat omnis? Repellat nulla quisquam nobis in reprehenderit! Corporis qui possimus minima atque."
			/>
			<TestimonialCard
				src="https://picsum.photos/200/150?random=1"
				alt="Lorem picsum"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem iusto doloremque totam rem nostrum blanditiis, illo cumque repellat omnis?"
			/>
			<TestimonialCard
				src="https://picsum.photos/200/150?random=2"
				alt="Lorem picsum"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem iusto doloremque totam rem nostrum blanditiis, illo cumque repellat omnis? Repellat nulla quisquam nobis in reprehenderit! Corporis qui possimus minima atque. Sit amet consectetur adipisicing elit."
			/>
		</section>
	);
}

export default Testimonials;