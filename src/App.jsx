import { useSelector, useDispatch } from "react-redux";
import { add, clear, remove, update } from "./redux/studentSlice";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import ModalUpdate from "./components/ModalUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const notify = () => toast("All cards have been cleared!");
    const deleteCard = () => toast("Delete Card");
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [updateElement, setUpdateElement] = useState(null);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [hasLoad, setHasLoad] = useState(false);

    useEffect(() => {
        if (!hasLoad) {
            const savedCart = JSON.parse(localStorage.getItem("cart"));
            if (savedCart) {
                savedCart.forEach((item) => dispatch(add(item)));
            }
            setHasLoad(true);
        }
    }, [hasLoad, dispatch]);

    useEffect(() => {
        if (hasLoad) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, hasLoad]);

    function handleRemove(id) {
        dispatch(remove(id));
    }

    function handleClear() {
        dispatch(clear());
    }

    function handleUpdate(value) {
        setShowModalUpdate(true);
        setUpdateElement(value);
    }

    return (
        <div className="container mx-auto mt-16 p-4">
            <ToastContainer />
            {showModal && <Modal setShowModal={setShowModal} />}
            {showModalUpdate && (
                <ModalUpdate
                    product={updateElement}
                    setShowModalUpdate={setShowModalUpdate}
                />
            )}

            <div className="flex flex-col items-center gap-4 mb-8">
                <button
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                >
                    Open Modal
                </button>
                <button
                    onClick={() => {
                        handleClear(), notify();
                    }}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                >
                    Clear All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cart.length > 0 &&
                    cart.map((value) => (
                        <div
                            key={value.id}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
                        >
                            <div>
                                <p className="text-lg font-semibold text-gray-700">
                                    {value.name}
                                </p>
                                <p>{value.id}</p>
                                <p className="text-gray-500">
                                    Price: {value.price}
                                </p>
                                <p className="text-gray-500">
                                    Type: {value.type}
                                </p>
                                <p>Quantity: {value.quantity}</p>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => {
                                        handleRemove(value.id), deleteCard();
                                    }}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleUpdate(value)}
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default App;
