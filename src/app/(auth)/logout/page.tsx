import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DeleteUser from "@/src/components/layout/DeleteUser";

const Logout = async () => {
  async function deleteToken(): Promise<void> {
    "use server";
    cookies().delete("token");
    redirect("/login");
  }
  return <DeleteUser deleteToken={deleteToken} />;
};

export default Logout;
