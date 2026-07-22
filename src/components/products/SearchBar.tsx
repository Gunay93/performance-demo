import "../../assets/css/SearchBar.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchBar({
    value,
    onChange
}: Props) {
    return (
        <div className="search-container">
            <input
                type="text"
                name="search"
                placeholder="Məhsul axtar..."
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
            />
        </div>
    );
}