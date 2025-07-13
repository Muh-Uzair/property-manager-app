import { useGetAllBookings } from "./useGetAllBookings";
import LoadingSpinner from "@/ui/LoadingSpinner";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { MdHomeWork } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewBookings = () => {
  // VARS
  const { data: bookings, status } = useGetAllBookings();
  const navigate = useNavigate();

  // FUNCTIONS
  const completeBooking = (property_id) => {
    if (!property_id) return;

    const firstChar = property_id.charAt(0);

    if (firstChar === "3") {
      navigate(`/admissions/flats/${property_id}`);
    } else if (firstChar === "1") {
      navigate(`/admissions/rooms/${property_id}`);
    } else if (firstChar === "2") {
      navigate(`/admissions/shops/${property_id}`);
    } else {
      console.warn("Unknown property type for ID:", property_id);
    }
  };

  // JSX JSX JSX
  if (status === "pending") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (bookings.length === 0) {
    return <span>No bookings at the moment</span>;
  }

  return (
    <div className="flex justify-center overflow-y-scroll p-6 pb-[100px]">
      <div className="sm:grid-cols-2 lg:grid-cols-3 grid w-full max-w-5xl grid-cols-1 gap-6">
        {bookings?.map((booking) => (
          <Card key={booking.id} className="mb-[10px] rounded-lg shadow-md">
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sky-500">
                <MdHomeWork size={24} />
                <Typography variant="h6" className="!text-sky-600">
                  Property ID: {booking.property_id}
                </Typography>
              </div>
              <Typography variant="body2" className="text-gray-500">
                Booking ID:{" "}
                <span className="font-medium text-gray-700">{booking.id}</span>
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Created at:{" "}
                <span className="font-medium text-gray-700">
                  {new Date(booking.created_at).toLocaleString()}
                </span>
              </Typography>
            </CardContent>

            <CardActions className="px-4 pb-4">
              <Button
                variant="contained"
                color="primary"
                startIcon={<FaCheckCircle />}
                fullWidth
                sx={{
                  backgroundColor: "#0ea5e9", // sky-500
                  ":hover": { backgroundColor: "#0284c7" }, // sky-600
                  borderRadius: "8px",
                  textTransform: "none",
                }}
                onClick={() => completeBooking(booking.property_id)}
              >
                Complete Booking
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewBookings;
