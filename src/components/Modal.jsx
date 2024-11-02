import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/studentSlice";
import { toast } from "react-toastify";

function Modal({ setShowModal }) {
    const notify = () => toast("Add card");

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            add({
                name: name,
                surname: surname,
                id: Date.now(),
                age: Number(age),
            })
        );
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-lg font-bold mb-4">Yangi Cart yaratish</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg"
                        >
                            Bekor qilish
                        </button>
                        <button
                            type="submit"
                            onClick={() => notify()}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                            Yaratish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
