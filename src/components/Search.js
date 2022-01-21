import React, { useState } from "react";

export default function Search(props) {
	const { searchMovies } = props;
	const [search, setSearch] = useState("panda");
	const [type, setType] = useState("all");

	const handleKey = (e) => {
		if (e.key === "Enter") {
			searchMovies(search, type);
		}
	};

	const handleFilter = (e) => {
		setType(e.target.dataset.type);
		searchMovies(search, e.target.dataset.type);
	};

	return (
		<div>
			<div className="input-field">
				<input
					className="validate"
					type="search"
					placeholder="Search Movies"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					className="btn search-btn"
					onClick={() => searchMovies(search, type)}
				>
					Search Movies
				</button>
			</div>
			<div>
				<label>
					<input
						type="radio"
						name="type"
						data-type="all"
						onChange={handleFilter}
						checked={type === "all"}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						type="radio"
						name="type"
						data-type="movie"
						onChange={handleFilter}
						checked={type === "movie"}
					/>
					<span>Movies</span>
				</label>
				<label>
					<input
						type="radio"
						data-type="series"
						name="type"
						onChange={handleFilter}
						checked={type === "series"}
					/>
					<span>Series</span>
				</label>
			</div>
		</div>
	);
}



