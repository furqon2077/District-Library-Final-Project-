import { useState } from "react";
import "../../styles/components/_search.scss";


export default function SearchBar({ onFilter }) {
    const [text, setText] = useState("");

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search book by name, author..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={() => onFilter(text)}>
                Search
            </button>
        </div>
    );
}
