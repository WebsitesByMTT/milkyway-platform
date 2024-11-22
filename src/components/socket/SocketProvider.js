'use client';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';
import { config } from '@/utils/config';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Notification from '../ui/Notification';
import { UpdateCredits } from '../redux/features/user/userSlice';

const SocketContext = createContext(undefined);

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};

export const SocketProvider = ({ token, children }) => {
    const dispatch = useDispatch();
    const [socket, setSocket] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (token) {
            let platformId = sessionStorage.getItem("platformId");
            if (!platformId) {
                platformId = crypto?.randomUUID();
                sessionStorage.setItem("platformId", platformId);
            }
            const socketInstance = io(`${config.server}`, {
                auth: { token, origin: config.platform, platformId },
            });
            setSocket(socketInstance);

            socketInstance.on('connect', () => {
                console.log('Connected with socket id:', socketInstance.id);
            });

            socketInstance.on('data', (data) => {
                switch (data?.type) {
                    case 'CREDIT':
                        dispatch(UpdateCredits(data?.data?.credits));
                        console.log(data?.data?.credits)
                        break;
                    default:
                }
            });

            socketInstance.on('alert', (message) => {
                if (message === 'ForcedExit') {
                    router.push('/logout');
                } else if (message === 'NewTab') {
                    console.warn('ALERT : ', message);
                    toast.custom(
                        (t) => (
                            <Notification
                                visible={t.visible}
                                message="You are already active in another tab."
                                isClosable={false}
                            />
                        ),
                        { duration: Infinity }
                    );
                }
            });

            return () => {
                socketInstance.disconnect();
            };
        }
    }, [token]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;