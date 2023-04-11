import React, { useState } from "react";

type FakeGridType = {
    id: number;
    name: string;
    age: number;
    [key: string]: any;
};

const GridTable = () => {
    const [rows, setRows] = useState<FakeGridType[]>([
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
        { id: 3, name: "Bob", age: 40 },
    ]);
    const [editingRow, setEditingRow] = useState<FakeGridType | null>(null);

    const handleEdit = (row: FakeGridType) => {
        setEditingRow(row);
    };

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const newRow = {} as FakeGridType;
        const entries = Array.from(formData.entries());
        for (let [key, value] of entries) {
            newRow[key] = value;
        }
        newRow.id = rows.length + 1;
        setRows([...rows, newRow]);
        setEditingRow(null);
    };

    const handleCancel = () => {
        setEditingRow(null);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        {editingRow === row ? (
                            <form onSubmit={handleSave}>
                                <td>
                                    <input type="text" name="name" defaultValue={row.name} />
                                </td>
                                <td>
                                    <input type="text" name="age" defaultValue={row.age} />
                                </td>
                                <td>
                                    <button type="submit">Save</button>
                                    <button type="button" onClick={handleCancel}>
                                        Cancel
                                    </button>
                                </td>
                            </form>
                        ) : (
                            <>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(row)}>Edit</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GridTable;
