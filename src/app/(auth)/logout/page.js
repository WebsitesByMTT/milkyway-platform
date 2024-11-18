import { cookies } from "next/headers";
import DeleteUser from "@/components/DeleteUser";
import { redirect } from "next/navigation";

const Logout = async () => {
  async function deleteToken() {
    "use server";
    cookies().delete("token");
    cookies().delete("userToken");
    redirect("/login");
  }
  return <DeleteUser deleteToken={deleteToken} />;
};

export default Logout;
