"use client";
import Swal from "sweetalert2";

export const SuccessAlert = () => {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Əməliyyat uğurla yerinə yetirildi!",
    showConfirmButton: false,
    timer: 1500,
  });
};
export const ErrorAlert = () =>{
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Ad və ya Parol səhvdir!",
    footer: ' <a href="tel:+99455778548">Nihat ilə əlaqə 📞</a>'
  });
}

