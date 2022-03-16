import React, { useEffect, useRef, useState } from "react"
import { Modal } from "react-bootstrap"
import { Typeahead } from "react-bootstrap-typeahead/dist/react-bootstrap-typeahead"
import { useSelector } from "react-redux"
import { selectSlackUsers } from "../../store/slack-users/slack-users.slice"

export default function SlackUsersAc() {
	const typeaheadRef = useRef(null)
	const slackUsers = useSelector(selectSlackUsers)
	const [isActive, setIsActive] = useState(false)
	const [selected, setSelected] = useState([])

	useEffect(() => {
		document.addEventListener("keydown", onKeyup, false)

		return () => {
			document.removeEventListener("keydown", onKeyup)
		}
	}, [])

	const onKeyup = (event) => {
		if (event.key === "$") {
			// setTimeout to flush the $ to the dom for grabbing the content later
			setTimeout(onDollarSign)
		}
	}

	const onDollarSign = () => {
		const textEditor = getTextEditor()
		if (!textEditor) return

		const isMention = !!textEditor.textContent.match(/[ ]?\$\$$/)
		if (!isMention) return
		setIsActive(true)
	}

	const onSelect = (selected) => {
		setSelected([])
		const textEditor = getTextEditor()
		const p = textEditor.querySelector("p:last-of-type")
		p.textContent = p.textContent.replace("$$", `$$$${selected[0].label}`)
		// doesn't work w/o setTimeout
		setTimeout(handleClose)
		// Keep the menu open when making multiple selections.
		// typeaheadRef.current.toggleMenu()
	}

	const handleClose = () => setIsActive(false)

	return (
		<Modal
			show={isActive}
			onHide={handleClose}
			animation={false}
			style={{ height: "fit-content", maxHeight: 500 }}
		>
			<Modal.Header closeButton>
				<Modal.Title>Choose slack user to notify</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ height: 400 }}>
				<Typeahead
					autoFocus
					// multiple
					id="keep-menu-open"
					onChange={onSelect}
					options={slackUsers.map((u) => ({ label: u.name }))}
					ref={typeaheadRef}
					selected={selected}
				/>
			</Modal.Body>
		</Modal>
	)
}

function getTextEditor() {
	return document.querySelector(".zendesk-editor--rich-text-container")
}
