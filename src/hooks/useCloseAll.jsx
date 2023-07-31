import { useDispatch } from "react-redux";
import { closeAll } from "../store";

export function useCloseAll() {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeAll());
	};

	return { handleClose };
}
