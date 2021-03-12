import Burger from "./portal/burger/Burger";
import "./PrimaryNavigation.scss";

function PrimaryNavigation(){
	return (
		// <nav className="PrimaryNavigation">
		// 	<a href="/home">Home</a>
		// 	<a href="/about">About</a>
		// 	<a href="/contact">Contact</a>
		// </nav>
		<header className="PrimaryNavigation">
			<a className="PrimaryNavigation__brand" href="/">SaaS Company</a>
			<Burger>
				<Burger.SlideIn>
					<Burger.Nav>
						<h1 className="PrimaryNavigation__title">Navigation</h1>
						<a className="PrimaryNavigation__link" href="/home">Home</a>
						<a className="PrimaryNavigation__link" href="/about">About</a>
						<a className="PrimaryNavigation__link" href="/contact">Contact</a>
					</Burger.Nav>
				</Burger.SlideIn>
			</Burger>
		</header>
	);
}

export default PrimaryNavigation;