
import { Component } from 'react'

import '../stylesheets/ui.scss'

// export class SkiDayCount extends React.Component {
// Refactored below, remove react b/c we imported the compenent specifically from react.
	
export class SkiDayCount extends Component {
	// Take in a decimal and return a calculation
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}

	calcGoalProgress(total, goal) { 
		return this.percentToDecimal(total/goal)
	}

	render() {
		return (
			<div className="ski-day-count">

				<div className="total-days">
					<span>{this.props.total}</span>
					<span> days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span> days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span> hiking days</span>
				</div>
				<div>
					<span>{this.props.goal}</span>
					<span> goal days</span>
				</div>
				<div>
					<span>
					{this.calcGoalProgress(
							this.props.total, 
							this.props.goal)} 
					</span>
					<span> goal completed</span>
				</div>

			</div>
		)
	}
}