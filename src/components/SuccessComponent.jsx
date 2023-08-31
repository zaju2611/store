import { AiOutlineClose } from "react-icons/ai";

export default function SuccessComponent({ children, onClose }) {
	return (
		<div
			style={{
				position: "absolute",
				top: "100px",
				display: "flex",
				justifyContent: "space-between",
				width: "100%",
				padding: "20px",
				background: "var(--black)",
				color: "var(--white)",
			}}>
			<p>{children}</p>
			<AiOutlineClose
				className="closeIcon"
				color="white"
				size="1.2rem"
				style={{ cursor: "pointer" }}
				onClick={() => onClose()}
			/>
		</div>
	);
}
