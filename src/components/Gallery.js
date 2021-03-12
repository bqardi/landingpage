import "./Gallery.scss";
import Carousel from "react-grid-carousel";

function Gallery(){
	return (
		<Carousel cols={1} rows={1} gap={0} autoplay={7000} loop>
			<Carousel.Item>
				<Gallery.CarouselItem
          src="https://picsum.photos/1920/1080?random=0"
          alt="Vores shop"
          text="Køb vores ting!"
          ctaLink="/shop"
          ctaText="Klik her"
        />
				</Carousel.Item>
				<Carousel.Item>
					<Gallery.CarouselItem
						src="https://picsum.photos/1920/1080?random=1"
						alt="Fra start"
						text="Vær med fra starten"
						ctaLink="/news-letter"
						ctaText="Tilmeld dig nuuuuuu!"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Gallery.CarouselItem
						src="https://picsum.photos/1920/1080?random=2"
						alt="Feta osten er osten over alle oste"
						text="Synes du også Feta er verdens bedste ost?"
						ctaLink="/feta"
						ctaText="Jaaa!"
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
				<a className="Gallery__cta" href={ctaLink}>{ctaText}</a>
			</div>
		</div>
	)
}
Gallery.CarouselItem = CarouselItem;

export default Gallery;