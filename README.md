
# UI Project (React + Vite)

A small React UI playground built with Vite + Tailwind CSS. The UI is component-driven and demonstrates passing data (like image URLs, tags, colors, and numbers) down into reusable card components.

## Tech Stack

- React (Vite)
- Tailwind CSS
- ESLint
- Remix Icon

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (comes with Node)

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

## Project Structure

```text
src/
	App.jsx
	main.jsx
	index.css
	component/
		section1/
			Section1.jsx
			Pagecontent.jsx
			Navbar.jsx
			Leftcontent.jsx
			Lefthead.jsx
			Rightcontent.jsx
			Rightcard.jsx
			Togg.jsx
		section2/
			Section2.jsx
public/
index.html
```

## Key Components

- `App.jsx`
	- Defines the `user` array (objects like `{ img, tag, color, num }`).
	- Passes `user` into `Section1`.

- `Rightcontent.jsx`
	- Receives the `user` array via props.
	- Passes each user's `img`, `tag`, `color`, and `num` into `Rightcard`.

- `Rightcard.jsx`
	- A reusable card component.
	- Renders the background image and uses the props to display the tag/number.

## Notes

- If a card shows `undefined`, make sure that user object includes the property (for example `num`).
- If images don’t show, confirm the `img` URL is correct and accessible.

## Contributing

Feel free to open a PR for improvements or refactors.

## License

This project is for learning/demo purposes.
