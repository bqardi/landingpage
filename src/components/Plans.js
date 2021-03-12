import PlanCard from "./PlanCard";
import "./Plans.scss";

function Plans(){
	return (
		<article className="Plans">
			<PlanCard
				title="Group"
				summary="Basic sales &amp; marketing for up to 5 users"
				price="25"
				link="/cheap-ass"
				features={[
					"Account & contact management",
					"Opportunity tracking",
					"Lead scoring, routing & assignment",
					"Task & event tracking",
					"Customizable reports & standard dashboards",
					"Mobile access, customization & administration",
					"Chatter-company social network",
					"Outlook Side Panel & sync",
					"Case management",
				]}
			/>
			<PlanCard
				title="Professional"
				summary="Complete CRM for any size team"
				price="65"
				link="/pro"
				getfrom="Group"
				features={[
					"Campaigns",
					"Customizable dashboards",
					"Collaborative forecasting",
					"Products, quotes & orders",
					"Mass email",
					"Role permissions",
				]}
			/>
			<PlanCard
				title="Enterprise"
				summary="Deeply customizable CRM for your business"
				price="125"
				link="/enterprise"
				getfrom="Professional"
				features={[
					"Workflow & approval automation",
					"Report history tracking",
					"Profiles and page layouts",
					"Custom app development",
					"Integration via web service API",
					"Salesforce Identity",
					"Salesforce Private AppExchange",
				]}
				popular
			/>
			<PlanCard
				title="Unlimited"
				summary="Unlimited CRM power and support"
				price="250"
				link="/unlimited"
				getfrom="Enterprise"
				features={[
					"Unlimited customizations",
					"Unlimited custom apps",
					"Multiple sandboxes",
					"Additional data storage",
					"24x7 toll-free support",
					"Access to 100+ admin services",
					"Unlimited online training",
				]}
			/>
		</article>
	);
}

export default Plans;