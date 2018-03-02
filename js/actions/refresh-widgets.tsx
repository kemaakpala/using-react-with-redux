import { Action } from 'redux';

import { actionTypes } from '../action-types';
import { Widget } from '../models/widget';

declare var fetch;

export interface WidgetAction extends Action {
	 widgets: Widget[]
}

const createRefreshWidgetsRequestAction: () => WidgetAction = () => ({
	type: actionTypes.REFRESH_WIDGETS_REQUEST,
	widgets: []
});

const createRefreshWidgetsDoneAction: (widgets: Widget[]) => WidgetAction = (widgets) => ({
	type: actionTypes.REFRESH_WIDGETS_DONE,
	widgets
});

export const refreshWidgets = () => {

	return (dispatch) => {

		dispatch(createRefreshWidgetsRequestAction());

		return fetch('http://localhost:3010/widgets')
			.then(res => res.json())
			.then((widgets: Widget[]) => {
				dispatch(createRefreshWidgetsDoneAction(widgets.map((widget: Widget) => {
					const w = new Widget();
					w.id = widget.id;
					w.name = widget.name;
					w.description = widget.description;
					w.color = widget.color;
					w.size = widget.size;
					w.quantity = widget.quantity;
					return w;
				})));
			});
	};
}