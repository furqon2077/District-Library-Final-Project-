import "../../styles/components/_sort.scss";


export default function SortBar({ onSort, onAvailable }) {
    return (
        <div className="sort">
            <button onClick={onAvailable}>Show Available</button>
            <button onClick={() => onSort("asc")}>Name A–Z</button>
            <button onClick={() => onSort("desc")}>Author A–Z</button>
        </div>
    );
}
