import PropTypes from "prop-types";
import "./PlanCard.scss";

function PlanCard({title, summary, price, link, features, getfrom, popular}){
	return (
		<article className={popular ? "PlanCard PlanCard--popular" : "PlanCard"}>
			<header className="PlanCardHeader">
				<h1 className="PlanCardHeader__title">{title}</h1>
				<p className="PlanCardHeader__summary">{summary}</p>
				<p className="PlanCardHeader__price">{price}</p>
				<p className="PlanCardHeader__conditions">
					/user/month*
					<br/>
					(billed annually)
				</p>
				<div className="PlanCardHeader__container">
					<a href={link} className="PlanCardHeader__cta">
						Try for <span className="PlanCardHeader__ctaUpper">free</span> &gt;
					</a>
				</div>
			</header>
			<section className="PlanCardBody">
				{
					getfrom
					? <>
						<p className="PlanCardBody__getfrom">Get all {getfrom} features</p>
						<h2 className="PlanCardBody__title">Plus</h2>
					</>
					: <h2 className="PlanCardBody__title">Features</h2>
				}
				<ul className="PlanCardBody__list">
					{features.map(feature =>
						<li key={feature} className="PlanCardBody__listItem">{feature}</li>
					)}
				</ul>
			</section>
		</article>
	);
}

PlanCard.propTypes = {
	features: PropTypes.array.isRequired
}

export default PlanCard;