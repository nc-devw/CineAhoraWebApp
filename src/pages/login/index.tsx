import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SessionService } from "@/services";
import { useBooking } from "@/hooks";
import { Modal } from "@/components";
import axios from "axios";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUserSession } = useBooking();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email no válido").required("Obligatorio"),
      password: Yup.string()
        .min(8, "6 caracteres como mínimo")
        .required("Obligatorio"),
    }),
    onSubmit: (values) => {
      const data = JSON.stringify({
        email: values.email,
        password: values.password,
      });
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_URL_BACKEND}/users/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          setUserSession({
            id: response.data.responseObject.user_id,
            name: response.data.responseObject.first_name,
            email: values.email,
            isAdmin: response.data.responseObject.is_admin,
            isLogged: true,
            accessToken: response.data.responseObject.accessToken,
          });
          SessionService.saveSession({
            name: response.data.responseObject.first_name,
            email: values.email,
            isAdmin: response.data.responseObject.is_admin,
            refreshToken: response.data.responseObject.refreshToken,
          });
          handleNavigation();
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 404) {
              setModalMsg("Usuario y/o contraseña incorrecta");
              setModalTitle("Error");
              openModal();
            } else {
              setModalMsg("Ha ocurrido un error en el login");
              setModalTitle("Error");
              openModal();
            }
          } else {
            setModalMsg("Error en la conexión. Por favor, intenta más tarde.");
            setModalTitle("Error");
            openModal();
          }
        });
    },
  });

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="font-[sans-serif]">
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <div className="min-h-screen flex flex-col items-center justify-center pb-20 mb px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Login
            </h2>
            <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="example@email.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="text-red-800">
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="*******"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="text-red-800">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>

              <div
                style={{ display: "none" }}
                className="flex flex-wrap items-center justify-between gap-4"
              >
                <div className="text-sm">
                  <Link
                    to="#"
                    className="text-gray-600 hover:underline font-semibold"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  //onClick={handleNavigation}
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-black bg-[#FFC121] hover:bg-[#f0ce78] focus:outline-none"
                >
                  <b>Ingresar</b>
                </button>
              </div>
              <p
                style={{ display: "none" }}
                className="text-gray-800 text-sm !mt-8 text-center"
              >
                ¿No tienes una cuenta?{" "}
                <Link
                  to="#"
                  className="text-gray-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Registrate aquí
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
