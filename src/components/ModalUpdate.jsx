import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../redux/studentSlice";

function ModalUpdate({ setShowModalUpdate, product }) {
    const [cartName, setCartName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        setPrice(product.price);
        setType(product.type);
        setQuantity(product.quantity);
        setCartName(product.name);
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            update({
                name: cartName,
                id: product.id,
                price: Number(price),
                type,
                quantity: Number(quantity),
            })
        );
        setShowModalUpdate(false);
    };

    function closeModal() {
        setShowModalUpdate(false);
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-lg font-bold mb-4">Cart ni o'zgartirish</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Cart nomi"
                        value={cartName}
                        onChange={(e) => setCartName(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Narxi"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Tavsifi"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                    <label>
                        Quantity
                        <input
                            type="number"
                            placeholder="Miqdori"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="border p-2 rounded w-full"
                            min="1"
                            required
                        />
                    </label>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg"
                        >
                            Bekor qilish
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit} // Added onClick to trigger handleSubmit
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalUpdate;