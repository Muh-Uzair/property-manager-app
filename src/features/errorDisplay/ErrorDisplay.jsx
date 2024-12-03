import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import PropTypes from "prop-types";
import { IoWarningOutline } from "react-icons/io5";

// COMPONENT START
export default function ErrorDisplay({ errorMsg = "An error occurred" }) {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center`}
      role="alert"
      aria-live="assertive"
    >
      <article className="grid w-[290px] grid-rows-[50px_1fr_50px] rounded-[5px] bg-stone-100 mobileM:w-[320px]">
        {/* Replace 'error icon' with an actual icon */}
        <section
          aria-hidden="true"
          className="-[10px] flex h-[50px] items-center justify-start gap-[10px] rounded-t-[5px] bg-brand-color-500 p-[10px] font-semibold text-white"
        >
          <div>
            <IoWarningOutline />
          </div>

          <div>Error occurred</div>
        </section>

        <div className="flex flex-col px-[10px] py-[20px] text-stone-300">
          <Heading>{errorMsg}</Heading>
        </div>

        <div className="flex items-center justify-end border-t p-[10px]">
          <Button onClick={() => (window.location.href = "/")}>Home</Button>
        </div>
      </article>
    </div>
  );
}

ErrorDisplay.propTypes = {
  errorMsg: PropTypes.string,
};
