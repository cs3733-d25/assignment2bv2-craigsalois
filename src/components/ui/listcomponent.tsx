import React from 'react';

// Define the type for the props
interface ListComponentProps {
    items: string[]; // The items prop should be an array of strings
}


const ListComponent: React.FC<ListComponentProps> = ({ items }) => {
    return (
        <div className="p-4 bg-blue-100 shadow-lg rounded-2xl w-64">
            <h2 className="text-xl font-bold mb-3">Best Surafces to Run on</h2>
            <ul className="space-y-2">
                {items && items.map((item, index) => (
                    <li
                        key={index}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;

