import LoadingSpinner from "@/ui/LoadingSpinner";
import { useGetUnoccupiedProperties } from "./useGetUnoccupiedProperties";
import { useNewBooking } from "./useNewBooking";
import { NamePropleLogo } from "@/ui/NameLogo";
import Button from "@/ui/Button";
import { Link } from "react-router-dom";
import CircularCharts from "../home/CircularCharts";
import { useGetPropertyQt } from "../home/useGetPropertyQt";
import { useGetAllTotals } from "../home/useGetAllTotals";
import { useGetOccupiedQt } from "../home/useGetOccupiedQt";

const NewVisitor = () => {
  // VARS
  const { dataAllUnoccupiedProperty, statusAllUnoccupiedProperty } =
    useGetUnoccupiedProperties();
  const flats = dataAllUnoccupiedProperty[0] || [];
  const rooms = dataAllUnoccupiedProperty[1] || [];
  const shops = dataAllUnoccupiedProperty[2] || [];
  const { mutationFn } = useNewBooking();
  const { dataAllOccupiedPropertiesQt = [], statusAllOccupiedPropertiesQt } =
    useGetPropertyQt();
  const { dataTotals = [], statusTotals } = useGetAllTotals();
  const { dataAllOccupiedQt = null, statusAllOccupiedQt } = useGetOccupiedQt();

  // FUNCTIONS
  const handleBook = (id) => {
    mutationFn({ id });
  };

  // JSX JSX JSX

  if (
    statusAllUnoccupiedProperty === "pending" ||
    !statusAllUnoccupiedProperty ||
    statusAllOccupiedPropertiesQt === "pending" ||
    !statusAllOccupiedPropertiesQt ||
    statusTotals === "pending" ||
    !statusTotals ||
    statusAllOccupiedQt === "pending" ||
    !statusAllOccupiedQt
  )
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <div>
      <div className="flex h-[50px] items-center justify-between border-b-[1px] border-sky-500 bg-stone-100 px-[10px]">
        <div>
          <NamePropleLogo />
        </div>
        <div>
          <Link to="/login-as">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
      <div className="mt-[20px] h-screen w-full flex-col items-center overflow-y-scroll">
        {/* welcome ui */}
        <div className="mb-6 flex w-full justify-center bg-sky-500">
          <div className="max-w-[1200px] space-y-2 p-8 text-center text-white">
            <span className="text-[25px] font-bold">
              Welcome, New Visitor! 👋
            </span>
            <p className="sm:text-lg mx-auto max-w-xl text-base">
              Browse through the available properties below. Like what you see?
              Select your favorite and book it instantly!
            </p>
          </div>
        </div>

        {/* circular charts */}
        <div className="flex w-full justify-center">
          <div className="max-w-[1200px]">
            <div className="p-6">
              <CircularCharts
                dataTotals={dataTotals}
                dataAllOccupiedPropertiesQt={dataAllOccupiedPropertiesQt}
                dataAllOccupiedQt={dataAllOccupiedQt}
              />
            </div>

            {/* flats */}
            <div className="min-h-screen p-6">
              <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
                Available Flats
              </h1>
              <div className="grid grid-cols-1 gap-6 smallTab:grid-cols-2 largeScreen:grid-cols-3">
                {flats.map((flat) => (
                  <div
                    key={flat.id}
                    className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition hover:scale-[1.01] hover:shadow-xl"
                  >
                    <img
                      src={flat.image}
                      alt={`Flat ${flat.flat_number}`}
                      className="h-48 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Flat #{flat.flat_number}
                        </h2>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-sm capitalize text-green-700">
                          {flat.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Floor: {flat.floor}
                      </p>
                      <p className="text-sm text-gray-500">Size: {flat.size}</p>
                      <p className="text-base font-medium text-gray-700">
                        Rent: ${flat.rent.toLocaleString()}
                      </p>

                      <button
                        onClick={() => handleBook(flat.id)}
                        className="mt-4 w-full rounded-xl bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* shops */}
            <div className="mt-[10px] min-h-screen p-6">
              <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
                Available Shops
              </h1>
              <div className="grid grid-cols-1 gap-6 smallTab:grid-cols-2 largeScreen:grid-cols-3">
                {shops.map((shop) => (
                  <div
                    key={shop.id}
                    className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition hover:scale-[1.01] hover:shadow-xl"
                  >
                    <img
                      src={shop.image}
                      alt={`Flat ${shop.shop_number}`}
                      className="h-48 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Shop #{shop.shop_number}
                        </h2>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-sm capitalize text-green-700">
                          {shop.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Floor: {shop.floor}
                      </p>
                      <p className="text-sm text-gray-500">Size: {shop.size}</p>
                      <p className="text-base font-medium text-gray-700">
                        Rent: ${shop.rent.toLocaleString()}
                      </p>

                      <button
                        onClick={() => handleBook(shop.id)}
                        className="mt-4 w-full rounded-xl bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* rooms */}
            <div className="p-6 pb-[80px]">
              <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
                Available Rooms
              </h1>
              <div className="grid grid-cols-1 gap-6 smallTab:grid-cols-2 largeScreen:grid-cols-3">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition hover:scale-[1.01] hover:shadow-xl"
                  >
                    <img
                      src={room.image}
                      alt={`Flat ${room.room_number}`}
                      className="h-48 w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Room #{room.room_number}
                        </h2>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-sm capitalize text-green-700">
                          {room.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Floor: {room.floor}
                      </p>
                      <p className="text-sm text-gray-500">Size: {room.size}</p>
                      <p className="text-base font-medium text-gray-700">
                        Rent: ${room.rent.toLocaleString()}
                      </p>

                      <button
                        onClick={() => handleBook(room.id)}
                        className="mt-4 w-full rounded-xl bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVisitor;
