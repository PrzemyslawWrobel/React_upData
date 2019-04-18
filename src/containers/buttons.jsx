import connect from '../connect';

import {FavButton} from '../components/FavButton';

export const FavButtonContainer = connect(
// state
	(state)=>({
		favourites: state.favourites_map
	}),
	// actions
	({addFavourite, removeFavourite})=>({
		addFavourite,
		removeFavourite
	}),
	// mergeProps
	(state, actions, props) => ({
		active: state.favourites[props.id],
		onActivate: () => actions.addFavourite(props.id),
		onDeactivate: () => actions.removeFavourite(props.id),
	})
)(FavButton)