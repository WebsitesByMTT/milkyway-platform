"use client";
import { useEffect, useRef } from "react";

interface DeleteUserProps {
  deleteToken: () => Promise<void>;
}

const DeleteUser: React.FC<DeleteUserProps> = ({ deleteToken }) => {
  const deleteTokensRef = useRef(deleteToken);

  useEffect(() => {
    deleteTokensRef.current = deleteToken;
  });

  useEffect(() => {
    deleteTokensRef.current();
  }, []);

  return null;
};

export default DeleteUser;
