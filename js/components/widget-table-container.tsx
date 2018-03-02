import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, IMapDispatchToProps, IMapStateToProps } from 'react-redux';

import { AppState } from '../app-state';
import { WidgetTable } from './widget-table';
import { refreshWidgets } from '../actions/refresh-widgets';

const mapStateToProps: IMapStateToProps = (state: AppState) => ({
	widgets: state.widgets
});

const mapDispatchToProps: IMapDispatchToProps = (dispatch: Dispatch<AppState>) =>
	bindActionCreators({ refreshWidgets }, dispatch);

export const WidgetTableContainer: typeof WidgetTable =
	connect(mapStateToProps, mapDispatchToProps)(WidgetTable);