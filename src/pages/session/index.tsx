import { CaretLeftIcon } from "@/assets";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SessionPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title") || "";

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <div className="flex mt-4">
        <CaretLeftIcon
          onClick={handleBack}
          className="cursor-pointer text-white"
        />
        <h3 className="flex-1 text-center text-white text-2xl font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
};
