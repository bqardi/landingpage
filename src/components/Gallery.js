import "./Gallery.scss";
import Carousel from "react-grid-carousel";

function Gallery(){
	return (
		<Carousel cols={1} rows={1} gap={0} autoplay={7000} loop>
			<Carousel.Item>
				<Gallery.CarouselItem
          src="https://picsum.photos/1920/1080?random=0"
          alt="Our shop"
          text="Buy our stuff!"
          ctaLink="/shop"
          ctaText="Click here"
        />
				</Carousel.Item>
				<Carousel.Item>
					<Gallery.CarouselItem
						src="https://picsum.photos/1920/1080?random=1"
						alt="News now"
						text="Get news right away"
						ctaLink="/news-letter"
						ctaText="Sign up now"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Gallery.CarouselItem
						src="https://picsum.photos/1920/1080?random=2"
						alt="Feta osten er osten over alle oste"
						text="Do you also think the Feta cheese is the best?"
						ctaLink="/feta"
						ctaText="Yeah!"
						/>
				</Carousel.Item>
		</Carousel>
	);
}

function CarouselItem({src, alt, text, ctaLink, ctaText}){
	return (
		<div className="Gallery">
			<img className="Gallery__image" src={src} alt={alt}/>
			<div className="Gallery__content">
				<p className="Gallery__text">{text}</p>
				<a
					onClick={
						() => {
							// eslint-disable-next-line
							return gtag("event", "cta", {ctaLink})
						}
					}
					className="Gallery__cta"
					href={ctaLink}
				>
					{ctaText}
				</a>
			</div>
		</div>
	)
}
Gallery.CarouselItem = CarouselItem;

export default Gallery;