import { ZT_Student } from "contract"
import { API_URL_STUDENTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateStudent({
  _id,
  lrn,
  firstName,
  lastName,
  middleName,
  email,
  studentAddress,
  birthDay,
  userId,
  studentLevelId,
  birthCertificateId,
  updatedAt,
}: ZT_Student) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENTS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      lrn,
      firstName,
      lastName,
      middleName,
      email,
      studentAddress,
      birthDay,
      userId,
      studentLevelId,
      birthCertificateId,
      updatedAt,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateStudent() {
  const query = useMutation(
    ({
      _id,
      lrn,
      firstName,
      lastName,
      middleName,
      email,
      studentAddress,
      birthDay,
      userId,
      studentLevelId,
      birthCertificateId,
      updatedAt,
    }: ZT_Student) =>
      updateStudent({
        _id,
        lrn,
        firstName,
        lastName,
        middleName,
        email,
        studentAddress,
        birthDay,
        userId,
        studentLevelId,
        birthCertificateId,
        updatedAt,
      })
  )

  return query
}

export default useUpdateStudent
